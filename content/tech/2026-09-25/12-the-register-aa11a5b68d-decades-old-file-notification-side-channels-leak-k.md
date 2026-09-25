---
id: aa11a5b68d
title: Decades-old file-notification side channels leak keystrokes and browsing across major OSes
original_title: Decades-old file security flaws found in Android, Linux, macOS, and Windows
url: >-
  https://www.theregister.com/security/2026/09/24/decades-old-file-security-flaws-found-in-android-linux-macos-and-windows/5298672
source: The Register
kind: news
section: security
date: "2026-09-25"
published_at: "2026-09-24T17:00:00.000Z"
authors: []
comments: null
tags:
  - android
  - linux
  - windows
  - macos
  - side-channel
  - inotify
  - news
why_read: >-
  You will see concrete attack numbers and OS-specific failure modes for a side channel that has
  lived in every major kernel since the 90s, and the patch status for each vendor.
rank: 12
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers at TU Graz found that file notification subsystems on Linux, macOS, Windows, and Android leak system information through side channels that have existed since at least 2000. The affected APIs are inotify (Linux, 2005), ReadDirectoryChangesW (Windows, 2000), FSEvents (macOS, 2007) and FileObserver (Android, 2008). The leaks do not reveal file contents but expose creation, access and modification events to unprivileged users.

On Linux, watching /dev/input yields a notification on every keystroke, which the team turned into an inter-keystroke timing attack with 93.1 to 100 percent accuracy across seven users locally and 100 percent over SSH. On Windows, watching C:\ reports the full path of every file touched anywhere on the system, letting one user fingerprint another user's Firefox browsing at 97.8 percent accuracy. On Android, FileObserver crosses the FUSE boundary so a permissionless app can watch WhatsApp's private folder and observe when photos, videos and documents are sent or deleted. KDE Plasma 6 under Wayland was also vulnerable to an authentication-prompt redress attack.

Linux kernel CVE-2025-68788 was partially fixed in December 2025 across stable branches from 5.10.248 to 6.18.3 by suppressing access and modify events on special files in /dev. No mitigation has appeared for Android. Microsoft told the researchers that the Windows behaviour is by design and undocumented, a response nominated for the lamest vendor response at the Pwnie Awards 2026. Apple provided the least information because no bypasses were found for reading private directories, though .plist changes still expose audio, power, Bluetooth, DNS and mount events.

The paper argues capability checks should extend to monitoring one's own files and any readable file, and proposes disallowing whole-drive monitoring on Windows and adding kernel permission systems on Windows and macOS. The work is scheduled for ACM CCS 2026 in November.
