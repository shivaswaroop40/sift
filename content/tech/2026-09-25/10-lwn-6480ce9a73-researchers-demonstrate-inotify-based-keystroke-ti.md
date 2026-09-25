---
id: 6480ce9a73
title: Researchers demonstrate inotify-based keystroke timing and KDE clickjacking attacks
original_title: Research into file-notification attacks on Linux
url: https://lwn.net/Articles/1096431/
source: LWN
kind: news
section: security
date: "2026-09-25"
published_at: "2026-09-24T17:40:36.000Z"
authors:
  - jzb
comments: null
tags:
  - linux
  - inotify
  - kde
  - polkit
  - clickjacking
  - security
  - news
why_read: >-
  You will see two concrete attacks that abuse inotify and the affected kernel versions, plus a
  pointer to a practical mitigation for the polkit overlay.
rank: 10
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers from Graz University of Technology have published a paper and demo site showing file-notification attacks against Android, Linux, macOS, and Windows. On Linux, running inotifywatch on a directory allows an inter-keystroke timing attack without needing read access to the files inside.

The same inotify mechanism enables a UI-redress attack against KDE 5 and KDE 6. Monitoring /usr/bin/pkexec lets an attacker detect when Polkit spawns an authentication prompt and overlay a fake window to capture the password.

The kernel partially mitigated the issue in releases shipped in January: 5.10.248, 5.15.198, 6.1.160, 6.6.120, 6.12.65, and 6.18.3. The researchers note both flaws remain present in some form and provide a mitigation to stop password-prompt windows from losing focus.
