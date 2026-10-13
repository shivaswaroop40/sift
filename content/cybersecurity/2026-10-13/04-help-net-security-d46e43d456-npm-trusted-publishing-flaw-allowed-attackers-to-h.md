---
id: d46e43d456
title: >-
  npm Trusted Publishing flaw allowed attackers to hijack 1,500 packages via abandoned repository
  names
original_title: npm Trusted Publishing flaw exposed 1,500+ npm packages to takeover
url: https://www.helpnetsecurity.com/2026/10/13/slugfest-npm-trusted-publishing-flaw/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-10-13"
published_at: "2026-10-13T09:00:08.000Z"
authors:
  - Mirko Zorz
comments: null
tags:
  - npm
  - supply-chain
  - trusted-publishing
  - package-hijacking
  - github
  - credentials
  - news
why_read: >-
  Learn how a simple validation gap in GitHub's package publishing system exposed thousands of
  libraries to automated takeover, and what to check if you maintain packages with Trusted
  Publishing.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

npm's Trusted Publishing feature validated repository ownership by name alone, not by permanent ID. An attacker could register a freed repository slug left behind after a maintainer renamed, transferred, or deleted their original repository, then publish malicious versions of packages they did not own.

Over 1,500 npm packages were exposed this way. They receive more than 10 million total downloads and over a million monthly. A hijacked package runs postinstall scripts automatically on every machine that installs the update, making it a direct path to widespread compromise.

GitHub validated the bug report in June 2026 but did not respond to follow-ups after July 8. The fix, announced in October, now expires unvalidated configurations after 48 hours and binds successful publishes to the repository's immutable ID. It is unknown whether the flaw was exploited in the wild.
