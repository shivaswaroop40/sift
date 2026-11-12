---
id: bae9f03074
title: >-
  AWS publishes an official local emulator of its APIs, written in Rust, with telemetry on by
  default
original_title: AWS emulator
url: https://github.com/aws/aws-emulator
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-11-12"
published_at: "2026-11-11T18:21:38.000Z"
authors:
  - super_linear
comments: https://news.ycombinator.com/item?id=50456631
tags:
  - aws
  - emulator
  - rust
  - testing
  - ci
  - telemetry
  - community
why_read: >-
  The README gives the exact modes, build costs, telemetry switches and the fidelity-tracking
  approach, which you need before deciding whether this can replace your current AWS mocks in CI.
rank: 6
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

AWS has released AWS Emulator on GitHub, a local program that serves an AWS API endpoint for building and testing without an AWS account. It runs on a laptop, a dev server or in CI. There is no GUI and no extra fee. You point the CLI or an SDK at it with environment variables.

It runs as a server, installed from RPM or Debian packages on Linux or in a container on Windows and macOS. There is also an embedded mode for Rust tests, which runs one isolated in-process instance per test and wires its HTTP client into the SDK. The README says not to use it for production or security testing.

Fidelity is the open question. The project publishes per-service fidelity scores with each release and tracks unsupported behaviour in an issues directory. Building from source or using embedded mode is heavy. The README asks for at least 100 GB of free disk for target/, with one crate per service, and advises sharing a target directory and caching in CI.

Telemetry is on by default and reports usage data to AWS. The README says it excludes request content, code, credentials and personal data. You can turn it off with a flag, an environment variable, a config file or an embedded option. Any unrecognised value of the environment variable also turns it off.
