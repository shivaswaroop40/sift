---
id: 03cdbb309c
title: Aviator CEO says line-by-line code review is already dead and proposes six layers of trust
original_title: "QCon San Francisco 2026: How to Kill the Code Review"
url: >-
  https://www.infoq.com/news/2026/11/qcon-sf-26-kill-code-review/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-27"
published_at: "2026-11-26T17:16:00.000Z"
authors:
  - Daniel Curtis
comments: null
tags:
  - code-review
  - ai-coding
  - developer-experience
  - qcon
  - invariants
  - testing
  - news
why_read: >-
  The talk gives a concrete, if vendor-sourced, model for replacing diff review, with real numbers
  and an honest failure case to test against your own process.
rank: 5
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

At QCon San Francisco 2026, Ankit Jain of Aviator argued that most teams have already stopped reviewing code properly. He cited a Faros study of more than 4,000 teams: over 75% of PRs merge without human review, PR size has grown, and redo work is up 67% year on year. The median PR is 640 lines, while review quality reportedly drops past 400.

He also pointed to older data. A 2013 Microsoft study found 44% of reviewers wanted to find defects, yet only 14% of comments concerned defects. A 2018 Google study of over nine million reviews showed almost the same split. His claim is that review was always about knowledge sharing, and AI-generated volume has turned it into "review theater".

His replacement has six layers: Argue, Capture, Codify, Prove, Debate, Own. Agents dispute a change locally, intent is attached to the PR, and repeated comments become owned invariants. Evidence such as recorded requests and database logs replaces green checks, since the agent that wrote the code probably wrote its tests. Aviator mined 11,000 review comments into 64 invariants.

Jain reports his nine-engineer team merges four times as many PRs as a year ago, with reverts down around 40%. One change passed every filter and caused an 18-minute outage from an unindexed query. Security, authentication and billing still get line-by-line review.
