---
id: a771d7f6d8
title: Google researcher bypasses Windows code integrity through .NET file loading quirk
original_title: Google Researcher Shows How a Single Bit Change in .NET Files Bypassed Windows Code Integrity
url: https://thehackernews.com/2026/11/google-researcher-shows-how-single-bit.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-24"
published_at: "2026-11-24T12:02:00.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - dotnet
  - windows
  - code-integrity
  - project-zero
  - virtualbox
  - cve-2026-87268
  - news
why_read: >-
  Read the original for Forshaw's technical account of the loading behaviour and the full list of
  affected protections, which the excerpt here does not complete.
rank: 6
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Google Project Zero researcher James Forshaw showed that a quirk in how the .NET Framework loads a program file let a local attacker run untrusted code past two separate Windows protections built to block it. The write-up was published yesterday.

The same loading behaviour also bypassed Oracle VirtualBox's process hardening on Windows hosts, tracked as CVE-2026-87268. A second bypass affected Windows code integrity, but the source text is cut off before its identifier and further detail.
