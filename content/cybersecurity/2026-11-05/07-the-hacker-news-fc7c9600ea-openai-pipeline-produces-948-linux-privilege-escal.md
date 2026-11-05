---
id: fc7c9600ea
title: OpenAI pipeline produces 948 Linux privilege escalation exploits for $1.2 million
original_title: OpenAI AI Pipeline Generates 948 Linux Root Escalation Exploits in 30-Hour Run
url: https://thehackernews.com/2026/11/openai-ai-pipeline-generates-948-linux.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-11-05"
published_at: "2026-11-05T12:08:54.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - linux
  - kernel
  - privilege-escalation
  - ai
  - openai
  - vulnerability-discovery
  - news
why_read: >-
  The original sets out OpenAI's full numbers on the pipeline and how the 948 flaws were validated
  and patched.
rank: 7
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

OpenAI has detailed a pipeline that used an upcoming cyber-focused AI model to validate and patch 948 local privilege escalation vulnerabilities in Linux. The prototype identified and analysed 2,308 candidate kernel findings, dynamically reproduced 1,724 of them, and produced 948 local privilege escalation exploits. The run cost $1.2 million in API costs and, according to the report, lasted 30 hours.

Kernel local privilege escalation is the standard route from a compromised account to root, on hosts and in containers alike. A pipeline that finds, reproduces, and patches at this volume in one 30-hour run changes the assumed shelf life of unpatched kernel bugs. The same tooling serves attackers as readily as maintainers, because the exploit and the patch come from the same analysis.

The model is described as upcoming, so the capability is not yet available outside OpenAI. The numbers come from OpenAI's own account of a prototype, and the detail on how patches were produced and validated is incomplete in this report. Treat the 948 figure as a vendor claim until it is independently reviewed.
