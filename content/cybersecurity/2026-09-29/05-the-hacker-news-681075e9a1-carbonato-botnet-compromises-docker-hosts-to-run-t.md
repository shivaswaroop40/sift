---
id: 681075e9a1
title: Carbonato botnet compromises Docker hosts to run Telegram-controlled Hermes AI agent
original_title: Carbonato Botnet Compromises Docker Hosts to Deploy Telegram-Controlled Hermes AI Agent
url: https://thehackernews.com/2026/09/carbonato-botnet-compromises-docker.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-09-29"
published_at: "2026-09-28T11:46:00.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - docker
  - botnet
  - llm-agent
  - telegram
  - threat-research
  - news
why_read: >-
  It shows how exposed Docker daemons are being weaponised to run an LLM agent as a botnet implant,
  controlled through Telegram rather than a traditional C2.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

ThreatDown researchers detail a new botnet called Carbonato that targets exposed Docker daemons to deploy the open-source Hermes Agent AI framework. The malware installs Hermes unchanged, then overwrites the framework's SOUL.md persona file with a 39-line prompt directing the agent to execute tasks sent through Telegram.

The implant uses a large language model agent as its runtime rather than a fixed command set, so each instruction is interpreted by the model at execution time. For defenders, this means the visible network behaviour is an LLM talking to an API endpoint while the attacker controls it through a chat channel, which makes static detection harder.

The source text is truncated, so the full task list, persistence mechanism, and the scale of compromised hosts are not reported. Practitioners should still treat exposed Docker daemons as a primary risk because the initial access vector is straightforward and the payload is openly available software repurposed as an implant.
