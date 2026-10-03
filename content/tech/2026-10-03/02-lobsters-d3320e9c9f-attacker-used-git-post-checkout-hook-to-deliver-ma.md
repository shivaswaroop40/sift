---
id: d3320e9c9f
title: Attacker used git post-checkout hook to deliver malware via fake project pitch
original_title: "I got targeted: Trying to get your credentials via a git post-checkout hook"
url: https://frankwiles.com/posts/i-got-targeted/
source: Lobsters
kind: community
section: security
date: "2026-10-03"
published_at: "2026-10-02T22:19:02.000Z"
authors:
  - frankwiles.com by frankwiles
  - frankwiles.com by frankwiles
comments: https://lobste.rs/s/cd5gdk/i_got_targeted_trying_get_your
tags:
  - supply-chain
  - security
  - git
  - social-engineering
  - credentials
  - malware
  - community
why_read: >-
  Learn how attackers chain social engineering with git workflow automation to target engineering
  credentials and access.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

A developer received a typical project inquiry that escalated to a fake Dropbox repository containing a git post-checkout hook. The hook downloaded an OS-specific binary via a Vercel command-and-control server, executed it, then deleted itself. The attacker impersonated a development shop and requested the target sign an NDA to trigger the hook.

Git hooks run automatically during workflows, making them effective for credential theft or account compromise. A senior engineer with access to multiple client systems was the apparent target. The attack was discovered only because the attacker suggested checking out a different git branch, prompting inspection of the hooks directory.

Post-checkout hooks are rarely used legitimately, making this choice unusual but effective. The binary was designed to run before deletion, preventing analysis. Dropbox and Vercel were notified to remove the accounts.
