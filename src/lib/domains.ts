import { getCollection } from 'astro:content';
import tech from '../../domains/tech.json';
import cybersecurity from '../../domains/cybersecurity.json';
import travel from '../../domains/travel.json';
import chemeng from '../../domains/chemical-engineering.json';

export type Domain = {
  slug: string;
  name: string;
  short: string;
  accent: string;
  accentDark: string;
  sections: string[];
  feeds: { name: string; url: string; kind?: string }[];
};

// Order here is the order in the dropdown.
export const DOMAINS: Domain[] = [tech, cybersecurity, travel, chemeng] as Domain[];

export function domainBySlug(slug: string) {
  return DOMAINS.find((d) => d.slug === slug);
}

/** Story entries for a domain, grouped by edition date, newest first. */
export async function editionsFor(slug: string) {
  const stories = (await getCollection('stories')).filter((s) => s.id.startsWith(`${slug}/`));
  const byDate = new Map<string, typeof stories>();
  for (const s of stories) {
    if (!byDate.has(s.data.date)) byDate.set(s.data.date, []);
    byDate.get(s.data.date)!.push(s);
  }
  for (const list of byDate.values()) list.sort((a, b) => a.data.rank - b.data.rank);
  return [...byDate.entries()].sort((a, b) => (a[0] < b[0] ? 1 : -1));
}

export async function editionMeta(slug: string, date: string) {
  const all = await getCollection('editions');
  return all.find((e) => e.data.domain === slug && e.data.date === date)?.data ?? null;
}

export function sectionLabel(s: string) {
  return s.replace(/-/g, ' ').replace(/\band\b/g, '&');
}

export function fmtDate(iso: string) {
  const d = new Date(iso + (iso.length === 10 ? 'T12:00:00Z' : ''));
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
