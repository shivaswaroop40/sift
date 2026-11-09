---
id: 651a43b690
title: Single attacker used BOSSAI AI agents to steal Taipei emergency dispatch records
original_title: Taiwan-Based Hacker Used BOSSAI AI Agents to Steal Taipei Emergency Dispatch Records
url: https://thehackernews.com/2026/11/taiwan-based-hacker-used-bossai-ai.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-11-09"
published_at: "2026-11-09T09:01:50.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - ai-agents
  - data-exposure
  - taiwan
  - emergency-services
  - patient-data
  - news
why_read: >-
  The original article gives the Acronis researchers' account of the BOSSAI agents and the exposed
  Taipei platforms.
rank: 6
interest_score: 6.3
depth_score: 6
novelty_score: 8
utility_score: 5
scored: true
model: glm-5.3
---

A single, Taiwan-based attacker used AI agents named BOSSAI to pull emergency dispatch records covering seven Taipei districts. Researchers at Acronis's Threat Research Unit reported the activity last week. The agents also found a Taipei fire department platform exposing patient data from 2018 without a login. That data included ECG readings and ambulance video footage.

The case matters because one person reached this scope with agent tooling. Emergency dispatch records and patient data carry high sensitivity, and the fire department platform needed no login to read them. Defenders should inventory public-facing services that serve sensitive records without authentication, and expect automated agents to find them.

The account leaves gaps. The report does not describe how the agents obtained the dispatch records, so the access method is unclear. The single-attacker attribution rests on researcher confidence rather than a confirmed identity. How long the fire department platform sat open is also not stated.
