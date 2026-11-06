---
id: 034e8c5047
title: TypeScript 7.1 beta restores the compiler API and adds content mappers for Vue and Svelte
original_title: "TypeScript 7.1 Beta: Restores the Compiler API and Makes Vue and Svelte First-Class"
url: >-
  https://www.infoq.com/news/2026/11/typescript-7-1-beta/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-06"
published_at: "2026-11-06T11:06:00.000Z"
authors:
  - Daniel Curtis
comments: null
tags:
  - typescript
  - compiler-api
  - vue
  - svelte
  - developer-tooling
  - news
why_read: >-
  The original details the new API entry points, the content mapper mechanism, the benchmark numbers
  and the migration path for framework teams.
rank: 8
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Microsoft shipped TypeScript 7.1 Beta on 20 October 2026, two weeks late, as the first update to the Go-based native compiler from July. It restores the compiler API that 7.0 dropped, which had left Volar, Svelte, Astro, ts-morph and type-aware linting stranded on TypeScript 6 for three months. The API splits into focused entry points such as typescript/sync, typescript/async, typescript/fs and typescript/ast. The client models incremental edits through reusable snapshots, and the team says the surface will stay backward compatible across 7.x once stable.

The most discussed addition is content mappers, a plugin point that hands TypeScript a virtual view of a .vue or .svelte file, with mappings back to the original so errors point at the right line. A mapper runs as a separate process and executes only when enabled. Vue Language Tools v4 alpha already uses one, dropping the vue-tsc binary for a @vue/content-mapper that runs inside tsc. In a Directus migration, type checks across 581 Vue components fell from 14.19 to 3.10 seconds, a 4.6x speedup over vue-tsc 3.

Other numbers vary with codebase size. Microsoft's MUI docs benchmark falls from 22.2 to 11.9 seconds while roughly halving memory, but heavier codebases such as VS Code see closer to 1.2x. An independent NestJS test put a 353,000-line check at 2.76 seconds on the beta, against 4.95 on 7.0 and 12.42 on the old compiler, and flagged a 7.0 memory regression that 7.1 reverses. One open bug remains. Saving a mapper's watched configuration file can leave types stale until the language server restarts.

The team advises moving from TypeScript 5 through 6 to 7, and keeping a dual 6 and 7 install for Vue, Svelte or Angular projects until their tooling ships a 7.1 build. Tool and library authors should port to the new entry points now and flag gaps through the API status tracker. A release candidate and stable build are tentatively planned for late November. The language also gains import attributes in ambient module declarations, source phase imports for WebAssembly, and a stable es2026 target.
