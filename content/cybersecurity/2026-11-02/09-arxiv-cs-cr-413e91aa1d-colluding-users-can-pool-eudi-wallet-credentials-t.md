---
id: 413e91aa1d
title: Colluding users can pool EUDI Wallet credentials to fool relying parties
original_title: >-
  Fooling Relying Parties of the EUDI Wallet Architecture: Credential Pooling Attacks and CRESTA, a
  Standard-Compliant Countermeasure
url: https://arxiv.org/abs/2610.41655
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-11-02"
published_at: "2026-11-02T05:00:00.000Z"
authors:
  - Leonardo Rufini
  - Ivan Visconti
comments: null
tags:
  - eudi-wallet
  - credential-pooling
  - digital-identity
  - unlinkability
  - cresta
  - paper
why_read: >-
  You get the full attack mechanics against the Commission's reference implementation and the CRESTA
  design, a standard-compliant fix costing one extra signature check per presentation.
rank: 9
interest_score: 6.3
depth_score: 7
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

Researchers describe credential pooling attacks against the EUDI Wallet reference architecture. Colluding users, each holding some credentials in their own wallet, cooperate through a proxy that acts as a single synthetic user. The proxy presents all the requested credentials even though no single user holds them all. Every signature is genuine and computed by certified hardware, and nothing is extracted or forged. The attack was run against the European Commission's reference implementation, including on two Android phones.

For relying parties, a combined presentation no longer implies a single holder, and signature checks give no warning because every credential is genuine. The root cause sits in the Architecture and Reference Framework (ARF). It requires a fresh key for each credential and recommends batches of single-use copies, each with its own key, to protect unlinkability. One shared key would stop pooling, but colluding relying parties could then link all of a user's presentations.

The paper also presents CRESTA, a countermeasure built only from standard cryptography and credential formats. At issuance, an ordinary issuer checks that a set of keys was generated in the same secure hardware, then certifies this in a binding attestation, a standard credential whose attributes can be selectively disclosed. CRESTA preserves unlinkability, works within the EUDI Wallet framework, and costs a relying party one additional signature verification per presentation.
