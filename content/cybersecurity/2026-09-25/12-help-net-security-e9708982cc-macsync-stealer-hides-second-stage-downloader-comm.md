---
id: e9708982cc
title: MacSync stealer hides second-stage downloader commands in a public iCloud calendar
original_title: MacSync info-stealing malware hides malicious commands in an iCloud calendar
url: https://www.helpnetsecurity.com/2026/09/25/macsync-info-stealing-malware-for-macos/
source: Help Net Security
kind: news
section: threat-research
date: "2026-09-25"
published_at: "2026-09-25T09:22:45.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - macos
  - infostealer
  - icloud
  - backdoor
  - crypto
  - kaspersky
  - news
why_read: >-
  You get a full breakdown of a current macOS stealer chain that hides payload delivery in an iCloud
  calendar, uses PAM for password checks, and persists through Finder-named LaunchAgents and Git
  hooks.
rank: 12
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Kaspersky has documented a new MacSync variant that targets macOS with an infostealer and a Finder-disguising backdoor, spread through a fake crypto wallet app called Toria promoted on X and Telegram.

The campaign swaps earlier AppleScript payloads for Swift and Objective-C binaries, and abuses Apple infrastructure as a delivery stage. In one chain, the dropper fetches a public iCloud calendar file, pipes each line into zsh, and only runs the malicious commands placed after the DESCRIPTION: field to pull down the next stage.

The stealer harvests browser cookies and logins, crypto wallet extensions and app data, Telegram, Keychain entries, and developer configuration for SSH, AWS, Kubernetes and Git. It uses PAM rather than dscl to validate the admin password it tricks the user into entering.

The backdoor persists via a LaunchAgent named com.apple.finder.agent, a .zshrc entry, and global Git pre-commit and post-checkout hooks, then runs attacker-supplied AppleScripts to deploy a browser extension and replace the Ledger wallet app. A disabled feature already attempts to allow Keychain reads without confirmation.
