---
id: 71b5ee43ef
title: Android Binder driver's C implementation deleted in favour of Rust
original_title: "[$] Removing binder.c"
url: https://lwn.net/Articles/1102982/
source: LWN
kind: news
section: systems
date: "2026-10-31"
published_at: "2026-10-30T17:46:46.000Z"
authors:
  - daroc
comments: null
tags:
  - android
  - binder
  - rust
  - linux-kernel
  - ipc
  - news
why_read: >-
  You will get Llamas's and Ryhl's account of what replacing binder.c with Rust took, including the
  hardest parts.
rank: 7
interest_score: 7.3
depth_score: 8
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

At the final talk of Kangrejos 2026, Carlos Llamas announced that he had deleted the C implementation of Android's Binder driver, to general applause. Binder is the primary interprocess communication mechanism on Android devices. Llamas shared insights into what went into replacing the C code. Alice Ryhl, who has worked on the Rust implementation for some years, added her own thoughts on the most difficult and interesting parts.

Binder is the primary interprocess communication mechanism on Android, so this is heavily used kernel code moving to Rust. For engineers tracking Rust in the Linux kernel, a production IPC mechanism shedding its C implementation is a notable milestone. The talk also offers a first-hand account of what replacing C kernel code with Rust actually involves.

The full article sits behind LWN's subscriber paywall, so the detail of the talk is not freely available at the time of writing. What is confirmed is the outcome itself. The C code has been deleted and the Rust implementation is the replacement.
