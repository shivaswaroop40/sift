---
id: 3bf3ecfe33
title: LiteLLM gateway exposes configuration to any authenticated user
original_title: "When LLM Gateways Go Wrong: Findings from LiteLLM"
url: https://research.checkpoint.com/2026/when-llm-gateways-go-wrong-findings-from-litellm/
source: Check Point Research
kind: research
section: vulnerabilities
date: "2026-10-14"
published_at: "2026-10-13T14:30:26.000Z"
authors:
  - etal
comments: null
tags:
  - litellm
  - authorization
  - rce
  - api-gateway
  - credential-theft
  - vulnerability
  - research
why_read: >-
  Learn what went wrong in a critical AI infrastructure component and how to audit your own
  gateways.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Check Point Research found multiple high-severity vulnerabilities in LiteLLM v1.77.7, an open-source LLM gateway widely deployed between applications and model providers. The most critical flaw was a missing authorization check on the /config/update endpoint that allowed any authenticated user, including those with low privileges, to modify runtime proxy configuration.

This matters because LLM gateways handle credentials, API keys, and request routing for production AI systems. The vulnerability enabled attackers with basic access to read arbitrary files, hijack admin accounts, and execute remote code by loading malicious Python modules from cloud storage.

A separate server-side request forgery flaw in the credentials feature allowed attackers to redirect API calls and steal provider keys. The vulnerabilities were resolved in version 1.83.9. The findings demonstrate that as AI infrastructure tools proliferate, basic security controls like role-based access checks remain critical to production deployments.
