---
id: f6a9591e59
title: Netflix explains how to swap cloud provider identity for an in-house one on managed compute
original_title: "Trading a Cloud Identity for Your Own: Workload Attestation on Managed Compute"
url: >-
  https://netflixtechblog.com/trading-a-cloud-identity-for-your-own-workload-attestation-on-managed-compute-516d5a29b252?source=rss----2615bd06b42e---4
source: Netflix Tech Blog
kind: blog
section: security
date: "2026-09-26"
published_at: "2026-09-25T16:01:03.000Z"
authors:
  - Netflix Technology Blog
comments: null
tags:
  - workload-identity
  - attestation
  - iam
  - managed-compute
  - security
  - netflix
  - blog
why_read: >-
  A concrete recipe for workload attestation on managed compute, useful if you want to escape cloud
  IAM lock-in.
rank: 5
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

Netflix has published a walkthrough of swapping the identity handed out by a cloud provider for one the company controls itself, even when workloads run on managed compute. The post sketches the two-identity problem most large teams face: a cloud IAM role, and a separate internal identity that downstream services actually trust.

The practical part covers how Netflix bootstraps its own identity on managed runtimes where the provider's metadata service is the default. The point is to let workloads prove who they are using attestation rather than inherited cloud credentials, which matters when you cannot modify the underlying host.

For platform teams, this is a pattern to copy when you want service-to-service auth that does not depend on a single provider's IAM. The trade-off is the usual one: more moving parts in the boot path in exchange for portability and tighter control over workload identity.
