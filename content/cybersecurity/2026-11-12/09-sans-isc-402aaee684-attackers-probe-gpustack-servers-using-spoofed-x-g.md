---
id: 402aaee684
title: Attackers probe GPUStack servers using spoofed X-Gpustack-Real-IP header to bypass authentication
original_title: Exploit Attempts for GPUStack Authentication Bypass (CVE-2026-102895), (Thu, Nov 12th)
url: https://isc.sans.edu/diary/rss/33514
source: SANS ISC
kind: blog
section: vulnerabilities
date: "2026-11-12"
published_at: "2026-11-12T11:56:24.000Z"
authors: []
comments: null
tags:
  - gpustack
  - cve-2026-102895
  - authentication-bypass
  - header-spoofing
  - ai-infrastructure
  - exploitation
  - blog
why_read: >-
  The post gives the exact header, the scanner IP and the paths probed, so you can check logs and
  confirm whether any GPUStack instance runs a version before 2.2.0.
rank: 9
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

SANS ISC reports exploit attempts against CVE-2026-102895, an authentication bypass in GPUStack, open-source software for managing GPU clusters that run AI workloads. All versions before 2.2.0, released at the end of June, are affected. The flaw was made public at the end of July and the CVE was assigned on 4 November.

The bug is a trusted-header problem. GPUStack reads X-Gpustack-Real-IP to work out the client address. If the header says 127.0.0.1, it treats the request as local and skips authentication. An attacker only has to send the header. The observed request is a plain GET to the root path with that header set.

The scanning traffic comes from 144.91.73.103. In recent days the same address also requested AI-related paths: /v1/models, /v1beta/models?key=x, /v1/messages and /models. That suggests broader hunting for exposed AI endpoints, not only GPUStack. The post does not report any successful compromise.
