---
id: 8876a6c596
title: Hybrid Jev and Opus judge reaches frontier accuracy at over 4x lower cost
original_title: A Jev that can ask Opus for help gives Opus accuracy at 4x lower cost
url: https://hightouch.com/blog/llm-judges-identity-resolution
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-11-07"
published_at: "2026-11-06T19:48:51.000Z"
authors:
  - theanomaly
comments: https://news.ycombinator.com/item?id=50397429
tags:
  - llm-judges
  - identity-resolution
  - confidence-calibration
  - model-routing
  - benchmarks
  - community
why_read: >-
  The original gives the benchmark construction, the full prompt, and the cost and latency numbers
  behind the hybrid Jev and Opus judge.
rank: 4
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Hightouch tested LLM judges for grading identity resolution output, where the main failure is over-merging records from different people into one identity. Using pseudopeople, a University of Washington tool that simulates records for a fictional US town, they built a benchmark of 1,000 identities, half of them over-merges. The decision models Jev and Luna scored 88.8 to 97.3 percent out of the box. A hybrid running Jev with escalation to Opus matched frontier accuracy at over four times lower cost.

This matters because auditing identity graphs by hand is slow. Human reviewers manage about 50 identities an hour, and over-merges are rare enough that estimating their rate within one percentage point takes more than 1,000 samples. An automated judge could review 100,000 identities in seconds, which would shorten iteration cycles when setting up identity resolution and make ongoing maintenance cheaper.

The hybrid works because Jev's confidence is well calibrated. Jev and Luna belong to a class of models that return a 0-1 confidence score that a condition is true. Most of Jev's mistakes come with low confidence, so those cases can be routed to Opus. Luna scores better out of the box, but the gap disappears on harder cases, and most of its mistakes come with high confidence, which makes it a worse fit for escalation.

Decision models cost $0.05 to $0.10 per 1,000 identities and answer in about 0.15 seconds. That makes them up to 90 times cheaper and more than 10 times faster than frontier models, but they trail Opus by about 6 percentage points on harder benchmarks. Prompting with concrete error examples helped every model most. Data-source context added at most a point for frontier models and nothing for decision models.
