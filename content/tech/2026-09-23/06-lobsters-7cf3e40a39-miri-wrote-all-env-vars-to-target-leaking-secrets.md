---
id: 7cf3e40a39
title: Miri wrote all env vars to target/, leaking secrets via GitHub Actions cache
original_title: GitHub Actions leaking secrets when Miri output is cached
url: https://blog.rust-lang.org/2026/09/21/github-actions-leaking-secrets-when-miri-output-is-cached/
source: Lobsters
kind: community
section: security
date: "2026-09-23"
published_at: "2026-09-22T21:38:02.000Z"
authors:
  - blog.rust-lang.org via peter
  - blog.rust-lang.org via peter
comments: https://lobste.rs/s/acz9kk/github_actions_leaking_secrets_when_miri
tags:
  - rust
  - miri
  - github-actions
  - secrets
  - ci
  - supply-chain
  - community
why_read: >-
  It tells you exactly when caching target/ on GitHub Actions exposes secrets, how to check your own
  workflow, and what Miri will stop persisting.
rank: 6
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

The Rust Security Response Team disclosed that `cargo miri` stores every environment variable into `target/` so it can pass them across its multiple invocations. When a project caches that directory in GitHub Actions, any secret available to the Miri step ends up in the cache, which PRs from previously trusted contributors can read.

PR CI on GitHub can be triggered by anyone who has shipped a commit before, and the platform can hide overwritten commits and drop run logs after a few months, so an exfiltration can go unnoticed. The standard actions/cache and swatinem/rust-cache patterns are the common vector.

The short-term fix in Miri narrows what it preserves to `CARGO_*` variables (excluding `CARGO_*_TOKEN`) plus `OUT_DIR`, shipping in the 2026-09-22 nightly. The team scanned GitHub and notified one definitely affected repository and seven others worth reviewing; the scan is described as imperfect.

Practitioners running Miri in CI should drop the cache, scope secrets away from the Miri step, and rotate anything that might have leaked. The post also flags a broader principle: any tool that writes the job environment into `target/` will behave the same way, so caching `target/` while secrets are in scope is generally unsafe.
