---
id: 5b81eaffe0
title: Malicious npm package hides loader in runtime method to evade install-script blocks
original_title: Malicious npm packages evade install-script defenses at runtime
url: >-
  https://www.bleepingcomputer.com/news/security/malicious-npm-packages-evade-install-script-defenses-at-runtime/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-09-21"
published_at: "2026-09-20T14:11:21.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - npm
  - supply-chain
  - malware
  - crypto-c2
  - runtime-evasion
  - news
why_read: >-
  Shows how attackers bypass recent npm supply-chain defences by hiding payloads in runtime code,
  and lists packages you should check.
rank: 7
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

An npm malware campaign uses the 'indexed-btree' package to impersonate the legitimate 'sorted-btree' library, reaching 2 million weekly downloads. Checkmarx found the loader hidden inside BTree.prototype.set(), which runs at runtime only when called with a specific key value.

This matters because GitHub's June 2026 npm security measures block preinstall, install, and postinstall scripts unless approved. Since the malicious code lives in normal library behaviour, install-time scanning and npm v12 approval mechanisms do not trigger, allowing the package to look clean.

Once executed, the malware collects system details such as architecture, hostname, CPU, memory, and uptime, and sends them via Slack and Telegram channels. It also polls an Ethereum smart contract on Sepolia, using X25519 key exchange and AES decryption to fetch a second-stage payload. The operators can later wipe files and remove the trigger from the package.

Nine related packages were identified and removed, with downloads ranging from 366,019 to nearly 2 million. Checkmarx advises rotating secrets and rebuilding environments from clean backups, and recommends runtime behavioural analysis alongside install-time checks.
