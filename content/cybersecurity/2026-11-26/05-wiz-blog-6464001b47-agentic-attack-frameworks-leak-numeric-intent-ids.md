---
id: 6464001b47
title: >-
  Agentic attack frameworks leak numeric intent IDs into victim logs, giving defenders a way to
  cluster activity
original_title: "Inside Agentic Offensive Frameworks: Intent IDs"
url: https://www.wiz.io/blog/agentic-offensive-frameworks-intent-ids-artex-cairn
source: Wiz Blog
kind: research
section: threat-research
date: "2026-11-26"
published_at: "2026-11-25T14:27:03.000Z"
authors:
  - Rami McCarthy
  - Rami McCarthy
comments: null
tags:
  - agentic-attacks
  - artex
  - cairn
  - threat-hunting
  - attribution
  - wiz
  - research
why_read: >-
  The original gives the exact ID formats, source-code locations and clustering and deconfliction
  heuristics you can apply when hunting agent-driven intrusions in your own logs.
rank: 5
interest_score: 7.7
depth_score: 7
novelty_score: 9
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Wiz reviewed over a hundred open-source offensive agent harnesses and found two families, ARTEX and Cairn, that give the LLM a numeric intent ID. The model then reuses it in target-side artifacts: file names, GitHub workflow names, account names, User-Agent strings, persistence scripts and cloud resource names. Examples include i19ghci.yml at Barracuda and artex-i37257 at Chainstack.

ARTEX draws intent, fact, finding, hint and digest IDs from one PostgreSQL BIGSERIAL counter that is not reset by default. Numbers climb across runs and targets, so a busy install reaches tens of thousands. Cairn uses zero-padded per-project series (i001, f001, h001) that reset for each project, with one exposed host holding i001 to i292.

Wiz says rising IDs can link activity across rotating residential proxy IPs and across victims. In one intrusion, 36 IDs in AWS and 34 in Azure came from a single climbing sequence, tying together unrelated identities. In ARTEX-Harvester tracking, IDs plus a boto3 build and proxy overlap connected more than a dozen organisations.

The signals are lossy. Counters climb unevenly because other targets consume numbers, and unrelated installs pass through the same low ranges. Duplicate IDs across victims suggest separate installations, not separate operators. Wiz describes pacing as corroboration, not standalone attribution.
