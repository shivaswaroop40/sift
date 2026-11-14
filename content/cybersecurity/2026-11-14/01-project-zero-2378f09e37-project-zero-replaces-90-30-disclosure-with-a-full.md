---
id: 2378f09e37
title: Project Zero replaces 90+30 disclosure with a Full 90 policy shrinking to Full 30 by 2028
original_title: "Policy and Disclosure: 2026 Edition"
url: https://projectzero.google/2026/11/disclosure-policy.html
source: Project Zero
kind: research
section: policy
date: "2026-11-14"
published_at: "2026-11-13T08:00:00.000Z"
authors:
  - Natalie Silvanovich
comments: null
tags:
  - project-zero
  - vulnerability-disclosure
  - patch-gap
  - llm
  - vendor-management
  - policy
  - research
why_read: >-
  Read it for the exact deadline schedule, the remaining exceptions, and Project Zero's reasoning on
  patch gap and non-patch mitigations, which affect your own vendor remediation timelines.
rank: 1
interest_score: 8
depth_score: 7
novelty_score: 9
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Project Zero has dropped its 90+30 policy, in place since 2021. Vulnerabilities are now disclosed X days after being reported, starting at 90 days. This falls to 60 days on 2 February 2027 and to 30 days on 3 January 2028. Grace periods and the variant policy are removed.

The stated reason is AI-assisted discovery and exploitation. Project Zero says LLMs let attackers find bugs faster, raise the chance of duplicate discovery, and cut patch-to-exploit time to near zero. It treats patch soak time as no longer meaningful. It now finds several bugs a week in targets that once yielded a few a year.

Exceptions are limited. Actively exploited bugs follow Google's application security disclosure policy. Project Zero may publish details already public elsewhere. It will publish if the vendor asks. It says it will still grant rare exceptions for hardware, as it did for Spectre and Meltdown.

The phased schedule followed vendor feedback. Vendors feared that abrupt change would expose unfixed bugs while they improved processes, skew priorities towards Project Zero reports, or lead them to give up on deadlines they could not meet. Project Zero will still track fixes but says this will no longer drive disclosure decisions. The source text is truncated at that point.
