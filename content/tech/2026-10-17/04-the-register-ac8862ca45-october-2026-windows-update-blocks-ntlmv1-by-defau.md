---
id: ac8862ca45
title: October 2026 Windows update blocks NTLMv1 by default, breaking legacy authentication
original_title: Networking problems after the October 2026 Windows update? NTLM might be to blame
url: >-
  https://www.theregister.com/security/2026/10/16/networking-problems-after-the-october-2026-windows-update-ntlm-might-be-to-blame/5303503
source: The Register
kind: news
section: infrastructure
date: "2026-10-17"
published_at: "2026-10-16T15:30:00.000Z"
authors: []
comments: null
tags:
  - windows
  - ntlm
  - authentication
  - security
  - networking
  - migration
  - news
why_read: >-
  Learn what changed in the October update and how to unblock systems still relying on NTLMv1
  authentication.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Microsoft's October 2026 security update changed the default behaviour of the BlockNtlmSSO registry value from Audit mode to Enforce mode. This blocks NTLMv1-derived credentials for Single Sign-On without explicit configuration, potentially disrupting Wi-Fi, Ethernet, and VPN authentication for systems still using the legacy protocol.

For platform engineers maintaining distributed systems, this is a forced migration deadline. NTLMv1 has been deprecated since 2024 and flagged for removal, but the change from warning to blocking means any unaddressed legacy authentication will now fail rather than merely log events.

The update does not set the registry value itself, so administrators can revert to Audit mode by setting BlockNtlmSSO to 0. However, Microsoft explicitly warns this reduces security and should only be temporary. NTLM remnants persist in some domain authentication methods like PEAP-MSCHAPv2, complicating complete removal.
