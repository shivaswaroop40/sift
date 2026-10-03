---
id: 2334c236c3
title: GitLab AI Gateway patches command execution flaw in self-hosted deployments
original_title: GitLab Patches Critical 9.9 AI Gateway Flaw Allowing Command Execution on Self-Hosted Servers
url: https://thehackernews.com/2026/10/gitlab-patches-critical-self-hosted-ai.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-03"
published_at: "2026-10-02T17:33:31.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - gitlab
  - ai-gateway
  - command-execution
  - self-hosted
  - critical
  - news
why_read: >-
  Learn which GitLab versions fix this command execution risk and whether your self-hosted gateway
  is exposed.
rank: 4
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

A critical vulnerability in GitLab's AI Gateway allows an authenticated user with Duo Agent Platform access to execute arbitrary commands on the gateway under certain conditions. GitLab released patches in versions 19.2.4, 19.3.2, and 19.4.1.

The AI Gateway connects GitLab instances to AI models. Only organisations running self-hosted gateways are affected. Attackers need existing user credentials and specific platform access to exploit this.
