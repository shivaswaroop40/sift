---
id: 59c1e95224
title: NFS2ROOT heap overflow in Linux nfsd allows remote root on kernels since 3.16
original_title: New NFS2ROOT Linux flaw can let attackers gain root privileges
url: >-
  https://www.bleepingcomputer.com/news/security/new-nfs2root-linux-flaw-can-let-attackers-gain-root-privileges/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-11-27"
published_at: "2026-11-27T08:06:58.000Z"
authors:
  - Sergiu Gatlan
comments: null
tags:
  - linux
  - nfs
  - cve-2026-99362
  - privilege-escalation
  - kernel
  - nfs2root
  - news
why_read: >-
  You get the affected kernel versions, the exploitation mechanism, interim mitigations and the
  specific log indicators OpenSec suggests for spotting attempts.
rank: 7
interest_score: 6.7
depth_score: 5
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

CVE-2026-99362, dubbed NFS2ROOT, is a 12-year-old heap buffer overflow in the Linux kernel NFS server. ANSSI's Jérémy Jean found it and submitted a fix in August. OpenSec shared a full remote-root exploit and a patch with the NFSD maintainers in late September. It affects kernels from 3.16 onwards.

Systems are exposed if the kernel is older than 6.12.117, 6.18.61, 7.3.2 or 7.4-rc1, nfsd (v4.1 or 4.2) is running, and TCP port 2049 is reachable. An unauthenticated attacker sends crafted requests, reads kernel memory, bypasses KASLR and plants a callback in freed memory. Closing the NFS connection runs the command as root.

OpenSec notes that port 2049 is commonly open on file servers, NAS appliances, build farms and Kubernetes storage nodes, and that kernel hardening does not remove the overflow. No exploitation in the wild has been reported. Patch, then reboot. If you cannot, restrict port 2049 to trusted clients, or disable nfs-server if NFS is not needed.

There are no network signatures. OpenSec suggests watching for nfsd4_check_resp_size kernel warnings, shells spawned by kernel workers on file servers, bursts of short NFSv4.1 sessions from one source, and oopses with nfsd4_*, svc_* or call_usermodehelper* frames.
