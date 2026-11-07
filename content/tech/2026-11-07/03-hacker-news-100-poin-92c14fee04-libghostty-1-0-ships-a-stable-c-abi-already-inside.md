---
id: 92c14fee04
title: libghostty 1.0 ships a stable C ABI, already inside JetBrains terminals
original_title: Libghostty 1.0
url: https://mitchellh.com/writing/libghostty-1-0
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-11-07"
published_at: "2026-11-06T23:30:52.000Z"
authors:
  - mfiguiere
comments: https://news.ycombinator.com/item?id=50399933
tags:
  - ghostty
  - terminal-emulation
  - abi-stability
  - c-library
  - jetbrains
  - community
why_read: >-
  Hashimoto walks through the ABI design, the CI that enforces it, and the packaging and licensing
  details distros need.
rank: 3
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

libghostty-vt 1.0 is out. It is a portable C library for terminal emulation, extracted from the core of the Ghostty terminal, and the release marks both the library and its C ABI as stable under semantic versioning. Adoption is already broad. JetBrains IDEs now run their terminal on it, covering more than 12.5 million active users by JetBrains' own count, and Neovim has an approved pull request to replace libvterm with it, held only until a tagged release.

The practical effect is that teams building terminals, TUIs and agentic coding tools can link a maintained emulator instead of writing their own. The Neovim change closes a ten-year-old issue about reflowing scrollback on resize. ABI stability is enforced rather than merely promised. CI checks every change with libabigail against a committed baseline on Linux, and against golden type manifests on macOS and WebAssembly.

The design leans on opaque handles and a small set of enum-keyed getters and setters, so new values can be added without new symbols. Programs built with newer headers against an older library get GHOSTTY_UNSUPPORTED rather than undefined behaviour. On ELF platforms every exported symbol is versioned, so the loader refuses a mismatched library by name instead of failing later.

Licensing and packaging target distributions. The library is MIT, needs only libc at runtime and can be built freestanding. Its dependencies, simdutf, Google Highway, a Unicode grapheme table and Wuffs, are all permissively licensed, with no copyleft in the tree, and ship in a machine-readable manifest with SPDX identifiers. Signed source tarballs plus a dependencies tarball allow fully offline distro builds. CI runs full tests on Linux, macOS, iOS, FreeBSD, Windows, Android and wasm32.
