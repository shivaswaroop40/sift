---
id: fda2443a7d
title: AWS AgentCore exposed credentials and excessive permissions to unauthenticated prompts
original_title: AWS AgentCore security undone by prompt requesting credentials
url: >-
  https://www.theregister.com/security/2026/10/09/aws-agentcore-security-undone-by-prompt-requesting-credentials/5302436
source: The Register
kind: news
section: security
date: "2026-10-10"
published_at: "2026-10-09T19:15:48.000Z"
authors: []
comments: null
tags:
  - aws
  - iam
  - credentials
  - ssrf
  - isolation
  - metadata-service
  - news
why_read: >-
  Understand how default configurations in managed agent services can enable lateral movement across
  workloads in a single region.
rank: 3
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Zenity Labs researchers demonstrated that AgentCore agents could be tricked into fetching their temporary AWS credentials via server-side request forgery. An attacker with chat access to a single exposed agent could extract IMDS credentials, then enumerate and compromise all AgentCore instances in the same AWS region using those stolen tokens.

The underlying issues were threefold: AgentCore initially used IMDSv1 without sufficient network isolation in Firecracker MicroVMs, the default IAM role was overpermissioned across all regional agents rather than scoped to individual workloads, and the agent could be prompted to make arbitrary requests that expose sensitive metadata.

AWS addressed the IMDS isolation by deploying IMDSv2 in February 2026, but left the overpermissioned role in place until at least late September. The scope meant an attacker could create memories across different users, modify agent behaviour persistently, and access AWS Secrets Manager for all agents in the region.
