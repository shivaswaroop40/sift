---
id: "4422182850"
title: AWS AgentCore harness ships shell tool that can read plaintext credentials by default
original_title: "A Vault with a Heap-View: The Uncomfortable Space Between AgentCore Harness and Identity"
url: https://unit42.paloaltonetworks.com/securing-aws-agentcore-harness-credentials/
source: Unit 42
kind: research
section: cloud-and-supply-chain
date: "2026-09-19"
published_at: "2026-09-18T10:00:36.000Z"
authors:
  - Niv Rabin
comments: null
tags:
  - aws
  - agentcore
  - prompt-injection
  - iam
  - credentials
  - cloud
  - research
why_read: >-
  You will see how a default-enabled shell tool in AgentCore can read plaintext credentials from the
  identity vault and what to change in your deployment.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Unit 42 found that AWS AgentCore Harness enables a built-in shell tool and file_operations tool by default. The shell tool runs as root inside the harness container, and its memory space overlaps with where AgentCore Identity resolves credentials to plaintext for downstream MCP calls. A prompt injection that triggers a shell command can therefore read vault credentials without any misconfiguration on the customer's side.

The issue matters because AgentCore is AWS's recommended way to manage agent identities and stored credentials. Default deployments give any agent session the ability to run arbitrary bash and read or write files, so a single prompt injection is enough to exfiltrate plaintext credentials that were thought to be protected by IAM, KMS, and vault encryption.

Unit 42 disclosed the finding to AWS, which closed the report as informative under the shared responsibility model. AWS pointed to allowedTools scoping and egress filtering as customer-side controls.

Operators running AgentCore should restrict allowedTools per session, apply least privilege to identity vault service accounts, and watch outbound traffic from harness containers.
