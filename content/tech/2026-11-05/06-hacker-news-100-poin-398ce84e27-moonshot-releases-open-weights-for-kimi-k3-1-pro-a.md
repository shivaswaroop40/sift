---
id: 398ce84e27
title: Moonshot releases open weights for Kimi K3.1 Pro, a 2.8T MoE with 1M-token context
original_title: Kimi K3.1 Pro model weights are out
url: https://huggingface.co/moonshotai/Kimi-K3.1-Pro
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-11-05"
published_at: "2026-11-04T15:30:30.000Z"
authors:
  - abrarthought
comments: https://news.ycombinator.com/item?id=50366999
tags:
  - kimi
  - open-weights
  - moe
  - long-context
  - quantisation
  - llm
  - community
why_read: >-
  You get the full architecture table, the quantisation scheme, and per-benchmark scores to judge
  whether it is worth self-hosting.
rank: 6
interest_score: 7.3
depth_score: 6
novelty_score: 9
utility_score: 7
scored: true
model: glm-5.3
---

Moonshot AI has published the weights for Kimi K3.1 Pro, an open-weight multimodal agentic model and the first in the K3.1 series. It is a Mixture-of-Experts design with 2.8 trillion total parameters, 104 billion activated per token, and 896 experts. The context window is 1,048,576 tokens. It swaps the full-attention Gated MLA layers of Kimi K3 for Gated DeepSeek Sparse Attention to make long context cheaper, and ships MXFP4 weights with MXFP8 activations from quantisation-aware training.

Open weights at this capability level are still rare, and the numbers matter for self-hosting. The 104B activated parameters and quantisation-aware MXFP4 weights keep serving cost well below what the 2.8T total suggests. On the reported table it scores 65.7 on Terminal-Bench 4.0 and 51.7 on SWE Marathon v1.1, ahead of Claude Opus 5.5 and GPT-6 Astra on both. It trails badly elsewhere, with 31.5 on Program Bench against 65.0 for Opus 5.5.

Read the comparison table with care. Several rows are internal Kimi benchmarks, including the code, hallucination and design suites. Kimi K3.1 Pro was evaluated with the Claude Code harness while rivals use their own, and some competitor scores are copied from vendor blogs and leaderboards rather than re-run. Proprietary models may also use fallback behaviour. This is a vendor comparison, not a controlled one.
