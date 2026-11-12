---
id: 85b1eafdc2
title: Darktrace turns Claude Code into a C2 implant using stolen API keys and memory stores
original_title: Stolen Claude API keys can turn Claude Code into a remote-controlled implant
url: https://www.helpnetsecurity.com/2026/11/12/stolen-claude-api-keys-remote-controlled-implant/
source: Help Net Security
kind: news
section: threat-research
date: "2026-11-12"
published_at: "2026-11-12T11:00:21.000Z"
authors:
  - Mirko Zorz
comments: null
tags:
  - claude-code
  - ai-agents
  - c2
  - api-keys
  - exfiltration
  - darktrace
  - news
why_read: >-
  Read it for the full attack chain and Darktrace's guidance on scoping AI platform keys and
  baselining agent behaviour, since no vulnerability exists to patch.
rank: 6
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Darktrace researchers used a stolen Claude API key to steer Claude Code as a remote implant in a lab test. Commands and results passed through Anthropic's memory stores feature, and a 1 GB file left via the Claude Files API. All traffic went to api.anthropic.com, the endpoint the agent already uses.

The test ran on a simulated Active Directory network. A shell payload set up a systemd service that launched Claude Code with --dangerously-skip-permissions. Nine plain-English jobs followed. The agent mapped the network, found a password on an anonymous FTP share, sprayed it across 190 usernames, listed SMB shares and uploaded the file in three pieces.

The attack needs prior compromise of a developer machine and its Claude credentials. Darktrace says it uses no platform vulnerability, and it has not seen it in the wild. The risk is that every step is legitimate activity, with approved credentials, to an expected destination.

Darktrace advises preferring OAuth or identity federation, using short-lived and narrowly scoped keys, and keeping keys out of shell history, dotfiles and environment variables. For detection, correlate agent process launches with network traffic and compare both to a baseline. Odd command-line arguments or unusual upload and download ratios are the signals. Darktrace tested only one platform.
