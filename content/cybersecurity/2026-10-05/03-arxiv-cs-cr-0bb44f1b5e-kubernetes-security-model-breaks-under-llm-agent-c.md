---
id: 0bb44f1b5e
title: >-
  Kubernetes security model breaks under LLM agent compromise, requiring infrastructure-level
  defence
original_title: >-
  Containing the Autonomous Operator: A Defense-in-Depth Framework and Reference Architecture for
  Securing AI Agents on Kubernetes
url: https://arxiv.org/abs/2610.02861
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-10-05"
published_at: "2026-10-05T04:00:00.000Z"
authors:
  - Simhadri Podala Narasimha
comments: null
tags:
  - kubernetes
  - llm-agents
  - prompt-injection
  - defence-in-depth
  - threat-model
  - rbac
  - paper
why_read: >-
  Learn how to defend Kubernetes clusters against prompt-injected LLM agents using layered
  infrastructure controls.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Large language model agents now operate production Kubernetes clusters, executing code and changing state based on telemetry and tool descriptions. This collapses the conventional boundary between data and control, because readable content can redirect agent behaviour through prompt injection.

The paper treats the model as fully compromised and proposes agent safety as an infrastructure problem. It defines a ten-class threat taxonomy and nine design principles centred on complete mediation at tool boundaries and breaking combinations of untrusted input, sensitive access, and external egress.

A seven-layer defence framework maps principles to Kubernetes mechanisms: workload identity, RBAC, ValidatingAdmissionPolicy, gVisor or Kata sandboxing, FQDN-aware egress policy, an MCP gateway with policy-as-code, and eBPF runtime enforcement. Reference architectures are provided for EKS, AKS, and GKE.
