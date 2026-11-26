---
id: 48694cecb3
title: AWS Lambda raises its maximum timeout from 15 to 30 minutes for on-demand functions
original_title: AWS Lambda Doubles Its Timeout to 30 Minutes After Eight Years at 15
url: >-
  https://www.infoq.com/news/2026/11/aws-lambda-30-minute-timeout/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-26"
published_at: "2026-11-25T07:02:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - aws-lambda
  - serverless
  - timeouts
  - sqs
  - cloud-run
  - concurrency
  - news
why_read: >-
  You get the concurrency arithmetic, the SQS and stream gotchas, and one tester's finding that the
  visibility-timeout check only runs at mapping creation.
rank: 5
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

AWS has doubled the maximum timeout for on-demand Lambda functions from 15 to 30 minutes. It applies to synchronous, asynchronous and event source mapping invocations in all commercial regions, at standard pricing and with no opt-in. The 15-minute cap dates from 2018. Lambda rejects any value above 1,800 seconds. Web Functions stay at 15 minutes, and Lambda MicroVMs allow eight hours.

Capacity is the first thing to check. Concurrency is request rate multiplied by average duration, so the same traffic at 30 minutes needs twice the concurrency. One request per second needs 1,800 concurrent executions. Downstream settings matter too. An SQS visibility timeout should be at least six times the function timeout, which is three hours. Kinesis and DynamoDB Streams shards process one batch at a time, so a slow function slows the shard.

There are limits and caveats. Amazon MQ, DocumentDB and Kafka mappings created before 19 November stay at 14 minutes. NAT gateways still drop idle connections after 350 seconds, and the Init phase keeps its 10-second limit. One practitioner found Lambda only checks queue visibility timeout at mapping creation, and only against the function timeout, not six times it. An async function that times out three times runs for 90 minutes before reaching a dead-letter queue.

Opinion is mixed. Commenters note Lambda is costly per CPU second against EC2, that long jobs still bill for full duration at configured memory, and that Step Functions with Fargate or ECS remains cleaner for stateful multi-step work. Others see it as a response to Cloud Run, which allows 60 minutes per request. AWS has not said whether the limit will rise again.
