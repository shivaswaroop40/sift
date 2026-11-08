---
id: 95a76befb5
title: Apiiro links Claude Code's 'Don't Ask Again' to secrets in 1,122 public GitHub files
original_title: Claude Code's "Don't Ask Again" exposes passwords in 1,122 public GitHub files
url: https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-08"
published_at: "2026-11-07T20:45:32.000Z"
authors:
  - shmulc
comments: https://news.ycombinator.com/item?id=50407882
tags:
  - claude-code
  - secrets
  - github
  - security
  - coding-agents
  - community
why_read: The Apiiro post explains how the exposure happens and what it found across the 1,122 files.
rank: 1
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Apiiro, a security firm, says it found passwords and other secrets in 1,122 public files on GitHub, and attributes the exposure to Claude Code's 'Don't Ask Again' option. That setting stops the tool asking for confirmation before it acts. The blog post drew 423 points and 287 comments on Hacker News, indicating wide interest among practitioners.

For anyone running coding agents against real repositories, this is the failure mode to plan for. An agent that writes and commits without a human confirming each step can push credentials to a public remote. The finding is a reason to check what your agent may do silently, and whether secret scanning runs before anything leaves the machine.

Only the headline is available here, so the mechanism, the search method and any remediation advice sit in the original. It is also vendor research from a security company, so the 1,122 figure is its claim rather than an independently verified count.
