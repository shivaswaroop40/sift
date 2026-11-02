---
id: 6f6658613d
title: Study finds 4.6 million malicious EIP-7702 delegations on Ethereum mainnet
original_title: Who Swept My ETH? Uncovering EIP-7702-Based Ether Redirection Attacks on Ethereum
url: https://arxiv.org/abs/2610.41153
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-11-02"
published_at: "2026-11-02T05:00:00.000Z"
authors:
  - Ziwei Li
  - Tianwei Chen
  - Jiajing Wu
  - Zigui Jiang
  - Yuhong Nan
  - Yaobo Huang
comments: null
tags:
  - ethereum
  - eip-7702
  - wallet-security
  - smart-contracts
  - transaction-analysis
  - paper
why_read: >-
  You get the first formal model of EIP-7702 redirection attacks, the SweeperHunter detection
  method, and proposed mitigations.
rank: 11
interest_score: 6.3
depth_score: 6
novelty_score: 8
utility_score: 5
scored: true
model: glm-5.3
---

Researchers have published the first formal analysis of an attack enabled by EIP-7702, the transaction type that lets externally owned accounts on EVM chains temporarily delegate execution to arbitrary contract code. In an EIP-7702-based Ether Redirection Attack, a victim is delegated to a malicious sweeper contract that automatically redirects incoming ETH transfers to an attacker-controlled address. They also built SweeperHunter, a framework that detects these attacks through transaction analysis.

Applied to the first ten months of EIP-7702 activity on Ethereum mainnet, the framework identified 4,668,209 malicious delegations, 20,443 attack transactions and 508 ETH sweeper contracts, forming the first dataset of this attack. Approximately 70 per cent of observed delegations pointed to sweeper contracts.

Over 600,000 accounts failed to revoke or update their malicious delegations and remain vulnerable. For teams running EOA wallets or payment flows on EVM chains, this means inbound ETH can be silently rerouted to an attacker. The paper analyses the attack from both attacker and victim perspectives and proposes mitigation strategies.
