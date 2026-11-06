---
id: 2ab30acf9d
title: Supervised detectors give held-out web attack families confident benign verdicts
original_title: "Escalate or Close: How Fast-Tier Models Handle Held-Out Web Attack Families in Two-Tier Triage"
url: https://arxiv.org/abs/2611.08229
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-11-06"
published_at: "2026-11-06T05:00:00.000Z"
authors:
  - Maciej Kisielewicz
  - Micha{\l} K\k{e}dziora
  - Ngoc Thanh Nguyen
comments: null
tags:
  - machine-learning
  - web-attacks
  - triage
  - generalisation
  - adversarial-search
  - paper
why_read: >-
  The paper details the held-out family protocol, the full comparison across decision models, a
  local model, the rule set and an anomaly baseline, and the query search against Jev.
rank: 10
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

The study holds each of seven web attack families out of training, recalibration and thresholds, then splices those payloads into parameters of real browsing traffic. Supervised detectors trained on the known families gave much of a held-out family a confident benign verdict. Over 10 runs, ModernBERT gave 37% to 60% of held-out path traversal a probability below 0.05, and escalated only 50% to 81% of it within a 5% benign budget. It escalated nearly all the same requests once traversal was in training.

In two-tier triage a fast model decides most web requests and escalates the rest to a slow tier, so anything the fast tier closes is never examined. A detector that confidently labels an unseen family as benign therefore drops it silently. Ordinary held-out evaluations, which split samples of known families, would not expose this gap. ML triage in front of slower review needs testing on families absent from training, recalibration and thresholds entirely.

Jev and Clef, two hosted zero-shot decision models whose budget decisions do not depend on the held-out family, escalated at least 97.6% of every family within the same 5% budget. Their training data is undisclosed, though, and may already contain these public families, so this is not clean evidence of generalisation to genuinely novel attacks.

Two further results affect measurement. Jev escalated 37% of benign twins, exploit requests with the attack replaced by legitimate values, so tests on recent exploits need controls for request shape. Detectors trained on older exploits learn what scanner requests look like. A search guided by Jev's probability scores pushed 43% of held-out attacks past Jev within 300 queries. Jev's answers vary, and it escalated those same requests in 60% of its answers when asked again.
