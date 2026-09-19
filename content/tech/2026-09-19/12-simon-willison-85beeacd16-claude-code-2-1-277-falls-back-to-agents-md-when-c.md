---
id: 85beeacd16
title: Claude Code 2.1.277 falls back to AGENTS.md when CLAUDE.md is absent
original_title: Quoting Thariq Shihipar
url: https://simonwillison.net/2026/Sep/18/thariq-shihipar/
source: Simon Willison
kind: blog
section: languages-and-tools
date: "2026-09-19"
published_at: "2026-09-18T19:09:27.000Z"
authors: []
comments: null
tags:
  - claude-code
  - agents-md
  - anthropic
  - coding-agents
  - developer-tooling
  - blog
why_read: >-
  See exactly how Claude Code will resolve project instructions across both vendor-specific and
  cross-agent file conventions.
rank: 12
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Anthropic has added AGENTS.md support to Claude Code in version 2.1.277. If a folder has no CLAUDE.md, Claude will now look for and use an AGENTS.md file instead. The feature is implemented as a built-in mod within Claude Code's upcoming mods system.

The change matters because AGENTS.md is a vendor-neutral convention already used by other coding agents. Developers maintaining shared project instructions no longer have to duplicate files or pick one agent format. It also signals Anthropic's broader plan to let users build their own custom project instruction mods.

The fallback only applies when CLAUDE.md is missing, so existing setups are unaffected. The mod source is published, which means the precedence rules and parsing behaviour can be audited before relying on it in mixed-agent workflows.
