---
id: 776ccacabc
title: Ubuntu has not patched two severe kernel flaws nine days after disclosure, researcher says
original_title: Slow Ubuntu security response times
url: https://www.openwall.com/lists/oss-security/2026/11/25/9
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-26"
published_at: "2026-11-25T20:38:00.000Z"
authors:
  - gslin
comments: https://news.ycombinator.com/item?id=50647181
tags:
  - ubuntu
  - linux-kernel
  - security
  - cve
  - kvm
  - patching
  - community
why_read: >-
  If you run Ubuntu hosts or KVM on AMD, this tells you which CVEs were still open and what the
  author thinks causes the lag.
rank: 9
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Hanno Böck posted to oss-security that Ubuntu is slow to fix serious kernel bugs. NoisyTCP (CVE-2026-99288), a remote memory corruption in the TCP stack, was disclosed on 16 November. Nine days later Ubuntu had published no fix, while other distributions had one ready at disclosure. A KVM host escape on AMD (CVE-2026-99312), published on 18 November, is also unfixed.

He cites a third case, a remote TCP corruption (CVE-2026-98432), where Ubuntu took several weeks to ship a fix. He links a GreyNoise post suggesting this one may be exploited in the wild. The wording is hedged, so treat the exploitation claim as unconfirmed.

Böck expects fixes for remote kernel corruption bugs within hours, not days. He ties the delay to Ubuntu's kernel strategy. A recent LTS reports kernel 7.0.0-44, which he reads as backporting patches to an old base. Debian stable reports 6.12.118, which he reads as tracking a current longterm kernel from kernel.org.
