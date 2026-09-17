---
id: 878fa09611
title: C++26 makes trivial infinite loops well-defined, ending a long-standing divergence from C
original_title: "C++26: Trivial infinite loops are no longer undefined behaviour"
url: https://www.sandordargo.com/blog/2026/09/16/cpp26-trivial-infinite-loops
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-09-17"
published_at: "2026-09-16T19:33:37.000Z"
authors:
  - sandordargo.com via raymii
  - sandordargo.com via raymii
comments: https://lobste.rs/s/uvrata/c_26_trivial_infinite_loops_are_no_longer
tags:
  - cpp
  - cpp26
  - undefinedbehaviour
  - embedded
  - compilers
  - community
why_read: >-
  You will get the exact rules for what counts as a trivial infinite loop in C++26, why Clang could
  delete your halt loop before, and how the new yield-based rewrite interacts with freestanding
  builds.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

C++26 adopts proposal P2809R3, which defines a new category called the trivial infinite loop and treats it as well-defined rather than undefined behaviour. A loop qualifies only if its body is empty (a single semicolon or braces) and its controlling expression is a constant expression that evaluates to true. Qualifying loops are rewritten as a call to std::this_thread::yield(), giving them the forward-progress guarantee they previously lacked.

Under pre-C++26 rules, compilers could assume a side-effect-free while(true); terminates, allowing optimisers to remove it. The article shows Clang doing exactly that, with execution falling through into a function the linker placed after main. For embedded and kernel code that uses such loops as halt-on-error patterns, this meant fatal handlers could fail to halt, leaving hardware running into whatever followed in memory.

The fix also lands as a defect report, so compilers can backport it to earlier language modes, which may surprise people trying to reproduce the old behaviour on recent toolchains. On freestanding implementations the rewrite to yield() is implementation-defined, leaving bare-metal targets the option to preserve a true halt. C++26 does not adopt C's broader rule about constant-expression-controlled loops, so non-empty bodies or non-constant conditions still trip the old behaviour.

The change matters to anyone shipping C++ on bare metal or auditing embedded code, since prior code that relied on while(true); as a deliberate halt was technically relying on a compiler not exploiting UB. It also matters to anyone debugging optimisation surprises, since one common footgun is gone, though the narrow definition means many hand-written busy-waits still carry the old risk.
