---
id: 3ba5250934
title: AWS Lambda raises timeout to 90 minutes on Managed Instances
original_title: AWS Lambda Pushes Serverless Toward Long-Running Workloads
url: >-
  https://www.infoq.com/news/2026/09/lambda-90-minute-timeout/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-20"
published_at: "2026-09-19T09:11:00.000Z"
authors:
  - Renato Losio
comments: null
tags:
  - aws
  - lambda
  - serverless
  - cloud
  - managed-instances
  - news
why_read: >-
  It tells you what the 90-minute Lambda timeout actually changes, where it applies, and the
  idempotency and cost gotchas to plan around.
rank: 9
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

AWS has raised the Lambda function timeout from 15 minutes to 90 minutes for workloads running on Lambda Managed Instances, which sit alongside the existing 15-minute synchronous and 8-hour MicroVM options. The change is available in every region where Managed Instances are offered, and Managed Instances also now support Graviton5-backed EC2 compute.

For practitioners, the practical effect is that long-running tasks such as media transcoding, ETL jobs, AI inference and large file transfers can run inside Lambda without Step Functions glue or ECS tasks. Managed Instances let multiple invocations share a single instance and expose EC2-style pricing and sizing, which changes the cost calculus compared to on-demand Lambda.

AWS and the serverless community both flag idempotency as the main hazard. The 90-minute window widens the surface for retries and duplicate delivery, so AWS recommends Powertools for Lambda to enforce idempotency in handlers that touch payments or databases.

Community reaction is mostly positive, though some practitioners argue that workloads needing an hour and a half are usually better served by ECS Tasks, AWS Batch or Step Functions, since Lambda pricing still assumes continuous active compute rather than long waits.
