---
id: ebca86efce
title: Short load bursts push prefix-cached vLLM agent serving into a collapse that does not drain
original_title: "Bursts That Outlast Themselves: Persistent Degradation in Prefix-Cached Agent Serving"
url: https://arxiv.org/abs/2611.13412
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-11-11"
published_at: "2026-11-11T05:00:00.000Z"
authors:
  - Wen Huang
  - Jack Liu
comments: null
tags:
  - llm-serving
  - vllm
  - prefix-caching
  - metastability
  - kv-cache
  - agents
  - paper
why_read: >-
  You get the load-balance condition for when the collapse can drain, and the evidence that
  admission control alone fails while session suspension and KV budgeting work.
rank: 3
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

The paper shows that prefix-cached agent serving can be metastable. A cache hit costs about 1,000 tokens of prefill, while a miss recomputes a 10 to 40K-token context. With the same base workload, a few extra minutes of arrivals left vLLM at about a 10% hit ratio and half the throughput, with a backlog growing for the remaining 70 minutes. The no-burst twin stayed healthy in 9 of 12 pairs.

The mechanism is a feedback loop. Slower service keeps more sessions in the system, their combined working set outgrows the KV pool, and every turn becomes a full recomputation. The regime appeared at loads the warm server could sustain, and not without prefix caching. It also showed up with Qwen3-32B on SWE-bench-shaped traces and on SGLang, which tolerated larger triggers.

Recovery was the harder part. Throttling new admissions recovered 1 of 7 collapsed runs. Suspending admitted sessions against a capacity-based limit recovered all seven within minutes. A CPU offload tier delayed the collapse but did not prevent it. A budgeter that caps the resident KV demand of active sessions at the pool size prevented the failure in every run tested.
