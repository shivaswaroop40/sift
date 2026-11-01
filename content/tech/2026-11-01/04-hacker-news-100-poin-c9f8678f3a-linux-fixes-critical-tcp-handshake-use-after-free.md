---
id: c9f8678f3a
title: Linux fixes critical TCP handshake use-after-free, Ubuntu and RHEL kernels still unfixed
original_title: "TCP Use-After-Free: CVE-2026-98432 / CVSS 9.8"
url: https://atlasum.net/blog/cve-2026-98432-linux-ipv4-tcp-uaf
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-01"
published_at: "2026-10-31T19:16:30.000Z"
authors:
  - oger
comments: https://news.ycombinator.com/item?id=50319143
tags:
  - linux-kernel
  - security
  - tcp
  - use-after-free
  - ubuntu
  - rhel
  - community
why_read: >-
  The original tracks fix status per distribution and release, explains the handshake race, and
  includes Red Hat's nftables mitigation.
rank: 4
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Linux stable kernels shipped fixes between 11 and 18 October for CVE-2026-98432, a use-after-free in the IPv4 TCP handshake reachable by a remote, unauthenticated peer. The kernel's CVE Numbering Authority scores it CVSS 3.1 9.8, Critical. Fixed releases are 5.10.272, 5.15.223, 6.1.190, 6.6.159, 6.12.113, 6.18.56, 7.2.10 and 7.3. The bug dates back to Linux 4.4, and the upstream fix is four lines.

The patch has not reached the major distributions. As of 31 October, Ubuntu's tracker lists its kernel as Vulnerable on every release, and Red Hat, which raised its rating to Critical on 30 October, lists RHEL 8, 9 and 10 and OpenShift Container Platform 4 and 5 as affected with no fix. AlmaLinux has fixed kernels only in testing. Debian, SUSE, Oracle and Amazon have shipped fixes.

The affected code runs before any application sees the connection. Every Linux server that accepts an IPv4 TCP connection executes it, and containers inherit the host kernel, so a new image changes nothing. Anthropic, whose researcher Xinyang Ge reported the bug, says its Claude model wrote a working exploit that runs commands as root on servers with a multipath TCP listener, with no credentials. The exploit has not been published. The Go Security Team says Go programs open those listeners by default.

The kernel saved a peer's IPv4 header options in a request socket, handed them to the new connection without copying, and freed them while another CPU could still read them to build a reply. The fix defers the free until after an RCU grace period. The stale data can disclose kernel heap contents to the peer, corrupt kernel memory, or crash the machine. A lost race only fails the handshake, so an attacker can retry indefinitely. IPv6 is not affected by the main issue.
