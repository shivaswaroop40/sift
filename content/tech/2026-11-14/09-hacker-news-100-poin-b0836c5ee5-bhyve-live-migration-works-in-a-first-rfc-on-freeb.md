---
id: b0836c5ee5
title: bhyve live migration works in a first RFC on FreeBSD 15.1, with downtime of 138 to 171 ms
original_title: Live-migration support in FreeBSD and bhyve coming
url: https://gyptazy.com/blog/freebsd-bhyve-live-migration-support-rfc/
source: Hacker News (100+ points)
kind: community
section: systems
date: "2026-11-14"
published_at: "2026-11-13T19:58:42.000Z"
authors:
  - JohnDohnBohn
comments: https://news.ycombinator.com/item?id=50488835
tags:
  - freebsd
  - bhyve
  - live-migration
  - virtualisation
  - hypervisor
  - community
why_read: >-
  The original lists the specific blockers to upstreaming, including dirty-log correctness, the
  commit boundary and storage fencing, which show how far this is from production use.
rank: 9
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

A WIP RFC shows live migration of running amd64 bhyve guests between two FreeBSD 15.1 hosts over TCP. It builds on bhyve's experimental snapshot support, adds dirty-page tracking to the vmm kernel module, and adds a migration protocol in bhyve and bhyvectl. The guest is paused only for the final stop-and-copy phase.

The source runs pre-copy rounds, sending only pages dirtied since the last scan. It pauses the guest when the dirty set fits the downtime target, stops shrinking, or hits the round limit. The destination restores state, then the source sends GO as the commit point. Before GO, the source can resume. A warm stop-and-copy mode also exists.

For a slowly dirtying 512 MiB guest, downtime was roughly 138 to 171 ms. A rapidly dirtying guest may not converge, and then falls back to stop-and-copy with a longer pause. The author calls these encouraging results, not a production promise or a proof of correctness.

The scope is narrow. It is amd64 only, needs the experimental BHYVE_SNAPSHOT option, and cannot migrate PCI passthrough devices. Testing mostly used a one-vCPU guest. The transport has no authentication or encryption. Dirty-log correctness, compatibility checks, storage and network handoff, and in-tree tests are all listed as blockers for upstreaming.
