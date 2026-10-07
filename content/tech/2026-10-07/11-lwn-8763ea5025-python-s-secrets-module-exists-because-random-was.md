---
id: 8763ea5025
title: Python's secrets module exists because random was never safe for cryptography
original_title: "[$] Python's two modules for random numbers"
url: https://lwn.net/Articles/1097468/
source: LWN
kind: news
section: security
date: "2026-10-07"
published_at: "2026-10-06T15:02:09.000Z"
authors:
  - jake
comments: null
tags:
  - python
  - cryptography
  - security
  - secrets
  - news
why_read: Understand why Python has two random modules and when to use each one.
rank: 11
interest_score: 7.7
depth_score: 8
novelty_score: 6
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Python has two modules for random values: random and secrets. The random module is unsuitable for generating passwords and security tokens, yet was widely used for this purpose for years despite documentation warnings. In 2016, Python 3.6 added the secrets module as the correct choice for cryptographic operations.

Developers building distributed systems or security-critical services must use secrets, not random, for tokens and keys. Using random leaves authentication and authorisation mechanisms predictable to an attacker. The split design means the wrong choice remains easy to make.
