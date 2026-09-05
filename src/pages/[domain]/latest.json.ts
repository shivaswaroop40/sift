// Small JSON for widgets (Scriptable, Shortcuts): today's stories for one domain.
import type { APIContext } from 'astro';
import { SITE } from '../../../site.config';
import { DOMAINS, domainBySlug, editionsFor } from '../../lib/domains';

export function getStaticPaths() {
  return DOMAINS.map((d) => ({ params: { domain: d.slug } }));
}

export async function GET(context: APIContext) {
  const domain = domainBySlug(context.params.domain!)!;
  const [date, stories] = (await editionsFor(domain.slug))[0] ?? [null, []];
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const body = {
    site: SITE.name,
    domain: domain.slug,
    name: domain.name,
    accent: domain.accent,
    date,
    page: `${context.site ?? ''}${base}/${domain.slug}/`.replace(/([^:])\/\/+/g, '$1/'),
    stories: stories.map((s) => ({
      rank: s.data.rank,
      title: s.data.title,
      url: s.data.url,
      source: s.data.source,
      section: s.data.section,
      why_read: s.data.why_read,
      score: s.data.interest_score,
    })),
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
