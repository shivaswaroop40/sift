---
id: 581499e424
title: Air researchers find zero-click RCE in major AI coding agents via plugin marketplaces
original_title: AI coding agents' 0-click RCE flaw could hand attackers keys to the kingdom
url: >-
  https://www.theregister.com/security/2026/09/17/ai-coding-agents-0-click-rce-flaw-could-hand-attackers-keys-to-the-kingdom/5297335
source: The Register
kind: news
section: security
date: "2026-09-18"
published_at: "2026-09-17T22:42:29.000Z"
authors: []
comments: null
tags:
  - ai-coding-agents
  - security
  - supply-chain
  - vulnerability
  - plugins
  - rce
  - news
why_read: >-
  You'll get a concrete technical breakdown of how plugin SHA-pinning fails in AI coding agents and
  which vendors have and have not patched.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Researchers at security startup Air disclosed a zero-click remote code execution flaw, dubbed Plugin4Shell, that affects Anthropic Claude Code, OpenAI Codex, Google Gemini CLI, and Microsoft Copilot. The attack targets plugin marketplaces rather than the models themselves, exploiting a weakness in how agents enforce SHA-pinning of plugin repositories. By swapping a pinned commit upstream, an attacker can replace installed plugins with malicious code that auto-updates without user interaction.

The mechanism matters because SHA-pinning exists precisely to prevent supply chain attacks on agent skills and plugins. Plugin4Shell bypasses that safeguard by resolving the pinned hash to attacker-controlled content, giving anyone who lands code execution the same reach as the agent itself, including any credentials, files, or services the agent can access.

Anthropic fixed the issue in Claude Code 2.1.179 and OpenAI in Codex 0.146.0. Google has deprecated Gemini CLI and will not patch, pointing users to its Antigravity agent instead. Microsoft did not respond to Air's June disclosure and has not shipped a fix for Copilot, leaving it exposed where it connects to marketplaces hosted outside GitHub.

Air argues GitHub's mitigation against SHA lookalike names is insufficient because Bitbucket and other hosts do not enforce the same rule, and Copilot supports those marketplaces. The researchers frame Plugin4Shell as the first end-to-end AI supply chain attack that defeats the containment mechanism designed for it.
