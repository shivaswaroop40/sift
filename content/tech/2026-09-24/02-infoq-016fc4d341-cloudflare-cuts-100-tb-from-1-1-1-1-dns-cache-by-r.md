---
id: 016fc4d341
title: Cloudflare cuts 100 TB from 1.1.1.1 DNS cache by rewriting entries in Rust
original_title: Cloudflare Cuts 100 TB of Memory from 1.1.1.1 DNS Cache
url: >-
  https://www.infoq.com/news/2026/09/cloudflare-dns-cache/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-24"
published_at: "2026-09-23T13:22:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - dns
  - cloudflare
  - rust
  - caching
  - memory
  - performance
  - news
why_read: >-
  You get a concrete case study of low-level Rust memory work on a real DNS fleet, with the specific
  tricks and the trade-offs that do and do not generalise.
rank: 2
interest_score: 8.7
depth_score: 9
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Cloudflare has redesigned the in-memory representation of its 1.1.1.1 DNS resolver cache, storing record data in a contiguous byte buffer using DNS wire format. The change cut per-entry size from 953 to 420 bytes and allocations from 1.1 KB to 461 bytes, freeing roughly 100 TB across a fleet that holds more than 250 billion entries.

Insertion throughput rose 43% and lookup latency fell 19%. At p99, resident memory per instance dropped from 9.3 GB to 5.3 GB between the May 18 and July 6, 2026 rollout. The savings came from five Rust rewrites that replaced Vec and String with Box<[T]> and Box<str>, merged record lists, packed Booleans into bitflags, and dropped owner names that match the queried domain.

The approach differs from Unbound's separate message, RRset, and key caches or PowerDNS Recursor's packet and record caches. Cloudflare instead focused on reducing allocation overhead inside each entry. A Reddit commenter noted that the boxing tricks only pay off at Cloudflare's request volume; smaller operators may lose more cache locality than they gain.
