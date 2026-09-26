---
id: 6e646817b0
title: File change notifications on Linux, Android, Windows, and macOS leak user activity
original_title: Windows, Linux, Android File Notification Systems Leak User Activity
url: https://www.securityweek.com/windows-linux-android-file-notification-systems-leak-user-activity/
source: SecurityWeek
kind: news
section: threat-research
date: "2026-09-26"
published_at: "2026-09-25T10:53:32.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - file-watchers
  - local-attacks
  - linux
  - windows
  - android
  - macos
  - news
why_read: >-
  It tells you which OS file watchers leak activity to co-resident users, how far each attack
  reaches, and what is and is not patched.
rank: 10
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers at Graz University of Technology show that file-change notification APIs in Linux, Android, Windows, and macOS can be abused by an unprivileged local user or app to monitor other users on the same machine. The attacks never expose file contents, but file names, paths, and event timing let an attacker reconstruct user, application, and system activity, including keystroke timing, visited websites, message contents, and authentication prompts.

On Linux, watching a readable parent folder still surfaces events for protected files inside, including device files for keyboard input. Keystroke detection was between 93.1% and 100% accurate across seven typists, and hidden password fields such as sudo are not captured. Watching which system fonts Firefox loads identified sites from the top 100 with 87.9% accuracy. A fake authentication dialog attack was demonstrated on KDE Plasma 6 on Wayland.

On Android, an app with no permissions can watch another app's private storage folder. Against WhatsApp, the technique revealed when photos, videos, and documents were sent, received, or deleted, along with file names. On Windows, monitoring the root of a system drive reports full file paths for changes anywhere on the machine, including other users' home directories. Site-name folder structures on Firefox allowed 97.8% accuracy across the top 1,000 sites, against 48.5% on Edge. macOS leaks the least but still exposes app launches and settings changes.

The Linux kernel has been partially hardened against the device file leakage, tracked as CVE-2025-68788. There are no listed fixes for Android or macOS, and Microsoft told the researchers the Windows behaviour is by design and not a security vulnerability, citing an attacker that already has local code execution. Proof-of-concept code is on GitHub, and no in-the-wild exploitation has been observed.
