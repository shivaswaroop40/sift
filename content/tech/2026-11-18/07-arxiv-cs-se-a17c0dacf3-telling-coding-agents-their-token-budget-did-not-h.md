---
id: a17c0dacf3
title: >-
  Telling coding agents their token budget did not help; enforcing the cap cut resolution by 20
  points
original_title: Does Your Agent Need to Know Its Budget? A Placebo-Controlled Experiment on LLM Coding Agents
url: https://arxiv.org/abs/2611.21614
source: arXiv cs.SE
kind: paper
section: papers
date: "2026-11-18"
published_at: "2026-11-18T05:00:00.000Z"
authors:
  - Iftesam Nabi
  - Jarif Ul Alam
  - Sunzid Hassan
  - Sabbir Alom Shuvo
  - Md Faiaz Al Islam
  - Yead Rahman
comments: null
tags:
  - llm-agents
  - coding-agents
  - token-budgets
  - experiment-design
  - program-repair
  - cost-control
  - paper
why_read: >-
  You get a clean example of placebo-controlled design applied to agent prompting, and evidence that
  budget limits are better handled by enforcement design than by wording.
rank: 7
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Researchers ran a placebo-controlled factorial experiment on token budgets for LLM coding agents. They crossed budget enforcement with budget disclosure on two program-repair benchmarks, using two open models and three cap levels, for 5,835 runs. A calibrated cap lowered task resolution by 20.0 percentage points and cut tokens per resolved task roughly twelvefold.

Telling the agent about the enforced budget never helped. The placebo-controlled risk difference was -2.8 pp at the medium cap (CI -6.2 to +0.7) and -4.2 pp at the tight cap (CI -8.1 to -0.2, nominally significant and unadjusted). Every prompt wording and per-turn feedback variant fell far short of the 10-point effect the authors cared about.

An unrelated placebo sentence raised resolution by 7.2 pp over silent enforcement. Without a placebo arm, that would look like a benefit of disclosure. Run-to-run variance under caps was about 1.5 times the uncapped level, though part of that comes from resolution rates moving closer to one half.
