---
id: 98ced31966
title: PHP2Shell used against Check Point gateways to reach ESXi hosts and deploy a wiper
original_title: PHP2Shell Exploitation on Check Point Gateway
url: https://research.checkpoint.com/2026/php2shell-exploitation-on-check-point-gateway/
source: Check Point Research
kind: research
section: incidents
date: "2026-11-13"
published_at: "2026-11-12T13:56:37.000Z"
authors:
  - matthewsu@checkpoint.com
comments: null
tags:
  - check-point
  - php2shell
  - wiper
  - esxi
  - privilege-escalation
  - philikit
  - research
why_read: >-
  The report gives file paths, markers, and tool names for hunting on gateways and ESXi hosts, plus
  a clear account of the gateway-to-hypervisor pivot.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Check Point Research says an attacker began exploiting unpatched Mobile Access portals on Check Point Security Gateways on 30 October 2026, about a week after a fix was released. PHP2Shell gave initial access. The attacker then used CVE-2026-123039, a local privilege escalation in the DynamicCLI IPC interface, to reach root.

With root, the attacker placed PHP webshells (zz*.tpl) in the portal templates directory and launched the TSGA backdoor. TSGA drops TSProxy, a library injected into appliance processes to intercept networking calls. The attacker then ran the gogo scanner, moved over SSH to a VMware ESXi host as vpxuser, and ran the destroy_v6 wiper. A note named DREAM_ANNEXATION.txt was left.

The first wave hit Israeli organisations and included destruction. A second wave on 2 November was broader, spanned several countries and sectors, and showed no destructive activity. Neither wave showed a sector preference, which suggests opportunistic access attempts.

Attribution is unsettled. TSGA and TSProxy are modified PhiliKit variants, which ESET linked to China-nexus UNC5221. Check Point cannot say with high confidence whether one actor ran everything, an access broker was involved, or this was a false flag. The wiper may also be a smoke screen. The Dream Security branding may signal retaliation, but no motive is established.
