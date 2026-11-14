---
id: 38de898666
title: Microsoft 365 outage traced to servers failing health checks, with recovery still under way
original_title: Microsoft’s global outage may be worse than Amazon's or CrowdStrike's, expert says
url: >-
  https://arstechnica.com/tech-policy/2026/11/microsoft-blames-failed-server-health-checks-not-hackers-for-global-outage/
source: Ars Technica
kind: news
section: infrastructure
date: "2026-11-14"
published_at: "2026-11-13T15:26:53.000Z"
authors:
  - Ashley Belanger
comments: >-
  https://arstechnica.com/tech-policy/2026/11/microsoft-blames-failed-server-health-checks-not-hackers-for-global-outage/#comments
tags:
  - microsoft-365
  - outage
  - health-checks
  - incident-response
  - cloud-reliability
  - news
why_read: >-
  The article gives a timeline of Microsoft's public updates and the real-world fallout, though the
  root cause is still unconfirmed until the promised post-incident report.
rank: 5
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

A global Microsoft 365 outage began midday Thursday and was still being worked on Friday morning. Email, cloud and AI services were affected. Microsoft says a portion of infrastructure showed elevated load across multiple regions. It was not caused by extra traffic. Servers were failing automated health checks and becoming unavailable. Microsoft says it has no evidence of malicious activity.

Early fixes did not work. Microsoft found a core process on affected servers was becoming overwhelmed, causing capacity loss. Servers it brought back would become unresponsive again once traffic returned. It then isolated part of the infrastructure, restarted components and reintroduced traffic in stages. It also extended email timeout to 48 hours to preserve delayed mail.

The pattern is familiar to anyone running fleets behind health checks. A check that marks servers unhealthy under load can shrink capacity and push more load onto what remains. Microsoft has not confirmed that mechanism. It said it was validating alternate health check methods, and promised a post-incident report with root cause.

Impact was wide. Reports cited disrupted government IT in Japan, blocked bank verification codes, and hospitals and courts affected. Ciaran Martin, a former head of the UK's National Cyber Security Centre, said it may be worse than the AWS or CrowdStrike outages. That is one expert's view. User numbers are unclear, though Microsoft counted over 450 million paid commercial subscriptions in January.
