---
id: b94b69f8cf
title: Microsoft says Chinese and North Korean state groups now use the ARTEX AI pentest framework
original_title: Chinese and North Korean state hackers add ARTEX AI framework to their arsenal
url: >-
  https://www.helpnetsecurity.com/2026/11/27/artex-ai-pentest-framework-china-north-korea-state-hackers/
source: Help Net Security
kind: news
section: threat-research
date: "2026-11-27"
published_at: "2026-11-27T11:06:57.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - artex
  - ai-agents
  - salt-typhoon
  - storm-0940
  - password-spraying
  - state-sponsored
  - news
why_read: >-
  Read it for the observed attack timings and Microsoft's view that behavioural detection, not
  indicators, is the way to catch ARTEX-driven activity.
rank: 5
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Microsoft Threat Intelligence reports that state-backed and financially motivated actors are using ARTEX, an open-source LLM-driven penetration testing framework published on GitHub in July 2026. The operator sets a goal and AI agents plan and carry out the steps. Named actors include Storm-0940, Storm-3358, Onyx Sleet, Pearl Sleet, Crystal Typhoon and Salt Typhoon.

The speed is notable. One Storm-0940 password spraying run against Microsoft 365 logged over 151,000 failed sign-ins, peaking at 2,900 per minute, and reached privileged access in under three hours. In another case, an agent went from searching GitHub for client secrets to taking data from Azure Key Vault in five minutes.

Microsoft says ARTEX adds no new techniques. It automates existing tools and attackers vary IP addresses and user agent strings, so static signatures are weak. Behaviour is a better signal, because bursts of varied requests, rapid retries and machine-speed jumps between attack stages stand out in logs by default.

The UK NCSC said on 24 November that agentic attack frameworks generally trade stealth for speed, which makes them easier to detect. It warned that later frameworks built with stealth in mind may change that. ThreatBook claims ownership of ARTEX and sells a Pro version, but Microsoft does not link it to the attacks.
