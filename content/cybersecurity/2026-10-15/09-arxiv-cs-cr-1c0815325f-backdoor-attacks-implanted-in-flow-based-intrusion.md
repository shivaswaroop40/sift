---
id: 1c0815325f
title: Backdoor attacks implanted in flow-based intrusion detection with 0.001% of training data
original_title: Analyzing and Mitigating Poisoning Attacks on Flow-Based Intrusion Detection
url: https://arxiv.org/abs/2610.19766
source: arXiv cs.CR
kind: paper
section: papers
date: "2026-10-15"
published_at: "2026-10-15T04:00:00.000Z"
authors:
  - Florian Spelter
  - Johannes F. Loevenich
  - Tobias H\"urten
  - Erik Adler
  - Maxime Schwarzer
  - Laurin Holz
comments: null
tags:
  - intrusion-detection
  - backdoor
  - data-poisoning
  - model-security
  - neural-pruning
  - training-data
  - paper
why_read: >-
  Understand how minimal data poisoning can compromise AI-based IDS and learn detection and
  mitigation techniques.
rank: 9
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Researchers demonstrate that AI-based intrusion detection systems can be compromised by poisoning minimal amounts of training data. A backdoor triggered by specific network flows can be injected with as little as 0.001% of poisoned samples whilst maintaining normal detection performance on benign traffic.

For platform engineers running production IDS, this means an attacker with limited influence over training data can plant persistent backdoors that pass validation. The attack succeeds because the model learns to silently ignore specific malicious patterns when a trigger condition is met.

The authors propose detecting poisoning through perturbation analysis and model comparison, then removing compromised data or pruning affected neurons. The approach is presented as scalable for operational systems.
