---
id: 1cda08d628
title: VOLTA infostealer uses Claude, Gemini and Kimi to rank stolen data by value
original_title: New VOLTA Infostealer Uses Claude, Gemini, and Kimi AI to Rank Victims by Financial Value
url: https://thehackernews.com/2026/11/new-volta-infostealer-uses-claude.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-11-02"
published_at: "2026-11-02T05:51:07.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - infostealer
  - malware
  - llm
  - credential-theft
  - windows
  - news
why_read: >-
  The original report details VOLTA's browser, Outlook and Slack collection and how Claude, Gemini
  and Kimi are used to score victims.
rank: 10
interest_score: 6.3
depth_score: 6
novelty_score: 8
utility_score: 5
scored: true
model: glm-5.3
---

Researchers have found a new Windows infostealer called VOLTA-AUTODOXER, or VOLTA. It uses a large language model to rank a victim's stolen data by its monetization value. The report names Claude, Gemini and Kimi as the models involved. Like other stealer families, VOLTA harvests passwords and cookies from Chromium-based browsers. It also takes data from Outlook profiles and Slack workspaces.

The ranking step is what sets VOLTA apart from typical stealer families. Scoring stolen data by monetization value points to attackers using AI to triage victims by likely payout. Defenders should treat stealer alerts on high-value accounts as signals of deliberate targeting, not just bulk credential theft. The available text is truncated, so the ranking mechanism is not described.
