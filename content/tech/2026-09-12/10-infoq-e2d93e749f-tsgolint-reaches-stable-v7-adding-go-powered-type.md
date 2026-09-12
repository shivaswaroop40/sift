---
id: e2d93e749f
title: tsgolint reaches stable v7, adding Go-powered type-aware linting to Oxlint
original_title: tsgolint Reaches Stable v7, Bringing Go-Powered Type-Aware Linting to Oxlint
url: >-
  https://www.infoq.com/news/2026/09/tsgolint-oxlint-typescript/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-09-12"
published_at: "2026-09-11T12:02:00.000Z"
authors:
  - Daniel Curtis
comments: null
tags:
  - tsgolint
  - oxlint
  - typescript
  - linting
  - typescript-go
  - go
  - news
why_read: >-
  See how tsgolint v7 compares with typescript-eslint, what it costs to adopt, and where correctness
  still falls short.
rank: 10
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: deepseek-v4-flash
---

tsgolint, the type-aware linting engine behind Oxlint, has reached stable v7. It builds real TypeScript programs on top of typescript-go, the official Go port of the compiler that ships as TypeScript 7. Oxlint handles file discovery, configuration and syntactic rules, then passes type-aware work to the Go binary, which returns structured diagnostics. The release tracks TypeScript v7.0.2 and covers 59 of typescript-eslint's 61 type-aware rules, up from 43 at the December alpha.

For teams running ESLint with typescript-eslint, the stable build is 12 to 18 times faster across microsoft/vscode, microsoft/typescript, typeorm and vuejs/core on an Apple M4 Pro. Adding --type-check reports compiler errors alongside lint diagnostics from the same TypeScript program. Per-rule timings, surfaced with oxlint --type-aware --debug timings, show which type-aware rules dominate a run. The trade-off is the dependency: type-aware linting needs TypeScript 7.0 or later, and legacy tsconfig options such as baseUrl are unsupported.

Correctness is still being refined. Users have filed reports such as one where an autofix removed a type assertion that tsc actually required. The typescript-eslint team still calls its own tsgolint fork an experiment that is not under active development. Biome, which synthesises its own types, catches roughly 75 percent of the noFloatingPromises cases typescript-eslint catches. Existing ESLint users can migrate with npx @oxlint/migrate --type-aware.
