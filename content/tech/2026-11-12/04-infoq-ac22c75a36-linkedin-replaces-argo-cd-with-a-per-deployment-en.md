---
id: ac22c75a36
title: LinkedIn replaces Argo CD with a per-deployment engine, cutting infra failures from 925 to 63
original_title: LinkedIn Replaces Argo CD with a Custom GitOps Engine for Kubernetes Deployments
url: >-
  https://www.infoq.com/news/2026/11/kubernetes-argocd-linkedin/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-12"
published_at: "2026-11-12T09:00:00.000Z"
authors:
  - Claudio Masolo
comments: null
tags:
  - argo-cd
  - gitops
  - kubernetes
  - linkedin
  - deployment
  - etcd
  - news
why_read: >-
  You get the specific Argo CD scaling limits LinkedIn hit, plus two checks you can run on your own
  clusters without a rewrite.
rank: 4
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

LinkedIn has replaced Argo CD with an in-house GitOps engine for deployments across more than 250 Kubernetes clusters, 4,000 services and 100,000 weekly deployments. It reports infrastructure failures fell from 925 to 63 despite 3.7x more deployments. Median time to detect and conclude a failed deployment dropped from 16.1 to 2.45 minutes.

The team listed seven problems with Argo CD at scale. Argo CD keeps one watch per group-version-resource, so etcd churn from one app slows syncs for all. In one test, sync took under 3 minutes at 60,000 pods and over 10 minutes beyond 80,000. Server-side-apply also loses field ownership after more than 10 field managers, so removed containers can survive on live Pods.

The new engine is a library, not a controller. Each deployment runs in its own pod with no shared state. It uses PUT instead of PATCH, retries on resourceVersion conflicts, and runs a 3-way diff that fails the deployment on real drift. The same pod then watches status until the object converges or times out.

The figures are not a clean measure of the engine alone. LinkedIn says the orchestrator's error classification and reliability also improved over the period, and drift errors are excluded from the failure count. The engine is internal, with no open-source release mentioned. Argo CD still handles cluster add-ons and system services.
