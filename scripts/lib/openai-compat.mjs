// OpenAI-style providers (OpenCode Zen/Go open models, or any /v1/chat/completions or /v1/responses server).
// Selected with SIFT_PROVIDER=chat or SIFT_PROVIDER=responses. Reads OPENAI_API_KEY and OPENAI_BASE_URL.
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';

const BASE = (process.env.OPENAI_BASE_URL || 'https://opencode.ai/zen/v1').replace(/\/$/, '');
const KEY = process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY;

function jsonSchemaFor(schema) {
  // Reuse the SDK's zod→JSON Schema conversion so both providers see the same schema.
  return zodOutputFormat(schema).schema;
}

function extractJson(text) {
  // Open models sometimes wrap JSON in a code fence or add a sentence. Take the outermost object.
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const body = fenced ? fenced[1] : text;
  const start = body.indexOf('{');
  const end = body.lastIndexOf('}');
  if (start < 0 || end < 0) throw new Error('no JSON object in response');
  return JSON.parse(body.slice(start, end + 1));
}

// OpenCode asks clients to identify themselves and send a session id so it can optimise caching.
const SESSION = `sift-${new Date().toISOString().slice(0, 10)}-${Math.random().toString(36).slice(2, 8)}`;

async function post(path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${KEY}`,
      'User-Agent': 'sift-digest/0.1 (+https://github.com/; daily feed triage)',
      'x-opencode-session': SESSION,
    },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${path} ${res.status}: ${text.slice(0, 300)}`);
  return JSON.parse(text);
}

const JSON_ONLY = 'Respond with a single JSON object that matches the schema. No prose, no code fence, no keys that are not in the schema.';

/** Chat Completions: MiniMax, GLM, Kimi, DeepSeek on Zen. */
export async function chatStructured({ model, system, user, schema, maxTokens }) {
  const json_schema = jsonSchemaFor(schema);
  const base = {
    model,
    max_tokens: maxTokens,
    temperature: 0.2,
    messages: [
      { role: 'system', content: `${system}\n\n${JSON_ONLY}\n\nSchema:\n${JSON.stringify(json_schema)}` },
      { role: 'user', content: user },
    ],
  };
  // Try native JSON-schema mode first; many gateways accept it. Fall back to json_object, then plain.
  const attempts = [
    { ...base, response_format: { type: 'json_schema', json_schema: { name: 'output', schema: json_schema, strict: true } } },
    { ...base, response_format: { type: 'json_object' } },
    base,
  ];
  let lastErr;
  for (const body of attempts) {
    try {
      const data = await post('/chat/completions', body);
      const text = data.choices?.[0]?.message?.content ?? '';
      const parsed = schema.parse(extractJson(text));
      return { data: parsed, usage: normaliseUsage(data.usage), model: data.model || model };
    } catch (err) {
      lastErr = err;
      // A 400 on response_format means the gateway rejects that mode; move to the next shape.
      // A parse failure means the model ignored the schema; also move on and let the plain prompt try.
    }
  }
  throw lastErr;
}

/** Responses API: Muse Spark, GPT and Grok on Zen. */
export async function responsesStructured({ model, system, user, schema, maxTokens }) {
  const json_schema = jsonSchemaFor(schema);
  const base = {
    model,
    max_output_tokens: maxTokens,
    instructions: `${system}\n\n${JSON_ONLY}`,
    input: [{ role: 'user', content: user }],
  };
  const attempts = [
    { ...base, text: { format: { type: 'json_schema', name: 'output', schema: json_schema, strict: true } } },
    { ...base, instructions: `${base.instructions}\n\nSchema:\n${JSON.stringify(json_schema)}` },
  ];
  let lastErr;
  for (const body of attempts) {
    try {
      const data = await post('/responses', body);
      const text =
        data.output_text ??
        (data.output || [])
          .flatMap((o) => o.content || [])
          .filter((c) => c.type === 'output_text')
          .map((c) => c.text)
          .join('');
      const parsed = schema.parse(extractJson(text));
      return { data: parsed, usage: normaliseUsage(data.usage), model: data.model || model };
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

function normaliseUsage(u = {}) {
  return {
    input_tokens: u.input_tokens ?? u.prompt_tokens ?? 0,
    output_tokens: u.output_tokens ?? u.completion_tokens ?? 0,
    cache_read_input_tokens: u.input_tokens_details?.cached_tokens ?? u.prompt_tokens_details?.cached_tokens ?? 0,
  };
}
