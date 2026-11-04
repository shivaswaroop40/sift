---
id: 6b142580c5
title: Xen flaws let a malicious guest VM read and write other VMs' memory on the same host
original_title: Xen Hypervisor Flaws Let One Malicious VM Read and Write Any Other VM's Memory
url: https://thehackernews.com/2026/11/xen-hypervisor-flaws-let-one-malicious.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-04"
published_at: "2026-11-04T11:46:27.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - xen
  - hypervisor
  - virtualisation
  - vm-isolation
  - patching
  - news
why_read: >-
  The original article and advisory give the patch details and the Xen Project's statement on the
  lack of any workaround.
rank: 6
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: glm-5.3
---

The Xen Project disclosed two hypervisor flaws on 3 November. A malicious guest virtual machine can read and write the memory of other VMs on the same host, including dom0. Dom0 is the VM that holds full permissions by default and manages the others. All Xen versions from 4.6 onward are vulnerable. Patches are available, and the project says there is no known mitigation.

The flaws break the isolation boundary between guests. Because dom0 holds full permissions by default, a guest that can write to its memory has a route to controlling the host and every VM it manages. Multi-tenant hosts are the clearest exposure, since one tenant's VM can reach another tenant's memory. With no known workaround, patching is the only defence.
