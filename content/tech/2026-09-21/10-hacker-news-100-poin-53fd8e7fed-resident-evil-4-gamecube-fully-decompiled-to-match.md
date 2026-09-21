---
id: 53fd8e7fed
title: Resident Evil 4 GameCube fully decompiled to matching C/C++
original_title: Resident Evil 4 (GameCube) – complete byte-identical decompilation to C/C++
url: https://github.com/adonis-singh/re4
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-09-21"
published_at: "2026-09-20T17:38:27.000Z"
authors:
  - metrofun
comments: https://news.ycombinator.com/item?id=49778022
tags:
  - decompilation
  - gamecube
  - powerpc
  - capcom
  - reverse-engineering
  - compilers
  - community
why_read: >-
  It shows what a complete, verified PowerPC game decompilation actually looks like, including the
  compiler quirks that drive the reconstructed source.
rank: 10
interest_score: 7.3
depth_score: 9
novelty_score: 8
utility_score: 5
scored: true
model: minimax-m3
---

A GitHub project has produced a byte-identical C and C++ decompilation of Resident Evil 4 for the GameCube, targeting the G4BE08 debug build from November 2004. Building the repository reproduces main.dol and all 114 REL overlays exactly, verified against 115 SHA1 hashes on every build. The project covers 1,083 objects containing 15,641 functions across roughly 555,000 lines of C/C++ source with no assembly files for the game itself.

It matters because byte-identical decompilations need the original compilers and toolchains. The build uses SN Systems ProDG 3.9.3 with GCC 2.95.3 for the GameCube code, and Metrowerks CodeWarrior for the CRI middleware and Nintendo SDK portions, both rebuilt from vendor source drops. This shows how much of a game's behaviour comes from compiler defaults rather than authored assembly on PowerPC hardware.

Where compilers could not be coaxed into specific register or scheduling choices, the source carries 644 COMPILER-DIFF comments using techniques like dead tests, empty asm statements, and register-pin declarations. None emit instructions, as verified by an asmcheck script. An earlier state with around 200 hand-placed asm instructions was rewritten to pure C in September 2026.
