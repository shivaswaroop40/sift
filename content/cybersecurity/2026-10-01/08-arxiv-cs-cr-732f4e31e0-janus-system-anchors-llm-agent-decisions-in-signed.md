---
id: 732f4e31e0
title: Janus system anchors LLM agent decisions in signed logs before execution
original_title: "Janus: Evidence-Before-Effect Sagas and Offline-Verifiable Provenance for Agentic LLMs"
url: https://arxiv.org/abs/2609.38266
source: arXiv cs.CR
kind: paper
section: papers
date: "2026-10-01"
published_at: "2026-10-01T04:00:00.000Z"
authors:
  - Mustafa Arslan
comments: null
tags:
  - llm-agents
  - audit
  - provenance
  - verification
  - lending
  - paper
why_read: >-
  Understand how to make agentic LLM decisions auditable offline and resistant to approval
  substitution.
rank: 8
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Agentic LLMs that control money often leave execution traces separate from their decisions. Janus moves the record onto the effect path: a step's proposal, validator verdict, and any human approval are signed, hash-chained, and locked before the step runs or its effect is released. Gates become pure functions of this log.

For practitioners, this matters because auditors can verify every decision offline from the log and a single public key, catching approval misuse and constraint violations that plain agents would miss. The system held effects until verification completed; a lending experiment showed Janus rejected loans that plain agents approved when constraints were only in policy, not the prompt.

The evaluation tested 100 million events in 254.5 seconds offline, and revealed a real vulnerability: post-approval substitution, where an approval keyed to one proposal was counted for another, moving a human's consent from 100 to 1,000,000 units. The authors document this, a fix, and five other attack routes.
