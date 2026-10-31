---
id: 590d82b292
title: Go 1.28 HTTP/2 parking cuts RSS by 85 to 93 MiB at 5,000 idle connections
original_title: "Go 1.28's HTTP/2 Parking: Measuring Memory Savings"
url: https://abdolirad.me/articles/go-1-28-http2-parking-memory/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-10-31"
published_at: "2026-10-30T15:39:37.000Z"
authors:
  - abdolirad.me via rcalixte
  - abdolirad.me via rcalixte
comments: https://lobste.rs/s/mhmqky/go_1_28_s_http_2_parking_measuring_memory
tags:
  - go
  - http2
  - memory
  - goroutines
  - benchmark
  - runtime
  - community
why_read: >-
  The original gives the benchmark setup, per-run RSS tables, goroutine and stack figures, and the
  stated limits of the measurement.
rank: 12
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

A benchmark of the Go 1.28 development build measures the new HTTP/2 parking mechanism, where the goroutine running a connection's serveLoop can exit when no work is ready and a new goroutine takes over later. Using the same binary with parking on and off, at 5,000 idle HTTP/2 connections parking cut RSS by 84.7 to 92.6 MiB, or 38.9% to 41.4%. The goroutine count fell by exactly 5,000, from about 10,007 to 5,007.

For services holding thousands of long-lived HTTP/2 connections, each idle connection currently costs a goroutine and its stack. StackInuse fell from about 99 MiB to about 21 MiB at 5,000 connections. The mechanism is internal to the runtime, not a public API, so applications get the saving without code changes. At 1,000 idle connections the RSS reduction was smaller, at 15.7 to 16.6 MiB.

The results carry limits. HeapAlloc moved inconsistently, sometimes slightly higher with parking on, so this is not a fixed heap saving. The measurements come from one machine, one benchmark design, mostly idle connections rather than real traffic, and a development revision rather than the final Go 1.28 release. The GODEBUG=http2serveparking=0 switch used for comparison is temporary and undocumented.
