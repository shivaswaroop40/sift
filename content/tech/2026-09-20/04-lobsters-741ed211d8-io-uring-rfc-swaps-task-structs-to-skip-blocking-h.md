---
id: 741ed211d8
title: io_uring RFC swaps task structs to skip blocking handoffs
original_title: Thread-identity switcheroo for io_uring
url: https://lwn.net/SubscriberLink/1094303/50affb2e7bd3e698/
source: Lobsters
kind: community
section: systems
date: "2026-09-20"
published_at: "2026-09-19T18:42:48.000Z"
authors:
  - lwn.net via vinipsmaker
  - lwn.net via vinipsmaker
comments: https://lobste.rs/s/rpc7qb/thread_identity_switcheroo_for_io_uring
tags:
  - io-uring
  - linux-kernel
  - scheduler
  - performance
  - async-io
  - community
why_read: >-
  It explains a radical scheduler hook designed to cut io_uring overhead, and the constraints that
  make the trick hard to deploy.
rank: 4
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Jens Axboe has posted an RFC patch set that lets io_uring keep the submitting thread running when an operation turns out not to block. A new PF_IO_HANDOFF flag lets the scheduler call io_uring_task_sleeping() when a thread is about to block, triggering a thread-identity swap with a worker from io_uring's pool.

In current kernels, anything that might block inside io_uring_enter() is forwarded to a worker thread, with a context switch paid even when the operation would have completed immediately. The new approach only pays that cost when the operation really does block, which matters for the many calls (fdatasync, statx, some openat paths) that cannot easily be made asynchronous.

The mechanism is delicate. Before swapping task_struct pointers, the kernel must confirm nothing else holds a reference to either thread. Conditions such as ptrace attachment, active tracing of other tasks, perf events, and tracked futex ownership disqualify a handoff, forcing the operation down the old worker path. The text is truncated before the full list of restrictions is given.
