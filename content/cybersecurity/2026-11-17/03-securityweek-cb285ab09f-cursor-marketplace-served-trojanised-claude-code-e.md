---
id: cb285ab09f
title: Cursor marketplace served trojanised Claude Code extension after Fireworks AI breaches
original_title: Cursor Supply Chain Attack Started at Fireworks AI
url: https://www.securityweek.com/cursor-supply-chain-attack-started-at-fireworks/
source: SecurityWeek
kind: news
section: cloud-and-supply-chain
date: "2026-11-17"
published_at: "2026-11-16T15:45:43.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - supply-chain
  - cursor
  - fireworks-ai
  - vscode-extensions
  - credential-theft
  - claude-code
  - news
why_read: >-
  The article gives the affected versions, the exposure window and the attack path from a vendor key
  to a poisoned marketplace cache, which is useful for checking your own third-party credentials.
rank: 3
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Cursor says attackers published two malicious copies of the anthropic.claude-code extension, versions 2.1.312 and 2.1.313, through its VS Code extension marketplace for about 11 hours. The activity was found on October 29. Cursor says Anthropic was not hacked and that all malicious activity happened in Cursor's environment. At most 5,000 users were affected.

The chain began at Fireworks AI, which was breached twice in October. A Cursor access key issued to Fireworks was compromised and used to copy data from a read-only storage bucket. That data included unredacted credentials for SaaS tools Cursor uses. The attacker then reached archived non-production repositories, support data, usage metrics and some coding agent conversation summaries.

Using secrets taken from Cursor's internal systems, the attacker placed the tampered extensions in the cache that serves the marketplace. The malware was never in the Open VSX source, so only users fetching cached versions received it. Cursor says it has seen no attacker activity since November 1.

Cursor warns that uninstalling the extension alone may not be enough and points affected users to its security notice. Notion and Uber have also disclosed breaches linked to the Fireworks compromise.
