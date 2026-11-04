---
id: c40e74c693
title: OpenShell sandboxes AI agents on Kubernetes with per-binary, per-method network rules
original_title: "OpenShell on Kubernetes: A guide for platform engineers"
url: https://www.cncf.io/blog/2026/11/04/openshell-on-kubernetes-a-guide-for-platform-engineers/
source: CNCF
kind: blog
section: infrastructure
date: "2026-11-04"
published_at: "2026-11-04T12:00:00.000Z"
authors:
  - Jim Bugwadia
  - Nirmata
comments: null
tags:
  - openshell
  - kubernetes
  - ai-agents
  - sandboxing
  - network-policy
  - security
  - blog
why_read: >-
  The original walks through the full sandbox lifecycle on a kind cluster, from gateway request to
  live policy update, with exact commands and version numbers.
rank: 2
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: glm-5.3
---

OpenShell, started by NVIDIA and now a CNCF Sandbox project, runs each AI agent in its own sandbox on Kubernetes. A trusted supervisor outside the sandbox mediates every outbound request, checking destination, port, calling binary, and HTTP method. Controls are declared in YAML. Landlock restricts filesystem paths, the runtime drops the agent to non-root with seccomp, outbound traffic is denied by default, and the agent sees only placeholder API keys, with the supervisor swapping in real ones for allowed endpoints.

The value for platform teams is control below the Pod level. A NetworkPolicy can say a Pod may reach api.github.com on 443, but not that curl may read issues while POSTs to them are denied. OpenShell enforces that, and a policy update takes effect on a running sandbox without a restart. The backend uses the SIG Apps Agent Sandbox resource, so agents appear as ordinary Pods, Services, PVCs, Secrets, and NetworkPolicies.

Two limits stand out. Sandboxes can only be created through the Gateway API, not the Kubernetes API, though a CRD and operator are on the roadmap (openshell/#1719). And one supervisor Pod per agent gives strong isolation but may not scale in large environments; RFC 0018 covers flexible deployment options. The demo runs on a two-node kind cluster with Kubernetes 1.35, Cilium 1.20, Agent Sandbox v1.0.5, OpenShell 0.1.3, and Kyverno 1.18.2.

OpenShell is not the only option. Agent Substrate, also accepted to the CNCF Sandbox in September 2026, sandboxes agents on Kubernetes too, but ships its own scheduler, controller, and sandbox runtime rather than building on the SIG Apps resource. The post links to Lin Sun's argument that sandboxing agents is necessary but not sufficient.
