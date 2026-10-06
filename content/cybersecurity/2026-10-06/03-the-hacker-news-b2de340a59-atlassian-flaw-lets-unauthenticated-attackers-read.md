---
id: b2de340a59
title: Atlassian flaw lets unauthenticated attackers read known files across eight products
original_title: Critical Atlassian Flaw Lets Unauthenticated Attackers Read Known Files Across 8 Products
url: https://thehackernews.com/2026/10/critical-atlassian-flaw-lets.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-06"
published_at: "2026-10-06T06:58:56.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - atlassian
  - path-traversal
  - unauthenticated
  - data-center
  - cve-2026-21589
  - news
why_read: >-
  Understand the scope and mechanics of this high-severity Atlassian flaw affecting self-hosted
  deployments.
rank: 3
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

A critical vulnerability in eight Atlassian Data Center products allows unauthenticated attackers to read specific files in each product's web root directory. The attacker must know the exact file name and path beforehand and cannot enumerate the directory. Atlassian assigned CVE-2026-21589 a CVSS score of 9.3.

This affects self-hosted Atlassian deployments. The attack requires prior knowledge of target file names, limiting opportunistic exploitation but creating risk where attackers have partial intelligence about application structure or configuration.

The vulnerability affects multiple Atlassian products but concrete details on which products and remediation status are incomplete in this summary.
