---
id: d6acb26236
title: Hardcoded MCP credentials found in roughly 12% of public GitHub config files
original_title: Hardcoded MCP credentials found in public GitHub files
url: https://www.helpnetsecurity.com/2026/09/18/hush-security-mcp-credential-exposure-report/
source: Help Net Security
kind: news
section: cloud-and-supply-chain
date: "2026-09-18"
published_at: "2026-09-18T05:30:26.000Z"
authors:
  - Anamarija Pogorelec
comments: null
tags:
  - mcp
  - credentials
  - github
  - secrets-management
  - non-human-identities
  - ai-agents
  - news
why_read: >-
  You will see how MCP configuration files create a new class of credential exposure on GitHub and
  why usual secret-scanning and rotation playbooks are not enough.
rank: 9
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Researchers from Hush Security analysed around 82,000 Model Context Protocol configuration files in public GitHub repositories and found that 12% of credential slots contained a hardcoded secret such as an API key, token or database password.

The findings matter because MCP configuration files are intended to be committed to repositories, unlike application code, so secrets inside them are routinely exposed to anyone with access to the repo. GitHub code search only covers default branches, excludes forks and caps per-query results, so the firm treats the 12% figure as a lower bound.

Of the hardcoded secrets, 55% did not match any known vendor token format and 31% were opaque bearer tokens for internal MCP servers, making them harder for scanners to detect. Among classified credentials, 53% granted organisation, account, workspace or database-wide access, and 80% of those with an expiration policy did not expire by default. 24% of hardcoded literals were both broad-scope and non-expiring by design.

Reviewing the history of 7,681 credential-bearing files, researchers found 243 where a secret had been removed from the current version but remained in an earlier commit, meaning deletion alone does not end the exposure. Rotation at the provider is required.
