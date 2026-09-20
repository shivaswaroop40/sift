---
id: 19707df883
title: ARM engineer's SVE2 patch speeds up simdjson parsing on Graviton 4 and 5
original_title: Faster JSON parsing with SVE2 on ARM processors
url: https://lemire.me/blog/2026/09/18/faster-json-parsing-with-sve2-on-arm-processors/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-09-20"
published_at: "2026-09-19T15:10:09.000Z"
authors:
  - lemire.me via fanf
  - lemire.me via fanf
comments: https://lobste.rs/s/1auq61/faster_json_parsing_with_sve2_on_arm
tags:
  - simdjson
  - sve2
  - arm
  - graviton
  - json
  - simd
  - community
why_read: >-
  A concrete look at how SVE2's match instruction shaves instructions off simdjson's hot path on
  real Graviton hardware, with measured numbers.
rank: 6
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: minimax-m3
---

An ARM engineer contributed a patch to the simdjson library that replaces the existing NEON-based JSON structural-character classifier with one using the SVE2 `match` instruction, collapsing roughly four instructions per 16 bytes into a single instruction.

It matters because simdjson is a widely deployed JSON parser and the change targets AWS Graviton 4 (Neoverse V2) and Graviton 5 (Neoverse V3) instances, where the indexing stage sees a measurable throughput gain across a 24 MB benchmark corpus of 22 files. Graviton 3, which has SVE but not SVE2, cannot run the new code, and Apple silicon is unaffected as it has not adopted SVE.

The catch is that SVE2's `match` returns a predicate in a predicate register, which the architecture does not let you move cheaply into a general-purpose register, so the author materialises four 16-bit predicates as bytes using `svsel` plus pair-wise adds to form a 64-bit mask. The benchmarks use GCC 15 and clang 21 on Ubuntu 26.04, pinned to one core, with run-to-run variation under 1%. Files dominated by numbers (canada, mesh, marine_ik) gain the least because the indexing stage is already cheap there.
