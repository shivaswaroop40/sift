---
id: c1e717c28f
title: GitHub rewrites Copilot runtime in Rust, cutting startup time to 292 milliseconds
original_title: Github Migrates Copilot Runtime to Rust with AI-Assisted Rewrite
url: >-
  https://www.infoq.com/news/2026/10/github-copilot-rust-migration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-10-10"
published_at: "2026-10-09T14:29:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - rust
  - migration
  - copilot
  - typescript
  - performance
  - verification
  - news
why_read: >-
  See how a large production system was incrementally rewritten in Rust without downtime, and where
  AI-assisted code still needs human oversight.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

GitHub replaced 800,000 lines of TypeScript and Node.js code with Rust across Copilot CLI, app, and SDK over 14.5 weeks. The migration used AI-assisted generation alongside 128 pull requests while the service remained live. Client startup and session creation fell from 5.25 seconds to 292 milliseconds.

The previous architecture required Node.js, V8, and inter-process communication, consuming roughly 100 MB per client. The Rust runtime embeds directly into host applications via C ABI, removing that overhead. The SDK now supports six languages while the Copilot team shipped 135 releases during the migration.

AI agents generated most implementation code, but integration relied on incremental replacement with temporary N API compatibility layers. The approach surfaced behavioural regressions through end-to-end tests before full cutover. Verification of undocumented contracts and edge cases like cancellation and backpressure required human review beyond compilation checks.
