---
id: c75daf1782
title: Forgejo 16.0.4 release notes address critical RCE in versions up to 16.0.3
original_title: Forgejo <=16.0.3 Critical RCE
url: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.4.md
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-11"
published_at: "2026-09-10T15:57:40.000Z"
authors:
  - weierstass
comments: https://news.ycombinator.com/item?id=49645907
tags:
  - forgejo
  - security
  - rce
  - vulnerability
  - release-notes
  - community
why_read: Get the official fix details and assess whether your Forgejo instance is exposed.
rank: 1
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: deepseek-v4-flash
---

Forgejo has published release notes for version 16.0.4, which address a critical remote code execution vulnerability affecting versions up to and including 16.0.3. The announcement was shared on Hacker News and links to the official release notes on Codeberg. No technical details of the flaw are included in the post itself.

Operators running Forgejo 16.0.3 or earlier should treat this as urgent and review the release notes before upgrading. The post gives no indication of whether the vulnerability is exploitable remotely without authentication, or whether it requires an authenticated user. Until the notes are read, the safest assumption is that affected instances are at risk.
