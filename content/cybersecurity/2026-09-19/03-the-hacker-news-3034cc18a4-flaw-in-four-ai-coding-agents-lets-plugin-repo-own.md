---
id: 3034cc18a4
title: Flaw in four AI coding agents lets plugin repo owners swap pinned code
original_title: Plugin4Shell Lets Repository Owners Swap Pinned Plugin Code Across Four AI Coding Agents
url: https://thehackernews.com/2026/09/plugin4shell-lets-repository-owners.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-09-19"
published_at: "2026-09-18T11:01:01.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - ai-coding-agents
  - supply-chain
  - plugin-security
  - claude-code
  - codex
  - github-copilot
  - news
why_read: >-
  You will see how pinned plugin references in AI coding agents can be silently swapped, and which
  agents are still unpatched.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Air Security disclosed a flaw affecting four AI coding agents that allows anyone controlling a plugin's source repository to replace the plugin an agent installs with a malicious version, even when the agent pinned it to a previously reviewed commit.

Anthropic shipped a fix in Claude Code 2.1.179 and OpenAI in Codex 0.146.0. GitHub Copilot, the fourth affected agent, has no patch as of the disclosure, Air Security said.

The attack abuses how agents resolve plugin versions from external repositories, so a pinned reference does not guarantee the code that actually runs. Repository owners or anyone with write access to a plugin's source can redirect installations.
