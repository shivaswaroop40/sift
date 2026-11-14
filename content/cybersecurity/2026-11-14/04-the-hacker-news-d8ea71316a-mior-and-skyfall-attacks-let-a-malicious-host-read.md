---
id: d8ea71316a
title: Mior and Skyfall attacks let a malicious host read data in AMD SEV-SNP VMs
original_title: New Mior and Skyfall Attacks Let Rogue Cloud Hosts Steal Secrets From AMD SEV-SNP VMs
url: https://thehackernews.com/2026/11/new-mior-and-skyfall-attacks-let-rogue.html
source: The Hacker News
kind: news
section: papers
date: "2026-11-14"
published_at: "2026-11-13T15:27:05.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - amd
  - sev-snp
  - confidential-computing
  - hypervisor
  - cloud-security
  - attestation
  - news
why_read: >-
  The original should explain how each attack works and what AMD or cloud providers say about
  mitigation, which this truncated source does not cover.
rank: 4
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Two attacks disclosed this week let a malicious host read data inside virtual machines protected by AMD SEV-SNP. That technology is meant to keep the server's operator out of the guest. The attacks are named Mior and Skyfall.

Mior goes further than reading. It can also modify a VM's memory and fake the signed report that confirms which software the VM is running. Both attacks need control of the hypervisor. Mior also needs control of the server's BIOS.

The source text is truncated after naming the researchers, so it gives no detail on the mechanisms, affected AMD processors, or any fixes.
