import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per story: content/<domain>/<date>/NN-*.md. The pipeline writes these.
const stories = defineCollection({
  loader: glob({ pattern: '*/*/*.md', base: './content' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    original_title: z.string().optional(),
    url: z.string().url(),
    source: z.string(),
    kind: z.string().default('news'),
    section: z.string().default('unsorted'),
    date: z.string(),
    published_at: z.string().nullable().optional(),
    authors: z.array(z.string()).default([]),
    comments: z.string().url().nullable().optional(),
    tags: z.array(z.string()).default([]),
    why_read: z.string().default(''),
    rank: z.number(),
    interest_score: z.number(),
    depth_score: z.number(),
    novelty_score: z.number(),
    utility_score: z.number(),
    scored: z.boolean().default(true),
    model: z.string().nullable().optional(),
  }),
});

// One edition.json per domain per day, written alongside the stories.
const editions = defineCollection({
  loader: glob({ pattern: '*/*/edition.json', base: './content' }),
  schema: z.object({
    domain: z.string(),
    date: z.string(),
    generated_at: z.string(),
    dry_run: z.boolean().default(false),
    model: z.string().nullable().optional(),
    candidates: z.number(),
    kept: z.number(),
  }),
});

export const collections = { stories, editions };
