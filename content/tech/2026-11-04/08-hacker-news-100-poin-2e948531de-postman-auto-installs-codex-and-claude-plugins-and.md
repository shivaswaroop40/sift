---
id: 2e948531de
title: Postman auto-installs Codex and Claude plugins and self-trusts its hook, report says
original_title: Postman silently auto-installs AI plugins and attempts to share all API data
url: https://github.com/postmanlabs/postman-app-support/issues/14370
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-04"
published_at: "2026-11-03T17:22:37.000Z"
authors:
  - sidgarimella
comments: https://news.ycombinator.com/item?id=50354960
tags:
  - postman
  - codex
  - claude-code
  - mcp
  - hooks
  - consent
  - community
why_read: >-
  The original issue pins exact log lines, config diffs and installer source showing how the
  auto-install and self-approval work.
rank: 8
interest_score: 6.7
depth_score: 5
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

A bug report filed against Postman desktop 12.33.4 on macOS claims the app silently installed plugins for Codex and Claude Code. Postman's own log records the event, with source "auto-existing-upgrade" and results "claude-code:installed,codex:installed". The install edited ~/.codex/config.toml to add a Postman marketplace, enable its plugin, and upsert a trusted hook hash. It also enabled a Claude Code plugin at version 2.0.1 and placed a Postman CLI in ~/.local/bin.

The installed hook is the sharper problem. It registers a SessionStart command matching startup, clear and compact, and prints an instruction to load the postman:api-engineer skill before any non-trivial API engineering task. The installer source goes further. It calls approvePostmanHook after installation, using hooks/list and config/batchWrite to write the trusted_hash itself. The code that adds the hook also tries to mark it trusted, rather than leaving that decision to the user inside Codex.

For anyone running agent tooling, this is a consent and trust-boundary break. Hook trust exists so the user decides, inside the agent host, which startup instructions run. A desktop app editing global configs in unrelated tools and self-approving its own instructions undermines that model. A remote MCP connection to mcp.postman.com/mcp was also configured, though Codex logs show it failing with auth errors. If you run Postman alongside Codex or Claude Code, check ~/.codex/config.toml and ~/.claude/settings.json.

The evidence has limits. It comes from one machine and has not been reproduced on a clean install. The reporter states the trust record alone does not prove who created it, though the pinned installer source shows the approval attempt. The report explicitly does not claim data exfiltration, despite the Hacker News headline saying Postman attempts to share all API data. The issue remains open with no maintainer response in the text.
