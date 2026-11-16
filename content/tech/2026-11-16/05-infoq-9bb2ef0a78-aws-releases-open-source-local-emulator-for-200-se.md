---
id: 9bb2ef0a78
title: AWS releases open-source local emulator for 200+ services, built by agents
original_title: AWS Open-Sources Emulator for Local Testing of 200+ Services by Coding Agents
url: >-
  https://www.infoq.com/news/2026/11/aws-emulator-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-16"
published_at: "2026-11-16T10:40:00.000Z"
authors:
  - Daniel Dominguez
comments: null
tags:
  - aws
  - emulator
  - local-testing
  - coding-agents
  - rust
  - localstack
  - news
why_read: >-
  The original lists the install options, the documented limits and the published fidelity approach,
  which help you judge whether this suits your test setup better than existing emulators.
rank: 5
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

AWS has released AWS Emulator, a local program that serves an HTTPS endpoint for the public APIs of more than 200 services. You point the CLI or an SDK at it with AWS_ENDPOINT_URL. It is written in Rust and generated from over 400 Smithy API models. AWS says agents wrote and tested the code, with a merge gate checking compilation, security and fidelity regressions.

Fidelity varies by service. AWS publishes versioned tests and per-service scores, and a test passes only if status codes, side effects and exact errors all match. Unimplemented operations return HTTP 501 NotImplemented. One developer counted the published tests and found S3, DynamoDB and SQS passing about two in three, and CloudFormation under one in five.

The limits are significant. It does not evaluate IAM or resource-based policies, so it cannot test security. It uses one account and Region per process, keeps state in memory only, and has not been tested for long-running use or load. Terraform, CDK and CloudFormation support varies by service.

It competes with LocalStack, Floci and moto, and AWS does not claim it replaces them for permission testing or infrastructure-as-code pipelines. Source is CC0, and there is no prebuilt macOS or Windows image. A community member has published a container image and GitHub Action to fill that gap.
