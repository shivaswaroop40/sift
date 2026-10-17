---
id: 83fd134c96
title: Claude Code team cuts human review time by shifting most checking to machines
original_title: How the Claude Code team does code review
url: https://claude.dev/blog/solving-code-review-at-anthropic/
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-10-17"
published_at: "2026-10-16T19:04:47.000Z"
authors:
  - pretext
comments: https://news.ycombinator.com/item?id=50122951
tags:
  - code-review
  - automation
  - scaling
  - ci-cd
  - distributed-teams
  - verification
  - community
why_read: >-
  Learn how one team restructured code review to scale with AI-generated code without losing quality
  or safety.
rank: 7
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Anthropic's Claude Code team now processes merged pull requests at more than double the June volume, with reverts down 40 percent, by moving most code review work to automated agents before and during the pull request process. Claude writes about 90 percent of Claude Code's own code, creating too much volume for traditional human line-by-line review.

For distributed systems engineers, this matters because the team demonstrates a scalable approach to high-volume code review: treating review as continuous verification rather than a final gate, running multiple parallel automated checks before requesting human attention, and using risk-based classification to determine when humans are needed.

The workflow runs verification before the PR exists, then layers required CI, agent-based code review, security review, and human approval only where risk assessment requires it. Merge queues and feature flags enable fast rollback if problems slip through. The team measures success by keeping revert and incident rates flat while reducing human approvals per PR to a median of one or zero.
