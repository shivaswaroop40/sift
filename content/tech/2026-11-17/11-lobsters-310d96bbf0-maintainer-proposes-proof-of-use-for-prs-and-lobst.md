---
id: 310d96bbf0
title: Maintainer proposes proof of use for PRs, and Lobsters mostly prefer other filters
original_title: "\"Proof of use\" as a requirement for open source contributions?"
url: https://lobste.rs/s/ki1l5r/proof_use_as_requirement_for_open_source
source: Lobsters
kind: community
section: industry
date: "2026-11-17"
published_at: "2026-11-16T22:25:45.000Z"
authors:
  - by twp
  - by twp
comments: https://lobste.rs/s/ki1l5r/proof_use_as_requirement_for_open_source
tags:
  - open-source
  - ai-slop
  - maintainers
  - github
  - forgejo
  - contributions
  - community
why_read: >-
  You get a candid thread on how maintainers are coping with low-value AI pull requests, including
  the trade-offs of leaving GitHub and the risk of deterring real users.
rank: 11
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

An open source maintainer on Lobsters says most AI-generated pull requests fix real but vanishingly rare edge cases. They are trialling a rule that contributors must first show their own project depends on the maintainer's. Acceptable evidence is a public repository that imports it, with git history, or a description of a production problem in closed source code.

Replies were mostly sceptical. One said verification adds work for the maintainer and could be forged with an LLM. Another said it would put off genuine contributors who have no project to show. A third warned that a rejected patch from a real user may cost the project that user entirely.

Several commenters suggested changing where the project lives. One moved to a self-hosted Forgejo instance with accounts by invitation, and left GitHub as a mirror with PRs disabled. Issues there are treated as drafts and copied across if useful. Another uses Sourcehut, and reported that an AI agent could not reach the source there.

These are anecdotes from a comment thread, not measurements. One commenter said they wanted a proof of interest instead, meaning commitment to see a change through, but had no way to test for it.
