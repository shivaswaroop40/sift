---
id: a09ef0ddb2
title: GitHub moves github.com from styled-components to CSS Modules and reports 55% faster SSR
original_title: GitHub Ditches CSS-in-JS for CSS Modules, Reports 55% Faster SSR After Three-Year Migration
url: >-
  https://www.infoq.com/news/2026/11/github-css-migration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-26"
published_at: "2026-11-25T15:29:00.000Z"
authors:
  - Daniel Curtis
comments: null
tags:
  - css-modules
  - css-in-js
  - github
  - ssr
  - react
  - frontend-performance
  - news
why_read: >-
  The original InfoQ piece describes the migration method in detail, including feature flags,
  codemods and the transitional package, which is useful if you plan a similar styling migration.
rank: 7
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

GitHub has described a three-year migration of github.com from CSS-in-JS (styled-components) to CSS Modules. Primer engineers report a 55% cut in server-side rendering time and 25% faster component initialisation. The trigger was a sharp rise in component counts on some pages from 2023, which made page load, render time and style updates grow with component count.

Each Primer component got a CSS Modules variant behind a feature flag, checked with visual regression tests, then rolled out from the Primer team to staff and then all users. Primer was fully converted by December 2024. The harder part was about 7,760 uses of the sx prop across github.com. A transitional @primer/styled-react package kept sx working during the crossover.

Eight engineers migrated 6,419 props over six months, with per-page SSR gains of 3% to 22%. Two engineers cleared the last 895 in three weeks, using Copilot coding agents heavily. GitHub also had to decouple theming for its seven themes before removing styled-components. A VS Code plugin and a codemod reduced manual work.

The headline figures are GitHub's own and the source gives no baseline or method. Hacker News commenters were mixed. One reported 30% faster builds and better tree shaking on Next.js. Others doubted the user benefit, noting that hashed class names hurt custom CSS and extensions, and that CSS-in-JS can be made zero-runtime without Modules.
