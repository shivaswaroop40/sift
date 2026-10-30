---
id: 52a505c6d9
title: Meta puts LLM-generated JiTTests into production to catch bugs before code lands
original_title: "Catching Bugs Before They Land: JiTTesting’s Human-on-the-Loop Approach at Full Scale"
url: >-
  https://engineering.fb.com/2026/10/29/security/catching-bugs-before-they-land-jittestings-human-on-the-loop-approach-at-full-scale/
source: Meta Engineering
kind: blog
section: ai-and-ml
date: "2026-10-30"
published_at: "2026-10-29T16:00:12.000Z"
authors: []
comments: null
tags:
  - meta
  - llm-testing
  - mutation-testing
  - code-review
  - false-positives
  - blog
why_read: >-
  The original details the two test-generation workflows, the LLM-as-Judge and RubFake filtering
  stages, and how catches are ranked before an engineer is contacted.
rank: 9
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

Meta has moved Catching JiTTests from research prototype into production infrastructure. The system generates executable tests designed to fail, surfacing bugs in code changes before they land. It runs overnight on spare capacity and targets diffs scored as risky by a mechanism similar to Diff Risk Score, trained on previous code changes. Two workflows generate the tests. An intent-aware workflow infers a diff's purpose and likely failure points. A dodgy diff workflow treats every change as a mutant and writes tests to expose its behavioural differences.

The approach differs from LLM-based code review. It produces a concrete behavioural difference rather than an opinion, which catches bug classes that review-style agents might miss, at the cost of more computation. Weak catches are filtered by an LLM-as-Judge ensemble of several models plus RubFake, a deterministic rule-based assessor. Humans stay on the loop, setting criteria and reviewing aggregate outcomes rather than supervising every output, which reduces review load.

Meta reports that 589 engineers, 64% of those the system contacted, have engaged with its findings and found them actionable. The post begins to cite a 60% rate of true positives, but the source text is cut off mid-sentence, so the complete claim and how it was measured are not stated.
