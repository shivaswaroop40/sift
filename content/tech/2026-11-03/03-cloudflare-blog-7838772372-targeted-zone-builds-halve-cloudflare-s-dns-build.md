---
id: "7838772372"
title: Targeted zone builds halve Cloudflare's DNS build delay and cut peak memory 85%
original_title: How we halved DNS build delay and cut memory use by 85%
url: https://blog.cloudflare.com/dns-targeted-zone-builds/
source: Cloudflare Blog
kind: blog
section: infrastructure
date: "2026-11-03"
published_at: "2026-11-02T14:00:00.000Z"
authors:
  - Alex Fattouche
comments: null
tags:
  - dns
  - cloudflare
  - quicksilver
  - kafka
  - targeted-builds
  - blog
why_read: >-
  The post sets out the five build types, the byte-for-byte proof rule, and how the planner treats
  events it cannot classify.
rank: 3
interest_score: 7
depth_score: 8
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

Cloudflare has extended targeted builds from DNS records to zone settings. A new planner picks the smallest build it can prove safe from five build types, and a new scheduler combines work for the same zone. Zone setting changes no longer rebuild zones with tens of millions of records. Peak memory fell 85%, and the headroom let Cloudflare shorten resilience waits, halving the time from a DNS change to its data being written to Quicksilver.

The pipeline has grown since 2022. The Zone Builder then received about 250 DNS record changes per second. It now receives about 700, nearly three times as many, plus about 100 other events. Some zones hold more than 20 million records, and Cloudflare expects them to grow toward hundreds of millions. A full build reads, encodes and compares every record while holding the whole zone in memory, so the largest zones no longer fit.

The safety rule is strict. Every key a targeted build writes must be byte-for-byte identical to what a full build would write. If the planner cannot prove that, it runs a full build. Timestamp-only database updates, missing event details and unknown events still trigger full rebuilds, because those events look identical and the caller cannot be identified.

The precedent came from records. In 2022, per-record builds were 150 times faster than full builds on average, and 4,250 times faster on a test zone with one million records. Extending the idea to settings required solving five problems, from making events say what changed to combining work without losing a Kafka message.
