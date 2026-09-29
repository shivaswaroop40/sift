---
id: 407bac1130
title: Carbonato botnet deploys AI agent on hacked Docker hosts
original_title: Carbonato Botnet Puts an AI Agent on Hacked Docker Hosts
url: >-
  https://www.darkreading.com/identity-access-management-security/carbonato-botnet-ai-agent-hacked-docker-hosts
source: Dark Reading
kind: news
section: threat-research
date: "2026-09-29"
published_at: "2026-09-28T20:23:58.000Z"
authors:
  - Alexander Culafi
comments: null
tags:
  - docker
  - botnet
  - ai
  - api-keys
  - telegram
  - container-security
  - news
why_read: >-
  You will see how a botnet now exposes operators to a chatbot-style interface and steals AI API
  keys, two shifts worth modelling in your container and secrets defences.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

The Carbonato botnet is using the open-source Hermes Agent AI framework to run commands on compromised Docker hosts, communicating via Telegram and targeting exposed AI API keys.

It matters because infected Docker hosts can be commanded through a chatbot interface, giving operators an interactive foothold rather than just a backdoor. Stealing AI API keys extends the attack into any services those keys unlock, including cost abuse and downstream account compromise.

The framework is open source, which lowers the barrier for adoption and modification. Telegram provides a familiar and resilient control channel that is hard for defenders to block without disrupting legitimate traffic.
