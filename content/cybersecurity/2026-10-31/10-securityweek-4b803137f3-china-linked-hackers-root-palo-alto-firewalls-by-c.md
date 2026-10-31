---
id: 4b803137f3
title: China-linked hackers root Palo Alto firewalls by chaining PHP2Shell with kernel bug
original_title: PHP2Shell Attacks Root Palo Alto Firewalls but Fail Against WordPress
url: >-
  https://www.securityweek.com/php2shell-attacks-root-palo-alto-firewalls-but-fail-against-wordpress/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-10-31"
published_at: "2026-10-30T15:09:25.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - palo-alto
  - pan-os
  - php2shell
  - exploit-chain
  - privilege-escalation
  - patching
  - news
why_read: >-
  You will get the full exploit chain, affected PAN-OS versions, patch details, and vendor telemetry
  on exposed PHP instances and attack volume.
rank: 10
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

A China-linked group, assisted by AI, has rooted Palo Alto firewalls by chaining exploits for the PHP2Shell flaws CVE-2026-109618 and CVE-2026-109619 with the Fragnesia kernel privilege escalation bug, deploying webshells with root privileges. Security firm Dream flagged the campaign and counted at least 25 hacked firewalls out of a pool of hundreds. Palo Alto Networks confirmed the findings, and Unit 42 independently verified the tooling. Patches cover PAN-OS 12.2, 12.1, 11.2, 11.1 and 10.2, plus Panorama.

No special configuration is required to be affected. Active exploitation has targeted the Palo Alto management interface exposed to the internet, which is not exposed by default. The company says roughly 0.02 percent of its installed base had internet-facing management interfaces and was impacted, and that each of those customers has been contacted individually. The advised actions are to restrict management interface access and apply the fixes.

The wider exploitation is broad but largely unsuccessful so far. Palo Alto telemetry counts over 22.6 million exposed PHP instances that are potentially vulnerable. Defiant has recorded more than 77,000 related requests from over 2,000 IP addresses against WordPress sites, and no confirmed WordPress compromises as of October 28. It notes the exploits often need per-server adjustment for ASLR, PHP build, running extensions and memory limits, so updating PHP remains essential.

Success has come from very few actors. Cato says roughly 96 percent of blocked attacks targeted CVE-2026-109618 and 41 percent attempted remote code execution, from a handful of IPs in the US, Netherlands and Germany. Healthcare organisations were targeted most, but the attacks appeared opportunistic. WatchTowr observed successful exploitation from a single IP in Germany, which ran a curl command to prove access and stopped there.
