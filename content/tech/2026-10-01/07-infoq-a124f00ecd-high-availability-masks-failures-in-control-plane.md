---
id: a124f00ecd
title: High availability masks failures in control plane dependencies
original_title: "Article: High Availability Is Not Resilience: Why Cloud Systems Fail When It Matters Most"
url: >-
  https://www.infoq.com/articles/high-availability-not-resilience-cloud/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-10-01"
published_at: "2026-10-01T09:00:00.000Z"
authors:
  - Alexey Golev
comments: null
tags:
  - high-availability
  - resilience
  - control-plane
  - cloud-operations
  - failover
  - distributed-systems
  - news
why_read: >-
  Learn why multi-region failover can silently fail when control-plane dependencies create hidden
  correlation.
rank: 7
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

A team upgraded load balancers to TLS 1.3 for compliance. Route 53 health checks require TLS 1.2; they could not complete the handshake and marked the region unhealthy. The CDN stopped routing traffic to it. Inside the region, services were running fine. Traffic had stopped arriving from outside.

High availability handles expected failures within design assumptions. Resilience handles failures the system was never designed for. The distinction matters because real incidents rarely fit those assumptions. Redundancy stops protecting when failures correlate across replicas or affect the control plane.

Most organisations own availability through on-call rotations and SLOs but leave resilience ownership ambiguous. Runbooks rot. Recovery paths become hypothetical. Testing meaningful failure scenarios costs money and operational risk, pushing teams toward assuming recovery capability rather than demonstrating it.
