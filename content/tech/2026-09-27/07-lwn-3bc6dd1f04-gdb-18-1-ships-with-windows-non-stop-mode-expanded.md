---
id: 3bc6dd1f04
title: GDB 18.1 ships with Windows non-stop mode, expanded Python API
original_title: GDB 18.1 released
url: https://lwn.net/Articles/1096897/
source: LWN
kind: news
section: languages-and-tools
date: "2026-09-27"
published_at: "2026-09-26T15:03:20.000Z"
authors:
  - corbet
comments: null
tags:
  - gdb
  - debugging
  - windows
  - python
  - remote-protocol
  - release-notes
  - news
why_read: >-
  You will get the concrete list of debugger changes worth wiring into your scripts, remote setups
  and Windows workflows.
rank: 7
interest_score: 6.3
depth_score: 7
novelty_score: 5
utility_score: 7
scored: true
model: minimax-m3
---

GDB 18.1 has been released, bringing substantial work on the Windows native target including non-stop mode (Windows 10 and later), scheduler-locking, native TLS variable access, 24-bit colour on Windows Terminal, and consistent forward-slash path display across CLI, TUI, GDB/MI and DAP interpreters.

The release also adds commands to manipulate the subprocess environment via set/show/unset local-environment, persistent history saving with save history/skip/user, info proc environ on Linux, a new essential help class, and the ability to disable progress bars that have annoyed users during debuginfod fetches.

Two new remote protocol packets (qExecAndArgs and single-inf-arg qSupported) plus argument handling improvements let gdbserver and remote targets share inferior arguments cleanly. New targets cover MicroBlaze Linux via gdbserver and AArch64 MinGW.

The Python API gains gdb.Corefile and related mapped-file types, gdb.Style classes for custom styling, new event registries for selected_context and corefile_changed, plus Architecture.disassemble styling support. Existing .gdb_index files should be regenerated because GDB now adds all type symbols to the index.
