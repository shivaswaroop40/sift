---
id: 9c0b8366ba
title: Unikernels become practical with language models handling missing libraries
original_title: "Unikernels were hard. key word: were"
url: https://ghuntley.com/unikernels/
source: Hacker News (100+ points)
kind: community
section: systems
date: "2026-10-11"
published_at: "2026-10-10T14:27:09.000Z"
authors:
  - ghuntley
comments: https://news.ycombinator.com/item?id=50033357
tags:
  - unikernels
  - attack-surface
  - security
  - ai-agents
  - nix
  - community
why_read: >-
  Understand why unikernels are becoming viable and the security trade-offs that matter for your
  stack.
rank: 5
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-haiku-4-5-20251001
---

Unikernels, where applications contain all required functionality rather than relying on an underlying OS, were difficult to build because developers had to write libraries for basic services like storage and networking. Language models can now quickly port missing libraries between languages, making the approach viable. An example: an agent wrote mkfs.xfs in Rust by reverse-engineering the on-disk format in hours, producing byte-for-byte identical output to the original tool.

This matters because a unikernel has a much smaller attack surface. Traditional applications rely on shells and interpreters that attackers can exploit to gain system access. With a unikernel, there is nothing to execute once code runs, removing the VIP butler service for data exfiltration that shells provide.

Storage gaps are solved by treating S3 as primary storage with local NVMe as an LRU cache, a cloud-native pattern already common. Nix overlays let developers patch upstream dependencies without waiting for maintainers, making dependency management tractable.

The core shift is inverting security design: stop hardening inherently hackable systems and instead build systems with no attack surface to begin with. This requires treating agents as first-party tools that can modify the full stack, not just bundle binaries.
