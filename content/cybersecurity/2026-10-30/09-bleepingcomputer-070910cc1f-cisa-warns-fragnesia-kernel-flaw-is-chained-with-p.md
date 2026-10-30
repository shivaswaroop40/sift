---
id: 070910cc1f
title: CISA warns Fragnesia kernel flaw is chained with PHP2Shell to run commands as root
original_title: CISA warns of Fragnesia Linux flaw chained in PHP2Shell attacks
url: >-
  https://www.bleepingcomputer.com/news/security/cisa-warns-of-fragnesia-linux-flaw-chained-in-php2shell-attacks/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-10-30"
published_at: "2026-10-29T13:59:48.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - cisa
  - linux-kernel
  - privilege-escalation
  - php
  - webshell
  - exploit-chain
  - news
why_read: >-
  The original has the CISA patch deadlines, the Fragnesia and PHP2Shell CVE numbers, and Dream
  Security's findings on the campaign that rooted 25 servers.
rank: 9
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: glm-5.3
---

CISA has added CVE-2026-46300, known as Fragnesia, to its Known Exploited Vulnerabilities Catalog and ordered federal agencies to patch by Saturday under Binding Operational Directive 26-04. The high-severity bug is a logic flaw in the Linux XFRM ESP-in-TCP subsystem. A public proof-of-concept lets local attackers gain root on major Linux distributions running kernels released before 13 May 2026. Fragnesia belongs to the Dirty Frag vulnerability class.

CISA says the flaw can be chained with the PHP2Shell vulnerabilities, CVE-2026-109618 and CVE-2026-109619, to implant PHP webshells and run commands as root. The chain spans a web application flaw and a kernel privilege escalation, so patching one layer alone leaves the other path available. Both sets of flaws are now on CISA's actively exploited list.

Dream Security researchers documented one such operation. It paired a custom weaponisation of the PHP2Shell chain with Fragnesia, along with target lists, exploitation logs and roughly 40 custom post-exploitation scripts. The campaign rooted 25 servers across the United States, Japan, Taiwan and South Korea. After rooting, the attacker focused on three servers in a US government-affiliated environment.

CISA added the PHP2Shell flaws to its list on Monday and gave Federal Civilian Executive Branch agencies until Thursday to secure their networks. Perplexity security engineer Adel Karimi confirmed exploitation after honeypots recorded remote code execution against Apache mod_php running PHP 8.4.26. CISA has shared no detail on the chaining itself, and a spokesperson could not comment when asked.
