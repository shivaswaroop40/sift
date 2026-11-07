---
id: b8972efb1e
title: Claude Code 'don't ask again' files expose secrets in 1,122 public GitHub repos
original_title: Claude Code's “Don't Ask Again” File Exposes Passwords and Keys in 1,122 Public Copies on GitHub
url: https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-11-07"
published_at: "2026-11-07T06:44:17.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - secrets
  - claude-code
  - github
  - api-keys
  - misconfiguration
  - news
why_read: >-
  You will get Apiiro's full findings on the exposed Claude Code settings files, which are cut off
  in this summary.
rank: 3
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Claude Code, Anthropic's AI coding assistant, can save an approved command word-for-word when a user picks 'Yes, and don't ask again'. If that command contained a password or API key, the secret is written into a project settings file. Security firm Apiiro said yesterday that 1,122 public copies of these files sit on GitHub, readable by anyone.

The exposure comes from a convenience feature rather than an attack. Developers approving a one-off command that contained a secret likely did not expect the full string to be persisted and committed. Treat any credential in these files as public and rotate it. Teams using AI coding assistants should search their repos for these settings files.

The available text is truncated mid-sentence. It does not name the settings file, explain how Apiiro found the copies, or give remediation steps. The figure of 1,122 public copies comes from the report and its headline, with no further detail available here.
