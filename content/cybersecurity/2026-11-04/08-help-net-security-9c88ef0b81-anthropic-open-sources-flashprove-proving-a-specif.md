---
id: 9c88ef0b81
title: Anthropic open-sources FlashProve, proving a specific model generated a specific reply
original_title: Anthropic open-sources FlashProve, its provable inference prototype for MoE models
url: https://www.helpnetsecurity.com/2026/11/04/anthropic-flashprove-provable-inference/
source: Help Net Security
kind: news
section: papers
date: "2026-11-04"
published_at: "2026-11-04T04:36:14.000Z"
authors:
  - Anamarija Pogorelec
comments: null
tags:
  - anthropic
  - flashprove
  - provable-inference
  - zero-knowledge
  - model-verification
  - llm
  - news
why_read: >-
  You get the repo contents, the benchmark numbers, and Anthropic's own warnings about where the
  paper, the Lean protocol and the code may diverge.
rank: 8
interest_score: 6.3
depth_score: 6
novelty_score: 8
utility_score: 5
scored: true
model: glm-5.3
---

Anthropic's Frontier Red Team, with collaborators at EPFL, MIT and StarkWare, has open-sourced FlashProve, a prototype that produces a cryptographic proof that one specific language model generated one specific reply. The Apache 2.0 release holds a prover, a fast C++ verifier and a Lean reference verifier that states and proves the protocol's completeness, soundness and zero-knowledge properties. On every test proof the two verifiers agreed. It was tested on Llama 4 Maverick, a 400 billion parameter Mixture-of-Experts model.

The gap it targets matters for anyone running production systems on hosted model APIs. A caller cannot confirm which model answered a prompt. A provider could route the request to something cheaper, or someone with access to the inference server could tamper with the token stream, and the reply would still read as competent. Outside evaluators face the same problem in reverse. FlashProve gives a checker a way to confirm the served model.

On one H100 with 24 CPU cores the prover moves about 110 tokens per second. A proof for a 1,024-token request is about 18.78 MB and checks in about 17 seconds on 24 threads, or 21 seconds on one. A one-off 39-minute weight commitment covers roughly 16 million requests, and a client downloads a 6.5 MB commitment plus one proof each. Against vLLM in FP8 on eight H100s, overhead was about 72 times per GPU, and 94 times at the heaviest load tested.

Anthropic flags the gaps itself. The paper, the Lean protocol and the running code are three versions, and the team will not promise they agree; checking the Lean statements falls to the user, with an interactive visualiser in the repo. The prover has no formal tooling. Weights are not included and come from Hugging Face under Meta's licence. The prover touches only the roughly 17 billion parameters active per token, streaming weights in layer-sized segments, so one 80 GB GPU with about 290 GB of host memory is enough.
