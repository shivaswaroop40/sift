---
id: 2d2520a26d
title: Review and deployment, not generation, bottlenecked Bloomberg's LLM code migrations
original_title: Hybrid LLM-Deterministic Pipelines for Enterprise-Scale Code Migration at Bloomberg
url: https://arxiv.org/abs/2611.05457
source: arXiv cs.SE
kind: paper
section: papers
date: "2026-11-05"
published_at: "2026-11-05T05:00:00.000Z"
authors:
  - Mario Corchero
  - David Williams
  - Laszlo Kiss Kollar
  - Haowen Liu
  - Shivam Bairoliya
  - Gala Malbasic
comments: null
tags:
  - llm
  - code-migration
  - bloomberg
  - cpp
  - python
  - automation
  - paper
why_read: >-
  You get the full architecture of a hybrid LLM-deterministic pipeline that ran on thousands of
  repositories, and the patterns Bloomberg distilled from it.
rank: 4
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Bloomberg has published its experience with Automated Uplift, a multi-month initiative that ran LLM-assisted migration pipelines across thousands of repositories. It covers two campaigns: a heterogeneous Python packaging migration across roughly 1,900 candidate repositories, and a uniform C++ build system migration across roughly 6,700. Together they generated 2,333 pull requests and 729 successful migrations. The design maximises deterministic processing, confines the LLM to bounded file transformations within a pre-computed context, and uses runtime telemetry such as execution logs and usage traces.

The paper's central finding is that generating the migrations was the easier part. The bottleneck was the cost to owning teams of reviewing, testing, and deploying them. Fewer than a third of those pull requests became completed migrations. For anyone planning similar work, the constraint is verification capacity, not model output.

Two conditions lowered those costs. Changes that could be verified directly in the pipeline before a PR was opened, as with C++ compilation and test validation, shifted work off owning teams. And a uniform repository population let fixes carry over from one repository to the next, a property of the C++ campaign that the heterogeneous Python campaign lacked.
