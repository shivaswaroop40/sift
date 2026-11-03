---
id: cf0ceff712
title: MIT CSAIL claims GPT-6 Astra edits 0.016% of Qwen weights to lift MATH-500 to 48.1%
original_title: Astra can read and write weights to improve Qwen
url: https://rikiyat.github.io/blog/weight-space-programming/
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-11-03"
published_at: "2026-11-02T18:21:28.000Z"
authors:
  - dbreunig
comments: https://news.ycombinator.com/item?id=50341174
tags:
  - weight-editing
  - llms
  - interpretability
  - qwen
  - optimization
  - community
why_read: >-
  You get the experimental setups behind each claim, including the network architectures and how
  Astra's weight edits were evaluated.
rank: 2
interest_score: 7.3
depth_score: 7
novelty_score: 9
utility_score: 6
scored: true
model: glm-5.3
---

MIT CSAIL researchers report that GPT-6 Astra can read and write neural network weights directly, without gradient descent or training loops. Shown the raw 17,253 weights of a PPO-trained policy, and not told the candidate games, it named the right game for all four networks tested. Asked to improve Qwen3.5-0.8B at maths, it edited 0.016% of the weights to fix a reasoning-loop defect, lifting MATH-500 from 7.9% to 48.1% under the same sampling settings, and tripling IFEval.

The authors call the method Weight-Space Programming. If the results hold, it offers a way to patch small models without training data, fine-tuning runs or gradient access, and a new interpretability angle, since defects are found by reading weights directly. In one control task, a single edit to 3.5% of a failing policy's weights took success from 0% to 100%. Astra also wrote game-playing networks from scratch, with no environment feedback, that beat PPO policies trained for 100 million steps.

Treat the numbers with care. This is a blog post of early results, not peer-reviewed work, and the text available cuts off before most experimental detail. The Qwen defect Astra fixed is one the model's own card already warns about, so prior documentation may have helped. The post does not say what the edits cost in compute or how often the approach fails.
