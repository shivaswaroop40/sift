---
id: 8d1e9273a2
title: VSCode's remote SSH editing installs a full Node agent on the target host
original_title: VSCode's SSH Agent Is Bananas (2025)
url: https://fly.io/blog/vscode-ssh-wtf/
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-09-24"
published_at: "2026-09-23T21:01:48.000Z"
authors:
  - Rapzid
comments: https://news.ycombinator.com/item?id=49822555
tags:
  - vscode
  - ssh
  - security
  - remote-development
  - fly-io
  - tooling
  - community
why_read: >-
  It reframes a familiar editor feature as something closer to a remote access tool, which is worth
  knowing before you let VSCode touch sensitive hosts.
rank: 7
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

VSCode's remote SSH editing feature does not work like Emacs Tramp. It pushes a Bash snippet that downloads and installs a Node-based agent on the remote host, including a full Node binary, and communicates with the editor over a WebSocket tunnel carried inside an SSH port forward.

That agent can walk the filesystem, edit arbitrary files, spawn its own shell PTYs, and persist on the host. Fly.io describes it as a remote access tool rather than a plain editor extension, and says they would be uneasy seeing it used on dev servers, let alone production.

The post notes that none of this actually matters for connecting Fly Machines, since they used a separate, simpler integration path. It is filed as a 'we had to learn this, and now you do too' observation rather than a disclosure of a fresh vulnerability.

The practical upshot is that anyone allowing VSCode remote SSH onto boxes they care about is implicitly accepting a long-lived, scripted, self-installing agent on those hosts, and should treat that as part of their threat model.
