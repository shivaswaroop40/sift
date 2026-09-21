---
id: 5c2e7258b5
title: MacBook built-in IMU leaks keystrokes to unprivileged attackers
original_title: >-
  Et Tu, MacBook? Unprivileged Keystroke Inference and Context Profiling via the Built-in IMU Side
  Channel
url: https://arxiv.org/abs/2609.21569
source: arXiv cs.CR
kind: paper
section: vulnerabilities
date: "2026-09-21"
published_at: "2026-09-21T04:00:00.000Z"
authors:
  - Jiaji He
  - Yi Shi
  - Junfeng Cai
  - Chang Liu
  - Yongqiang Lyu
comments: null
tags:
  - side-channel
  - macos
  - impedance
  - keystroke-inference
  - apple
  - hardware-security
  - paper
why_read: >-
  You will see a concrete, demonstrated side channel on production MacBooks and the accuracy figures
  behind a non-root key-inference attack.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers have shown an Apple MacBook's built-in inertial measurement unit (IMU) can be read without root privileges and used to recover typed input. Access is possible through an IOKit driver, and the authors combined it with two metadata interfaces, HIDIdleTime and CGEventSource, to enrich the leaked signal.

They built an attack called BRUTUS that uses the IMU side channel to identify which key was pressed, infer the desk surface the laptop sat on, and tell different users apart without labelled training data. Character-level key recovery accuracy ranged from 89.1% to 97.5%, and sentence reconstruction reached 100% accuracy for some inputs when paired with language models.

The work is a proof of concept rather than a confirmed real-world exploit chain. Apple has not, according to the abstract, shipped a fix, and the authors call for tighter access controls on built-in IMU sensors on consumer laptops.
