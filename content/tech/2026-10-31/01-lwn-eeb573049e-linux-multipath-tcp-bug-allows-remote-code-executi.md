---
id: eeb573049e
title: Linux multipath TCP bug allows remote code execution, and Go uses it by default
original_title: Remote code execution on Linux systems with multipath TCP
url: https://lwn.net/Articles/1104192/
source: LWN
kind: news
section: security
date: "2026-10-31"
published_at: "2026-10-30T15:45:27.000Z"
authors:
  - daroc
comments: null
tags:
  - linux-kernel
  - mptcp
  - security
  - go
  - kubernetes
  - news
why_read: >-
  The LWN piece and thread cover the race mechanics, the patched LTS versions, and mitigations such
  as the sysctl switch to disable MPTCP.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

On October 27 Anthropic reported a remotely exploitable use-after-free in the Linux kernel that affects systems with a multipath TCP listener open. A retransmitted SYN packet handled in one thread races with connection establishment in another. The first thread then reads the connection's options structure after the second thread has freed it, allowing kernel memory disclosure or a buffer overflow with an attacker-controlled payload. The fix delays freeing the structure until after an RCU grace period.

The reach is wider than it looks. On October 29 the Go security team advised that all Go programs use multipath TCP by default, so services may be exposed without anyone opting in. Kubernetes and much of the ecosystem around it are written in Go. The bug sits in the kernel, not Go, so any MPTCP user on an unpatched kernel is affected.

Fixes landed in the LTS branches on 2026-10-15, covering 7.2.11, 6.18.57, 6.12.113, 6.6.159, 6.1.190, 5.15.223 and 5.10.272, and Debian shipped 6.12.113-1 as DSA-6568-1. A commenter notes the bug traces back to the 4.4 kernel. Until a patched kernel is available, MPTCP can be disabled with sysctl net.mptcp.enabled=0, and kernels built without CONFIG_MPTCP are unaffected. One reader built a crash proof of concept in about an hour.

The scope may be larger. The article notes the possibility of related bugs in other sections of the TCP stack, and one commenter points out that MPTCP is only the publicised exploitation path. Patching this bug does not guarantee the rest of the TCP stack is clean.
