---
id: 67ec69c54c
title: Remembering failure gives repair agent retries no significant gain
original_title: >-
  What Does a Repair Agent Gain from Remembering Its Failure? An Exploratory Study on Real Python
  Bugs
url: https://arxiv.org/abs/2610.41433
source: arXiv cs.SE
kind: paper
section: papers
date: "2026-11-02"
published_at: "2026-11-02T05:00:00.000Z"
authors:
  - Wenbo Ye
  - Yongxi Zhou
  - Junwei Yao
  - Jiahui Ge
comments: null
tags:
  - repair-agents
  - llm-agents
  - failure-memory
  - automated-program-repair
  - evaluation
  - paper
why_read: >-
  Predeclared effect sizes and confidence intervals for each memory condition, plus the sample sizes
  a confirmatory study needs.
rank: 9
interest_score: 6
depth_score: 6
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

The authors retried 181 failed repair attempts by gpt-5.4-mini on 75 BugsInPy bugs under five conditions, each giving the agent a different record of the failure, such as the transcript, a self-written lesson, or extracted test signals. On bug-revealing tests, every memory condition gained over a plain retry in point estimate, by +5.5 to +9.9 points on a 29.8% baseline. None of the gains was statistically significant. Follow-ups repeated three conditions with the larger gpt-5.4 and added a notice-only control.

For anyone wiring retry loops into coding agents, the sharpest result is negative. A model-written lesson gave no advantage over the transcript it summarises, at -1.7 points (95% CI [-8.7, +4.9]) and -3.5 for gpt-5.4, while costing an extra model call. The transcript itself seems to carry more than the fact of failure. A notice alone produced no significant change, but for gpt-5.4-mini the transcript resolved 12.2 points more failures than the notice (CI [+4.2, +20.0]).

The caveats are real. That transcript-versus-notice contrast was the only significant one of twelve predeclared contrasts, came from a partial run of 156 failures, and did not hold for gpt-5.4. A post hoc full-test-suite check found retries that had seen the previous attempt's test results more often failed other tests the reference fix passes, shrinking their apparent gains. Post hoc again, memory retries less often ended without editing any Python file. Outcomes varied far more between failures than between conditions, and the paper gives the sample sizes a confirmatory study would need.
