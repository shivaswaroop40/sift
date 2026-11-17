---
id: 4e499a80a0
title: PostgreSQL fixes a record 52 security flaws and ends support for version 14
original_title: PostgreSQL patches 52 security holes, sends version 14 into retirement
url: >-
  https://www.theregister.com/databases/2026/11/17/postgresql-patches-52-security-holes-sends-version-14-into-retirement/5310108
source: The Register
kind: news
section: infrastructure
date: "2026-11-17"
published_at: "2026-11-17T09:30:00.000Z"
authors:
  - Lindsay Clark
comments: null
tags:
  - postgresql
  - security
  - cve
  - end-of-life
  - ai-scanning
  - databases
  - news
why_read: >-
  You get the specifics on which fixes need index rebuilds or new backups, plus a maintainer's view
  on why CVE counts keep climbing.
rank: 6
interest_score: 7.3
depth_score: 6
novelty_score: 7
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

PostgreSQL developers have patched 52 security vulnerabilities and more than 140 bugs across versions 14 to 18. The batch includes 14.25, the last release for version 14. A second release candidate for version 19 shipped alongside. One fix, CVE-2026-6460, is a type confusion flaw with a CVSS score of 8.8. It could let a user with object-creation rights run arbitrary code.

Some fixes need more than a package update. Affected indexes may need rebuilding, and some cases call for a fresh full backup. Check the release's post-update instructions before assuming a minor-version bump is enough. Version 14 users must now do a major upgrade or run without fixes. Organisations that want N-1 would currently pick version 17.

Alastair Turner of Percona says exploiting the worst flaws needs database access, so a port scan will not find them. They can make SQL injection or credential theft much worse, though. He calls this the third quarterly release in a row with a record CVE count. He credits AI-assisted scanning, including Anthropic and OpenAI open source scanners, and more scrutiny as Postgres spreads in enterprises. The fixes span many components rather than one broken area.

PostgreSQL 19 is due on 19 November, barring further problems. It adds a REPACK command whose CONCURRENTLY option lets reads and writes continue while space is reclaimed. VACUUM FULL takes an exclusive lock and blocks both.
