---
id: d40319866b
title: A single low similarity score is weak evidence that an agent rewrite is independent
original_title: A Low Similarity Score Does Not Show Independence after Source-Conditioned Repository Rewriting
url: https://arxiv.org/abs/2611.07887
source: arXiv cs.SE
kind: paper
section: industry
date: "2026-11-06"
published_at: "2026-11-06T05:00:00.000Z"
authors:
  - Micheline B\'en\'edicte Moumoula
  - Serge Lionel Nikiema
  - Tailia Malloy
  - Abdoul Kader Kabor\'e
  - Jacques Klein
  - Tegawend\'e F. Bissyande
comments: null
tags:
  - code-similarity
  - llm-agents
  - copyleft
  - plagiarism-detection
  - provenance
  - paper
why_read: >-
  You get the full experimental setup, the similarity spreads across repeated runs, and the evidence
  that import and fingerprint signals fail to separate rewrites from independent code.
rank: 3
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

The paper tests source-conditioned rewriting, where a coding agent keeps the original repository in its working copy, rewrites it, and iterates until a fixed behavioural harness passes, with no human edit to the code. Across 69 rewrites of six copyleft Python projects, every controlled rewrite passed the harness after repair, usually within half an hour for the initial rewrite. Under a ground-up rearchitecture prompt, most rewrites fell below 25% JPlag similarity and still passed.

Maintainers sometimes cite a low token-similarity score as evidence that an LLM-assisted rewrite of a copyleft project is independent of the original. This study finds the score unreliable. Identical project, agent and prompt configurations produced wide spreads in similarity, and run-to-run variation dominated project and agent effects. In more than a third of configurations, the three repeats straddled the threshold.

Provenance signals fare no better. Rewrites retained more of the original's imports and fingerprint facts than unrelated projects did, but hand-written independent implementations of the same task often retained as much, and neither signal separated the two groups better than chance. The authors recommend reporting repeated generations with any similarity claim, and checking provenance signals against same-task independent implementations rather than only unrelated projects.
