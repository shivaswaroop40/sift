---
id: ca59c470fd
title: Nix and Lix patch local root escalation in daemon builds
original_title: Nix and Lix local root-privilege-escalation vulnerabilities
url: https://lwn.net/Articles/1100247/
source: LWN
kind: news
section: security
date: "2026-10-14"
published_at: "2026-10-13T16:13:24.000Z"
authors:
  - jzb
comments: null
tags:
  - nix
  - privilege-escalation
  - security
  - package-manager
  - daemon
  - news
why_read: >-
  Understand the scope of the Nix daemon vulnerabilities and check if your systems need urgent
  patching.
rank: 11
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

The Nix and Lix projects disclosed vulnerabilities allowing privilege escalation to root on systems running their daemons. Both projects released fixes the same day. The flaws affect all systems building untrusted derivations.

If your infrastructure runs Nix or Lix daemons and builds code from external sources, you need these patches immediately. The attack surface is any job that accepts untrusted input to the package manager.

GNU Guix coordinated with the disclosure and appears unaffected. CVE identifiers have not yet been assigned.
