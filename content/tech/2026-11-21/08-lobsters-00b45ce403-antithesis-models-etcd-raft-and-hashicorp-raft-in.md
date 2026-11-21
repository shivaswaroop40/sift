---
id: 00b45ce403
title: Antithesis models etcd-raft and HashiCorp Raft in TLA+ and proves core safety properties
original_title: Verifying formal models of Raft implementations
url: https://antithesis.com/blog/2026/verifying-formal-models/
source: Lobsters
kind: community
section: papers
date: "2026-11-21"
published_at: "2026-11-20T21:54:45.000Z"
authors:
  - antithesis.com via a4j
  - antithesis.com via a4j
comments: https://lobste.rs/s/4qcr3k/verifying_formal_models_raft
tags:
  - raft
  - tla-plus
  - formal-verification
  - etcd
  - distributed-systems
  - antithesis
  - community
why_read: >-
  The original shows how trace validation ties a TLA+ model to running code, and it links both
  specifications so you can check the claims yourself.
rank: 8
interest_score: 6.7
depth_score: 7
novelty_score: 6
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Antithesis used an AI model to infer TLA+ specifications from the etcd-raft and HashiCorp Raft codebases, then checked them with TLC, trace validation and proof attempts. Safety properties came from the Raft paper: Election Safety, Log Matching, Leader Completeness and State Machine Safety. The scope covers pre-votes, snapshots and leadership transfers, plus read indexes, async storage writes and membership changes for etcd-raft only.

To link model and code, they ran the software under Antithesis fault injection and had it emit structured log events matching TLA+ transitions. Any non-conformant trace was flagged as a bad instrumentation, a modelling error or a real bug. An AI agent triaged these and iterated. They report patching bugs and refining the model until it was provable and every run conformed.

The claim is narrow. Proofs cover only the modelled features, and the state machine itself is not modelled. Model checking used small bounds: usually three nodes, one client value, a couple of terms and short logs. Humans still chose which features to include, which scenarios to check, and made one refinement to the generated properties.

The authors say the result holds only once workarounds and fixes were applied. The source text is truncated before it lists the bugs found, so their number and severity are unclear here. The artifacts are published for open review.
