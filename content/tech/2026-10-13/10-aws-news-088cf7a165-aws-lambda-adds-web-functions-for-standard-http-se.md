---
id: 088cf7a165
title: AWS Lambda adds Web Functions for standard HTTP servers without rewriting code
original_title: Announcing AWS Lambda Web Functions
url: >-
  https://aws.amazon.com/blogs/aws/announcing-aws-lambda-web-functions-for-fast-consistent-web-app-performance-anywhere/
source: AWS News
kind: blog
section: infrastructure
date: "2026-10-13"
published_at: "2026-10-12T22:34:47.000Z"
authors:
  - Micah Walter
comments: null
tags:
  - lambda
  - serverless
  - node-js
  - http
  - multi-region
  - cost-billing
  - blog
why_read: >-
  Understand the operational model, cost trade-offs, and deployment workflow for this new Lambda
  form factor.
rank: 10
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

AWS has launched Lambda Web Functions, a new compute form factor that runs standard HTTP frameworks like Express and Fastify without code changes. Deploy with a single CLI command; Lambda handles multi-region distribution and manages scaling automatically. The environment supports up to 128 concurrent requests and meters only active CPU time, not I/O wait.

For engineers running distributed web applications, this matters because it removes the adapter layer and infrastructure work typically needed for multi-region serverless deployment. The concurrent execution model and CPU-only billing favour I/O-heavy workloads like server-side rendering and API backends, potentially reducing costs compared to per-request billing.

Web Functions integrate with CloudFront for mixed static-dynamic content and support canary deployments through traffic splitting between revisions. The service is currently available in five regions running Node.js 24 on Arm64, with VPC support included.
