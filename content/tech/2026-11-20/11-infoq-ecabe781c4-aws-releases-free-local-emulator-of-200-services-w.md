---
id: ecabe781c4
title: AWS releases free local emulator of 200 services, written by agents, with mixed fidelity scores
original_title: AWS Releases a Free Local Emulator of AWS Built Entirely by Agents
url: >-
  https://www.infoq.com/news/2026/11/aws-emulator-local-testing/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-20"
published_at: "2026-11-20T06:53:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - aws
  - local-testing
  - emulator
  - ai-agents
  - dynamodb
  - iam
  - news
why_read: >-
  You get the per-service fidelity figures, the documented IAM gap, and the three-agent merge-gate
  design, which together show where this emulator can and cannot stand in for real AWS.
rank: 11
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

AWS has released AWS Emulator, a CC0-licensed local implementation of more than 200 services. It is a single Rust binary generated from 438 public API models and listens on port 9297. AWS says agents wrote every line. Teams run three agent groups: one maintains tests, one finds issues, one fixes them. Each fix passes a merge gate with agent reviews.

The first outside numbers come from AWS Community Builder Kento Ikeda, who ran version 1.0.322 in GitHub Actions. DynamoDB, S3 and SQS passed roughly 60 to 70 percent of service-level fidelity tests. CloudFormation sat near 20 percent. Error wording matched AWS, but a new DynamoDB table stayed in CREATING for three seconds and rejected writes meanwhile.

The security limits are stated plainly by AWS. The emulator does not evaluate IAM or resource-based policies as AWS does, so a request AWS denies may succeed. Unimplemented operations return HTTP 501. Throttling, outages and regional differences are not simulated. Telemetry is on by default, and the repository takes no pull requests.

Practitioner reaction is split. An AWS-identified commenter on Hacker News said it is a real product that will be maintained. Another pointed to 29,684 commits in under a month as a reason for doubt. Ikeda places it as a third layer between mocks and a real sandbox.
