---
id: 25ea0076a9
title: Dell System Update path traversal allows unauthenticated root code execution
original_title: Dell System Update flaw allows attackers to gain root privileges (CVE-2026-86360)
url: https://www.helpnetsecurity.com/2026/10/06/dell-system-update-vulnerability-cve-2026-86360/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-10-06"
published_at: "2026-10-06T10:44:41.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - dell
  - path-traversal
  - rce
  - privilege-escalation
  - poweredge
  - unauthenticated
  - news
why_read: >-
  Learn the critical path traversal affecting Dell's ubiquitous server update tool and why immediate
  patching is essential.
rank: 4
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Dell patched CVE-2026-86360, a path traversal flaw in Dell System Update (DSU) versions before 2.3.0.0 with CVSS 9.6. An unauthenticated remote attacker can exploit it to execute arbitrary code with root privileges on PowerEdge servers.

DSU is the standard tool enterprise IT uses to deploy driver, BIOS, and firmware updates across Dell server infrastructure. Compromise of DSU means complete takeover of the affected server and its operating system.

Dell also fixed four additional high-severity flaws in DSU: two enable remote code execution, two permit privilege escalation. The advisory does not confirm active exploitation.
