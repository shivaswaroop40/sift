---
id: e0d95d27e7
title: Claude Opus 5 used to chain flaws and take over OpenAI staff accounts
original_title: Claude Opus 5 Helped Researchers Take Over OpenAI Staff Accounts via Chained Flaws
url: https://thehackernews.com/2026/09/claude-opus-5-helped-researchers-take.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-20"
published_at: "2026-09-19T18:36:53.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - ai-security
  - account-takeover
  - openai
  - vulnerability-chain
  - identity
  - news
why_read: >-
  It shows a model orchestrating a cross-system exploit chain, which matters if you defend identity
  systems tied to public web apps.
rank: 1
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Three researchers at Hacktron used Anthropic's Claude Opus 5 to chain two flaws and take over ChatGPT and Codex accounts belonging to several OpenAI employees, then accessed an internal OpenAI code repository. The chain started with a bug in the software running OpenAI's public help forum and moved through a weakness in OpenAI's own login system.

The report shows that a frontier model can act as the orchestration layer across distinct vulnerabilities in separate applications, turning two moderate issues into full account takeover of staff. For defenders it underlines that AI-assisted chaining lowers the skill bar for multi-step attacks against externally exposed surfaces tied to internal identity systems.

The source text is truncated and confirms the research was disclosed responsibly, but does not give CVE identifiers, patch timelines, or whether the flaws were in third-party forum software or custom code. Those details are missing from the provided text.

Practitioners running customer-facing portals connected to staff identity should re-read the full Hacktron write-up when it appears, since the specific help-forum product and login weakness are not named here.
