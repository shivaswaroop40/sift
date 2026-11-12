---
id: c6a1433982
title: DeepMind's AI formally verifies parts of the Signal protocol in four weeks
original_title: Google DeepMind just mathematically verified key parts of Signal
url: >-
  https://arstechnica.com/ai/2026/11/signals-encryption-just-passed-an-ai-powered-mathematical-checkup/
source: Ars Technica
kind: news
section: papers
date: "2026-11-12"
published_at: "2026-11-11T14:08:57.000Z"
authors:
  - Lily Hay Newman
  - wired.com
comments: >-
  https://arstechnica.com/ai/2026/11/signals-encryption-just-passed-an-ai-powered-mathematical-checkup/#comments
tags:
  - formal-verification
  - signal
  - deepmind
  - cryptography
  - ai-agents
  - security
  - news
why_read: >-
  The original is a short, useful check on what AI-assisted formal verification has actually shown
  so far, and on the open questions of cost and scale.
rank: 11
interest_score: 6.7
depth_score: 6
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Google DeepMind researchers used an agentic AI framework, AlphaProof Code, to formally verify several of the Signal protocol's key cryptographic guarantees. The work was a proof-of-concept that took four weeks. It found no new vulnerabilities in the portions examined. Run against older Signal versions with known, long-fixed flaws, it flagged them and showed those versions could not be verified.

The scope is limited. The analysis did not cover the whole Signal mobile app. DeepMind also had a head start from earlier formal verification work by the Signal Foundation, which covered smaller portions of the code. The specification and proof are being released to help others working on formal verification.

The practical question is cost and scale. Writing the specification and turning it into formulas was slow work before AI, and agents mainly cut the time spent on proofs. DeepMind did this free as research and Google declined to give a cost. It also would not say whether a commercial verification product is planned.

The researchers describe a human-AI process where agents contribute and self-correct at most stages, with human review at key points. They say they want to avoid AI writing both the goals and the proofs. Their own scientist says there is a long way to go before this scales.
