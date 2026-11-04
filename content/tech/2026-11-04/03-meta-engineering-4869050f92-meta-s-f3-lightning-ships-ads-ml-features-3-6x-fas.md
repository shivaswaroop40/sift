---
id: 4869050f92
title: Meta's F3 Lightning ships ads ML features 3.6x faster with no extra compute cost
original_title: "F3 Lightning: How Meta Accelerates Ads ML Features to Production at Scale"
url: >-
  https://engineering.fb.com/2026/11/03/ml-applications/f3-lightning-how-meta-accelerates-ads-ml-features-to-production/
source: Meta Engineering
kind: blog
section: ai-and-ml
date: "2026-11-04"
published_at: "2026-11-03T17:00:35.000Z"
authors: []
comments: null
tags:
  - meta
  - feature-serving
  - machine-learning
  - release-engineering
  - ads-ranking
  - blog
why_read: >-
  The original walks through F3's merged graph design, the all-or-nothing release problem, and how
  Lightning keeps shared execution with per-feature releases.
rank: 3
interest_score: 7
depth_score: 8
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

Meta has built F3 Lightning, a layer on top of its Facebook Feature Framework for serving machine learning features in ads ranking. F3 originally served a few hundred features. A single request can now require more than 20,000. F3 cut compute by compiling every feature into one merged graph, but that graph was also the release unit, so one invalid definition blocked the entire release. Lightning makes each feature an independently compiled, validated, deployed and rolled-back configuration.

Comparable extraction features now reach production about 3.6 times faster than the prior F3, with no increase in infrastructure compute cost. The release path becomes a priority queue rather than an all-or-nothing batch. A new feature that no model consumes yet ships on standard validation, while a change to a feature a live model reads gets extra testing first. Meta says the shorter cycle enables more model iterations in the same period.

The hard part was preserving F3's efficiency. Early prototypes that only separated deployment used substantially more CPU, because each feature arrived at the serving process as its own graph and repeated every read, filter and aggregation the merged graph had eliminated. Lightning closes the gap through stable computation identifiers, a single shared execution plan, one shared memory buffer across all features, and dense index mapping for direct array access.

Incremental fixes had not held. Meta made several rounds of improvements to the merged graph after F3 launched, and each bought back release speed for a while, but the gains eroded as more features landed. The testing burden also grew. Features a live model already consumes need model-related tests that are expensive enough to run only in a later release stage, and under the merged graph every other feature waited for them.
