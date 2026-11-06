---
id: c0a3eed68f
title: Typical-input test gates released 41% of wrong LLM repairs after API migrations
original_title: "Accepted but Wrong: Silent Failures of LLM Code Repairs after API Migrations"
url: https://arxiv.org/abs/2611.08269
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-11-06"
published_at: "2026-11-06T05:00:00.000Z"
authors:
  - Xiaobo Chen
  - Genliang Zhu
  - Ziyuan Wang
  - Chu Wang
comments: null
tags:
  - llm
  - code-repair
  - testing
  - api-migration
  - edge-cases
  - paper
why_read: >-
  You get the preregistered protocol, the withheld contracts and the per-task numbers, with
  artifacts available from the authors on request.
rank: 4
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

A preregistered study of 73 tasks covering 60 documented changes in CPython, Node.js and SQLite measured what happens when LLMs repair code after a runtime or API migration. Every candidate ran on the real runtimes against withheld contracts. An all-assertions gate on typical test inputs released 0.410 of wrong repairs. One edge input written from the release note cut that to 0.065, and to 0.061 on 15 unseen clusters.

The failure mode is silent. A repaired procedure runs cleanly and returns wrong results, so a release check on typical inputs ships it. For anyone using LLMs on migrations, one edge input written from the release note is a cheap and effective guard. Three inputs from a blind GPT-5.6-luna writer that never saw the program reached 0.070. Across four model families, the edge input cut wrong releases per attempt in all three open-weight families on all three menus, for example from 0.233 to 0.057, without lowering correct completion.

The guard is not airtight. Two frozen stages enlarged the repair menu to 1491 fragments, then added 233 hard distractors that match the legacy output on typical inputs. Of those hard wrong programs, 0.168 still passed the edge input and 0.153 passed the frontier-model writer. Self-tests helped less, and two local-model writers failed their preregistered tests. A blind AI audit flagged 34 contracts as stricter than their requirements; dropping the disputed checks changed no verdicts, though class-label disputes remain open.
