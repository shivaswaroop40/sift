---
id: c2df1d5c52
title: SourceHut account takeover via XSS in ansi2html build logs
original_title: Sourcehut account takeover via build logs (XSS in ansi2html)
url: https://blog.arusekk.pl/posts/srht-account-takeover/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-25"
published_at: "2026-09-24T19:54:21.000Z"
authors:
  - arusekk
comments: https://news.ycombinator.com/item?id=49835996
tags:
  - security
  - xss
  - sourcehut
  - ci
  - ansi2html
  - builds
  - community
why_read: >-
  You will see how a small ANSI-to-HTML parser became a full account takeover on SourceHut and what
  generic lessons apply to any CI that renders untrusted build output.
rank: 1
interest_score: 8.7
depth_score: 9
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

A vulnerability in SourceHut's CI build log rendering allowed an attacker to craft ANSI escape sequences that, after conversion by ansi2html, produced HTML injecting JavaScript into build log pages. The researcher showed a one-shot payload using OSC 8 hyperlinks with injected attributes like onfocus, fired when a logged-in user viewed the log.

It matters because build log pages are publicly viewable, and an attacker could trigger a job on builds.sr.ht without owning a paid account, for example by emailing a patch to a public mailing list with CI enabled. A visit from an admin could leak the CSRF token and grant the attacker admin rights plus access to deploy keys for sr.ht itself.

The researcher emailed sr.ht-security and Drew DeVault patched builds.sr.ht to auto-sanitise ansi2html output, though the fix is heavy-handed and reportedly strips all colour. A Content-Security-Policy without unsafe-inline and structural changes to ansi2html are suggested as proper defence in depth. The text is truncated and does not show the upstream resolution.
