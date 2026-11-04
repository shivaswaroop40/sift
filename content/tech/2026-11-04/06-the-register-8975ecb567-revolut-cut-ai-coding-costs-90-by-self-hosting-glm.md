---
id: 8975ecb567
title: Revolut cut AI coding costs 90% by self-hosting GLM on 56 B200 GPUs
original_title: British fintech Revolut slashes AI coding costs 10x by cutting out Claude and going self-hosted
url: >-
  https://www.theregister.com/ai-and-ml/2026/11/03/british-fintech-revolut-slashes-ai-coding-costs-10x-by-cutting-out-claude-and-going-self-hosted/5307345
source: The Register
kind: news
section: ai-and-ml
date: "2026-11-04"
published_at: "2026-11-03T20:07:29.000Z"
authors:
  - Tobias Mann
comments: null
tags:
  - revolut
  - self-hosting
  - inference
  - gpu
  - ai-coding
  - glm
  - news
why_read: >-
  The original gives the full hardware, quantization and tuning detail behind Revolut's self-hosted
  GLM deployment, plus its latency targets and cost figures.
rank: 6
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Revolut says it cut AI coding inference costs by roughly 90 percent in under a year by making self-hosted models its default instead of commercial services like Claude. It now serves GLM-5.3 to around 2,000 engineers on 56 Nvidia B200 GPUs. Self-hosting GLM 5.1 at $0.30 per million input and output tokens cost about a tenth of OpenAI's Codex or Anthropic's Claude Code. The company reported a 60 percent improvement in coding time and 70 percent in lead time.

The detail worth noting is where the gains came from. David Abitbol, ops and infrastructure lead, said the biggest bottleneck was not writing code but debugging and working through Jira and Confluence tickets. Cheap tokens changed behaviour. Engineers stopped rationing them for difficult tasks and let the model absorb routine work. Before the switch, engineers were spending $1,000 to $10,000 a month with little return, which forced strict budget limits.

Serving the model is not trivial. GLM 5.1 has roughly 754 billion total parameters, 40 billion activated per token, and needs about 380 GB of GPU memory for weights plus 6 to 26 GB per user for context. The largest gains came from NVFP4 quantization, disaggregated prefill and decode, and context length tuning rather than more GPUs. Abitbol targets sub 3-second time to first token. Beyond 5 seconds, complaints arrive. Throughput matters less because engineers now run tasks in parallel.

Two caveats. GLM is text only, so Revolut routes vision queries to Gemini or GPT Luna through a model router. Abitbol also called long context a scam, saying 256,000 tokens is what engineers actually need rather than the one million the model can serve. He acknowledged Chinese open weights models raise privacy concerns, but said the risk is mainly accessing them through APIs running out of China.
