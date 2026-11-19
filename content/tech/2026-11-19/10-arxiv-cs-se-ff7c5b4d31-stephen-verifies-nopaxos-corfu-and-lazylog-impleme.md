---
id: ff7c5b4d31
title: Stephen verifies NOPaxos, Corfu and LazyLog implementations and finds a committed-request loss bug
original_title: "Stephen: Verifying Sequencer-Aided Coordination Systems with Cross-View Prophecy"
url: https://arxiv.org/abs/2611.23811
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-11-19"
published_at: "2026-11-19T05:00:00.000Z"
authors:
  - Jinkun Geng
  - Muhammad Haseeb
  - Daniel Qian
  - Joseph Tassarotti
  - Shuai Mu
  - Anirudh Sivaraman
comments: null
tags:
  - formal-verification
  - distributed-systems
  - consensus
  - linearizability
  - nopaxos
  - corfu
  - paper
why_read: >-
  Read it for the mechanism that makes sequencer-based protocols verifiable across view changes, and
  for details of the bugs found in existing implementations.
rank: 10
interest_score: 7
depth_score: 8
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Stephen is a verification framework for sequencer-aided coordination (SAC) systems, where a dedicated sequencer orders requests and replicas commit them in that order. The authors extend prophecy variables so a proof can place a request's linearization point at the sequencer and still survive view changes. They call the technique cross-view prophecy peek.

The problem is that the sequencer orders a request before any replica commits it. A crash or other rare event can trigger a view change that discards the request, which invalidates a proof built on the earlier ordering. Cross-view prophecy peek lets the proof follow the request across views until it is committed or permanently discarded.

The authors applied Stephen to NOPaxos, Corfu and LazyLog and built implementations with machine-checked linearizability proofs. Verification found bugs in existing SAC implementations, including one that can lose committed requests. They fixed these and proved the fixes correct.

The verified implementations run within 17% of their open-source, unverified counterparts. The code and proofs are described as going to be open-sourced, so they are not yet available. This is an abstract, so the performance claim and bug details are unchecked here.
