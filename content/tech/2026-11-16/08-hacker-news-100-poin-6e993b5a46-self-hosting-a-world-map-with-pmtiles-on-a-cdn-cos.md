---
id: 6e993b5a46
title: Self-hosting a world map with PMTiles on a CDN costs about $5 a month in storage
original_title: "Protomaps: Self-hosting map tiles has gotten cheap and easy"
url: https://bruceroettgers.eu/blog/protomaps/
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-11-16"
published_at: "2026-11-15T19:26:22.000Z"
authors:
  - bcye
comments: https://news.ycombinator.com/item?id=50509837
tags:
  - protomaps
  - pmtiles
  - maps
  - cdn
  - self-hosting
  - cost
  - community
why_read: >-
  You get the concrete CDN settings, rclone upload steps and cost arithmetic for replacing a
  per-load map API with one static file.
rank: 8
interest_score: 6.3
depth_score: 6
novelty_score: 6
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

A developer describes serving map tiles from a single PMTiles file, which clients read through HTTP Range requests. The 139GB world file sits in Bunny.net storage with 5x replication for about $5 a month. Bandwidth is $0.01/GB to Europe and North America, or $0.005/GB on the smaller Volume network.

The author estimates a Europe map load with a city zoom at about 5MB, or $0.00005. That is $0.05 per 1k loads, which he says could be 100x cheaper than Mapbox at $5 per 1k after the free tier. He notes real traffic varies, and heavy users may pull tens of MB.

The setup needs a CDN that caches Range requests on large files. Cloudflare needs an edge function to translate x/y/z paths. On Bunny, the author enabled S3 compatibility because HTTP API uploads timed out after 15 minutes, and turned on large object optimisation for caching.

The main risk is someone downloading the whole file and running up the bill. His mitigation is a throttle to 10kB/s after 10MB in one request, plus referrer limits and optional request or monthly bandwidth caps. The cost comparison is a single-author estimate, not a measured production workload.
