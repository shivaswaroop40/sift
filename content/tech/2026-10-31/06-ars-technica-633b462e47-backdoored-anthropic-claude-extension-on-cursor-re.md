---
id: 633b462e47
title: Backdoored Anthropic Claude extension on Cursor reached up to 5,000 developers
original_title: Anthropic VS code extension on Cursor backdoored for nearly 12 hours
url: >-
  https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/
source: Ars Technica
kind: news
section: security
date: "2026-10-31"
published_at: "2026-10-30T21:09:54.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/#comments
tags:
  - supply-chain
  - security
  - vscode
  - cursor
  - anthropic
  - malware
  - news
why_read: >-
  The original details the backdoor's full capabilities, the exact exposure window, and indicators
  of compromise for checking machines.
rank: 6
interest_score: 7.7
depth_score: 6
novelty_score: 9
utility_score: 8
scored: true
model: glm-5.3
---

A malicious version of Anthropic's official Claude VS Code extension was published through Anthropic's own account on Cursor's marketplace. Version 2.1.313 superseded 2.1.312 and reached at most 5,000 users between 5:27 am and 4:35 pm ET on Thursday. Cursor extensions auto-update by default. Anthropic pushed a clean 2.1.314 several hours later. Neither company has explained how attackers took control of the account.

The extension ran with the IDE's permissions, giving it access to local files, source code, and developer tooling. It collected host and user details, including environment variable names, which let the operator inventory cloud credentials and API tokens and prioritise machines for follow-up attacks. It also tried to add an attacker-controlled SSH key, open a reverse SSH tunnel, and make it persistent, retrying roughly every 60 seconds.

Bugs in the malicious code limited the damage. The SSH key step failed on Windows and macOS unless Cursor ran with administrator privileges. Cursor removed the package, blocked further distribution, and worked with the cloud provider hosting the command server so infected devices could no longer reach it. It briefly shut the marketplace to rotate keys and audit other extensions. Anthropic has issued no public notice.

Anyone who installed or updated the extension during the exposure window should treat their machine as affected, and anyone who updated recently should consider themselves potentially infected. Cursor and security firm Phorian have published indicators of compromise, including IP addresses and cryptographic hashes, for checking endpoints.
