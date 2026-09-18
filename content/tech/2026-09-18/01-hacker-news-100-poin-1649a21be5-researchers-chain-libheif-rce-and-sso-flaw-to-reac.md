---
id: 1649a21be5
title: Researchers chain libheif RCE and SSO flaw to reach OpenAI internal repos
original_title: A heap overflow and SSO misconfiguration to compromise OpenAI internal repos
url: https://www.hacktron.ai/blog/hacking-openai
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-18"
published_at: "2026-09-18T02:47:24.000Z"
authors:
  - Handy-Man
comments: https://news.ycombinator.com/item?id=49749656
tags:
  - security
  - openai
  - discourse
  - libheif
  - image-trusted-pipeline
  - sso
  - community
why_read: >-
  A concrete walk-through of how a missing CVE and a SSO mistake gave 72-hour access to OpenAI
  internals, with broader lessons on image pipelines and identity flows.
rank: 1
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

Security firm Hacktron AI chained two vulnerabilities on 25 July 2026 to take over ChatGPT and Codex accounts belonging to OpenAI staff, then demonstrated access to OpenAI's internal monorepo by opening an innocuous pull request via Codex. The full attack, from finding the bug to repo access, took under 72 hours, and earned a $6,500 bug bounty from OpenAI even though the Discourse-hosted forum was technically out of scope.

The first bug was a heap buffer overflow in libheif 1.19.7 shipped in Debian 12, triggered through Discourse's image upload pipeline when ImageMagick handled HEIC files. The fix existed upstream with no CVE assigned, so Debian did not backport it. The second was an SSO misconfiguration that let any Discourse login steal the associated auth.openai.com session, opening ChatGPT, Codex and any connected GitHub or Slack integrations.

The impact is wider than OpenAI. Hacktron has broadened the work into a project called HEIF Heist, finding libheif issues across Slack, Meta, GitHub Enterprise, Ruby on Rails, Next.js, Astro and Gatsby. Self-hosted Discourse installs need an image rebuild rather than just a web update, and the underlying CVE gap in Debian's libheif packaging remains a real risk for anyone processing user-uploaded HEIC or AVIF images.
