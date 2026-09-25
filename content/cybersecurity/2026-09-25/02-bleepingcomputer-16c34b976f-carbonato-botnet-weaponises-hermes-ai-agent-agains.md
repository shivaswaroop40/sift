---
id: 16c34b976f
title: Carbonato botnet weaponises Hermes AI agent against exposed Docker daemons
original_title: New Carbonato malware uses AI agents to hijack exposed Docker hosts
url: >-
  https://www.bleepingcomputer.com/news/security/new-carbonato-malware-uses-ai-agents-to-hijack-exposed-docker-hosts/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-09-25"
published_at: "2026-09-24T20:10:48.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - docker
  - botnet
  - ai-agent
  - hermes
  - telegram
  - persistence
  - news
why_read: >-
  You will see how exposed Docker APIs are being weaponised with an AI agent for interactive remote
  control, and the specific indicators to hunt for.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Researchers at ThreatDown have documented a worm-like botnet called Carbonato that targets Docker daemons exposing their API on port 2375 without authentication. Evidence recovered from an unauthenticated Docker registry holding nearly 60 repositories and 4.3 GB of image data shows operational activity from October 2024 through August 2026.

After connecting to the exposed daemon, the malware launches a privileged container, opens a reverse SSH tunnel using an attacker-controlled key, and reports the new host to operators via Telegram. It establishes persistence through cron jobs, systemd timers, rc.local and OpenRC hooks, then scans attached networks every five minutes for further victims.

The operators install the Hermes Agent framework and replace its default SOUL.md persona with instructions for an agent named GH0ST. Hermes interprets commands from a Telegram channel, executes terminal commands on the victim, and returns results, covering tasks such as harvesting AI API keys, SSH credentials, and access tokens.

Indicators include the GH0ST persona file, a CARBONATO_API_KEY environment variable, unexpected Telegram traffic, and reverse SSH tunnels pointing to AS262145. Defenders should keep Docker APIs off the network and require authentication on registries.
