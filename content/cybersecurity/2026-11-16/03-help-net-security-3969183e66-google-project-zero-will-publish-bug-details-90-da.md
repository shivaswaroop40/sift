---
id: "3969183e66"
title: Google Project Zero will publish bug details 90 days after report, fixed or not
original_title: Google Project Zero will disclose bugs after 90 days, fixed or not
url: https://www.helpnetsecurity.com/2026/11/16/google-project-zero-disclosure-policy/
source: Help Net Security
kind: news
section: policy
date: "2026-11-16"
published_at: "2026-11-16T06:30:02.000Z"
authors:
  - Mirko Zorz
comments: null
tags:
  - project-zero
  - vulnerability-disclosure
  - google
  - llms
  - patch-management
  - news
why_read: >-
  The original sets out the exact dates, exceptions and reasoning, which you can use to plan patch
  timelines and interim mitigations for software Project Zero tests.
rank: 3
interest_score: 7.3
depth_score: 6
novelty_score: 9
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Project Zero will disclose vulnerabilities 90 days after reporting them to a vendor, whether or not a fix has shipped. The deadline falls to 60 days on 2 February 2027 and 30 days on 3 January 2028. The policy, called "Full X", replaces the "90 + 30" rule used since 2021, which added 30 days of soak time after a fix.

The team gives three reasons, all tied to large language models. Attackers find and exploit bugs faster, and more parties may find the same bug during an embargo. Patch-to-exploit time is now treated as effectively zero. Project Zero is also finding several bugs a week in targets where it once found a few a year.

Three exceptions remain. Bugs exploited in the wild follow Google's application security disclosure policy. Project Zero may publish details already made public by others. A vendor can ask for details of its own reported bug to be published. Hardware bugs may still get extra time, as Spectre and Meltdown did.

Severity will not move dates, and a vendor's fixed-or-not status will not be a decision point. Vendors raised concerns about a sudden switch, about being pushed to prioritise Project Zero bugs, and about giving up on deadlines they cannot meet. The staged schedule is Project Zero's response to those worries.
