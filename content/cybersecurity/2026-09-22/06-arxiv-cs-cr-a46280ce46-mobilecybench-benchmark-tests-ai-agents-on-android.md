---
id: a46280ce46
title: MobileCybench benchmark tests AI agents on Android vulnerability discovery
original_title: "MobileCybench: Evaluating Agent Vulnerability Discovery via Executable Probes"
url: https://arxiv.org/abs/2609.23980
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-09-22"
published_at: "2026-09-22T04:00:00.000Z"
authors:
  - Andy K. Zhang
  - Ava Huang
  - Joey Ji
  - Wai Han
  - Thomas Qin
  - Nardos Demilew
comments: null
tags:
  - android
  - ai-agents
  - vulnerability-discovery
  - benchmark
  - mobile-security
  - paper
why_read: >-
  You will see how executable security-property probes can rate vulnerability reports and how
  current AI coding agents perform against them on Android.
rank: 6
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers built MobileCybench, a benchmark of 495 executable probes across 13 Android apps that check security properties rather than known bugs. Probes replay a reported exploit and trigger if a security property is violated, so they can flag unknown vulnerabilities.

Five coding agents were tested in four settings, including a malicious app on the victim device and a remote attacker with low privilege, each with either an obfuscated APK or source code. The top configuration, OpenCode with GPT-5.6-Sol using only the obfuscated APK, triggered probes in 53.8% of apps as a malicious app and 16.7% as a remote attacker.

With source code access, trigger rates across all agents and both attack settings rose from 28.8% to 32.8%. Building and running the benchmark surfaced 23 previously unreported vulnerabilities, most of which maintainers have confirmed.

Several cited models such as GPT-5.6-Sol, GLM-5.2 and Opus 5 do not match current public releases, so the figures may not reproduce against current agents.
