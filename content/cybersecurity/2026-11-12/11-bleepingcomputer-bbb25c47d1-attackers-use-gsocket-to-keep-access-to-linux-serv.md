---
id: bbb25c47d1
title: Attackers use GSocket to keep access to Linux servers after patching
original_title: Hackers plant GSocket on Linux servers for persistent access
url: >-
  https://www.bleepingcomputer.com/news/security/hackers-plant-gsocket-on-linux-servers-for-persistent-access/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-11-12"
published_at: "2026-11-12T09:38:00.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - gsocket
  - linux
  - persistence
  - egress-filtering
  - cve-2026-43284
  - microsoft
  - news
why_read: >-
  The article gives Microsoft's detection figures, the persistence locations to audit, and the
  egress controls that can catch this relay-based access.
rank: 11
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Microsoft reports that multiple threat actors are abusing GSocket, a legitimate open-source remote access tool, to keep a foothold on Linux servers even after the original vulnerability is patched. Defender for Endpoint detections of GSocket activity rose 356.2% between March and August. Of the incidents, 87.1% involved web applications and hosting, including PHP apps and cPanel (63.9%) and Apache (24.3%).

GSocket routes traffic through the Global Socket Relay Network. Both the compromised server and the operator connect outbound to the relay, which brokers an encrypted session. The server needs no inbound listener or public IP, and NAT does not block it. Attackers also need no dedicated C2 server, so IP- or domain-based blocklists have little to act on.

Microsoft saw GSocket disguised as kernel threads, with persistence through cron jobs, systemd services and shell startup files. In some cases attackers tried the Dirty Frag kernel flaw (CVE-2026-43284) to gain root. Most targets were in education and research, then technology, communications, manufacturing and government.

Inbound firewall rules do not catch this traffic, but egress filtering and outbound monitoring can. Microsoft advises removing GSocket and its files, confirming connections to the relay have stopped, restricting outbound traffic to known destinations, and auditing cron, systemd and shell startup files. Patching CVE-2026-43284 is also recommended.
