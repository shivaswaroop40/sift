---
id: 28346a6e35
title: OpenJDK's AVX-512 Base64 decoder has a critical memory-corruption flaw
original_title: "Java4Shell: RCE in OpenJDK when processing Base64"
url: https://calif.io/java4shell/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-18"
published_at: "2026-11-17T21:11:28.000Z"
authors:
  - werrett
comments: https://news.ycombinator.com/item?id=50538240
tags:
  - java
  - openjdk
  - rce
  - memory-corruption
  - base64
  - cve
  - community
why_read: >-
  Read it for the exact trigger string, the list of default-config RCE targets, and the case for
  using AI to strip unneeded code rather than add features.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5
---

Researchers at Calif disclosed CVE-2026-114938, a buffer overflow in OpenJDK's hardware-accelerated Base64 decoder. A crafted input as short as 64 'A' characters followed by '=' triggers a miscalculated negative length, causing a 64-byte write that overruns a 50-byte allocated array by 62 bytes. CVSS 4.0 score is 9.2.

The bug lives in hand-rolled AVX-512 VBMI assembly used to speed up Base64 decoding on x86-64, not in managed Java code, so Java's usual memory-safety guarantees don't apply. Researchers demonstrated pre-auth RCE in default configs of Keycloak, Jira, Confluence, Artifactory, Jenkins and PingFederate, and post-auth RCE in Kafka, Solr, Elasticsearch, Gerrit and Spinnaker, plus a client-side exploit triggered just by opening a TLS connection.

The researchers used AI heavily: one researcher found the bug in an hour and had a working exploit within three hours, for under $200 in tokens. No universal exploit exists since exploitation details depend on how each application uses Base64, but the authors say later exploit chains were built largely autonomously by AI agents.
