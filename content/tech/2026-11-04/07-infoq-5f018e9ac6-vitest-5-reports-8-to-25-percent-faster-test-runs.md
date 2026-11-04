---
id: 5f018e9ac6
title: Vitest 5 reports 8 to 25 percent faster test runs and stricter defaults
original_title: >-
  Vitest 5: Prioritises Performance with a Shared Vite Server, Trace View, and Stricter Test
  Defaults
url: >-
  https://www.infoq.com/news/2026/11/vite-5-release/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-04"
published_at: "2026-11-03T16:47:00.000Z"
authors:
  - Daniel Curtis
comments: null
tags:
  - vitest
  - testing
  - vite
  - javascript
  - breaking-changes
  - news
why_read: >-
  The original spells out each breaking default, the benchmark range behind the speed claims, and
  the upgrade requirements.
rank: 7
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

VoidZero has released Vitest 5.0, a major version focused on raw speed. Benchmarks spanning a five-file utility package to a 1,280-module monolith show gains of roughly 8 to 25 percent across most setups, rising to 53 percent in VM pool scenarios. The wins come from inline projects sharing a single Vite server, a stabilised on-disk fsModuleCache, fewer round trips between workers and the main process, and VM pools that reuse compiled code. A new vitest doctor command reruns a suite under alternative configurations and recommends faster options.

The stricter defaults matter more than the speed for existing suites. clearMocks now defaults to true, unawaited async assertions fail rather than warn, hoisted vi.mock calls outside the top level throw, and toThrow('') matches any error. Most of this breaks test code that was already wrong, but suites that pass locally on Vitest 4 can go red in CI with errors that say nothing about why, usually call-count assertions that relied on mock history leaking between tests.

Browser Mode gains a built-in Trace View that records each interaction and assertion as a DOM snapshot for step-by-step replay. The new vi.when API lets a single spy return different values per argument. Both are quality-of-life changes rather than performance work.

Upgrading carries requirements. Vitest 5 needs Vite 6.4 and Node.js 22.12 or newer, and Yarn users must install vite themselves now that it is a peer dependency. Reporter output, attachments, and blob reports move under one .vitest/ directory, so CI artifact paths need updating. Cloudflare's vitest-pool-workers still pins its peer range to v4, so projects using it fail before a single test runs.
