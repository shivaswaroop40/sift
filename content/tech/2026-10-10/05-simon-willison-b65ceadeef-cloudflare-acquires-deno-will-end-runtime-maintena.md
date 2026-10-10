---
id: b65ceadeef
title: Cloudflare acquires Deno, will end runtime maintenance after one year
original_title: Deno is joining Cloudflare
url: https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/
source: Simon Willison
kind: blog
section: infrastructure
date: "2026-10-10"
published_at: "2026-10-09T22:48:37.000Z"
authors: []
comments: null
tags:
  - deno
  - cloudflare
  - runtime
  - distributed-systems
  - javascript
  - workers
  - blog
why_read: >-
  Learn why the Deno creator is pivoting away from runtime competition and what abstraction he sees
  as more valuable.
rank: 5
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Cloudflare has acquired the Deno team and runtime. The company plans to integrate Deno's celld implementation, an open source version of Durable Objects, to make self-hosted workerd a supported way to build Workers applications. Deno will receive bug fixes and security updates for one year, then development will cease.

For platform teams using Deno, this signals an end-of-life timeline. Ryan Dahl argues that Deno's core value proposition—better Node.js compatibility and UX—is insufficient. The real innovation he wants to pursue is celld's model: distributed coordination through object storage rather than traditional file system and network abstractions.

Node.js added a permissions system in v20 that overlaps with Deno's long-standing feature, though it does not yet support granular network host allowlisting. Dahl sees celld and the Durable Objects pattern as a more fundamental shift in how server applications should be built.
