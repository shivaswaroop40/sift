---
id: 9e73b3a72f
title: A third of GitHub Actions failing streaks start without any repository change
original_title: Stuck on Red? Understanding GitHub Actions Failing Streaks
url: https://arxiv.org/abs/2610.41863
source: arXiv cs.SE
kind: paper
section: papers
date: "2026-11-02"
published_at: "2026-11-02T05:00:00.000Z"
authors:
  - Aref Talebzadeh Bardsiri (UMONS)
  - Tom Mens (UMONS)
  - Alexandre Decan (UMONS)
  - Thomas Degueule (LaBRI)
  - Jean-R\'emy Falleri (LaBRI)
comments: null
tags:
  - github-actions
  - continuous-integration
  - empirical-study
  - failure-analysis
  - devops
  - paper
why_read: >-
  You get the distribution of CI failure streaks across 43,000 repositories, and the log evidence
  that many failures are external rather than from your last commit.
rank: 3
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Researchers studied failing streaks in GitHub Actions, meaning uninterrupted series of failing runs of one workflow. The dataset covers 30.9 million runs across 154,000 workflows in 43,000 repositories over 238 days. Three quarters of failing runs follow another failing run, and half of workflows with at least three runs have at least one failing streak. A third of streaks start, and two in five end, with no change to the repository.

The practical lesson is that a red build does not always point at the last commit. In a sample of 100 streaks, those that ended without a repository change most often failed because of network issues or an external service. Debugging the diff in those cases wastes time. The authors suggest tooling could flag failures that occur with no accompanying change.

Duration is skewed. Most streaks end within hours, but the one in five that last more than a day account for the bulk of the time workflows spend failing. The authors propose alerting maintainers when a workflow stays failing that long. Workflows serving multiple purposes, such as building and deploying, streak more often than single-purpose workflows of the same size.
