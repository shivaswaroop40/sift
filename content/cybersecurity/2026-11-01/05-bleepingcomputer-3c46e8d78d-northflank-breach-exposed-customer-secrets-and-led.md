---
id: 3c46e8d78d
title: Northflank breach exposed customer secrets and led to abuse of AI API keys
original_title: Northflank security breach leads to abuse of customers' AI API keys
url: >-
  https://www.bleepingcomputer.com/news/security/northflank-security-breach-leads-to-abuse-of-customers-ai-api-keys/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-11-01"
published_at: "2026-10-31T18:01:12.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - northflank
  - breach
  - api-keys
  - llmjacking
  - environment-variables
  - secrets
  - news
why_read: >-
  The original has Northflank's incident timeline, its rotation guidance, and Wiz's tally of nine
  October breaches against AI developer platforms.
rank: 5
interest_score: 6
depth_score: 5
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

Northflank, a platform for deploying applications, containers, databases and AI workloads, disclosed a breach on 30 October after a threat alert from Wiz. It told customers to assume all environment variables had been decrypted and the secrets inside them stolen. Multiple customers have since reported unauthorised use of AI API keys supplied to the platform. Wiz alerted Northflank at 11:43 UTC, and the company shipped a network policy patch followed by more at 12:50 and 13:05 UTC.

Environment variables commonly hold database passwords, cloud credentials, authentication tokens and API keys, so exposure can cascade into other services and generate unauthorised charges. Northflank has enabled credential rotation for PostgreSQL, MongoDB, MySQL and Redis, and turned on audit logs for all customers, including free accounts. It advises rotating secrets in workloads, secret groups and global secrets, disabling public access to add-ons, and reviewing AI provider usage and billing logs.

Northflank has not said how attackers gained access, how many customers were affected, or whether credentials other than AI API keys were abused. Wiz counts Northflank among at least nine incidents against AI development platforms in October, alongside Railway, OpenCode, Warp and Lightning AI. In two cases Wiz investigated, stolen enterprise credentials drove roughly 2.5 million Amazon Bedrock API calls and about $100,000 in AI usage.

Wiz says attackers in some of these incidents specifically targeted environment variables holding AI service credentials, a practice tied to LLMJacking, where stolen keys run AI models at another organisation's expense or are resold. It found infrastructure linked to services reselling model access, but could not tie those operations to the initial breaches, and has not confirmed one attacker behind all nine incidents.
