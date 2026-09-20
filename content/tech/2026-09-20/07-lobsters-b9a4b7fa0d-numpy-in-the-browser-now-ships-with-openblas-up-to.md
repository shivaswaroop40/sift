---
id: b9a4b7fa0d
title: NumPy in the browser now ships with OpenBLAS, up to 30x faster on matmul
original_title: "The last mile of a long road: faster NumPy in the browser"
url: https://notebook.link/blog/the-last-mile-faster-numpy
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-09-20"
published_at: "2026-09-20T09:07:28.000Z"
authors:
  - notebook.link via rajtilakjee
  - notebook.link via rajtilakjee
comments: https://lobste.rs/s/zakub6/last_mile_long_road_faster_numpy_browser
tags:
  - numpy
  - webassembly
  - openblas
  - emscripten
  - scientific-python
  - performance
  - community
why_read: >-
  You get the concrete speedups, the caveats for matrix-vector and linalg calls, and a clear picture
  of how WebAssembly NumPy now has a real Fortran and BLAS toolchain behind it.
rank: 7
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: minimax-m3
---

The Emscripten-forge NumPy package now links OpenBLAS in WebAssembly as a stable release. At n=1024, square np.matmul runs about 30.92x faster in float32 and 14.90x faster in float64 versus the no-BLAS baseline, reaching 28.0 and 14.6 GFLOPS.

It matters because browser-based scientific Python has been stuck on portable C loops, blind to cache and SIMD. Emscripten-forge ships OpenBLAS as a separate conda package, so NumPy links it dynamically and a single upgrade to OpenBLAS benefits NumPy, SciPy, scikit-learn, and non-Python stacks such as xtensor-blas without rebuilding them.

Gains on np.linalg are smaller, around 1.08 to 1.65x, because LAPACK inside OpenBLAS is not yet tuned for WebAssembly. Vector routines such as A @ x stay near 1x in OpenBLAS 0.3.34 since it lacks a fast column-major GEMV; 0.3.35 adds that kernel, and an optional Relaxed SIMD build pushes performance further on engines that support it.
