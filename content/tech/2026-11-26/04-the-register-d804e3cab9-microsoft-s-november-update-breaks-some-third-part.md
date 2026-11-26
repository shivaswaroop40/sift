---
id: d804e3cab9
title: >-
  Microsoft's November update breaks some third-party NTLM logins ahead of mandatory signing in May
  2027
original_title: Microsoft's NTLM security changes trip up third-party logins
url: >-
  https://www.theregister.com/security/2026/11/25/microsofts-ntlm-security-changes-trip-up-third-party-logins/5312085
source: The Register
kind: news
section: security
date: "2026-11-26"
published_at: "2026-11-25T17:01:00.000Z"
authors:
  - Richard Speed
comments: null
tags:
  - ntlm
  - microsoft
  - windows
  - authentication
  - kerberos
  - security-updates
  - news
why_read: >-
  The Register links the support notice details, including the registry path, the audit approach and
  the phase 2 date, which you need to plan NTLM clean-up.
rank: 4
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Microsoft's 10 November security updates change NTLM so Windows clients offer message signing on all connections by default. Some third-party products now fail to authenticate. Microsoft names authentication proxies, single sign-on products and application packaging tools. The cause is products that set the NTLMSSP_NEGOTIATE_TARGET_INFO flag in the CHALLENGE_MESSAGE but return an empty or incomplete TargetInfo field.

The temporary workaround is to set the ClientAllowUnsignedNtlm registry value to 1 on affected clients, under the MSV1_0 key. This stops the client offering signing. It backs out the new default and does not fix the product. Microsoft says it might remove the key later. Its long-term advice is a vendor update, or Kerberos where supported.

This is phase 1 of two. Servers still accept signed and unsigned clients, and auditing events identify clients that do not sign. Phase 2, due in May 2027, makes Windows servers require signing by default and reject clients that do not offer it. The change addresses CVE-2026-118737, a Windows RPC Runtime signature flaw that allows remote code execution.

The practical task is an inventory. Use Microsoft's network trace and event log examples to find incompatible products now, and press vendors for fixes before the workaround stops being available.
