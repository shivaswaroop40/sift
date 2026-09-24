---
id: d86d72a303
title: SWE-bench scores drop when repository cues are stripped, hinting at LLM memorisation
original_title: "Schr\\\"odinger's Code Repository: Have LLMs Learned SWE-bench or Memorized It?"
url: https://arxiv.org/abs/2609.27891
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-09-24"
published_at: "2026-09-24T04:00:00.000Z"
authors:
  - Silin Chen
  - Yufei Yang
  - Xiaodong Gu
  - Yuling Shi
  - Chengcheng Wan
  - Haibing Guan
comments: null
tags:
  - llm
  - benchmarks
  - code-agents
  - evaluation
  - swe-bench
  - arxiv
  - paper
why_read: >-
  You will see concrete evidence that current coding agent benchmarks may be measuring memorisation,
  and get a framework for stress-testing your own evaluations.
rank: 10
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers propose SchrodingerRepo, an evaluation framework that dynamically instantiates test repositories only at evaluation time. It applies four transformation levels: problem statement reconstruction, namespace remapping, intra-file layout reordering, and functionality-preserving code rewriting, while preserving executable semantics. Familiar cues such as naming conventions, file layouts and implementation patterns are eroded.

When popular LLMs were tested on SWE-bench Verified and SWE-QA under these transformations, performance degraded consistently across models and interaction costs rose substantially. The authors attribute the extra cost to increased difficulty in repository exploration and localisation rather than to changes in the underlying bug.

The paper argues that strong scores on SWE-bench style benchmarks may partially reflect memorisation of canonical repository structure from training data, not general repository reasoning. It calls for evaluation under dynamically instantiated repository representations.
