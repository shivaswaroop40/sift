---
id: 60b3ae81e9
title: Linear finishes 1,000-PR migration from styled-components to StyleX
original_title: Linear Completes 1,000-PR Migration From styled-components to Meta's StyleX
url: >-
  https://www.infoq.com/news/2026/09/linear-stylex-meta/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-09-28"
published_at: "2026-09-28T06:26:00.000Z"
authors:
  - Daniel Curtis
comments: null
tags:
  - react
  - stylex
  - styled-components
  - css-in-js
  - migration
  - performance
  - news
why_read: >-
  You get the concrete numbers, codemod details, and trade-offs from a production-scale CSS-in-JS
  migration relevant to anyone running a React frontend.
rank: 9
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Linear has finished moving its React apps from styled-components to Meta's StyleX, a five-month migration that engineer Kenneth Skovhus describes as taking more than 1,000 pull requests. The project was previously documented at 58 percent complete and wrapped in early August 2026.

The trigger was React 18 concurrent rendering exposing the cost of runtime style injection. Linear reported 20 to 35 percent less main-thread work on view-heavy pages, about 30 percent faster navigation on a mid-tier machine, and zero CSS rules injected during page changes after switching.

StyleX moves style generation to build time and emits collision-free atomic classes. Skovhus built a deterministic codemod, now past 500 PRs and roughly 100,000 lines, and the team kept CSS Modules as an escape hatch for global selectors.

Staff engineer Reid Burke warned that styled-components' open API was itself what made automation hard, and a GitHub thread on StyleX complaints notes restrictive guidelines on parent-dependent and global selectors.
