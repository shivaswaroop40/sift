---
id: e2615803f7
title: Modal rebuilt sandbox infrastructure to spawn 1 million containers in under a minute
original_title: "Beyond Kubernetes at Modal: How to Scale 1 Million Concurrent Sandboxes in Seconds"
url: >-
  https://www.infoq.com/news/2026/09/modal-scaling-sandboxes/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-09-24"
published_at: "2026-09-23T14:00:00.000Z"
authors:
  - Sergio De Simone
comments: null
tags:
  - kubernetes
  - scaling
  - modal
  - redis
  - serverless
  - infrastructure
  - news
why_read: >-
  You will get a concrete account of why Kubernetes falls over at a million pods and how Modal
  replaced central coordination with worker-local state.
rank: 1
interest_score: 8.7
depth_score: 9
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Modal staff engineers Colin Weld and Connor Adams describe rebuilding the platform's sandbox infrastructure to handle 1 million concurrent sandboxes and tens of thousands of creations per second. The team benchmarked 1 million sandbox creations in under a minute, with median startup-to-code time below 0.5 seconds.

The redesign abandons centralised orchestration. Each worker holds its own state and decides locally whether to accept a sandbox request, with scheduling servers contacting workers directly via RPC. The only shared component is a single Redis stream where workers publish state, which load testing suggests remains viable past 100,000 workers.

Modal chose this path because Kubernetes and etcd scale poorly at millions of pods. Pods and nodes each write to etcd multiple times, and etcd cannot shard within a keyspace, so high churn creates serious pressure. Overcoming that would require replacing etcd and parallelising the scheduler, which the team judged too much work.

AWS principal engineer Alex Jones argues the work is a credible signal that Kubernetes is not adapting fast enough for GenAI infrastructure, and that execution and coordination planes are decoupling. Similar projects pursuing sub-10-millisecond cold starts at scale include Unikraft, Google Substrate, and Overdrive.
