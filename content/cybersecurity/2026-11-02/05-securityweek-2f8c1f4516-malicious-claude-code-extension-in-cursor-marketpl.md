---
id: 2f8c1f4516
title: Malicious Claude Code extension in Cursor marketplace may have reached 5,000 systems
original_title: Malicious Claude Code Extension Served in Cursor Supply Chain Attack
url: https://www.securityweek.com/malicious-claude-code-extension-served-in-cursor-supply-chain-attack/
source: SecurityWeek
kind: news
section: cloud-and-supply-chain
date: "2026-11-02"
published_at: "2026-11-02T11:29:39.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - supply-chain
  - cursor
  - vscode-extension
  - ssh-tunnel
  - persistence
  - malware
  - news
why_read: >-
  The original covers the payload's persistence mechanism, Cursor's detection script and IoCs, and
  remediation steps for affected hosts.
rank: 5
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

A malicious actor used access to Cursor's marketplace to publish tampered versions 2.1.312 and 2.1.313 of the anthropic.claude-code extension on 29 October. They stayed live for roughly 11 hours. Security researcher Kevin Beaumont estimates about 5,000 developer systems may have downloaded them. The malicious JavaScript ran during module loading, collecting host reconnaissance before trying to install an SSH key, enable SSH, create a reverse tunnel, and configure persistence.

Anthropic says only Cursor users are affected. The tampered builds were absent from the Microsoft Visual Studio Marketplace, Open VSX, and NPM, and Anthropic has bumped its legitimate extension to 2.1.314 to avoid version confusion. The payload gathered hostname, username, OS, architecture, working directory, and global Git email. Uninstalling the extension may not be sufficient. The payload drops standalone persistence scripts, so Cursor advises isolating affected hosts, removing the unauthorized SSH key and persistence mechanisms, and assessing whether a rebuild is needed.

Cursor says the SSH step failed on most systems, blocking the attackers from logging in through the tunnel. Enabling the local SSH service requires admin rights, which the extension does not have on most macOS and Windows machines. Cursor removed the extension, rotated all marketplace keys, and rebuilt the store. It found no other malicious extensions, worked with a cloud provider to take the attacker's server offline, and released a detection script and indicators of compromise.
