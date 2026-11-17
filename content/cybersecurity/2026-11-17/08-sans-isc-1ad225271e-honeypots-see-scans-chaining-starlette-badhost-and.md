---
id: 1ad225271e
title: >-
  Honeypots see scans chaining Starlette BadHost and LiteLLM flaws for unauthenticated code
  execution
original_title: Scans for LiteLLM/Starlette (CVE-2026-42271, CVE-2026-48710), (Mon, Nov 16th)
url: https://isc.sans.edu/diary/rss/33522
source: SANS ISC
kind: blog
section: vulnerabilities
date: "2026-11-17"
published_at: "2026-11-16T13:11:04.000Z"
authors: []
comments: null
tags:
  - litellm
  - starlette
  - cve-2026-42271
  - cve-2026-48710
  - honeypot
  - host-header
  - blog
why_read: >-
  You get the observed request and Host header variants, plus short guidance on building hostname
  filters that survive exploit tweaks.
rank: 8
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

SANS ISC honeypots began logging POST requests to /mcp-rest/test/tools/list over the weekend. They appear to target CVE-2026-42271 and CVE-2026-48710, which Horizon3.ai has described as chainable into unauthenticated remote code execution. The observed payload asks the server to run the command "id" over a stdio transport.

The root cause is in Starlette versions before 1.0.1, which do not validate the Host header. This is known as BadHost. Starlette builds a full URL from that header and uses it for access control. LiteLLM relies on this, so the normally authenticated MCP endpoint can be reached without credentials.

The attacker is varying the Host header with square brackets, apparently to evade filters written for the public proof of concept. Observed values include localhost], [localhost, 127.0.0.1] and litellm.proxy. Exploitation was first reported in July, so this is not a new flaw.

Ullrich advises writing filters against the vulnerability class, not one exploit. That means rejecting characters that cannot appear in a hostname, or allowing only known hostnames. Patching and reducing exposed attack surface remain the main defences.
