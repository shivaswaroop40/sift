---
id: 022b47d171
title: Ex-GitHub CEO launches Entire, a Git forge that gates merges on agent eval scores
original_title: Entire's Git Forge Rethinks Git Collaboration for Coding Agents
url: >-
  https://www.infoq.com/news/2026/11/entire-git-forge-coding-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-08"
published_at: "2026-11-08T11:00:00.000Z"
authors:
  - Sergio De Simone
comments: null
tags:
  - git
  - ai-agents
  - source-control
  - code-review
  - entire
  - news
why_read: >-
  The original details how trails, eval scores and continuous memory work, with quotes from Dohmke
  on why the PR model fails for agents.
rank: 9
interest_score: 5.3
depth_score: 4
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

Entire is a new Git forge built for collaboration between human developers and AI coding agents, led by Thomas Dohmke, former GitHub CEO. Its core component is trails. When code is pushed, a review agent in a cloud sandbox evaluates the changes and returns a score with a rationale, covering code quality, security, slop, and whether human review is required. Entire claims its distributed architecture delivers pushes up to 89 times faster than GitHub.

The premise is that the pull request timeline has become an audit log only the agent reads, leaving developers without the information to merge with confidence. Trails put eval scores at the top of the page so a developer can judge whether a change is stable or needs another agent iteration. The last five runs and the current run are shown for each eval, because one-shot loops often miss a critical issue. Merges are blocked until confidence is high, risk is low, and all findings are resolved or closed.

A trail can start from a bug report, a feature request, or manually, and can span multiple repositories. Evaluation agents are configured through the interface or repository-level JSON, and repository-level Gates define the conditions for approval. Entire also adds continuous memory, built on two open-source tools. entire-graph precomputes a map of the repository with ranked code searches, definitions, callers, types and routes. entire-brain combines that map with previous agent sessions and Git history so agents reuse context instead of starting from scratch.

The 89-times figure is Entire's own claim and is not independently verified in the article. The forge integrates with Buildkite and Depot for CI, and it is one of several new source control entrants alongside Zed DeltaDB, Anthropic Scion, East River Source Control, Cursor Origin and Radicle.
