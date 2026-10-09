---
id: 838252c8fb
title: Shai-Hulud worm infects Tensorlake AI SDK, stealing credentials before npm removal
original_title: Shai-Hulud worm makes jump to AI infrastructure with Tensorlake compromise
url: >-
  https://www.theregister.com/security/2026/10/08/shai-hulud-worm-makes-jump-to-ai-infrastructure-with-tensorlake-compromise/5302054
source: The Register
kind: news
section: security
date: "2026-10-09"
published_at: "2026-10-08T16:54:48.000Z"
authors: []
comments: null
tags:
  - malware
  - supply-chain
  - ai-infrastructure
  - npm
  - credentials
  - build-security
  - news
why_read: >-
  Understand how supply-chain worms now target AI infrastructure and what the installation-time
  attack surface means for your build pipelines.
rank: 12
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

The Shai-Hulud credential-stealing worm appeared in Tensorlake's npm package version 0.5.144, downloaded roughly 12,000 times per week. Security researchers detected the infection 11 minutes after publication. npm and Tensorlake removed the malicious version within hours.

The worm steals crypto wallets, browser passwords, GitHub tokens, cloud credentials and service-account tokens, then maintains a connection to command-and-control infrastructure. Because Tensorlake's SDK installation script runs outside the platform's sandbox, the malware executes with full developer machine or build server permissions before any AI code runs.

This variant monitors stolen GitHub tokens and can delete the infected user's home directory if a token is revoked, complicating removal. Researchers recommend rebuilding systems from trusted sources and disabling the token monitor before revoking credentials.
