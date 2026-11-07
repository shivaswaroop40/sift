---
id: 98b79c2783
title: Researchers escape Firecracker microVM and run code as root on the host
original_title: "Firecracker VM Escape: PwnEscape Part 2"
url: https://pwn.ai/blog/firecracker-escape
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-07"
published_at: "2026-11-06T19:33:38.000Z"
authors:
  - SerCe
comments: https://news.ycombinator.com/item?id=50397219
tags:
  - firecracker
  - kvm
  - vm-escape
  - security
  - virtualisation
  - community
why_read: >-
  The original walks the full guest-to-host chain, including the truncated steps that locate and
  rewrite the live vCPU thread's saved registers.
rank: 1
interest_score: 8
depth_score: 9
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

Security researchers have demonstrated a full escape from a Firecracker microVM, achieving code execution as root on the host. The escape, shown as a proof of CVE-2026-99999, hijacks the saved register frame of a vCPU thread while it sits inside the KVM_RUN ioctl. When the thread returns to userspace it executes a call chosen by the attacker. The guest then restores its temporary stack changes, so Firecracker keeps running and the VM stays reachable over SSH.

Firecracker exists to keep untrusted code inside a microVM. A guest that can redirect the host VMM thread breaks that boundary and gains root on the machine backing it. The control point is also generic. Every vCPU is a host thread parked in KVM_RUN with its userspace registers held in a pt_regs structure, so the return-from-KVM path is a natural target for anyone who already has a host memory primitive.

The chain from guest to host runs through three resolvers. A nonce placed in a guest page is matched by walking candidate EPT roots, yielding the page's host physical address. Reverse-mapping the host page tables then finds the page global directory of the process that maps it. A known byte sequence in Firecracker's write(2) wrapper identifies the ELF image and recovers the ASLR load bias, letting the guest read Firecracker's code and stack through the memory primitive described in Part 1.

The text is truncated partway through the section on locating the live vCPU frame, so the final steps, including how the saved instruction pointer is found and rewritten, are not shown here. The root cause of CVE-2026-99999 was covered in Part 1 and is only referenced.
