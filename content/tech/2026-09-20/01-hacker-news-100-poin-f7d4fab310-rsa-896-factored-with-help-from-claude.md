---
id: f7d4fab310
title: RSA-896 factored with help from Claude
original_title: RSA-896
url: https://saweis.net/posts/rsa-896.html
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-20"
published_at: "2026-09-20T02:19:33.000Z"
authors:
  - madars
comments: https://news.ycombinator.com/item?id=49771966
tags:
  - rsa
  - cryptography
  - llm
  - factoring
  - security
  - community
why_read: >-
  You get the claimed factors of a historic RSA challenge number and a note on LLM-assisted
  factoring, in about ten lines.
rank: 1
interest_score: 8.3
depth_score: 9
novelty_score: 9
utility_score: 7
scored: true
model: minimax-m3
---

Stephen A. Weis reports factoring the 270-digit RSA-896 challenge number on 19 September 2026 using Claude. He publishes the full decimal integer alongside its two prime factors, p and q, with a timestamp of September 2026 on the post.

For practitioners, RSA-896 is an older challenge number from the RSA list, not a current recommended key length, so its factoring is symbolic rather than a break of deployed cryptography. The interesting detail is the use of an LLM as a working partner in the factoring process, which is the actual newsworthy part.

The post is short and shows only the claimed factors with no written-up method, timings, or tooling. Readers looking for the algorithm or the role Claude played will need to wait for more detail from the author.
