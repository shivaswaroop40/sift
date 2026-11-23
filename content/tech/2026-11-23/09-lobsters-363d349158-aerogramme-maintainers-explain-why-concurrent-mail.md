---
id: 363d349158
title: Aerogramme maintainers explain why concurrent mailbox access makes IMAP servers hard
original_title: "Quality IMAP, Part 2: Mailbox Concurrency"
url: https://aerogramme.deuxfleurs.fr/blog/2026-quality-imap-part-2/
source: Lobsters
kind: community
section: systems
date: "2026-11-23"
published_at: "2026-11-23T11:05:08.000Z"
authors:
  - aerogramme.deuxfleurs.fr by armael
  - aerogramme.deuxfleurs.fr by armael
comments: https://lobste.rs/s/lnpwpu/quality_imap_part_2_mailbox_concurrency
tags:
  - imap
  - aerogramme
  - concurrency
  - distributed-systems
  - email
  - garage
  - community
why_read: >-
  You get a clear account of which IMAP specifications govern concurrent access and why a stateless,
  multi-node design on shared object storage complicates it.
rank: 9
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

The Aerogramme team has published part two of a series on implementing IMAP correctly. It covers concurrent access to a mailbox, for example from a phone and a laptop, or from Thunderbird opening several connections at once. Clients must detect changes made by others, or they may act on stale data.

The post maps where the specifications address this. Base IMAP covers UIDNEXT and UIDVALIDITY, and has two email-numbering systems. Deleting an email can invalidate IDs in the legacy one, a gap later covered by an informational RFC. CONDSTORE handles flag changes and QRESYNC handles full resync.

Aerogramme's CONDSTORE support is preliminary and was disabled in the latest release pending a redesign. It does not support QRESYNC. The server runs as several nodes that do not talk to each other and keep all state in a shared Garage cluster, so a simple lock or transaction is not an option.
