---
id: 939bc68c32
title: Flash chip flaws let attackers roll back fTPM lockout and brute-force Windows Hello PINs
original_title: "Hello Again: Exploiting Replay Protected Monotonic Counters to Brute-Force Windows Hello PINs"
url: https://arxiv.org/abs/2611.18126
source: arXiv cs.CR
kind: paper
section: vulnerabilities
date: "2026-11-16"
published_at: "2026-11-16T05:00:00.000Z"
authors:
  - Christian Werling
  - Matti Finder
  - Hans Niklas Jacob
  - Julian Prein
  - Niclas K\"uhnapfel
  - Jean-Pierre Seifert
comments: null
tags:
  - windows-hello
  - tpm
  - bitlocker
  - rpmc
  - hardware-attack
  - fault-injection
  - paper
why_read: >-
  The paper gives the attack details and timings that show how far physical access can undermine
  Windows Hello and BitLocker PIN protections on fTPM systems.
rank: 2
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Researchers analysed Replay Protected Monotonic Counters (RPMC), which protect firmware TPM state stored in SPI flash on modern x86 machines. Using low-cost interposer hardware, they found Winbond flash leaks its HMAC key under voltage glitching, allowing counter forgery. AMD's NV controller also does not verify RPMC increments, so an interposer can suppress them unnoticed.

Either flaw lets an attacker roll back the fTPM's non-volatile state, including lockout counters. On locked, encrypted hardware, the team recovered a 4-digit Windows Hello PIN in 40 hours instead of 69 days. The same primitive cut the worst-case time for a default 6-digit BitLocker TPM+PIN protector from 19 years to 20 days.

This matters because short PINs are only acceptable when the TPM's anti-hammering holds. A recovered PIN also grants access to device-bound keys and Hello-based enterprise SSO. The rollback affects AMD, Intel and Pluton fTPMs. Attacks need physical access and hardware on the SPI bus, so this is a lost or stolen device risk.

The authors also report that on two AMD desktops without RPMC flash, simply reflashing an old image reset the fTPM lockout counters. This suggests those platforms lack NV rollback protection altogether. The abstract does not say how many devices are affected overall.
