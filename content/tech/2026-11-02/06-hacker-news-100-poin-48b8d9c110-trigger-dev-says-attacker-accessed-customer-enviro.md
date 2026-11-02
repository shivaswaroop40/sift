---
id: 48b8d9c110
title: Trigger.dev says attacker accessed customer environment variables
original_title: Trigger.dev customer environment variables exposed
url: https://trigger.dev/blog/security-incident-nov-2026
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-02"
published_at: "2026-11-02T01:09:16.000Z"
authors:
  - anurag
comments: https://news.ycombinator.com/item?id=50331784
tags:
  - security
  - secrets
  - trigger-dev
  - environment-variables
  - incident
  - community
why_read: >-
  The original sets out what Trigger.dev has confirmed, what it has not, and the mitigation steps it
  asks affected customers to take.
rank: 6
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Trigger.dev has disclosed a security incident in which an attacker gained unauthorised access to environment variables belonging to a subset of customer organisations. The company says it has blocked the exploit used in the attack. It has emailed all impacted account owners with mitigation steps and will publish updates on its status page.

Environment variables on a hosted developer platform typically hold credentials for downstream services, such as API keys and database passwords. Anyone running Trigger.dev tasks should treat those secrets as potentially exposed, rotate them, and check whether they received the notification email. The company says only a subset of organisations were affected.

The disclosure is thin on detail. It does not say how the exploit worked, how many organisations were affected, or how long the attacker held access. Those gaps matter when deciding the scope of credential rotation and whether connected systems need review. Watch the status page for follow-up.
