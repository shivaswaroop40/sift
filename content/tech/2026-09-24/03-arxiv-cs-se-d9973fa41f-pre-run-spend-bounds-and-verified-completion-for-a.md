---
id: d9973fa41f
title: Pre-run spend bounds and verified completion for agent harnesses
original_title: >-
  Bounded Loops: Pre-Run Spend Bounds, Proved Termination, and Verified Completion for Agent
  Harnesses
url: https://arxiv.org/abs/2609.27871
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-09-24"
published_at: "2026-09-24T04:00:00.000Z"
authors:
  - Varun Pratap Bhardwaj
  - Garima Singh
  - Arun Pratap Bhardwaj
comments: null
tags:
  - agents
  - formal-verification
  - static-analysis
  - developer-tooling
  - open-source
  - paper
why_read: >-
  You will get a formal model, a public Apache-2.0 analyser, and a concrete failure mode count from
  69 real agent loops.
rank: 3
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A paper proposes a formal model for bounding agent loops with three guarantees: termination, no unverified completion, and pre-run spend caps. The model separates a worker, an independent gate it cannot write to, and a declared budget, with a repair relation for re-running upstream nodes. Termination holds in closed form when the repair budget is global rather than per node.

For platform engineers building agent systems, the practical finding is sharper than the theory. The authors built a static analyser against an Apache-2.0 catalogue of 69 loops and found 47 vacuous gates in shipped, reviewed code. Two failure classes are named: vacuity (the check passes on the absence of the thing being checked) and self-attestation (the subject supplies the value the gate reads).

The headline number is caveat-heavy. Against repaired gates the instrument reports zero false accepts across 209 destroying mutants, with Wilson 95% confidence below 1.8%. The authors flag this as corpus saturation rather than gate quality. Freezing the gates and applying a fresh mutant family recovers a 23.3% false-accept rate that the exhausted corpus had missed.
