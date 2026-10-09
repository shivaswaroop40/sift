---
id: fe826df90e
title: Firebase iOS outage lasted six hours due to caching and poor incident response
original_title: "The Pulse: Firebase’s global outage & poor response"
url: https://blog.pragmaticengineer.com/the-pulse-firebases-global-outage-poor-response/
source: The Pragmatic Engineer
kind: blog
section: infrastructure
date: "2026-10-09"
published_at: "2026-10-08T16:56:37.000Z"
authors:
  - Ivan Klaric
comments: null
tags:
  - firebase
  - outage
  - incident-response
  - sdks
  - reliability
  - blog
why_read: Understand how a major platform service failed incident management and what Google plans to fix.
rank: 10
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

On 29 September, a configuration cleanup caused a malformed payload to roll out globally, crashing every iOS app using the Firebase SDK with analytics enabled. The backend change was deployed at 17:41 PDT and developers reported crashes immediately. A community member identified the root cause before Google acknowledged the incident.

Firebase's incident response fell short of Google standards. The team took 70 minutes to acknowledge the outage publicly, though internal alerts arrived 20 minutes after deployment. The rollback started at 22:24 PDT, over two and a half hours later. Cached malformed payloads extended user impact to six hours.

Firebase never updated its status page during or after the outage, leaving it green throughout. The team later claimed their dashboards cannot track client-side SDK crashes. Google committed to improving status dashboard integration and incident response processes, though notably did not investigate why Android remained unaffected.
