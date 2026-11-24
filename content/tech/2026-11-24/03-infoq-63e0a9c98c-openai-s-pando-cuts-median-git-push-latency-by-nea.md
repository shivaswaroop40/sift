---
id: 63e0a9c98c
title: OpenAI's Pando cuts median Git push latency by nearly 80% for coding-agent load
original_title: OpenAI Scales Git for Coding Agents with Pando
url: >-
  https://www.infoq.com/news/2026/11/openai-git-pando/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-11-24"
published_at: "2026-11-24T11:55:00.000Z"
authors:
  - Eran Stiller
comments: null
tags:
  - git
  - openai
  - pando
  - distributed-systems
  - source-control
  - coding-agents
  - news
why_read: >-
  The original sets out the consistency and bandwidth trade-offs Pando accepts, and how its
  compatibility line differs from Scion's, which is useful if you run source control at scale.
rank: 3
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

OpenAI has described Pando, a Git backend built for concurrent coding-agent workloads. It reports nearly 80% lower median push latency. Pando has been in production since April 2026, runs all development in OpenAI's monorepo and serves nearly a petabyte of Git data per day. OpenAI attributes the load to Codex-driven development, where each push can trigger several CI jobs fetching the same history.

Git's client and protocol are unchanged. On push, Pando validates the packfile as it streams into immutable blob storage. A metadata transaction then atomically updates the reference pointer. Updates to unrelated references proceed independently, while updates to the same reference are still coordinated. Fetches use stored packs and Git's packfile-uri capability, with a regional cache called Express serving downloads. OpenAI reports cache-hit rates above 99%.

The trade-offs are explicit. Consistency is causal, with serialisable updates per reference, so fetching several branches does not give a repository-wide snapshot. Feature-branch packs depend on trunk history, so repeated or stacked pushes can resend objects. Background compaction groups packs into larger covers, much like an LSM tree, and keeps every level.

InfoQ contrasts this with Anthropic's Scion, which replaces Git's model and moves repository operations server-side. The reported gains are not comparable, since one measures push latency and the other checkout speed. Migration was still real work: a write-through proxy, phased client moves, hundreds of integrations and a custom Git build.
