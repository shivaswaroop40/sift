---
id: e7da2955c7
title: Automating false-positive filter generation for security alerts
original_title: "Filter generation in practice: from algorithms to LLMs"
url: https://securelist.com/practical-filter-generation/121697/
source: Securelist
kind: research
section: defence
date: "2026-10-31"
published_at: "2026-10-30T10:00:44.000Z"
authors:
  - Artemy Obukhov
comments: https://securelist.com/practical-filter-generation/121697/#respond
tags:
  - false-positives
  - filter-generation
  - fp-growth
  - llm
  - alert-triage
  - research
why_read: >-
  You get a concrete pipeline, validity criteria and worked filter examples for automating
  false-positive suppression in alert triage.
rank: 11
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

A Securelist post by Artemy Obukhov describes a system that generates false-positive filters automatically. Security events carry around 400 fields on average, yet only a few are useful for filtering. The pipeline works out the context a detection rule fragment responds to, selects relevant fields, normalises strings, then applies the FP-Growth algorithm to build and rank field combinations. It offers the analyst the top three. In one worked example, two generated filters were valid and one was too broad.

Manual filter writing is slow. An analyst must review logs, identify the activity source, define filtering boundaries, choose criteria, write the rule and verify it. The post sets out validity criteria for anyone automating this work. A filter must cover the full context of a rule fragment without exceeding it. Filters that are too broad exclude events that deserve attention. Filters that are too narrow match a single event that may never recur. A filter mirroring the rule's own query simply disables that rule.

The algorithmic approach is deterministic and interpretable, and needs no external models, so it deploys in any customer environment. Its stages are independent and tunable. It fails where no context exists, such as a rule's first-ever trigger, and normalisation rules cannot cover atypical string cases that contradict each other. The authors bring in LLMs for those gaps, since an LLM needs no context and handles non-standard strings more flexibly. The available text is truncated before the full LLM, multi-agent and evaluation sections.
