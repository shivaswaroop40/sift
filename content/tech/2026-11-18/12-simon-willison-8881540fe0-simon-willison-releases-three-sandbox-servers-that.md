---
id: 8881540fe0
title: Simon Willison releases three sandbox servers that keep coding agents outside the sandbox
original_title: External sandboxes for coding agents
url: https://simonwillison.net/2026/Nov/17/external-sandboxes-for-coding-agents/
source: Simon Willison
kind: blog
section: security
date: "2026-11-18"
published_at: "2026-11-17T22:52:29.000Z"
authors: []
comments: null
tags:
  - sandboxing
  - coding-agents
  - security
  - prompt-injection
  - webassembly
  - containers
  - blog
why_read: >-
  The original is a short link post pointing to the Prime Radiant write-up, where the pattern and
  the three implementations are explained in full.
rank: 12
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Simon Willison and Prime Radiant describe an external sandbox pattern for coding agents. Code the agent runs executes in a dedicated sandbox, while the agent itself stays outside it. The aim is to make local models safer to try, so a mistake or prompt injection cannot damage the host machine.

They released three implementations. One is a Node.js server using v86 to run Alpine Linux in WebAssembly. One is a Python server using Apple Containers. The third is a Python server using Microsoft's Quicksand library, which bundles QEMU and Alpine Linux. All three expose the same localhost API.

Pi, Claude Code or Codex can be configured to send code execution calls to that API. The sandboxes also offer an optional HTTP/HTTPS allow-list proxy that limits which hosts the code can reach. A credential replacement mechanism lets authenticated calls go out without the agent ever holding the secret.
