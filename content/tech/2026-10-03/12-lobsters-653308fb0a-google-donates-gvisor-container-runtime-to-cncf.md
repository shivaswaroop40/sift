---
id: 653308fb0a
title: Google donates gVisor container runtime to CNCF
original_title: gVisor is being donated to CNCF
url: https://gvisor.dev/blog/2026/10/02/gvisor-cncf/
source: Lobsters
kind: community
section: infrastructure
date: "2026-10-03"
published_at: "2026-10-03T02:41:38.000Z"
authors:
  - gvisor.dev via carlana
  - gvisor.dev via carlana
comments: https://lobste.rs/s/asoxjl/gvisor_is_being_donated_cncf
tags:
  - gvisor
  - cncf
  - container-runtime
  - kubernetes
  - security
  - sandbox
  - community
why_read: >-
  Understand why Google transferred gVisor to CNCF and what it means for container security in
  Kubernetes ecosystems.
rank: 12
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Google has transferred the gVisor project, including its name and trademarks, to the Cloud Native Computing Foundation. gVisor is a userspace Linux implementation that sits between vanilla containers and virtual machines, providing security without requiring hardware virtualisation. It moves to CNCF Sandbox status immediately, with the repository leaving Google's GitHub organisation and governance shifting to maintainer-led then org-based voting over coming months.

Practitioners should care because gVisor's adoption has been hampered by perception problems and governance risk. It performs well for I/O-intensive workloads internally at Google and other large tech companies, but potential Linux kernel performance patches have been rejected because gVisor was wholly Google-owned. Moving to CNCF removes this blocker and may enable broader adoption across the industry.

The donation also aims to unlock gVisor's non-commercial potential, such as desktop Linux sandboxing and running Linux programs on macOS. Currently only large tech companies and startups with specific needs use gVisor; mid-market organisations, hobbyist projects, and smaller cloud providers have largely avoided it due to adoption friction and resource constraints.
