---
id: 0c47849297
title: Nine release gates passed on checks that never ran
original_title: "Silent Success: A Release Gate That Passed on Checks It Never Ran, and Eight More"
url: https://arxiv.org/abs/2609.30307
source: arXiv cs.SE
kind: paper
section: systems
date: "2026-09-28"
published_at: "2026-09-28T04:00:00.000Z"
authors:
  - Dong Hyeon Jeon
comments: null
tags:
  - release-engineering
  - ci-cd
  - quality-gates
  - observability
  - arxiv
  - paper
why_read: >-
  You get a catalogue of nine near-miss release-gate failures, the concrete fix for each, and a
  falsifiable claim that most fit a single-line check.
rank: 1
interest_score: 9
depth_score: 9
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

A production release pipeline reported PASS on a run in which one subgate executed zero of its two checks and another ran six of eight. The deciding keys asked whether a violation had been observed, computed that from a population already stripped of cases that failed to run, and so absent data answered "no", yielding two weeks of green builds.

Adding a third value, pass, violate, and unable to determine, turned those silent passes into failures and surfaced the shortfall in the exit status. The same audit work also caught a detector firing on a margin of 0.000177 percentage points, with its firing floor holding at the sixth decimal place.

Eight further instances of the same form are documented: five more from the same engagement, two in open-source projects, a gateway whose configured cache TTL was declared but never applied on the write path, and an inference server crediting free cache slots on every step for releases that returned nothing.

One further case was introduced by the author while writing the paper, using tooling built to prevent exactly that case. Seven of the nine were answerable by a single query, command, or comparison, and the author asks that the convergence of the remedy be judged on its falsifiability.
