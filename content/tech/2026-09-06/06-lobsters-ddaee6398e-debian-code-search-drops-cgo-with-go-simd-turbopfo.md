---
id: ddaee6398e
title: Debian Code Search drops cgo with Go SIMD TurboPFor port
original_title: "Debian Code Search: Fast TurboPFor with Go SIMD"
url: https://michael.stapelberg.ch/posts/2026-09-06-dcs-fast-turbopfor-go-simd/
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-09-06"
published_at: "2026-09-06T07:03:41.000Z"
authors:
  - michael.stapelberg.ch by stapelberg
  - michael.stapelberg.ch by stapelberg
comments: https://lobste.rs/s/ceuque/debian_code_search_fast_turbopfor_with_go
tags:
  - debian
  - golang
  - simd
  - turbopfor
  - search
  - performance
  - community
why_read: >-
  You get a concrete case study of replacing a cgo SIMD dependency with Go 1.26's new simd package,
  plus the actual numbers on where Go lands relative to C.
rank: 6
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

The maintainer of Debian Code Search has removed the last cgo dependency by porting the TurboPFor integer codec to native Go, using the simd/archsimd package introduced in Go 1.26. The new encoder matches or beats the previous cgo implementation, with Go now reaching 76% of C without AVX512 and roughly 1.4x slower than C when both use AVX512 kernels and a positional popcount technique that delivered a further 2x speed-up.

The work matters because Debian Code Search relies on fast decoding of posting lists from a positional on-disk index, and cgo had been the only way to get SIMD performance in Go for years. A pure-Go decoder and encoder removes cgo's build complexity and Friction, while still keeping query latency within the author's 10 to 100 millisecond regression budget. Go 1.26's experimental simd/archsimd package supports 128, 256 and 512-bit vector types on amd64, gated behind GOEXPERIMENT=simd, with an API that is not yet considered stable.

The author credits Claude Code and Claude Fable 5 with helping surface the positional popcount optimisation, then reviewed the SIMD code by hand. AVX512 kernels backported into C TurboPFor still beat the Go port by about 1.4x, so the win is mostly about removing cgo rather than raw throughput.
