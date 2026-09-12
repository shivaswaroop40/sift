---
id: 90bdf2a123
title: Netflix reworks Conductor for 420 million monthly workflow executions
original_title: Netflix Reworks Conductor for 420 Million Monthly Workflow Executions and 10X Larger Workflows
url: >-
  https://www.infoq.com/news/2026/09/netflix-conductor-4-workflow/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-09-12"
published_at: "2026-09-11T14:17:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - conductor
  - netflix
  - workflow-orchestration
  - scalability
  - distributed-systems
  - timestone
  - news
why_read: >-
  Learn how Netflix redesigned Conductor to cut evaluation latency and support 30,000-task
  workflows.
rank: 8
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: deepseek-v4-flash
---

Netflix has reworked Conductor, its workflow orchestration engine, to handle growing scale. The engine now runs about 420 million workflows per month across roughly 200,000 workflow definitions and 150 applications. The redesign increases the supported workflow size from about 2,500 to 30,000 tasks and reduces p99 workflow evaluation latency by about 40%.

The bottleneck was workflow evaluation. Earlier versions loaded the complete workflow state into memory during evaluation, which created pressure as workflows grew. Conductor 4.0 separates workflow metadata from task and user data, storing tasks independently. The evaluator uses a lightweight workflow blueprint and loads only the task data needed for the next decision.

The redesign also removes locking from task state coordination. Pending and terminal task states are stored separately and reconciled in the application layer, with terminal state taking precedence. Workflow evaluation moved out of the synchronous request path, with updates placed into exclusive Timestone queues for sequential asynchronous processing. Netflix reports that failed lock acquisition attempts dropped from about 2,700 per interval to essentially zero.

Netflix expects workflow demand to grow fivefold as it expands into live content, games and podcasts. The company discontinued maintenance of its public Conductor OSS repository in December 2023, citing a shift to its internal fork. Community-contributed modules and extensions remain in a separate Conductor community repository.
