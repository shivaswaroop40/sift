---
id: 5b124a22be
title: Two Codex sandbox escapes let untrusted code run commands on the host
original_title: Researchers escape OpenAI Codex sandbox to run commands on host
url: >-
  https://www.bleepingcomputer.com/news/security/researchers-escape-openai-codex-sandbox-to-run-commands-on-host/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-09-21"
published_at: "2026-09-20T12:00:00.000Z"
authors:
  - Ax Sharma
comments: null
tags:
  - openai
  - codex
  - sandbox-escape
  - rce
  - ai-agents
  - vulnerability
  - news
why_read: >-
  You will see exactly how two specific bugs turned Codex's own internals against its sandbox, with
  proof-of-concept detail you can use to audit similar agent designs.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: minimax-m3
---

Security researchers found two ways to break out of the Codex sandbox, one of which runs commands on the developer's machine from Codex's most locked-down read-only mode with no approval prompt and no on-screen indication. Both flaws were reported to OpenAI on 12 August and fixed within eight days, according to Oren Yomtov of Accomplish AI.

The more serious flaw, called Heapjack, targets the node_repl component that Codex Desktop writes into the shared ~/.codex/config.toml file on install, with no opt-out, so plain Codex CLI users inherit the same tool. The component runs trusted and untrusted JavaScript in one Node.js process that shares one memory heap, and the random token that proves code is trusted sits in that heap where the untrusted side can read it. With the token, the untrusted context impersonates the trusted one on the native parent pipe and gets unsandboxed execution, reaching the system open command, Unix sockets including the Docker daemon, and tools that edit the global config file.

The second flaw, Overpatch, lives in the open-source Codex CLI. The apply_patch tool grants write access to the parent folder of every path it touches, so a patch that names /tmp widens the permission to the disk root and a follow-on change can write to .zshrc through a symlink, so the next terminal the developer opens runs the attacker's line outside the sandbox. Both bugs share a shape: the sandbox enforcement was inside the thing it was supposed to be policing, with apply_patch working out its own permissions from attacker input and node_repl keeping the trust secret in the same memory as the untrusted code.

OpenAI fixed Heapjack in build 26.818.21641 of Codex Desktop and Overpatch in Codex CLI 0.149.0. Users should update to those versions or later. The same class of flaw was shown in July 2026 by Pillar Security across Cursor, Codex, Gemini CLI and Google's Antigravity.
