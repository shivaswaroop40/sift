---
id: 5ddb74e9bd
title: NoisyTCP, a use-after-free in Linux TCP code since 2015, lets remote attackers crash hosts
original_title: NoisyTCP bug gives Linux servers a remote crash problem 11 years in the making
url: >-
  https://www.theregister.com/security/2026/11/16/noisytcp-bug-gives-linux-servers-a-remote-crash-problem-11-years-in-the-making/5310144
source: The Register
kind: news
section: security
date: "2026-11-17"
published_at: "2026-11-16T18:28:00.000Z"
authors:
  - Carly Page
comments: null
tags:
  - linux-kernel
  - cve
  - tcp
  - containers
  - denial-of-service
  - security
  - news
why_read: >-
  The Register piece gives the exposure conditions, the tested crash times and the trade-offs of
  each workaround, which helps you decide how fast to roll kernel updates.
rank: 7
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Researcher Hyunwoo Kim disclosed CVE-2026-99288, named NoisyTCP, a use-after-free in the Linux kernel's TCP code introduced in October 2015. Two kernel paths processing incoming traffic can collide, so one uses freed memory and the kernel panics. No login is needed, only an open TCP port on a host that spreads incoming traffic across multiple receive queues or CPUs.

Default Nginx, Apache and SSH setups are exposed. Because the fault is in the kernel, crashing a service inside a container can take down the host and every workload on it. Kim crashed servers on QEMU/KVM virtual machines in five seconds to two minutes. A tuned attack on bare metal running Nginx took about 14 hours.

The confirmed impact is remote denial of service. Kim has a second, much harder exploitation path and a limited lab exploit against virtual machines, but no general remote code execution. Nothing yet shows data theft or host takeover. Red Hat rates the flaw Important, CVSS 7.5.

The upstream fix landed on 3 November and details were published on 15 November. Check whether your distribution kernel has it. The workarounds are poor: disabling SYN cookies weakens SYN flood protection and must be applied per container network namespace, while limiting processing to one receive queue can hurt network performance.
