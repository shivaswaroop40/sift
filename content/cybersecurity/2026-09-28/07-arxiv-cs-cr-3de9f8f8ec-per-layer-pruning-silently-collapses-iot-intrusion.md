---
id: 3de9f8f8ec
title: Per-layer pruning silently collapses IoT intrusion detectors by starving the input layer
original_title: "Input-Layer Starvation: Why Per-Layer Pruning Breaks IoT Intrusion Detectors"
url: https://arxiv.org/abs/2609.30729
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-09-28"
published_at: "2026-09-28T04:00:00.000Z"
authors:
  - Md Anas Biswas
comments: null
tags:
  - iot
  - intrusion-detection
  - pruning
  - model-compression
  - adversarial-ml
  - paper
why_read: >-
  You will learn a concrete mechanism by which standard pruning breaks compressed intrusion
  detectors and two cheap mitigations to apply before shipping a pruned model.
rank: 7
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers show that pruning IoT intrusion detectors for size, judged only on overall accuracy, hides severe class-level failure. On CICIoT2023, a two-layer convolutional detector pruned to 80% sparsity with uniform layer-wise magnitude pruning loses 16 accuracy points but half its macro-F1, falling from 0.542 to 0.271 across five runs. Seventeen of 34 classes are materially damaged.

The cause is not raw weight count: a perceptron and a transformer pruned to the same or fewer weights lose at most 0.096 of macro-F1. The first conv layer does. It has 192 weights, uniform pruning leaves 38, and 46% of its 64 filters lose every input weight. Fine-tuning under that starvation displaces first-layer batch-norm running means by up to 0.8 standard deviations, on which the deployed model collapses.

Protecting those 192 weights, or pruning globally at the same sparsity, prevents the collapse (macro-F1 loss 0.013). Recomputing normalisation statistics on unlabelled training data, with no weights changed, repairs an already pruned model (loss 0.039) and returns false-alert rate close to the dense baseline (33% versus 29%).

The failure mode is misattribution rather than silent evasion: on validation-selected blind spots, uniformly pruned detectors misattribute 72% of traffic, against 50% with the first layer protected and 47% for the dense model. A strong dose-response in first-layer sparsity holds, starving a perceptron's input layer reproduces the collapse, and the pattern reproduces on TON_IoT.
