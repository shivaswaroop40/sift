---
id: 035b63c690
title: Figma says AI security agents cut alert resolution time by 70%
original_title: How Figma Uses AI Agents for Security
url: >-
  https://www.infoq.com/news/2026/09/figma-security-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-09-06"
published_at: "2026-09-06T06:59:00.000Z"
authors:
  - Renato Losio
comments: null
tags:
  - ai-agents
  - security
  - siem
  - devsecops
  - figma
  - incident-response
  - news
why_read: >-
  A concrete, numbers-first look at how Figma wired agents into a real SOC stack, including the
  memory design and the guardrails that kept humans in the loop.
rank: 9
interest_score: 6.7
depth_score: 7
novelty_score: 6
utility_score: 7
scored: true
model: minimax-m3
---

Figma has published details of an agentic security system built on Panther SIEM that investigates alerts, queries over 100 data sources including AWS, Okta, GitHub, GCP and osquery, and can open draft pull requests. The team report complex alert resolution is about 70% faster and on-call pages have dropped by 20%.

The system uses Claude Opus via AWS Bedrock Knowledge Bases, Amazon Kendra, Tines and a Snowflake-backed tool. Memory was the biggest lever on usefulness, split into past alerts, behavioural guidance and learned database schemas, with the agent receiving the full Slack thread as context during triage.

Safety is enforced through tool-scoped permissions rather than prompting alone. Agent-created PRs default to draft and the prompts are designed to avoid leaking sensitive data into public Slack channels. A separate vulnerability-focused agent set is credited with finding over 100 previously unknown flaws and reaching 80% precision within a month.
