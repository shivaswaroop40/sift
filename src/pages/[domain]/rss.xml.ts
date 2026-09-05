import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../../../site.config';
import { DOMAINS, domainBySlug, sectionLabel } from '../../lib/domains';

export function getStaticPaths() {
  return DOMAINS.map((d) => ({ params: { domain: d.slug } }));
}

const join = (...parts: string[]) => parts.join('/').replace(/([^:])\/\/+/g, '$1/');

export async function GET(context: APIContext) {
  const domain = domainBySlug(context.params.domain!)!;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const site = String(context.site ?? '');
  const cutoff = new Date(Date.now() - SITE.rssDays * 86400 * 1000).toISOString().slice(0, 10);
  const stories = (await getCollection('stories'))
    .filter((s) => s.id.startsWith(`${domain.slug}/`) && s.data.date >= cutoff)
    .sort((a, b) => (a.data.date === b.data.date ? a.data.rank - b.data.rank : a.data.date < b.data.date ? 1 : -1));

  const items = stories.map((s) => {
    const body = s.body ?? '';
    const paragraphs = body.split(/\n{2,}/).map((p) => `<p>${escapeHtml(p.trim())}</p>`).join('');
    const why = s.data.why_read ? `<p><em>${escapeHtml(s.data.why_read)}</em></p>` : '';
    const foot = `<p><small>${escapeHtml(s.data.source)} · ${sectionLabel(s.data.section)} · score ${s.data.interest_score}/10${s.data.comments ? ` · <a href="${s.data.comments}">discussion</a>` : ''}</small></p>`;
    return {
      title: s.data.title,
      link: s.data.url,
      guid: join(site, base, domain.slug, s.data.date, '') + `#${s.data.id}`,
      pubDate: new Date(`${s.data.date}T06:00:00Z`),
      description: s.data.why_read || body.slice(0, 200),
      content: why + paragraphs + foot,
      categories: [sectionLabel(s.data.section), ...s.data.tags],
      author: s.data.authors[0],
    };
  });

  return rss({
    title: `${SITE.name} · ${domain.name}`,
    description: `${domain.short}. ${SITE.description}`,
    site: join(site, base, domain.slug, ''),
    items,
    customData: `<language>en-gb</language><ttl>360</ttl>`,
    trailingSlash: false,
  });
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
