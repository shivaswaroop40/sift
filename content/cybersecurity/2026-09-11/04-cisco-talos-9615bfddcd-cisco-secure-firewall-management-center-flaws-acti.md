---
id: 9615bfddcd
title: Cisco Secure Firewall Management Center flaws actively exploited
original_title: Active exploitation of Cisco Secure Firewall Management Center vulnerabilities
url: https://blog.talosintelligence.com/fmc-ongoing-exploitation/
source: Cisco Talos
kind: research
section: vulnerabilities
date: "2026-09-11"
published_at: "2026-09-09T16:08:59.000Z"
authors:
  - Cisco Talos
comments: null
tags:
  - cisco
  - fmc
  - cve-2026-20079
  - cve-2026-20316
  - cyclops-blink
  - qilin
  - research
why_read: Read Talos's analysis of the three intrusion clusters and the attacker tradecraft.
rank: 4
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: deepseek-v4-flash
---

Cisco Talos is tracking active exploitation of two vulnerabilities in Cisco Secure Firewall Management Center. CVE-2026-20079 is an authentication bypass with a CVSS score of 10.0, giving an unauthenticated remote attacker root access. CVE-2026-20316, scored 5.3, lets a remote attacker log in with a low-privileged account. Cisco has released hotfixes; a broader hardening release follows the week of September 14th.

The vulnerabilities matter because FMC is the central management plane for Cisco firewalls. Compromise gives attackers root on the underlying operating system, access to managed-device configurations, and stored user credentials. Talos identified three clusters of post-compromise activity linked to state-sponsored and crimeware actors, including Sandworm-associated tooling and Qilin ransomware affiliates.

Cluster UAT-12197 exploited CVE-2026-20079 to drop a JSP web shell and a JAR-based command executor, then queried internal databases for authentication data. UAT-11823 exploited CVE-2026-20079 and CVE-2026-20316 or used static credentials, installed a Netcat reverse shell through a malicious license.tmp file, and deployed a Cyclops Blink variant. UAT-11988 used static credentials, abused package_info.pl for reconnaissance, and ended with Qilin ransomware.
