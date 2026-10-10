---
id: e46bfaa425
title: >-
  Malicious GitHub Actions workflows planted in over 340 repositories via compromised maintainer
  accounts
original_title: Credential-Stealing GitHub Actions Workflows Planted in Tens of Thousands of Repositories
url: https://thehackernews.com/2026/10/credential-stealing-github-actions.html
source: The Hacker News
kind: news
section: incidents
date: "2026-10-10"
published_at: "2026-10-09T19:14:28.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - github-actions
  - supply-chain
  - credential-theft
  - open-source
  - account-compromise
  - news
why_read: >-
  Understand how attackers exploit compromised maintainer accounts to inject credential stealers
  into shared infrastructure at scale.
rank: 2
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Attackers compromised at least two high-profile open-source maintainer accounts and used them to push malicious GitHub Actions workflows into more than 340 repositories. One attack used the account of Takashi Kitao, author of the 18,400-star pyxel game engine, to inject workflows into 27 repositories starting at 13:20 UTC.

The workflows are designed to steal credentials and secrets stored in GitHub environment variables and secrets stores. Any developer or CI/CD pipeline running these workflows would expose authentication tokens, API keys, and deployment credentials to the attacker.

The attack demonstrates a supply-chain risk endemic to open-source ecosystems. Compromised maintainer accounts grant direct access to publish code that runs in the build pipelines of downstream projects and organisations that depend on these repositories.

The campaign remains ongoing. Defenders should audit GitHub Actions workflows in their own repositories and monitor for unexpected workflow additions or modifications, particularly in dependencies.
