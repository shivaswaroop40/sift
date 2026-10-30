---
id: 950888652e
title: Chinese actors rooted 25 firewalls by chaining PHP2Shell with the Fragnesia kernel flaw
original_title: Chinese hackers used VMware ESX zero-day; PHP2Shell and Fragnesia chained to root firewalls
url: https://www.helpnetsecurity.com/2026/10/29/php2shell-fragnesia-vmware-esx-zero-day/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-10-30"
published_at: "2026-10-29T16:25:10.000Z"
authors:
  - Zeljka Zorz
comments: null
tags:
  - php2shell
  - fragnesia
  - vmware-esx
  - cisa-kev
  - palo-alto
  - cisco
  - news
why_read: >-
  The original details the Dream attack path, CISA deadlines, Warp Panda's methods and Cisco's
  upgrade advice.
rank: 1
interest_score: 8
depth_score: 7
novelty_score: 9
utility_score: 8
scored: true
model: glm-5.3
---

Dream researchers documented a China-nexus campaign that chained the PHP2Shell flaws, CVE-2026-109618 and CVE-2026-109619, with the Fragnesia Linux kernel privilege escalation, CVE-2026-46300, to implant PHP webshells and run commands as root. The AI-assisted operation rooted 25 servers across the United States, Japan, Taiwan and South Korea, focused on three machines in a US government-affiliated environment, and extracted credentials from Active Directory domain controllers. Artifacts include target lists, exploitation logs and roughly 40 custom post-exploitation scripts.

CISA added Fragnesia to its Known Exploited Vulnerabilities catalog with an October 31 deadline and a forensic triage requirement under BOD 26-04. Dream did not name the firewall vendor. But Palo Alto Networks updated its PHP2Shell advisory to report active exploitation of management interfaces exposed to the internet, and researcher Kevin Beaumont says a ransomware group is using PHP2Shell against Palo Alto firewalls for initial access.

CrowdStrike separately reported that the Chinese espionage group Warp Panda exploited CVE-2026-41709, an insufficient logging flaw in VMware ESX, as a zero-day to reduce audit trail visibility. The group targets US organisations including law firms, enters through internet-facing edge devices, pivots to vCenter, and deploys BRICKSTORM and SharpStorm malware. It also reaches Microsoft 365 by stealing session tokens and registering new MFA devices. CISA added the flaw to KEV on October 28 and ordered federal civilian agencies to patch by November 11.

Cisco confirmed active exploitation of CVE-2026-76418, a denial-of-service flaw in its classic and next-gen firewalls. Logic errors in secondary authentication on tunnel groups let an unauthenticated remote attacker send a crafted request to the SSL remote access VPN and force a device reload. There are no workarounds, so Cisco recommends upgrading to a fixed release. The flaw is not yet in the KEV catalog.
