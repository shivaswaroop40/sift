---
id: "2969992758"
title: Suspected Chinese attackers rooted 25 servers with a custom PHP2Shell exploit chain
original_title: Suspected Chinese attackers built a custom PHP2Shell exploit and rooted 25 servers
url: >-
  https://www.theregister.com/security/2026/10/29/suspected-chinese-attackers-built-a-custom-php2shell-exploit-and-rooted-25-servers/5306456
source: The Register
kind: news
section: security
date: "2026-10-30"
published_at: "2026-10-29T19:05:17.000Z"
authors:
  - Jessica Lyons
comments: null
tags:
  - php2shell
  - pan-os
  - exploit-chain
  - privilege-escalation
  - linux-kernel
  - active-directory
  - news
why_read: >-
  You get the stage-by-stage memory corruption walkthrough, the Active Directory follow-on, and the
  details Dream could not recover.
rank: 11
interest_score: 6.7
depth_score: 6
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

Dream researchers report that suspected Chinese attackers chained PHP2Shell with the Fragnesia Linux kernel flaw to gain root on 25 servers, including Palo Alto PAN-OS firewalls linked to US government-affiliated organizations. Attacks began on 23 October across the US, Japan, Taiwan and South Korea. The full chain, from unauthenticated HTTPS request to persistent root webshell, completed in under 15 minutes. Palo Alto's Unit 42 independently verified the tooling and results. Dream believes the attackers still hold persistent access.

The entry point matters as much as the bugs. The chain began with one unauthenticated HTTPS request to a firewall management interface that should never have faced the internet. Both PHP2Shell CVEs score 9.2 on CVSS and need no authentication to run code. CISA added Fragnesia to its Known Exploited Vulnerabilities catalog on Wednesday. Using FOFA, a Chinese asset search engine, the attackers fingerprinted about 19,000 internet-facing Palo Alto firewalls they can revisit.

The exploit matched no public proof-of-concept. Dream says it was built independently for PAN-OS 12.1 and 12.2, which run PHP 8.0.30 with a high memory limit. Crafted multipart POST requests corrupt PHP memory and force a predictable layout. A forged stale session ID length then triggers an out-of-bounds read that leaks the base address of libphp.so. Further memory exhaustion forces mod_data to null, forging a stale reference that runs commands as the nobody user. Fragnesia lifts that to root, and a webshell lands in a public directory on the firewall.

Within hours of rooting one US government-affiliated firewall, the attackers tunnelled into the internal network, compromised a third server with the same exploit, and ran a full Active Directory campaign. Root access yielded the master key to the LDAP service account password, which they hardcoded into roughly 40 later scripts. They enumerated every user and group, sprayed passwords across all accounts, and attempted backdoor account creation and SAML key extraction. Dream cannot confirm those succeeded, as the results stayed on the management server's local filesystem.
