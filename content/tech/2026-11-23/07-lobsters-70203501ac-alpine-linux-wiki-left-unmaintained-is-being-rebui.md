---
id: 70203501ac
title: Alpine Linux wiki, left unmaintained, is being rebuilt as packaged MediaWiki by a volunteer
original_title: "Held together by spare time: Reviving wiki.alpinelinux.org during PHP2Shell"
url: https://lambdacreate.com/posts/held-together-by-spare-time
source: Lobsters
kind: community
section: security
date: "2026-11-23"
published_at: "2026-11-23T15:16:31.000Z"
authors:
  - lambdacreate.com by durrendal
  - lambdacreate.com by durrendal
comments: https://lobste.rs/s/gtc9rg/held_together_by_spare_time_reviving_wiki
tags:
  - alpine-linux
  - mediawiki
  - open-source
  - infrastructure
  - packaging
  - maintenance
  - community
why_read: >-
  You get a first-hand account of inheriting an undocumented, decade-old PHP deployment in
  volunteer-run infrastructure, and how one person approached it cautiously.
rank: 7
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

A volunteer, durrendal, describes taking on maintenance of wiki.alpinelinux.org after ikke asked for help in November 2025. The wiki ran MediaWiki 1.40.0 on PHP 8.2 and Alpine 3.20, in an LXC container with MariaDB in a separate container and an nginx proxy in front.

The deployment was a git checkout with extensions and skins as submodules, plus composer. Wiki data such as images sat in the same /var/www tree. LocalSettings.php dated from MediaWiki 1.25.3, released in 2015. Server access only arrived in January 2026, after the 3.23 release.

His approach was to clone staging in a homelab, then package MediaWiki and its extensions as proper APKBUILDs. The wiki uses 36 extensions, which he says explains why nobody had packaged it before. The source text is truncated, so the result is not covered.
