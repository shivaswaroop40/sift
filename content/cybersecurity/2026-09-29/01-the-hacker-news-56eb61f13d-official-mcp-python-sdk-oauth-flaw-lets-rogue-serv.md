---
id: 56eb61f13d
title: Official MCP Python SDK OAuth flaw lets rogue servers steal client secrets
original_title: Official MCP Python SDK Flaw Can Let Malicious Servers Steal OAuth Credentials
url: https://thehackernews.com/2026/09/official-mcp-python-sdk-flaw-can-let.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-29"
published_at: "2026-09-29T06:08:25.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - mcp
  - python
  - oauth
  - vulnerability
  - sdk
  - news
why_read: >-
  It tells you the exact SDK versions affected and the upgrade path so you can patch before any
  production MCP integration leaks credentials.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

A vulnerability in the official MCP Python SDK allowed a malicious MCP server to receive the OAuth client secret, authorisation code, and PKCE proof key for a real service. The SDK maintainers disclosed the issue in a security advisory.

Affected versions redirected token-exchange traffic to an attacker-controlled endpoint while still completing the OAuth flow, so the legitimate client application had no visible sign of compromise. The SDK ships the fix in versions 1.30.0 and later.
