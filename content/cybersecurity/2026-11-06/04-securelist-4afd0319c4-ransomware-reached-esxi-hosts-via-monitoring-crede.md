---
id: 4afd0319c4
title: Ransomware reached ESXi hosts via monitoring credentials and a reused root password
original_title: "Virtualization security: attack layers and misconfiguration impact"
url: https://securelist.com/virtualization-security-esxi-and-proxmox-ransomware-cases/121819/
source: Securelist
kind: research
section: incidents
date: "2026-11-06"
published_at: "2026-11-06T10:00:12.000Z"
authors:
  - Rauf Johari
comments: https://securelist.com/virtualization-security-esxi-and-proxmox-ransomware-cases/121819/#respond
tags:
  - ransomware
  - esxi
  - proxmox
  - virtualization
  - credential-reuse
  - monitoring
  - research
why_read: >-
  The original gives both incident timelines, the misconfigurations that widened impact, and
  configuration checks for monitored virtualization.
rank: 4
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: glm-5.3
---

Kaspersky GERT investigated two ransomware cases on ESXi and Proxmox where weak access controls, poor network separation, and badly managed privileged credentials drove the impact. The first began with BlackNevas activity on a Windows system in the virtualized domain controller segment. UserAssist artifacts showed AnyDesk and GMER execution. The attacker then compromised PRTG Network Monitor, which held broad access to the ESXi hosts and a root password reused across several nodes. The source text cuts off before the Proxmox case, involving The Gentlemen group.

The credential was then used over SSH against every host sharing it, so no VM escape was required. On 19 October 2025, root uploaded a binary named esx. ESXi's execInstalledOnly setting blocked the first execution attempt. The attacker disabled it with esxcli system settings advanced set -o /User/execInstalledOnly -i 0, then ran the encryptor and deleted logs. On a second host sharing the same password, the binary ran with /log /wipe flags.

For defenders, the point is that a fully patched hypervisor can still fall to a shared password, an overprivileged monitoring account, an open SSH path, or an admin interface reachable from a general server network. A monitoring server that stores credentials able to administer what it observes is privileged infrastructure. Its identity, privileges, storage method, and network path should be limited to the monitoring task. NIST treats secure configuration baselines, restricted administrative access, patching, and monitoring as one practice set.
