---
id: 2378f09e37
title: Project Zero moves to fixed disclosure deadlines falling from 90 to 30 days by 2028
original_title: Project Zero will disclose vulnerabilities 90 days after reporting
url: https://projectzero.google/2026/11/disclosure-policy.html
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-15"
published_at: "2026-11-14T11:13:17.000Z"
authors:
  - hacb
comments: https://news.ycombinator.com/item?id=50496051
tags:
  - project-zero
  - vulnerability-disclosure
  - security
  - llms
  - patch-management
  - google
  - community
why_read: >-
  The original gives the exact dates, the exceptions and the vendor objections, which help you judge
  how tight your own remediation and patch rollout timelines will need to be.
rank: 2
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Project Zero is replacing its "90 + 30" policy with "Full X", where details are published X days after the report. It starts at Full 90 now, moves to Full 60 on 2 February 2027 and to Full 30 on 3 January 2028. The extra 30-day soak period and the grace period and variant policy are gone.

The team says LLMs have shortened the time to find and exploit bugs, and raised the chance that someone else finds the same one. It treats zero patch-to-exploit time as a reasonable model of attackers. It also reports finding several bugs a week in targets that once yielded a few a year, so negotiating fix status case by case no longer scales.

Exceptions are narrow. Bugs exploited in the wild follow Google's application security policy. Project Zero may publish if details are already public, and will publish if the vendor asks. Spectre and Meltdown are cited as past exceptions, and it says more may follow. Severity will not influence timing, since it affects impact, not the odds of attackers finding a bug.

The staged cut follows vendor feedback. Vendors worried about exposing unfixed bugs while they improve their processes. They also feared that bugs reported under the deadline would be prioritised over more severe ones, or that vendors would give up on deadlines they cannot meet. Project Zero will still track whether bugs are fixed, but the source text is cut off before it explains how.
