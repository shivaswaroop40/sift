---
id: c8c1602a3f
title: LLM use erodes trust in software and documentation, says Jepsen's Kyle Kingsbury
original_title: Quoting Kyle Kingsbury
url: https://simonwillison.net/2026/Nov/1/kyle-kingsbury/
source: Simon Willison
kind: blog
section: culture
date: "2026-11-02"
published_at: "2026-11-01T16:49:04.000Z"
authors: []
comments: null
tags:
  - jepsen
  - llms
  - distributed-systems
  - documentation
  - trust
  - kyle-kingsbury
  - blog
why_read: >-
  You get Kingsbury's argument that LLMs make old maturity signals easy to fake, plus his open
  questions for maintainers.
rank: 10
interest_score: 6
depth_score: 5
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

Kyle Kingsbury, author of the Jepsen distributed systems testing series, has published results for ParticleDB 1.1.4. In the accompanying commentary he argues that LLM use erodes trust in documentation, in software, and in the organizations that produce them. Signals engineers once relied on as markers of a mature system are now easier to counterfeit, he writes.

Jepsen reports are a common reference point when engineers judge whether a database is safe to run. Kingsbury's question is what replaces those old trust signals. He asks how maintainers can ensure correct software and accurate documentation, and then how they can prove that quality to users. That problem now sits with anyone shipping infrastructure software.

The source here is a short excerpt quoted by Simon Willison on 1st November 2026. It does not describe the ParticleDB 1.1.4 findings themselves, only this commentary. Readers who want to know what Jepsen actually found in the database will need the full report.
