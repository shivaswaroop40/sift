---
id: 9ef3b464e4
title: ESP32 emulator runs real firmware in the browser without modification
original_title: "Show HN: Esp32sim – Run ESP32 firmware in the browser"
url: https://github.com/mikroverk/esp32sim
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-10-18"
published_at: "2026-10-17T13:51:08.000Z"
authors:
  - joakimeriksson
comments: https://news.ycombinator.com/item?id=50131189
tags:
  - esp32
  - emulation
  - wasm
  - testing
  - firmware
  - embedded
  - community
why_read: Learn how to test ESP32 projects in the browser or CI without hardware or cloud dependencies.
rank: 1
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A Rust-built emulator executes unmodified ESP32 firmware across four Espressif chips: classic ESP32 with dual Xtensa cores, plus S3, C3 and C6 variants. It boots the real mask ROM, bootloader and application image. The Xtensa decoder has passed 977,000 instruction checks with zero mismatches; RISC-V variants show similar accuracy over 161,000 and 126,000 instructions respectively.

For embedded developers, this means testing firmware without hardware, in CI/CD pipelines or locally in a browser. Peripheral simulation includes GPIO, UART, timers, SPI flash, WiFi with a virtual access point and NAT, and board-specific features like displays and cameras.

Performance runs at 150–240 million instructions per second on the S3 via JIT, well above real-time for typical workloads. The C3 and C6 remain in draft status. All code is MIT licensed, shared across the three SoCs where their IP blocks are identical.
