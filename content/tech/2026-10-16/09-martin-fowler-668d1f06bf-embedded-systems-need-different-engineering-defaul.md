---
id: 668d1f06bf
title: Embedded systems need different engineering defaults than cloud software
original_title: When Software Meets Hardware
url: https://martinfowler.com/articles/software-meets-hardware.html
source: Martin Fowler
kind: blog
section: systems
date: "2026-10-16"
published_at: "2026-10-15T13:25:00.000Z"
authors:
  - Martin Fowler
comments: null
tags:
  - iot
  - embedded-systems
  - hardware-software
  - observability
  - deployment
  - distributed-systems
  - blog
why_read: >-
  See how standard software practices translate to large-scale IoT and what must change when
  hardware constraints become real.
rank: 9
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A team modernizing 800,000 battery-powered retail sensors across 3000 stores found that software engineering principles held up, but the practices that work for web applications needed rethinking. Core concerns shifted from connection to disconnection, from unlimited power to energy as a constraint, and from remote debugging to devices that self-diagnose.

For distributed systems engineers, this matters because it reveals how assumptions baked into modern DevOps tooling (CI/CD, observability, testing) don't map cleanly onto hardware at scale. The trade-offs change: you cannot always deploy remotely, you cannot always log verbosely, and you cannot assume connectivity to troubleshoot a device in a distant store.

The team's answer was to treat the physical environment as part of development, build an instrumented sensor farm for fast feedback with hardware in the loop, and push diagnostics into firmware itself so devices could explain their own state without an attached debugger or network access.
