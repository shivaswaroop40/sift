---
id: 332b0318dc
title: GitLab patches maximum-severity code execution flaw in CI/CD pipeline
original_title: GitLab Patches CVSS 10.0 Flaw That Could Let Unauthenticated Users Run Server Code
url: https://thehackernews.com/2026/10/gitlab-patches-cvss-100-flaw-that-could.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-13"
published_at: "2026-10-13T08:43:37.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - gitlab
  - rce
  - ci-cd
  - authentication-bypass
  - patch
  - news
why_read: Learn the technical vector and patch status for this critical GitLab vulnerability.
rank: 6
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

GitLab has released patches for a CVSS 10.0 vulnerability affecting both Community and Enterprise editions. The flaw allows unauthenticated users to execute arbitrary code on the GitLab server through a specially crafted regular expression in a CI/CD pipeline, under certain conditions.

This is a critical threat to any production GitLab deployment. An attacker needs no credentials to trigger remote code execution, gaining full control of the server and potentially the entire CI/CD infrastructure. Patching is mandatory and urgent.
