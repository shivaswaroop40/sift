---
id: dcb377c3d1
title: No safe rule for undoing locks on FastPay-style shared balances, paper proves
original_title: Resource Locks and Fast Unlock for Shared Balances in Certificate-Based Payment Systems
url: https://arxiv.org/abs/2610.41207
source: arXiv cs.DC
kind: paper
section: systems
date: "2026-11-02"
published_at: "2026-11-02T05:00:00.000Z"
authors:
  - Lingkang Shangguan
comments: null
tags:
  - fastpay
  - consensus
  - distributed-ledgers
  - stablecoins
  - shared-balances
  - paper
why_read: >-
  You get the proof that no lock-release rule is safe without visible certificate formation, plus a
  hybrid protocol that scopes consensus to contended versions.
rank: 8
interest_score: 6
depth_score: 7
novelty_score: 6
utility_score: 5
scored: true
model: glm-5.3
---

A new paper examines certificate-based payment systems such as FastPay, which settle a payment with one round of quorum signatures and no global ordering. This client-driven design is complete only while no lock is ever undone. With one writer per account, a conflict implies that writer's misbehaviour, and the account stays locked as the penalty. For shared balances, honest accounts race and a privately held quorum certificate can be silently overridden. The authors prove no rule for undoing locks is safe unless certificate formation is visible to validators.

Shared balances are routine in stablecoin payments, covering treasuries, merchant pools, allowances and subscriptions. The result matters for anyone operating or building on a FastPay-style ledger. No after-the-fact rule for releasing locks can fix the problem, because safety requires validators to see certificate formation. That rules out a family of patches and forces a protocol change.

The proposed hybrid protocol keeps personal accounts on the unchanged FastPay path. A shared resource is a balance with its own version number and a set of authorised accounts. Transactions on shared resources go to any validator and are certified by a two-phase broadcast, ECHO then READY. Admission requires both the sender's nonce and the resource's nonce to be free. Without contention, this path needs no consensus.

When concurrent debits split the votes in any proportion, validators detect the split themselves, freeze the affected resource version, and resolve it with one agreement instance scoped to that version. Losing transactions return their sender nonce. The authors prove consistency, no overdraft, validity, finality and liveness. The protocol also composes with the PDCC reconfiguration protocol.
