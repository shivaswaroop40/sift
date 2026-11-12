---
id: 14f9a915a4
title: Fowler article argues AI-written tests should move into human-readable data tables
original_title: "Tests as data: ensuring AI-generated code does what we want"
url: https://martinfowler.com/articles/tests-as-data.html
source: Martin Fowler
kind: blog
section: languages-and-tools
date: "2026-11-12"
published_at: "2026-11-11T15:17:00.000Z"
authors:
  - Martin Fowler
comments: null
tags:
  - testing
  - ai-coding-agents
  - acceptance-testing
  - approval-testing
  - specification-by-example
  - tdd
  - blog
why_read: >-
  You get a clear account of why AI-maintained tests lose trust, and a design idea for guarding the
  human-owned contract, though this excerpt stops before the technique itself.
rank: 12
interest_score: 6.3
depth_score: 6
novelty_score: 6
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Matteo Vaccari, of Thoughtworks Italia, argues that when AI agents write both code and tests, developers lose the assurance that tests catch functional errors. He interviewed 26 developers at an AI-heavy organisation in early 2026. Asked if they trusted the tests, they said no, because the AI refactors existing tests as features are added.

His proposal has three claims. Developers become customers of AI-written code. Customer tests, not developer tests, become the main contract with the AI. Putting that contract in test data rather than test code makes it easier to protect from agent edits. He builds on Fit, specification by example, Go table tests and approval testing.

The source text is truncated. It covers the problem statement and the case against AI-generated tests, but not the implementation, the limits section or the sidebars, so the detail of the technique is not visible here.
