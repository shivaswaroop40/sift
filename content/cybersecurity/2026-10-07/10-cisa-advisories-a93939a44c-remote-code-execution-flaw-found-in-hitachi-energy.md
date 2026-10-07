---
id: a93939a44c
title: Remote code execution flaw found in Hitachi Energy SOI via Apache ActiveMQ
original_title: Hitachi Energy SOI
url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-279-04
source: CISA Advisories
kind: advisory
section: vulnerabilities
date: "2026-10-07"
published_at: "2026-10-06T12:00:00.000Z"
authors:
  - CISA
comments: null
tags:
  - rce
  - apache-activemq
  - hitachi-energy
  - ics
  - vulnerability
  - energy-infrastructure
  - advisory
why_read: Learn which SOI versions are affected and what immediate mitigations CISA recommends.
rank: 10
interest_score: 7.7
depth_score: 7
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Hitachi Energy SOI versions 2.0.0 through 2.2.0 contain a remote code execution vulnerability in the bundled Apache ActiveMQ component. The flaw allows unauthenticated attackers to execute arbitrary code on affected systems.

Production deployments of SOI in critical infrastructure environments face direct risk from this vulnerability. Exploitation could compromise confidentiality, integrity and availability of energy management systems that operators depend on.
