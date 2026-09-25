---
id: 9afe0cb505
title: Salesbleed attack smuggles web instructions into Slack via Salesforce agents
original_title: "'Salesbleed' Exploits Salesforce Agents to Enable Slack Phishing"
url: >-
  https://www.darkreading.com/application-security/salesbleed-exploits-salesforce-agents-slack-phishing
source: Dark Reading
kind: news
section: threat-research
date: "2026-09-25"
published_at: "2026-09-24T21:04:03.000Z"
authors:
  - Nate Nelson
comments: null
tags:
  - salesforce
  - slack
  - phishing
  - agentic-ai
  - prompt-injection
  - supply-chain
  - news
why_read: >-
  It shows how agent-to-app integrations turn web content into an internal phishing vector you may
  not have considered.
rank: 11
interest_score: 8
depth_score: 7
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers describe Salesbleed, an attack that uses Salesforce's agentic AI features to carry instructions from public web pages into Slack channels. When an agent reads attacker-controlled content, hidden prompts can trigger actions such as posting phishing links in trusted internal chats.

The technique matters because it crosses trust boundaries. A prompt embedded on a website or support ticket can pivot through a sanctioned business tool into the chat app staff already trust, bypassing email filters and link scanners.

Salesforce has reportedly responded with mitigations, but the underlying class of issue affects any platform that lets autonomous agents fetch external content and then act in collaboration tools. Defenders should review what data their agents can read and what channels they can write to.
