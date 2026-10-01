---
id: f6a9591e59
title: Netflix replaces cloud provider IAM with custom workload attestation on managed compute
original_title: "Trading a Cloud Identity for Your Own: Workload Attestation on Managed Compute"
url: >-
  https://netflixtechblog.com/trading-a-cloud-identity-for-your-own-workload-attestation-on-managed-compute-516d5a29b252?source=rss----2615bd06b42e---4
source: Netflix Tech Blog
kind: blog
section: systems
date: "2026-10-01"
published_at: "2026-09-25T16:01:03.000Z"
authors:
  - Netflix Technology Blog
comments: null
tags:
  - identity
  - workload-attestation
  - kubernetes
  - infrastructure
  - security
  - blog
why_read: >-
  Learn how Netflix built identity infrastructure that works across both self-hosted and
  cloud-managed compute without relying on provider IAM.
rank: 10
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Netflix replaced cloud provider identity systems with its own workload attestation on managed compute platforms. The company shifted from relying on cloud IAM roles and instance profiles to issuing and verifying custom credentials that internal services check before responding to requests.

For operators running long-lived services on shared infrastructure, custom attestation reduces dependencies on cloud provider identity and enables consistent identity practices across owned and managed infrastructure. This matters when your security model depends on your own identity layer rather than delegating it entirely.

The constraint is real: managed compute platforms do not provide bootstrapping hooks for custom identity systems. Netflix developed attestation mechanisms to work within those limits, issuing workload identity without direct access to the platform's underlying instance state.
