---
id: 32c270bdcf
title: Mistral releases Large 4 weights, claims open-weight coding lead with fewer tokens
original_title: We're releasing the weights of Mistral Large 4
url: https://mistral.ai/news/mistral-large-4-oss/
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-10-30"
published_at: "2026-10-29T14:13:21.000Z"
authors:
  - kuberwastaken
comments: https://news.ycombinator.com/item?id=50289418
tags:
  - mistral
  - open-weights
  - llm
  - coding-agents
  - benchmarks
  - cybersecurity
  - community
why_read: >-
  The full benchmark tables, reasoning mode details and deployment options for a self-hostable
  open-weight model that claims the coding lead.
rank: 4
interest_score: 7.3
depth_score: 6
novelty_score: 9
utility_score: 7
scored: true
model: glm-5.3
---

Mistral has released the weights of Mistral Large 4, a 1-trillion-parameter natively multimodal model, three weeks after its public preview. Further reinforcement learning in that window lifted it to the top of open-weight coding benchmarks. It scores 19.7% on Cognition's FrontierCode 2.0, 41% on Terminal-Bench 4.0, up 13 points from the preview, and 48% on the Artificial Analysis Coding Agent Index, tied with GLM-5.3 while using 47% fewer tokens per task.

Token efficiency is the practical angle. Matching the leading open-weight model on the agent index while using roughly half the tokens per task changes the economics of running coding agents at scale. The model now offers three reasoning modes, low, medium and high, with high as the default, to trade precision against inference cost. The weights are self-hostable and the model was trained on European infrastructure, which matters for data-residency requirements.

All figures are vendor-reported, and FrontierCode 2.0 is a private Cognition benchmark. In Surge Code blind pairwise tests, human graders preferred Mistral Large 4 over GLM-5.3, Kimi K3 and DeepSeek V4.1 Flash, but preferred Claude Opus 5.5 in 78% of prompts. On security, it scores 51% on the Artificial Analysis Cyber Index and refuses 96.6% of malicious cyber requests, which Mistral says is the highest it measures among open models.
