---
id: 6d0b29469d
title: eMudhra blames buggy Python key-handling script for single-byte CA private keys
original_title: Disgraced former CA eMudhra blames buggy script for hopelessly weak certificates
url: >-
  https://www.theregister.com/security/2026/11/12/disgraced-former-ca-emudhra-blames-buggy-script-for-hopelessly-weak-certificates/5309244
source: The Register
kind: news
section: security
date: "2026-11-12"
published_at: "2026-11-12T04:22:18.000Z"
authors:
  - Simon Sharwood
comments: null
tags:
  - pki
  - tls
  - certificate-authority
  - hsm
  - key-management
  - emudhra
  - news
why_read: >-
  The Register piece gives the account of how a key migration between HSM vendors went wrong, and
  shows what a basic check on generated keys would have caught.
rank: 10
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

eMudhra, an Indian certification authority that has left the TLS business, says a custom Python script caused its weak keys. At a ceremony on 30 April 2025, sixteen subordinate CA key pairs were generated on an HSM, then put through a wrap/unwrap round trip. The import code truncated the private value, so the public keys matched tiny scalars that can be recovered from public information.

The company aimed for eight ECDSA P-384 keys, each 48 bytes long. The report says it effectively kept one byte and ignored 47, which produced keys such as the number four. eMudhra says the script ran on an isolated ceremony host and was not part of its emCA software.

The script existed because supply chain constraints meant eMudhra could not get the HSMs it wanted for US certificates. It generated keys on Utimaco devices and planned to move them to Crypto4A HSMs. A policy change on certificate provenance meant it had to produce new certificates by the end of May.

The errors went unnoticed because the company did not test the keys it created. A Mozilla team member found the weakness, and browser makers then stopped trusting eMudhra certificates. The company says it will wind down its certification business and act on an independent review.
