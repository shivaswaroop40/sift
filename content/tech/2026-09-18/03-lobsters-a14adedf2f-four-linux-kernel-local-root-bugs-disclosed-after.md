---
id: a14adedf2f
title: Four Linux kernel local root bugs disclosed after coordinated embargo
original_title: "A quartet of Linux local root vulns: DirtyAH6, PPPoEject, TUNderflow, and DiagSpill"
url: https://seclists.org/oss-sec/2026/q3/822
source: Lobsters
kind: community
section: security
date: "2026-09-18"
published_at: "2026-09-18T07:57:04.000Z"
authors:
  - seclists.org via buherator
  - seclists.org via buherator
comments: https://lobste.rs/s/7d3zs8/quartet_linux_local_root_vulns_dirtyah6
tags:
  - linux
  - kernel
  - security
  - cve
  - networking
  - community
why_read: >-
  A long embargo lifted on four local kernel root bugs with patches, PoCs, and concrete kernel
  version ranges, useful for prioritising fleet patching.
rank: 3
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Security researcher manizada has published details of four local privilege escalation vulnerabilities in the Linux kernel: DirtyAH6 (CVE-2026-80844), TUNderflow (CVE-2026-81000), PPPoEject (CVE-2026-68121), and DiagSpill (CVE-2026-74469). The underlying bugs have existed for 10 to 21 years and all four reach unprivileged user to root code execution on standard distro kernels. Fixes have landed in stable releases 5.10.270, 5.15.221, 6.1.188, 6.6.157, 6.12.109, 6.18.50, and 7.2.4.

Three of the bugs require unprivileged user namespaces or specific capability sets such as CAP_NET_ADMIN. DiagSpill needs only SCTP and sctp_diag support, both of which are commonly available. AppArmor and SELinux do not block the exploits in the author's testing. All four also work from inside containers, with DiagSpill escaping without any special capabilities if SCTP is loaded.

DirtyAH6 lives in xfrm ah6 routing header handling and lets a crafted IPv6 HDRINCL packet move a pointer 4,064 bytes out of bounds. TUNderflow is an integer underflow in tun headroom accounting when a netkit device sits under VXLAN and OVS. PPPoEject holds a stale skb head pointer across dev_hard_header, which a FUSE-blocked team or bond can trigger to reallocate. DiagSpill wraps a 16-bit peer transport count at 65,536 and then overwrites about 8 MiB past a Netlink response via sctp_diag.

Two of the bugs are remotely reachable in narrow conditions. DirtyAH6 can crash or DoS an IPv6 router using AH transport mode, and was turned into remote root in a lab with on-host memory grooming, though remote-only grooming looks extremely difficult. DiagSpill can be crashed by a malicious SCTP peer if ASCONF and ADD-IP are enabled with SCTP-AUTH or addip_noauth, but the author sees no path to remote root. The most useful mitigation short of patching is disabling unprivileged user namespaces, which blocks the standard unprivileged path to three of the four.
