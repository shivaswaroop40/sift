---
id: ca9c4c297b
title: AuditTeam uses OpsAgent implant to encrypt files and sell 'audit' ransom notes
original_title: "The forced audit: how AuditTeam’s OpsAgent framework masks ransomware as consulting"
url: https://securelist.com/auditteam-opsagent-forced-audit/122031/
source: Securelist
kind: research
section: threat-research
date: "2026-11-18"
published_at: "2026-11-18T07:00:07.000Z"
authors:
  - Vladimir Nestor
comments: https://securelist.com/auditteam-opsagent-forced-audit/122031/#respond
tags:
  - auditteam
  - opsagent
  - ransomware
  - edr-evasion
  - rust
  - c2
  - research
why_read: >-
  The original has loader and injection details, C2 discovery via GitHub, the signed driver abuse,
  and indicators of compromise you can use for detection.
rank: 6
interest_score: 7.3
depth_score: 8
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Kaspersky's Securelist describes AuditTeam, a group active since January 2026 that uses a Cobalt Strike-like framework called OpsAgent. Victims include dozens of organisations in Russia, Italy, the Philippines, Hong Kong, Senegal, Finland and China. The leak site claims victims in seven more countries. The group was first seen by researchers in a Hong Kong intrusion on 10 March 2026.

The ransom note demands an 'Audit & Consulting fee' in return for a vulnerability report instead of a public leak of stolen data. The note does not mention encryption, but the cryptor module drops it, so files are already encrypted when it appears. The cryptor uses AES-CBC or ChaCha20 with X25519 key exchange and kills database processes first.

OpsAgent is built to evade defences. An AV/EDR killer module loads a signed Beijing Jiangmin Antivirus driver to terminate security products. Command-and-control uses Amazon CloudFront subdomains, found through addresses stored encrypted in a public GitHub repository. Payloads such as mimikatz arrive remotely through named pipes, so none are embedded in the implant.

The implant moved from C++ to Rust during the campaign, with a Rust loader running the payload in-process rather than injecting. Earlier loaders injected into msiexec.exe. The report notes code patterns that suggest LLM-assisted development, though this is an inference from code structure. The source text is truncated, so the full command list and indicators are not covered here.
