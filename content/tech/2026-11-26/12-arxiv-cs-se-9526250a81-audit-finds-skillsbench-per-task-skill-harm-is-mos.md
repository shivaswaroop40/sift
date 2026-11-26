---
id: 9526250a81
title: Audit finds SkillsBench per-task skill harm is mostly run-sampling noise, not real regressions
original_title: >-
  What Does Skill Lift Actually Measure? A Source-Code-Level Audit and Noise-Aware Reanalysis of
  SkillsBench
url: https://arxiv.org/abs/2611.33943
source: arXiv cs.SE
kind: paper
section: papers
date: "2026-11-26"
published_at: "2026-11-26T05:00:00.000Z"
authors:
  - Haozhe Zhang
  - Zhen Long
comments: null
tags:
  - agent-skills
  - benchmarks
  - coding-agents
  - statistics
  - evaluation
  - reproducibility
  - paper
why_read: >-
  You get a worked example of how small per-cell sample sizes and grader flaws can produce
  misleading agent benchmark conclusions, plus published audit ledgers and scripts to check.
rank: 12
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

An audit of SkillsBench, which reported that human-curated agent skills lift pass rates by about 16.6 percentage points, re-examined the benchmark at source-code level. The authors analysed 7,554 public trials, forming 1,421 paired configuration-and-task cells. They found two verified cases of grader dependence and one operational definition gap. Lift on those three tasks averaged 74.6 pp, against 18.7 pp overall.

The audit also found placeholder skill directories in four tasks. One execution harness added 48 built-in skills in most runs, which blurs the skill and no-skill conditions. No task-level reduction survived multiple-testing correction in the pooled reanalysis.

Each cell had at most three runs per condition, so negative differences are easily produced by sampling noise. Arithmetically, 58% of cells could not have shown a decrease at all. The raw count of negative cells therefore cannot show that skills cause harm.

Later work has gated or removed skills based on per-task gains. The authors tested a gating strategy using the skill-free score. It appeared to gain 2-3 pp in the logs, but shuffled condition labels with no skill effect still gave 4-7 pp. On held-out runs there was no significant improvement.
