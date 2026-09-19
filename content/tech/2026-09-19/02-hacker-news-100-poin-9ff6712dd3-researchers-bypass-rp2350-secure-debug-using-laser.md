---
id: 9ff6712dd3
title: Researchers bypass RP2350 secure debug using laser fault injection
original_title: Photon-Emission-Guided Laser Fault Injection Enables RP2350 Secure Debug
url: https://donjon.ledger.com/blog/rp2350-secure-debug-laser-fault-injection/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-19"
published_at: "2026-09-18T16:54:18.000Z"
authors:
  - synack
comments: https://news.ycombinator.com/item?id=49757050
tags:
  - security
  - hardware
  - rp2350
  - fault-injection
  - raspberry-pi
  - secure-boot
  - community
why_read: >-
  You will see how a missing-redundancy oversight in a five-bit debug register breaks an otherwise
  layered security model.
rank: 2
interest_score: 8.3
depth_score: 9
novelty_score: 9
utility_score: 7
scored: true
model: minimax-m3
---

Ledger Donjon researchers used photon-emission microscopy to locate a register that controls secure debug on the Raspberry Pi RP2350 microcontroller, then set its bits with targeted laser pulses despite the permanent debug-disable flag.

The register, DEBUGEN, has no documented redundancy or majority vote, unlike the OTP security fields it is supposed to override. Two adjacent laser spots were enough to re-enable a core's memory access port with Secure attribution, even with secure boot and glitch detectors at maximum sensitivity enabled.

After a rescue reset that halts the chip before firmware applies its runtime lock, the team read a 128-bit secret from one-time-programmable memory that should have been locked. The attack needs physical access, destructive decapsulation, and roughly $250,000 of laboratory gear.

The work targets the A4 stepping released after the first RP2350 hacking challenge and shows that a single non-redundant register can undermine a security architecture built around OTP-enforced locks.
