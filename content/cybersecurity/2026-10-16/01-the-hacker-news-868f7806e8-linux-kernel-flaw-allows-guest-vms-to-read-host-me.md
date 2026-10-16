---
id: 868f7806e8
title: Linux kernel flaw allows guest VMs to read host memory directly
original_title: Critical PwnEscape Linux Kernel Vulnerability Lets Guest VMs Read Host Memory
url: https://thehackernews.com/2026/10/critical-pwnescape-linux-kernel.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-16"
published_at: "2026-10-15T20:24:36.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - kernel
  - vm-escape
  - memory-leak
  - linux
  - cve
  - virtualisation
  - news
why_read: >-
  Understand a host-escape vulnerability affecting multi-tenant cloud infrastructure and what
  isolation assumptions you must reconsider.
rank: 1
interest_score: 9.3
depth_score: 9
novelty_score: 9
utility_score: 10
scored: true
model: claude-haiku-4-5-20251001
---

A critical vulnerability in the Linux kernel networking code, designated CVE-2026-99999 and called PwnEscape, permits code running inside a virtual machine to read arbitrary memory on the host system. The researcher demonstrated the attack against Vercel's production sandboxes, which Vercel has confirmed.

For platform engineers running multi-tenant infrastructure, this means guest isolation is broken at the hypervisor boundary. An attacker with code execution inside any container or VM can potentially exfiltrate secrets, credentials, or data belonging to other tenants on the same physical host.

Because the flaw is in the kernel networking subsystem rather than a specific cloud platform's configuration, it affects any Linux-based virtualisation setup relying on that kernel version. Patch status and affected kernel versions were not specified in the available text.
