---
id: e68566283d
title: A leaked GitLab issue email address lets anyone push code and run CI as you
original_title: A Leaked GitLab Issue Email Address Lets Anyone Push Code and Run CI Jobs as You
url: https://thehackernews.com/2026/09/a-leaked-gitlab-issue-email-address.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-24"
published_at: "2026-09-23T16:53:10.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - gitlab
  - secret-management
  - ci-cd
  - source-code
  - credentials
  - supply-chain
  - news
why_read: >-
  You'll see why an address you may not have thought of as sensitive is effectively a push and
  pipeline token, and what to check in your own setup.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

GitLab provides each user with a private email address for creating issues by email, and the address acts as a credential. Anyone who learns it can email in a patch that GitLab applies to any branch the user can push to, including main.

The same address can be used to trigger CI/CD jobs that run with the user's identity, which means a stolen or leaked address gives an attacker commit access and the ability to execute pipelines.

GitLab surfaces the address behind an 'Email work item to this project' button. Users typically do not treat an inbox address as a secret the way they treat an API token.

The practical risk is that the address may appear in mail logs, support tickets, screenshots, or scraped public data, after which an attacker can act as that user.
