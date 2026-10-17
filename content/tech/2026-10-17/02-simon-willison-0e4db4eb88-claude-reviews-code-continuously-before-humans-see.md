---
id: 0e4db4eb88
title: Claude reviews code continuously before humans see it, changing when review happens
original_title: Quoting Addy Osmani, Morgan Westlee Lunt, and Qing Wang
url: https://simonwillison.net/2026/Oct/16/code-review/
source: Simon Willison
kind: blog
section: languages-and-tools
date: "2026-10-17"
published_at: "2026-10-16T22:06:37.000Z"
authors: []
comments: null
tags:
  - code-review
  - llms
  - claude
  - continuous-integration
  - blog
why_read: >-
  Learn how one team moved code review upstream to shift human effort toward architectural
  decisions.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Anthropic's Claude Code team shifted code review from a gate at the end of development to a continuous process. Most changes are now reviewed and fixed by Claude at least once before a human reads them.

This changes what code review catches and when. Continuous automated review catches routine mistakes early. Human reviewers then focus on higher-level questions and scrutiny rather than mechanical issues.

The team now asks which specific check catches which problem, rather than assuming human review is necessary for all changes. This separates what automated tools handle well from what needs human judgment.
