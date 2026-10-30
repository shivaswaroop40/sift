---
id: 5c5e530ae3
title: Official Claude Code extension compromised to install persistent SSH backdoor
original_title: Official Claude Code VS Code Extension Compromised to Install Persistent SSH Backdoor
url: https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-10-30"
published_at: "2026-10-30T08:55:47.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - supply-chain
  - vscode
  - backdoor
  - claude-code
  - open-vsx
  - cursor
  - news
why_read: >-
  Read the original for Cursor's incident statement and any further detail on the compromise and
  remediation.
rank: 6
interest_score: 7.7
depth_score: 6
novelty_score: 9
utility_score: 8
scored: true
model: glm-5.3
---

Researchers have disclosed that the official Anthropic Claude Code extension was compromised on the Open VSX registry. The tampered extension installed a persistent SSH backdoor on infected hosts. The issue has been traced to a compromise of the Cursor Marketplace. Cursor briefly took the service down to remove the malware.

This is a supply chain failure at the marketplace layer. The listing in question was the official one, so checking the publisher name offered no protection. A persistent SSH backdoor also means any host that ran the tampered extension should be treated as offering ongoing remote access. Removing the extension alone is not a sufficient response.

The reporting is thin on operational detail. The article's incident statement is cut short, and it gives no exposure window and no indicators of compromise. Teams scoping a response should treat the details here as incomplete and check the original article and vendor statements for specifics.
