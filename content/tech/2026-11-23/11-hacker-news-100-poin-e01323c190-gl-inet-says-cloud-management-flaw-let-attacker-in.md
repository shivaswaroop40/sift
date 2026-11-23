---
id: e01323c190
title: GL.iNet says cloud management flaw let attacker install malware on routers and KVMs
original_title: GL.iNet Security Notice 2026-11-20
url: https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-23"
published_at: "2026-11-22T23:06:37.000Z"
authors:
  - gregsadetsky
comments: https://news.ycombinator.com/item?id=50604988
tags:
  - glinet
  - router-security
  - kvm
  - incident-response
  - firmware
  - remote-management
  - community
why_read: >-
  The original has the per-model firmware versions and the exact commands for checking routers and
  KVMs, which you need if you run or manage any of these devices.
rank: 11
interest_score: 6.3
depth_score: 5
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

GL.iNet reported on 20 November 2026 that an unauthorised party exploited a vulnerability in its cloud remote management service. The attacker installed malicious software on some of its routers and KVM devices. The company says it has fixed the cloud flaw and blocked the access used, so no new devices can be infected this way.

The cloud fix does not clean devices already compromised. GL.iNet has released stable security firmware for a long list of router and KVM models, which it says removes the malware without a factory reset. The indicator is a process showing the exact text crond -i /tmp/.log, found through LuCI or by running ps over SSH.

The notice is thin on root cause. It does not say how many devices were hit, what the malware does, or what the vulnerability was. The company is still working out the scope, including whether computers connected to infected KVMs were affected.

GL.iNet also admits its quick check may miss some affected devices, as more indicators have since emerged. It points to an unofficial community tool, which it does not endorse or verify, and warns that tool may run with administrative privileges.
