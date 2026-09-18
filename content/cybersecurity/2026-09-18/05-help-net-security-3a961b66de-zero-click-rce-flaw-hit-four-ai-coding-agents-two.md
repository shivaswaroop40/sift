---
id: 3a961b66de
title: Zero-click RCE flaw hit four AI coding agents, two still unpatched
original_title: Zero-click RCE vulnerability hit four major AI coding agents, two remain unpatched
url: https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-09-18"
published_at: "2026-09-18T08:49:00.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - ai-coding-agents
  - rce
  - supply-chain
  - plugin-pinning
  - vulnerability
  - git
  - news
why_read: >-
  You will see how a git checkout verification gap turns marketplace plugins into zero-click RCE,
  and where each vendor currently stands on patches.
rank: 5
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

Researchers at AIR disclosed Plugin4Shell, a zero-click remote code execution flaw affecting Claude Code, Codex, GitHub Copilot and Gemini CLI. The bug bypasses SHA pinning, the mechanism meant to lock an installed plugin to a reviewed version. Attackers can swap in malicious code while the pin still appears valid, then trigger execution via background auto-update.

It matters because the bypass breaks the security model users already rely on: any plugin installed from a trusted marketplace is exposed, even when installed and pinned exactly as intended. AIR frames it as the first supply chain vulnerability of the AI agent ecosystem. Three of the four agents check out a pinned commit without verifying the checkout actually matches the hash.

Two exploitation paths are documented. First, a legitimate plugin is turned malicious after adoption. Second, the underlying repository is hijacked from its maintainer. AIR cites prior work showing 925 hijacked skills reached 134,000 agents, and a planted plugin spread to more than 26,000 agents. The technique works on hosts that allow branch names resembling 40-hex hashes, including Bitbucket and self-hosted git, while GitHub rejects them.

Anthropic patched Claude Code in 2.1.179 and OpenAI patched Codex in 0.146.0 after June 2026 disclosure. Microsoft has not shipped a fix for Copilot. Google deprecated Gemini CLI rather than patch it, leaving existing installs exposed and directing users to its new Antigravity agent, which lacks the vulnerable plugin pinning system.
