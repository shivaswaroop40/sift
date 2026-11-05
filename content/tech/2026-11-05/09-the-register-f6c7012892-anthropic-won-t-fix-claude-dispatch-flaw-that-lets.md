---
id: f6c7012892
title: Anthropic won't fix Claude Dispatch flaw that lets extensions run code on desktops
original_title: >-
  Anthropic won't fix a Claude Dispatch flaw that could let attackers execute remote commands across
  corporate boundaries
url: >-
  https://www.theregister.com/research/2026/11/05/anthropic-wont-fix-a-claude-dispatch-flaw-that-could-let-attackers-execute-remote-commands-across-corporate-boundaries/5307684
source: The Register
kind: news
section: security
date: "2026-11-05"
published_at: "2026-11-05T13:00:00.000Z"
authors:
  - Jessica Lyons
comments: null
tags:
  - anthropic
  - claude
  - vulnerability
  - browser-extensions
  - remote-code-execution
  - ai-agents
  - news
why_read: >-
  You get Weizman's full technical write-up, the six-step exploit chain, the exact prompts used and
  a video proof of concept.
rank: 9
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

Anthropic has declined to fix a flaw in Claude Dispatch, dubbed ThisBash, found by Forever Security researcher Gal Weizman. Dispatch's interface and API are reachable from an ordinary logged-in claude.ai session, so a browser extension controlling that site can send commands to Claude Desktop, or to another machine on the same account, as if from the real user. Anthropic acknowledged the report as valid in May, closed it as a duplicate, paid no bounty and issued no CVE.

This matters because Claude Desktop runs commands on the user's computer with access to operating system files. The attack needs no browser exploit and minimal user interaction. Its only prerequisite is a browser extension with access to claude.ai, typically obtained by hijacking a legitimate one through supply-chain compromise or a black market. Claude.ai received about 950 million monthly visits in mid-2026, and Anthropic's usage data showed 1.2 million sampled Cowork sessions from more than 600,000 organizations in May.

The proof of concept runs six steps. A MAIN-world content script on claude.ai shares the page's JavaScript context and session cookies. It opens Dispatch in a tiny unfocused popup, calls GET /v1/sessions?tags=cowork-dispatch-local with ambient cookies to get the desktop agent's session ID, then force-prompts the agent, rephrasing and insisting until it complies. A one-second interval auto-clicks 'Allow' whenever Claude asks approval. The payload is a global npm install of a malicious package with a preinstall.js hook.

Retiring Dispatch would not close the hole anyway. Weizman says the same design weakness lives on in Claude Code Remote Control and Claude Cowork, whose web version shares sessions with the desktop version. Anthropic told him it would retire Dispatch at the end of October, then did not, and did not answer questions about its plans. As of October 30 the support page still let existing Pro, Max and Ultra users keep using it.
