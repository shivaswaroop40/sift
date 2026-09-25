---
id: dcf3587159
title: File notification APIs leak file events without file read permission across four OSes
original_title: >-
  File Notification Attacks: Side-Channel Leakage from the File-Notification System on Linux,
  Android, Windows, and macOS
url: https://inoti.fyi/
source: Lobsters
kind: community
section: security
date: "2026-09-25"
published_at: "2026-09-25T02:50:41.000Z"
authors:
  - inoti.fyi by sneela
  - inoti.fyi by sneela
comments: https://lobste.rs/s/x6yjrc/file_notification_attacks_side_channel
tags:
  - security
  - linux
  - android
  - windows
  - macos
  - side-channel
  - community
why_read: >-
  See concrete side channels via file-notification APIs on Linux, Android, Windows and macOS,
  including a Windows website-visiting leak and an Android WhatsApp media leak.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Researchers have shown that inotify on Linux, FileObserver on Android, ReadDirectoryChangesW on Windows and the macOS File System Events API all emit file events to watchers even when the watcher has no read permission on the file itself, provided the parent directory is readable. The paper, accepted at CCS 2026 and hosted at inoti.fyi, demonstrates inter-keystroke timing leaks from /dev/input on Linux, cross-user keypress observation on shared SSH hosts, and a KDE Plasma authentication UI redress on Wayland.

On Android, FileObserver bypasses the per-app FUSE storage view, so an unprivileged app can watch another app's private folder and see exactly when files arrive or are deleted. The authors demonstrate this against WhatsApp's media directory.

On Windows, a watch on C:\ returns the full path of every file change anywhere on the system regardless of permissions or user, leaking which websites another logged-in user visits in real time. Microsoft classified the report as an undocumented feature, leading to a Pwnies nomination for lamer vendor response.

For practitioners running multi-tenant Linux servers, shared workstations or kiosk-style setups, the practical implication is that file-event APIs cannot be treated as access-control boundaries. Watching /dev/input, /dev/pts or a user's home tree can reveal behaviour without any read rights on the target files.
