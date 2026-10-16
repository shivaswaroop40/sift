---
id: 378619882f
title: Refrigeration controller vulnerabilities warned of months before French supermarket attacks
original_title: Researchers warned attackers could 'defrost the food' months before French supermarkets got hit
url: >-
  https://www.theregister.com/security/2026/10/15/researchers-warned-attackers-could-defrost-the-food-months-before-french-supermarkets-got-hit/5303425
source: The Register
kind: news
section: security
date: "2026-10-16"
published_at: "2026-10-15T19:23:00.000Z"
authors: []
comments: null
tags:
  - operational-technology
  - security
  - industrial-controls
  - patch-management
  - supply-chain
  - news
why_read: >-
  Understand the timeline of public warnings and real-world exploitation of industrial control
  systems that most engineers treat as separate from their infrastructure concerns.
rank: 5
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Attackers exploited known flaws in Danfoss and Copeland refrigeration controllers to compromise nearly 700 French supermarkets in October. The devices were set to 50°C, spoiling food and causing fires. Researchers had published detailed vulnerability information in August, and CISA had issued advisories since February.

For distributed systems teams, this highlights a core operational technology problem: devices with known, patchable vulnerabilities remain internet-exposed and unpatched. Coalition's scans found 2,624 controllers with public admin panels across Europe; 54 percent of exposed Danfoss devices were in France. This is infrastructure that should never face the internet.

Even after the attacks, 618 Danfoss controllers remained publicly accessible as of mid-October, including devices in France, the US, and the UK. The availability of patches did not correlate with their deployment, suggesting either lack of discovery tools or poor patch management processes in distributed OT environments.
