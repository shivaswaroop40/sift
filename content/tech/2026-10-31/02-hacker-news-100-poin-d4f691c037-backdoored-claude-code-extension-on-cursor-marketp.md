---
id: d4f691c037
title: Backdoored Claude Code extension on Cursor Marketplace drops persistent SSH key
original_title: Backdoor in Claude Code for VS Code extension on the Cursor Marketplace
url: https://phorion.io/blog/offical-claude-code-vsx-compromise/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-10-31"
published_at: "2026-10-30T07:09:12.000Z"
authors:
  - _chall
comments: https://news.ycombinator.com/item?id=50300683
tags:
  - backdoor
  - supply-chain
  - ssh
  - vscode-extension
  - cursor
  - malware
  - community
why_read: >-
  The write-up gives the full infection chain, the platform-by-platform SSH enablement logic, and
  the bugs that limit it on macOS and Windows.
rank: 2
interest_score: 8
depth_score: 6
novelty_score: 9
utility_score: 9
scored: true
model: glm-5.3
---

Phorion found a backdoor in the official Claude Code for VS Code extension on the Cursor Marketplace, in versions 2.1.312 and 2.1.313. Cursor has removed both. The injected code is an immediately invoked function prepended to the minified extension.js, so it runs as soon as Node loads the file, before the extension's activate callback. It appends an attacker-controlled Ed25519 key to ~/.ssh/authorized_keys, tries to enable the SSH daemon, and beacons host reconnaissance to the operator.

Extensions run with the permissions of the IDE and the user running it, so the payload reaches local files, source code and developer tooling as soon as its module loads. No interaction with the extension is needed. The implant carries setup and persistence logic for macOS, Linux and Windows, and Phorion advises organisations to review for these versions and engage incident response where use is found.

The macOS path contains a bug that blunts the inbound access. The script runs systemsetup -getremotelogin without elevation. On a standard account that prints an administrator-access error and exits with status 0, so the test for Off fails and the enablement step never runs. On a Mac without SSH already enabled, traffic forwarded back through the tunnel hits a closed port 22, though the key and persistence still land. The Windows path is broken too, because a helper function hardcodes /bin/sh for a PowerShell command.

For hunting, the script checks for the comment string svc-telemetry in authorized_keys rather than the key itself, so matching the comment alone can produce false negatives. Phorion recommends checking the public-key fingerprint. There is no privilege escalation; the non-interactive sudo -n call fails unless passwordless sudo is already configured.
