---
id: 40b33d4610
title: Citrus ransomware group enters via contractors and uses LLM-written scripts and VLESS tunnels
original_title: "Citrus Ransomware: VLESS for traffic, Sn00py for encryption, and LLMs lending a hand"
url: https://securelist.com/citrus-ransomware/121879/
source: Securelist
kind: research
section: threat-research
date: "2026-11-11"
published_at: "2026-11-11T10:00:25.000Z"
authors:
  - Stanislav Larinsky
  - Vladislav Vlasov
  - Boris Trefilov
comments: https://securelist.com/citrus-ransomware/121879/#respond
tags:
  - ransomware
  - citrus
  - sn00py
  - vless
  - active-directory
  - llm
  - research
why_read: >-
  The full report gives the group's tactics step by step, including detection hints such as GHOST
  machine accounts, and indicators of compromise.
rank: 4
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Securelist describes Citrus, a previously undocumented ransomware group. It gets in through compromised contractors, using stolen employee credentials to reach corporate VPNs or internet-facing RDP terminal servers. Its tools include VLESS tunnels that disguise traffic as ordinary HTTPS, and a ransomware Trojan from the Sn00py family.

Researchers say the group uses LLMs to generate commands and full scripts. The evidence is commented code, which attackers rarely write, including a script that enumerates user sessions across domain systems. The group also uses Impacket's atexec to create scheduled tasks with random names that launch cmd.exe. Securelist believes these most likely ran gpupdate /force, but did not see the commands.

For privilege escalation, the contractor accounts had limited rights, so the attackers tried CVE-2026-54121 (Certighost), an authentication bypass in AD CS. Failed or partial attempts leave machine accounts named GHOST plus eight random letters. A successful exploit yields a certificate that lets the attacker authenticate as the domain controller account. They also tried CVE-2020-1337 and targeted insecure 1C:Enterprise servers.
