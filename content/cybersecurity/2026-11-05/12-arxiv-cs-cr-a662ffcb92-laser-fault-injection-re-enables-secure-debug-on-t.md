---
id: a662ffcb92
title: Laser fault injection re-enables Secure debug on the RP2350 and recovers a 128-bit secret
original_title: >-
  Shoot on (Core)Sight: Re-enabling Secure Debug on the RP2350 with Photon-Emission Microscopy and
  Laser Fault Injection
url: https://arxiv.org/abs/2611.06386
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-11-05"
published_at: "2026-11-05T05:00:00.000Z"
authors:
  - Antoine Plin
comments: null
tags:
  - rp2350
  - laser-fault-injection
  - secure-debug
  - hardware-security
  - photon-emission-microscopy
  - paper
why_read: >-
  Read it for the PEM-guided laser scan, the two DEBUGEN fault sites, and the SWD feedback loop that
  restores sustained debug access.
rank: 12
interest_score: 6.7
depth_score: 8
novelty_score: 8
utility_score: 4
scored: true
model: glm-5.3
---

A paper on the RP2350A4 demonstrates that fault-resistant policy storage does not guarantee fault-resistant enforcement. The authors used differential photon-emission microscopy to narrow the region for laser scanning. Laser fault injection then found two sites where pulses set the DEBUGEN bits, enabling Secure debug on core 1. An online sequence using only Serial Wire Debug feedback restored sustained access. After a rescue reset, the sequence recovered a 128-bit test secret.

The result matters to anyone relying on the RP2350's debug restrictions to protect on-chip secrets. The rescue reset reloads the secret's runtime page lock from the stored policy. That policy permits Secure reads and prevents user firmware from tightening the lock. Once Secure debug is faulted on, nothing in the page lock stops the secret being read.

Both photon-emission microscopy and laser fault injection are physical, chip-level techniques that need specialist laboratory equipment. The attack therefore requires hands-on access to the part and is not remote or scalable. The recovered value was a 128-bit test secret rather than a production key.
