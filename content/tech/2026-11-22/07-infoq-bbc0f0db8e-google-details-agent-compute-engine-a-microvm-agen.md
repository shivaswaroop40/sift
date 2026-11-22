---
id: bbc0f0db8e
title: >-
  Google details Agent Compute Engine, a microVM agent sandbox with no credentials inside, due in
  preview
original_title: Google Announces Agent Compute Engine for Secure AI Agent Execution
url: >-
  https://www.infoq.com/news/2026/11/google-agent-compute-engine/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-22"
published_at: "2026-11-22T06:30:00.000Z"
authors:
  - Renato Losio
comments: null
tags:
  - google-cloud
  - ai-agents
  - microvm
  - sandboxing
  - agent-substrate
  - security
  - news
why_read: >-
  You get the architecture of a credential-free agent sandbox and an outside review of what Google
  has and has not yet shipped.
rank: 7
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Google has described Agent Compute Engine, a managed service that runs AI agents in isolated microVMs. Idle environments can be checkpointed, suspended and resumed. Copy-on-write memory sharing lets several agents run from one operating system template. Credentials, API keys and OAuth refresh tokens stay outside the sandbox. An external Agent Gateway authenticates requests and injects the secrets.

The orchestration harness runs outside the sandbox and only dispatches explicit commands to it. Google says this gives a deterministic audit trail linking each tool call to compute activity inside the guest. Google uses the platform internally for Gemini, Gemini for Business, Antigravity and model evaluation. Workloads include interactive agents, persistent Linux workspaces, and parallel reinforcement learning environments.

The design assumes agents will make mistakes, so a compromised or confused sandbox has nothing worth stealing. That is a useful pattern for anyone building agent infrastructure, whichever cloud they use. The governance stack adds Agent Registry, SPIFFE-based Agent Identity and OpenTelemetry-compatible observability.

The caveats are large. The service is not available, pricing is unannounced, and a preview is only targeted for the coming months. One reviewer notes the deep dive gives no boot time, price or density figure for Agent Compute Engine itself. Those numbers belong to Agent Substrate, the separate open-source Kubernetes runtime. Agent Compute Engine is limited to Google Cloud.
