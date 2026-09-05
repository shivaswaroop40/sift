import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import { VOICE } from '../../site.config.ts';

export const MODEL = process.env.SIFT_MODEL || 'claude-opus-5';

// A gateway such as OpenCode Zen (ANTHROPIC_BASE_URL=https://opencode.ai/zen/v1) speaks the Messages
// API but is not guaranteed to pass beta headers through, so beta-only features are skipped there.
export const VIA_GATEWAY = Boolean(process.env.ANTHROPIC_BASE_URL) && !/api\.anthropic\.com/.test(process.env.ANTHROPIC_BASE_URL);

let client;
function getClient() {
  client ??= new Anthropic(); // reads ANTHROPIC_API_KEY and ANTHROPIC_BASE_URL from the environment
  return client;
}

// Shared request shape. On the first-party API, server-side refusal fallbacks are on so a rare policy
// decline on one item does not sink the whole edition; the API re-runs the request on a fallback model.
async function structured({ system, user, schema, effort = 'medium', maxTokens = 16000 }) {
  const c = getClient();
  const params = {
    model: MODEL,
    max_tokens: maxTokens,
    system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: user }],
    output_config: { format: zodOutputFormat(schema), effort },
  };
  let lastErr;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = VIA_GATEWAY
        ? await c.messages.parse(params)
        : await c.beta.messages.parse({ ...params, betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' });
      if (res.stop_reason === 'refusal') {
        throw new Error(`refused (${res.stop_details?.category ?? 'unknown'})`);
      }
      if (!res.parsed_output) throw new Error('no parsed_output');
      return { data: res.parsed_output, usage: res.usage, model: res.model };
    } catch (err) {
      lastErr = err;
      if (err instanceof Anthropic.AuthenticationError) throw err;
      if (err instanceof Anthropic.BadRequestError) throw err;
    }
  }
  throw lastErr;
}

export function triageSchema(sections) {
  return z.object({
    items: z.array(
      z.object({
        id: z.string(),
        keep: z.boolean(),
        depth: z.number().int().min(1).max(10),
        novelty: z.number().int().min(1).max(10),
        utility: z.number().int().min(1).max(10),
        section: z.enum(sections),
        reason: z.string(),
      }),
    ),
  });
}

export const SummarySchema = z.object({
  title: z.string(),
  summary: z.array(z.string()).min(2).max(4),
  why_read: z.string(),
  tags: z.array(z.string()).min(2).max(6),
});

function triageSystem(domain) {
  return `You are the editor of "${domain.name}", one edition of a daily digest.

Reader: ${domain.audience}

Editorial criteria: ${domain.criteria}

Score every candidate on three axes, each 1 to 10:
- depth: how much substance is behind the headline (mechanism, data, first-hand detail). A press release scores 2. A detailed post-mortem scores 9.
- novelty: how new the information is to this reader today. Recycled coverage of a known story scores low even if the story itself was big.
- utility: how likely this reader is to act on it, change a decision, or think differently because of it.

Set keep=true only for candidates you would put on today's front page. Be strict. A typical day has 10 to 15 keeps out of two hundred candidates.
Assign each candidate exactly one section from: ${domain.sections.join(', ')}.
The reason field is one sentence for the editor's log, not for readers.

You only see titles and short snippets. Judge from those. Do not invent detail.

${VOICE}`;
}

/** Score a batch of candidates. Returns a Map of id -> triage result. */
export async function triage(domain, candidates, { chunkSize = 40 } = {}) {
  const schema = triageSchema(domain.sections);
  const system = triageSystem(domain);
  const out = new Map();
  let usage = { input: 0, output: 0, cacheRead: 0 };
  for (let i = 0; i < candidates.length; i += chunkSize) {
    const chunk = candidates.slice(i, i + chunkSize);
    const user = chunk
      .map((c) => `id: ${c.id}\nsource: ${c.source} (${c.kind})\ntitle: ${c.title}\nsnippet: ${c.snippet || '(none)'}`)
      .join('\n\n---\n\n');
    const { data, usage: u } = await structured({ system, user, schema, effort: 'medium' });
    usage.input += u.input_tokens ?? 0;
    usage.output += u.output_tokens ?? 0;
    usage.cacheRead += u.cache_read_input_tokens ?? 0;
    for (const r of data.items) if (chunk.some((c) => c.id === r.id)) out.set(r.id, r);
  }
  return { results: out, usage };
}

function summarySystem(domain) {
  return `You write the stories for "${domain.name}", one edition of a daily digest.

Reader: ${domain.audience}

For the given source text, produce:
- title: a plain, specific headline in sentence case, under 90 characters. State the finding or event, not the topic. No clickbait, no colon-subtitle.
- summary: two to four short paragraphs, each 40 to 90 words. Paragraph one says what happened or what was found, with the concrete detail. Paragraph two explains why it matters to the reader. Further paragraphs only if there is a real caveat, number, or mechanism worth adding. Do not pad.
- why_read: one sentence, under 30 words, telling the reader what they will get from the original. This is the only place you may address the reader directly.
- tags: two to six lowercase tags, single words or hyphenated, specific to the story.

Only use facts present in the source text. If the source is an abstract, say what the paper claims and do not overstate it. If the text is thin or truncated, write less rather than guess.

${VOICE}`;
}

export async function summarise(domain, candidate, text) {
  const system = summarySystem(domain);
  const user = `Source: ${candidate.source}\nOriginal title: ${candidate.title}\nURL: ${candidate.url}\n\nText:\n${text}`;
  const { data, usage, model } = await structured({ system, user, schema: SummarySchema, effort: 'medium', maxTokens: 4000 });
  return { ...data, usage, model };
}
