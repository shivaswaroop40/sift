---
id: e26a819372
title: BragJack hijacks AI browser agents in five Chromium-based browsers via a single extension
original_title: BragJack attacks hijack AI browser agents through malicious extensions
url: >-
  https://www.bleepingcomputer.com/news/security/bragjack-attacks-hijack-ai-browser-agents-through-malicious-extensions/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-09-20"
published_at: "2026-09-19T14:56:31.000Z"
authors:
  - Ax Sharma
comments: null
tags:
  - browser-extensions
  - ai-agents
  - prompt-injection
  - chromium
  - declarativenetrequest
  - race-condition
  - news
why_read: >-
  You will see how a single installed extension can reach AI components that read files, take
  screenshots, and act on websites, and which surfaces are still exploitable.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Security researcher Gal Weizman of Forever Security has disclosed BragJack, a technique that uses one malicious Chromium extension to hijack AI assistants built into Google Chrome's Gemini Live, Perplexity Comet, Microsoft Edge, Opera Neon, and Anthropic's Claude in Chrome. The work earned over $20,000 in bug bounties across the five vendors and produced two CVEs, with Google and Microsoft both resolving the flaws assigned to them.

The attack abuses the split between an AI model's reasoning and a privileged browser component that carries out actions on tabs, screenshots, files, and sites. Extensions cannot touch those components directly, but Chromium's declarativeNetRequest API can still rewrite requests that the components trust. Weizman used DNR to weaken response headers, redirect a JavaScript resource, and run code inside the Gemini context, then spoke to Chrome's privileged AI surface instead of the normal request flow.

Against agentic browsers like Perplexity Comet and Opera Neon the impact is broader. By stripping a redirect to an under-protected Perplexity testing domain with DNR, Weizman injected a content script that could read browsing history, take screenshots, read local files, and instruct the agent to visit Perplexity, summarise the victim's emails, and forward the results. In Microsoft Edge he used a race condition across the Think and Do split to fire a prompt and re-enable action capability before the agent rechecked its state, tracked as CVE-2026-55945.

Weizman calls the agent-seizure step Prompt Forcing: rather than smuggling instructions into content the AI reads, the attacker hands the agent a full prompt and follow-up, and the agent turns them into legitimate browser actions. The final act is carried out by trusted software on the attacker's behalf, which complicates detection. Chrome assigned CVE-2026-0628 and paid a $7,000 bounty for its case.
