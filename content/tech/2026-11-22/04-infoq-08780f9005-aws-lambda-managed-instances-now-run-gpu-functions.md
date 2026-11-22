---
id: 08780f9005
title: AWS Lambda Managed Instances now run GPU functions, with 48 invocations sharing one model
original_title: AWS Lambda Now Runs GPU Inference with 48 Concurrent Invocations Sharing One Model per GPU
url: >-
  https://www.infoq.com/news/2026/11/aws-lambda-gpu-managed-instances/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-22"
published_at: "2026-11-22T06:27:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - aws-lambda
  - gpu
  - inference
  - serverless
  - vllm
  - aws
  - news
why_read: >-
  The original has the capacity provider and function configuration, the launch limits, and two
  early hands-on reports with concrete quota, tooling and image-build snags.
rank: 4
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

AWS has added GPU support to Lambda Managed Instances. Event Functions deployed as container images can run on EC2 G-series instances, from G4dn to G6e. Up to 48 concurrent invocations in one environment share a single copy of the model in GPU memory. Pricing is the EC2 On-Demand rate plus a 9.75 percent management fee and $0.20 per million requests. There is no duration charge.

Early tests show the limits. Classmethod found 37 of 81 accelerated instance types accepted, all G-family. Terraform and Cloud Control do not yet support the AcceleratorConfig block, and the default GPU vCPU quota in a new account is zero. One community test served 48 simultaneous requests on a g6.2xlarge with Gemma 4 E2B, at about 3,400 to 3,600 tokens a second in total.

For teams running event-driven inference, this removes drivers, AMIs and device plugins from the operating burden. The trade-off is cost and scaling. An instance bills while the minimum environment count is above zero, and new instances take tens of seconds to launch. Yan Cui's earlier analysis says that makes it a poor fit for large, unpredictable spikes.

The path is narrow. Only Event Functions are supported, not Web Functions. The community test returned complete replies, so time to first token was not measured. Its author advises running vLLM on EC2 directly if you need streaming or full control of the server.
