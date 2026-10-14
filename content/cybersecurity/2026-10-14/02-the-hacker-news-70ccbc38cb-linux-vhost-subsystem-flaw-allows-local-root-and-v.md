---
id: 70ccbc38cb
title: Linux vhost subsystem flaw allows local root and virtual machine escape
original_title: AI-Found Linux Kernel Flaw Gives Local Users Root, and Can Break a Guest Out to the Host
url: https://thehackernews.com/2026/10/ai-found-linux-kernel-flaw-gives-local.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-14"
published_at: "2026-10-14T07:46:57.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - kernel
  - privilege-escalation
  - vm-escape
  - vhost
  - cve-2026-74580
  - linux
  - news
why_read: >-
  Understand the scope and attack path of a high-impact kernel vulnerability affecting isolation and
  privilege separation.
rank: 2
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

A vulnerability in Linux's vhost subsystem, tracked as CVE-2026-74580, allows local users to read and write kernel memory arbitrarily and gain root access. The flaw affects kernel versions spanning nearly a decade. In virtualisation setups, an untrusted guest virtual machine can write to host memory and compromise the hypervisor process.

For platform engineers, this represents a direct threat to container and VM isolation boundaries. Local escalation to root breaks the fundamental security model of multi-tenant systems. Guest-to-host escape is particularly critical for cloud providers and anyone running untrusted workloads.

The vulnerability was discovered by Tencent Zhuque Lab, suggesting the flaw lay undetected across multiple kernel versions and distributions until systematic analysis uncovered it.
