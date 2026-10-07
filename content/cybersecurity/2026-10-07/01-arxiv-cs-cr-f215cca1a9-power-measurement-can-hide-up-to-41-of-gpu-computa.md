---
id: f215cca1a9
title: Power measurement can hide up to 41% of GPU computation even under audit
original_title: Can Power Draw Constrain Covert Compute? Limits of Analogue Verification for AI Governance
url: https://arxiv.org/abs/2610.07476
source: arXiv cs.CR
kind: paper
section: policy
date: "2026-10-07"
published_at: "2026-10-07T04:00:00.000Z"
authors:
  - Tom Kimpson
  - Mauricio Baker
  - Emlyn Graham
comments: null
tags:
  - ai-governance
  - verification
  - power-analysis
  - gpu-audit
  - side-channel
  - paper
why_read: Learn what power audits can and cannot detect in constrained compute verification.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers tested whether power draw measurements can verify that AI systems run only declared amounts of compute. Testing NVIDIA A100 GPUs, they found an adversary could hide at least 41% of actual computation while matching the power signature of legitimate work. Power traces alone set an upper bound of 116% undeclared compute in worst case.

For organisations enforcing AI compute limits via treaties or audits, this matters directly. If verification relies only on power monitoring, a motivated actor can perform substantial hidden training runs undetected. The attack requires no exotic hardware, just algorithmic manipulation of workloads.

Only when auditors can re-execute the declared work and observe operating points does the hidden compute fraction drop to 5.9%. This suggests power measurement alone is insufficient as a primary verification mechanism for AI governance agreements.
