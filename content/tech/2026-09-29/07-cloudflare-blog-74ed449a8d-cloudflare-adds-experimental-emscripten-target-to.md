---
id: 74ed449a8d
title: Cloudflare adds experimental Emscripten target to wasm-bindgen for Rust Workers
original_title: Supporting native Rust in Workers with the new Emscripten target for wasm-bindgen
url: https://blog.cloudflare.com/rust-workers-emscripten-target/
source: Cloudflare Blog
kind: blog
section: languages-and-tools
date: "2026-09-29"
published_at: "2026-09-28T13:00:00.000Z"
authors:
  - Guy Bedford
comments: null
tags:
  - rust
  - webassembly
  - cloudflare-workers
  - emscripten
  - tokio
  - wasm-bindgen
  - blog
why_read: >-
  You will see how Cloudflare is bridging Tokio and Emscripten into Workers, and what it takes to
  run native Rust systems code on the platform.
rank: 7
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Cloudflare has published a first public experimental preview of wasm32-unknown-emscripten target support in wasm-bindgen, letting native Rust code, including Tokio-based applications, run on its V8-based Workers runtime. The work was started by Google engineers on the Portable Toolchains team and reviewed with Cloudflare engineers maintaining wasm-bindgen.

The new target exposes Emscripten's virtualised platform features, such as timers, file systems and sockets, through the Workers Node.js compatibility layer. A Rust-native Minecraft server (Pumpkin) has been demonstrated running inside a Durable Object with TCP ingress via real Tokio sockets, showing that previously incompatible systems libraries can now build for the platform.

Tokio support required upstream patches to map its threaded parking semantics onto Workers' single-threaded JS event loop. Cloudflare contributed full Tokio patchsets under review, with the first wasm32-unknown-emscripten target patch already merged. The integration supports both WebAssembly JavaScript Promise Integration and a modified Tokio runtime. Some low-level libraries, including libc, socket2 and Mio, also needed small target_os gates added.
