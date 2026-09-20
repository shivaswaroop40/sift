---
id: 4f66116dd3
title: Benchmarker finds Btrfs, ZFS and bcachefs diverge sharply on mixed workloads
original_title: Btrfs/ZFS/bcachefs under workloads classic benchmarks skip
url: https://bartosz.fenski.pl/modern-fs-benchmark/
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-09-20"
published_at: "2026-09-19T18:11:40.000Z"
authors:
  - farlight
comments: https://news.ycombinator.com/item?id=49768833
tags:
  - filesystems
  - btrfs
  - zfs
  - bcachefs
  - benchmarks
  - storage
  - community
why_read: >-
  You get reproducible fio scripts and concrete numbers showing where each copy-on-write filesystem
  breaks down under realistic mixed I/O.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

The author benchmarked Btrfs, ZFS and bcachefs on ext4 using fio with mixed random reads, writes, sequential writes and fsync patterns that classic single-mode tests miss. Results vary by configuration: Btrfs with CoW off can match ext4 on simple workloads but degrades when fsync and snapshots run together, while ZFS holds steady on sustained writes at the cost of higher latency on mixed reads. bcachefs sits between the two on most patterns.

For anyone choosing a filesystem for a database, container host or build server, the practical message is that headline benchmarks for one access pattern do not predict behaviour under realistic mixed I/O. The post links the fio scripts and command lines used, so the numbers can be reproduced on similar hardware.

Several caveats apply. The runs were on a single workstation, with one NVMe device and a fixed kernel, so the absolute numbers are not generalisable. The author also notes that tuning options differ across the three filesystems, and no attempt was made to optimise each one exhaustively.
