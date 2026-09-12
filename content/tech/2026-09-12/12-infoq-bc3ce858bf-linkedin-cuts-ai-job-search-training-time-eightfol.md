---
id: bc3ce858bf
title: LinkedIn cuts AI job-search training time eightfold with multi-teacher distillation
original_title: How LinkedIn Trains AI Job Search 8x Faster with Multi-Teacher Distillation
url: >-
  https://www.infoq.com/news/2026/09/linkedin-ai-multi-teacher/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-09-12"
published_at: "2026-09-11T10:00:00.000Z"
authors:
  - Claudio Masolo
comments: null
tags:
  - multi-teacher-distillation
  - sglang
  - ranking
  - training-speedup
  - llm
  - linkedin
  - news
why_read: >-
  Learn how LinkedIn combined SGLang-based teacher serving, caching, and training optimisations to
  get an eightfold speedup.
rank: 12
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: deepseek-v4-flash
---

LinkedIn has published details of the training infrastructure behind its AI-powered job search. It uses a multi-teacher distillation pipeline that compresses knowledge from large teacher models into a 0.6B-parameter ranking model. The custom framework is built on SGLang and serves teacher models directly in the training loop. The system is live in production for US users.

Serving large teachers for every training example is a bottleneck for ranking systems that handle hundreds of thousands of queries per second. LinkedIn splits the work into online and offline modes. Online distillation queries teachers during early iteration; offline mode precomputes teacher outputs and stores them on HDFS or NFS. This lets teams avoid repeated calculations once teachers stabilise.

The speedup comes from stacking optimisations, not one trick. LiGer cuts memory and doubles batch size; multi-node training adds up to 3.5x; FSDP2 adds 20%; H200 clusters add up to 30%. FP8 mixed precision showed no benefit for models under 8B parameters. The 0.6B student improved NDCG@10 by 24.48%, from 0.7583 to 0.9432.

Inference-side work included structured pruning and context compression, raising ranking throughput from about 290 to over 2,000 items per second per GPU. The article reports LinkedIn's own claims; there is no independent evaluation. Teams building similar systems can adopt the online/offline split, but should measure whether each optimisation pays off at their own scale.
