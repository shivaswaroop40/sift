---
id: 156869b51e
title: AWS European Sovereign Cloud to run disconnected from US backbone for hours in October
original_title: AWS Will Run Its European Sovereign Cloud Without the Global Backbone for Several Hours
url: >-
  https://www.infoq.com/news/2026/10/aws-sovereign-cloud-exercise/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-10-18"
published_at: "2026-10-18T05:30:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - aws
  - sovereignty
  - eu-regulation
  - resilience
  - compliance
  - news
why_read: >-
  Understand what AWS's sovereign cloud test actually proves about resilience and European data
  control.
rank: 5
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

On October 24, AWS will disconnect its European Sovereign Cloud from its Global Network backbone and a dedicated data transfer channel for several hours, allowing the region to operate on public internet links from European ISPs. AWS says the region will continue running, though customers may see brief disruptions during route convergence.

The test matters because it addresses one half of sovereignty: whether the service survives if the US link cuts. It does not address the legal half—whether US law can compel data access or service suspension. Customer content stays in the EU, but some operational data leaves, and the region depends on the US parent company legally.

The exercise is narrow by design. AWS does not claim the region runs independently the rest of the year, and it provides no detail on how global services like IAM, DNS or internet routing behave during disconnection. Compliance teams can use the results for their frameworks, but the test does not prove sustained autonomy or answer what happens when tokens, certificates or licenses expire.
