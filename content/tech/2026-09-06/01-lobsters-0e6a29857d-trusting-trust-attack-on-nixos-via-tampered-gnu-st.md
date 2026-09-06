---
id: 0e6a29857d
title: Trusting-trust attack on NixOS via tampered GNU strip, not a compiler
original_title: Trusting-Trust Attack against an Entire Linux Distribution (via the strip utility)
url: https://arxiv.org/abs/2607.24888
source: Lobsters
kind: community
section: security
date: "2026-09-06"
published_at: "2026-09-05T10:58:49.000Z"
authors:
  - arxiv.org via MarkMLl
  - arxiv.org via MarkMLl
comments: https://lobste.rs/s/p5w5j6/trusting_trust_attack_against_entire
tags:
  - supply-chain
  - trusting-trust
  - nixos
  - elf
  - binary-security
  - bootstrapping
  - community
why_read: >-
  It reframes a 40-year-old supply-chain threat as a binary-tooling problem and shows it working end
  to end on a real distribution.
rank: 1
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A preprint from KTH and Télécom Paris shows that Ken Thompson's classic trusting-trust attack need not involve a compiler. The authors build a full self-propagating backdoor around GNU strip, an ordinary binary post-processor, by only manipulating finished ELF files. In a real nixpkgs revision, a single tampered strip in the binary seed implants a payload that survives across rebuilds and persists after strip leaves the dependency closure.

The attack built a complete NixOS graphical installer without failures and backdoored almost every binary in its standard environment, giving an attacker arbitrary behaviour in subverted packages. Strip neither inspects nor generates source code, so the usual mitigations aimed at compilers do not apply. Practitioners who rely on reproducible bootstraps or binary seeds need to widen the threat model beyond cc and gcc.

The work is a paper, not a disclosure of an attack in the wild. The reproduction targets one NixOS revision and one seed, so the generality across distributions is not yet demonstrated.
