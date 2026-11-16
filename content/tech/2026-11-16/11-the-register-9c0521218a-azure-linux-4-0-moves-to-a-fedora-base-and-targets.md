---
id: 9c0521218a
title: Azure Linux 4.0 moves to a Fedora base and targets general VM workloads, not just containers
original_title: Microsoft’s Azure Linux dons Fedora to dress itself up for mainstream workloads
url: >-
  https://www.theregister.com/os-platforms/2026/11/16/microsofts-azure-linux-dons-fedora-to-dress-itself-up-for-mainstream-workloads/5310016
source: The Register
kind: news
section: infrastructure
date: "2026-11-16"
published_at: "2026-11-16T06:04:02.000Z"
authors:
  - Simon Sharwood
comments: null
tags:
  - azure-linux
  - fedora
  - azure
  - kubernetes
  - linux-distributions
  - licensing
  - news
why_read: >-
  You will get the short history from CBL-Mariner to 4.0 and Microsoft's licensing argument, though
  little independent evidence of readiness for production workloads.
rank: 11
interest_score: 6
depth_score: 5
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Microsoft has released Azure Linux 4.0, the first version built on Fedora rather than its own Common Base Linux. It is now pitched at Azure Virtual Machines, VM Scale Sets and container images, not only AKS node images. The kernel is 6.18 LTS, with Hyper-V guest drivers and other Azure-specific changes.

The distribution integrates with Microsoft Defender for Cloud, Azure Monitor and the Azure CLI. Microsoft says it keeps the familiar RPM ecosystem and adds Azure-native security, compliance and operations features. It names web applications, databases and GPU-accelerated AI and ML work as target uses.

For platform teams on Azure, the main draw is cost. Microsoft says there is no additional OS licensing charge, which lets it argue that SUSE or RHEL subscriptions may be unnecessary on AKS and on general Linux hosts. The Fedora base also moves it closer to a conventional RPM distribution.

The source is largely a restatement of Microsoft's own positioning. It offers no benchmarks, support terms, lifecycle details or migration guidance. Whether it can replace a commercial distribution depends on those points, which the article does not cover.
