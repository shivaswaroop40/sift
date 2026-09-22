---
id: 67d60463d8
title: Rust project warns crate maintainers of fake-recruiter malware campaign
original_title: Rustaceans warned of job interviews with a malicious payload
url: >-
  https://www.theregister.com/security/2026/09/21/rustaceans-warned-of-job-interviews-with-a-malicious-payload/5297690
source: The Register
kind: news
section: security
date: "2026-09-22"
published_at: "2026-09-21T10:33:00.000Z"
authors: []
comments: null
tags:
  - rust
  - supply-chain
  - social-engineering
  - crates-io
  - malware
  - north-korea
  - news
why_read: >-
  It maps a concrete social-engineering pattern hitting open source maintainers and shows how close
  a supply chain compromise has already come in the Rust ecosystem.
rank: 12
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

The Rust security team has warned crate owners and contributors that attackers are using plausible company profiles and recruitment calls to trick them into installing malware or running clipboard-planted commands. Engineer Adam Harvey said the tactics resemble North Korean fake-recruiter operations, with approaches conducted over video calls rather than email.

The campaign matters because Rust's supply chain depends on a relatively small pool of maintainers who publish code that is pulled into production systems worldwide. A single compromised account can ship malicious crates to downstream users, as happened in August when tampered versions of the arrayref crate, which had logged 245 million lifetime downloads, briefly served malware.

In a separate June incident, crate maintainer Matt Mastracci was approached by a fake Singaporean venture capital firm whose business turned out to be defunct, and only narrowly avoided a remote access trojan infection. The warning follows a multinational advisory linking North Korean operators to fake-interview schemes that have compromised more than 30,000 devices and stolen over $10 million.
