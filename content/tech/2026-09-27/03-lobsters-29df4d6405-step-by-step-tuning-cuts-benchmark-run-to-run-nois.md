---
id: 29df4d6405
title: Step-by-step tuning cuts benchmark run-to-run noise from 2.7% to 0.26%
original_title: Tuning a Server for Benchmarking
url: https://david.alvarezrosa.com/posts/tuning-a-server-for-benchmarking/
source: Lobsters
kind: community
section: infrastructure
date: "2026-09-27"
published_at: "2026-09-26T11:48:40.000Z"
authors:
  - david.alvarezrosa.com by dalvrosa
  - david.alvarezrosa.com by dalvrosa
comments: https://lobste.rs/s/fejuat/tuning_server_for_benchmarking
tags:
  - linux
  - benchmarking
  - performance
  - cpu
  - google-benchmark
  - reproducibility
  - community
why_read: >-
  You get a concrete, ordered checklist of Linux tuning steps with measured noise reduction at each
  stage.
rank: 3
interest_score: 7.3
depth_score: 8
novelty_score: 6
utility_score: 8
scored: true
model: minimax-m3
---

The post walks through tuning a Linux box so microbenchmarks become repeatable, starting from a baseline Google Benchmark run of a tiny double-sum loop that showed a 2.72% coefficient of variation, meaning any optimisation smaller than 3% is invisible. The author re-measures after every change and ends at 0.26% CV, with mean runtime nearly halving from 99.6 µs to 55.3 µs.

For practitioners this matters because most CPU microbenchmarks run on laptops or shared servers where hybrid P/E cores, frequency scaling, and SMT siblings silently dominate the numbers. Pinning to one core, locking the governor to performance, disabling hyperthreading, and disabling turbo each cut noise in turn, and the article gives the exact sysfs and cpupower commands plus the isolcpus/noHz kernel flags for busier hosts.

The key trade-off is explicit: benchmarking wants repeatability over peak speed, while production wants every nanosecond, so the same settings would be wrong in latency-sensitive deployments. Notes warn that disabling turbo can raise mean latency on machines where it does engage, and that further knobs (ASLR, NMI watchdog, transparent huge pages) help only on busier boxes. A bench-remote.sh script in the repo applies the full set, and none of it persists across reboots.
