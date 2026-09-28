---
id: 441d588318
title: Wiring job-class hints into liquid cooling cuts thermal violations by 56% in AI data centres
original_title: Job Class Thermal Intent Aware Liquid Cooling Allocation for AI Data Centers
url: https://arxiv.org/abs/2609.30785
source: arXiv cs.DC
kind: paper
section: infrastructure
date: "2026-09-28"
published_at: "2026-09-28T04:00:00.000Z"
authors:
  - Krishna Chaitanya Sunkara
comments: null
tags:
  - liquid-cooling
  - gpu
  - scheduling
  - dc-workload
  - mlperf
  - arxiv
  - paper
why_read: >-
  You will see a concrete way to close the 30 to 50 second sensing gap in GPU cooling by passing
  scheduler hints to the chiller, with reported numbers to gauge whether the lift is real.
rank: 12
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers propose Job-Class Thermal Intent (JCTI), a scheme that lets the scheduler tell the cooling controller what class of GPU job is about to run, so coolant flow can be staged before temperatures rise. Existing liquid loops respond only after a sensor flags a thermal climb, a window of 30 to 50 seconds they cannot afford at high power densities.

Thermal signatures were extracted from MLPerf GPU power traces and arrival patterns tuned against Alibaba cluster data. Over 120 paired Monte Carlo trials against a standard PI loop, JCTI produced 56.4% fewer thermal violations and 60.2% lower cumulative overshoot.

The authors frame the work as coupling two systems that have historically run blind to each other, the scheduler and the cooling plant. They also claim a secondary benefit for grid-side planning: smoother power swings from thermally aware scheduling improve load prediction as AI sites push toward gigawatt-scale demand.

The source is an arXiv abstract, so the 56.4% and 60.2% figures are the authors' own and have not been independently reproduced. Details of the controller, job classes used, and how the system handles jobs without prior thermal fingerprints are not in the abstract.
