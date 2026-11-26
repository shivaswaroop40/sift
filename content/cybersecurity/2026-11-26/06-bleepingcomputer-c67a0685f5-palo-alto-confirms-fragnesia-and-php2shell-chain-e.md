---
id: c67a0685f5
title: >-
  Palo Alto confirms Fragnesia and PHP2Shell chain exploited against exposed PAN-OS management
  interfaces
original_title: Palo Alto Networks warns of Fragnesia flaw exploited in PAN-OS attacks
url: >-
  https://www.bleepingcomputer.com/news/security/palo-alto-networks-warns-of-fragnesia-flaw-exploited-in-pan-os-attacks/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-11-26"
published_at: "2026-11-25T22:05:09.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - palo-alto-networks
  - pan-os
  - fragnesia
  - php2shell
  - exploited-vulnerability
  - privilege-escalation
  - news
why_read: >-
  The article lists the affected PAN-OS branches, the exposure condition behind the attacks, and the
  vendor's mitigation advice, so you can check your own management interfaces.
rank: 6
interest_score: 7.7
depth_score: 6
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Palo Alto Networks has confirmed that attackers are chaining PHP2Shell and Fragnesia against PAN-OS firewalls. PHP2Shell covers two critical PHP flaws, CVE-2026-109618 and CVE-2026-109619, allowing unauthenticated code execution as the PHP web worker. Fragnesia, CVE-2026-46300, is a Linux kernel XFRM ESP-in-TCP flaw that lets a low-privileged local attacker reach root.

All observed exploitation hit PAN-OS devices with the management interface exposed to the internet, which the vendor says goes against its best practices. CISA warned of the same chain on October 28, with webshells deployed and commands run as root. Dream Security saw a campaign in the US, Japan, Taiwan and South Korea, including a US government affiliate.

Palo Alto says this chain is the only known way to exploit Fragnesia. Administrators who already applied updates for PHP2Shell should be safe from these attacks. Fixes for Fragnesia exist for PAN-OS 10.2, 11.1, 11.2, 12.1 and 12.2, with the patched build varying by release.

The company gave no technical detail on how the chain works. It advises anyone who must keep remote management available to restrict access to trusted internal IP addresses.
