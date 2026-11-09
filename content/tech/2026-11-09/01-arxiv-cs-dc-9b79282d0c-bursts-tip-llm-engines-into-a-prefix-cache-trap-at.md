---
id: 9b79282d0c
title: Bursts tip LLM engines into a prefix-cache trap at loads they served before
original_title: "Inside the Trap: A Renewal Law for Prefix-Cache Collapse in LLM Agent Serving"
url: https://arxiv.org/abs/2611.08902
source: arXiv cs.DC
kind: paper
section: ai-and-ml
date: "2026-11-09"
published_at: "2026-11-09T05:00:00.000Z"
authors:
  - Akshat Valse
  - Ali Jannesari
comments: null
tags:
  - llm-serving
  - prefix-caching
  - kv-cache
  - queueing-theory
  - capacity-planning
  - agents
  - paper
why_read: >-
  You get the renewal-law analysis of prefix-cache collapse, the registered test evidence, and a
  session-cap fix that works without shedding load.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

The paper reports that a burst of sessions can tip an LLM serving engine into a trap where every agent turn misses the prefix cache and the backlog never drains, at a load the engine served before. In registered paired tests on two engines, two GPUs and two models, passed at 9 of 10 rates, a 200-session burst left the engine at zero cache hits to the end in all 30 runs. Matched no-burst runs stayed healthy, and a session cap prevented the trap in all 30 capped runs.

This matters to anyone serving LLM agents. Prefix-cache reuse is what makes multi-turn agents affordable, and a short burst can cause a collapse that outlasts it. The model also shows a trap's measured throughput overstates the recovery threshold, so a stuck engine appears to sustain more load than it can.

The analysis idealises the trapped engine as a fluid FIFO server on which every turn misses. Along FIFO orbits its cycles obey a linear renewal recursion, and the trap drains if and only if arrivals fall below the all-miss capacity. Above that, a Perron root fixes the dynamics and every trapped state converges to a self-similar regime in which the gap between turns grows linearly and served turns are young and short. In this workload the backlog grows at 0.6 to 0.8 of the excess load.

The theory matched 57 stuck runs retrospectively, with nothing fitted to trap data, predicting the mean served prompt within 3% in 50 runs. Four blind runs, trapped by a tool slowdown, met four of five pre-set scores, and trapped runs on a 20-step budget completed below the all-miss capacity as predicted. Refusing arrivals sheds sessions. A session cap restores reuse, rescuing 9 of 9 established traps at the same load without shedding. The authors do not prove the engine converges to the model.
