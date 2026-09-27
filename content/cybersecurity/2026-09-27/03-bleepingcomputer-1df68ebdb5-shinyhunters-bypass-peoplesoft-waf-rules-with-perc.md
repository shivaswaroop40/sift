---
id: 1df68ebdb5
title: ShinyHunters bypass PeopleSoft WAF rules with percent-encoding trick
original_title: ShinyHunters uses WAF bypass trick in Oracle PeopleSoft attacks
url: >-
  https://www.bleepingcomputer.com/news/security/shinyhunters-uses-waf-bypass-trick-in-oracle-peoplesoft-attacks/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-09-27"
published_at: "2026-09-26T19:03:34.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - shinyhunters
  - peoplesoft
  - waf-bypass
  - cve-2026-35273
  - weblogic
  - web-shell
  - news
why_read: >-
  You will see exactly how the WAF bypass works, what post-exploitation tooling is being dropped,
  and why patching is the only durable mitigation.
rank: 3
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

The ShinyHunters extortion group is bypassing web application firewall protections for Oracle PeopleSoft servers by sending requests to /%50SEMHUB/ instead of the literal /PSEMHUB/ path. Google's Mandiant says many WAFs compare the raw request path before decoding, so rules written for the unencoded path miss the encoded variant, while WebLogic decodes the percent-encoded 'P' and routes the request normally.

This matters because defenders who could not immediately patch CVE-2026-35273 relied on blocking /PSEMHUB/ at the WAF as a stop-gap. Mandiant warns ShinyHunters may rotate to other encoded or mixed-case variants, so path-based WAF rules are no longer reliable mitigation. The group has deployed web shells on dozens of systems across education, healthcare, government and other sectors since the bypass was introduced.

Pre-exploitation reconnaissance involves five to 15 POST requests to the encoded endpoint that return host information without modifying the target. After confirming a vulnerable server, attackers deploy x.jsp command shells and u.jsp upload shells, then drop the SIDEEYE backdoor masquerading as a signed Light Alloy installer, plus the Neo-reGeorg SOCKS5 tunnel and MeshAgent for persistence and lateral movement.

Search WebLogic access logs for both /PSEMHUB/ and encoded variants like /%50SEMHUB/ to detect exploitation. Mandiant's only recommended fix is installing the Oracle security update for CVE-2026-35273, not relying on WAF rules.
