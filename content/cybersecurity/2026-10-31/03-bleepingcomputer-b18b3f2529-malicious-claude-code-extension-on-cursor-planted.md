---
id: b18b3f2529
title: Malicious Claude Code extension on Cursor planted SSH backdoors for 11 hours
original_title: Malicious Claude Code extension on Cursor planted SSH backdoors
url: >-
  https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-10-31"
published_at: "2026-10-30T14:36:54.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - supply-chain
  - ssh-backdoor
  - cursor
  - malware
  - vscode-extension
  - claude-code
  - news
why_read: >-
  The original details the malware's behaviour, the bugs that limited it, the exposure window, and
  Cursor's remediation steps including the 'svc-telemetry' key indicator.
rank: 3
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

A maliciously modified copy of Anthropic's Claude Code extension was available on Cursor's marketplace for roughly 11 hours on October 29, between 2:27 a.m. and 1:35 p.m. Pacific Time. Version 2.1.313 could have reached up to 5,000 developers. Researchers at Phorion and OpenSourceMalware found the attackers had prepended a JavaScript loader to extension.js, leaving the legitimate code intact. The payload ran as soon as the extension loaded, with no interaction required.

This landed on developer workstations, machines that hold repository access and credentials. The malware collected the username, hostname, public IP, Git email and names of environment variables tied to sensitive credentials, added an attacker-controlled SSH key, and set persistence through a macOS LaunchAgent or a Windows scheduled task or startup script, retrying a reverse tunnel roughly every minute and reporting to 134.209.82[.]225. It did not steal credentials directly, suggesting the attackers meant to retrieve data manually after gaining access.

Phorion found that coding errors likely prevented remote access on many affected machines. On macOS the malware checked Remote Login without elevated privileges, so the command returned an administrator error rather than a status and the activation step was skipped. On Windows it tried to install and start the OpenSSH server but invoked the command through /bin/sh, a Unix shell absent from standard installs. Reconnaissance data still left the network even when the tunnel failed.

Cursor removed the extension, temporarily closed its marketplace to audit packages and rotate access keys, and had the attacker's server taken offline. It says no other extension versions or the official distribution were affected, and Cursor was the only source of the malicious copy. Machines that installed it should be checked for an 'svc-telemetry' SSH key, then isolated, with secrets rotated, sessions invalidated and a rebuild from safe backups. How the package appeared under Anthropic's name, and whether either company's systems were compromised, remains unexplained.
