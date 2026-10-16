---
id: 5f961ec50b
title: Cloudflare adds programmable Workers to its web gateway policy engine
original_title: A fully programmable secure web gateway
url: https://blog.cloudflare.com/programmable-gateway-dlp/
source: Cloudflare Blog
kind: blog
section: infrastructure
date: "2026-10-16"
published_at: "2026-10-15T17:11:12.000Z"
authors:
  - AJ Gerstenhaber
comments: null
tags:
  - gateway
  - workers
  - sase
  - policy-engine
  - edge-compute
  - blog
why_read: >-
  Learn how this shifts the security infrastructure trade-off between customization and maintenance
  burden.
rank: 10
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Cloudflare is integrating its Workers edge compute platform directly into Gateway and DLP policy evaluation. A new Forward action and custom validation functions let customers run their own code inline when security decisions are made, eliminating the need for separate infrastructure.

Security teams have long faced a binary choice: build and maintain custom infrastructure for specific policies, or accept vendor constraints. Teams currently work around Gateway limitations by deploying NGINX proxies for header transformation, building Logpush-to-SIEM pipelines for notifications, or standing up separate systems for dynamic responses.

Only Cloudflare runs both distributed compute and a gateway on the same infrastructure globally. Workers and Gateway dispatch is a local function call with no latency penalty, unlike standalone SASE vendors that require separate cloud deployments and webhook coordination.
