---
id: bbc7398866
title: Christoph Hellwig releases XRAID, declustered parity RAID built into zoned XFS
original_title: "Announcing XRAID: declustered parity RAID for zoned XFS"
url: https://lwn.net/Articles/1107473/
source: LWN
kind: news
section: systems
date: "2026-11-14"
published_at: "2026-11-13T14:39:47.000Z"
authors:
  - jzb
comments: null
tags:
  - xfs
  - raid
  - zoned-storage
  - smr
  - linux-kernel
  - filesystems
  - news
why_read: >-
  The original is a short pointer to the code and slides, and the comment thread has a useful
  argument about filesystem-integrated RAID versus block-layer composition.
rank: 1
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Christoph Hellwig has announced the first public release of XRAID, a declustered parity RAID implementation integrated into XFS. It targets parity RAID on zoned devices such as SMR hard drives, and aims to avoid the inherent data integrity problems of existing RAID. It also works on conventional hard drives and SSDs. The announcement claims writes up to 20 times faster than mdraid.

The current code supports zero to two parities. Support for three or more, using the SnapRAID parity library, was tried in experiments and is planned but not included. The xfsprogs branch adds mkfs support and an "xraid" utility. Zonar, the zoned file-system visualisation tool, now shows how logical zones map to physical zones. Work has run for a year and a half.

The authors say it is nowhere near ready for upstream submission and are asking for testing and feedback. The 20 times figure is a claim from the announcement, and SSD optimisation has not been a focus. Commenters raised two points. One noted the lack of comparison with ZFS dRAID. Others debated why the design is tied to XFS instead of sitting in the device-mapper layer, with replies arguing that block-layer interfaces are too crude for integrity, compression and deduplication.
