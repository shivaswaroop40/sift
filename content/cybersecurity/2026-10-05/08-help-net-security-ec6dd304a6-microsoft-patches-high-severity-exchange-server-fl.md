---
id: ec6dd304a6
title: Microsoft patches high-severity Exchange Server flaw allowing cross-user mailbox access
original_title: Out-of-band Exchange Server update fixes high-severity mailbox access bug (CVE-2026-96940)
url: https://www.helpnetsecurity.com/2026/10/05/exchange-server-vulnerability-cve-2026-96940/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-10-05"
published_at: "2026-10-05T10:38:42.000Z"
authors:
  - Zeljka Zorz
comments: null
tags:
  - exchange
  - privilege-escalation
  - authentication
  - microsoft
  - patch
  - multi-tenant
  - news
why_read: >-
  Learn what the vulnerability does, which versions need patching, and why Microsoft treated this as
  an emergency despite no known active exploitation.
rank: 8
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Microsoft released an out-of-band update for Exchange Server to fix CVE-2026-96940, a high-severity vulnerability that lets authenticated attackers read emails and attachments belonging to other users within the same organisation. The flaw does not cross tenant boundaries. Microsoft discovered it internally and reports no active exploitation, but considers it consistently exploitable.

This matters because the vulnerability affects on-premises Exchange deployments where any authenticated user can potentially access colleagues' mailboxes. The risk is material enough that Microsoft chose an emergency patch cycle despite no observed attacks in the wild.

The rollout was awkward. Exchange Online received a service-side fix late last week without accompanying documentation, ahead of schedule and without explanation. Microsoft recommends applying the September 2026 v2 update immediately to Exchange Server 2016 CU23, 2019 CU14 and CU15, and Subscription RTM, plus management tools across all affected servers.
