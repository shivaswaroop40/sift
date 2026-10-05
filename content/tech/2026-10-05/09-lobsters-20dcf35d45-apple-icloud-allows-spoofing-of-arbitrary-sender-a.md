---
id: 20dcf35d45
title: Apple iCloud allows spoofing of arbitrary sender addresses through header parsing quirks
original_title: "From: anyone@icloud.com - Spoofing Arbitrary Apple iCloud Identities"
url: >-
  https://sec-consult.com/blog/detail/from-anyoneicloudcom-spoofing-arbitrary-apple-icloud-identities/
source: Lobsters
kind: community
section: security
date: "2026-10-05"
published_at: "2026-10-05T06:50:55.000Z"
authors:
  - sec-consult.com via ni5arga
  - sec-consult.com via ni5arga
comments: https://lobste.rs/s/jpwrmk/from_anyone_icloud_com_spoofing
tags:
  - email-security
  - smtp
  - spoofing
  - parsing-quirks
  - apple
  - vulnerability
  - community
why_read: >-
  Learn how email spoofing remains possible despite 2024 patches, and why header parsing remains a
  weak point in SMTP infrastructure.
rank: 9
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Researchers discovered two email spoofing vulnerabilities in Apple iCloud's SMTP implementation. Rather than exploiting traditional SMTP smuggling techniques that most providers patched in 2024, the attack uses header smuggling to inject forged From headers that Apple's parser accepts but downstream systems interpret differently.

Apple blocks naive From header changes with an authentication check, verifying the sender owns the address. However, the researchers found that certain malformed line breaks in the message data allow the From header to be smuggled past Apple's validation, while remaining intact for the receiving mail server to process.

The vulnerability exploits parsing discrepancies similar to earlier SMTP smuggling attacks. Different implementations interpret bare carriage returns or line feeds differently from the standard CRLF sequence, creating windows for header injection between Apple's outbound SMTP and inbound servers.
