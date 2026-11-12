---
id: d228e0a31d
title: AWS releases a Rust-based local emulator that serves AWS APIs for testing without cloud calls
original_title: AWS distills its cloud into a local emulator that runs on your PC
url: >-
  https://www.theregister.com/off-prem/2026/11/12/aws-distills-its-cloud-into-a-local-emulator-that-runs-on-your-pc/5309251
source: The Register
kind: news
section: infrastructure
date: "2026-11-12"
published_at: "2026-11-12T05:47:31.000Z"
authors:
  - Simon Sharwood
comments: null
tags:
  - aws
  - emulator
  - rust
  - testing
  - ci
  - developer-tooling
  - news
why_read: >-
  The original covers install steps, the stated limits on IAM and multi-account behaviour, and the
  aws-emulator skill for coding agents that checks a project against the fidelity scores.
rank: 9
interest_score: 7
depth_score: 5
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

AWS has released "AWS Emulator", a local program that serves an AWS API endpoint. It is written in Rust and supports services that have an API model in the AWS API models repository on GitHub, where The Register counted over 1,300 items. Tests run on a laptop, a dev server or in CI and never touch AWS, so they cost nothing.

Setup is modest. Linux users get an RPM or Debian package, while Mac and Windows users run a Docker image. On start, the emulator generates credentials, a config file and a certificate under ~/.aws/emulator/9297/. You set environment variables so the AWS SDK points at the local endpoint, and application code stays unchanged.

The limits are significant. It does not evaluate IAM policies the way AWS does. Each emulator acts as a single account, with no cross-account or cross-Region behaviour. AWS says fidelity varies by service and feature, and it publishes fidelity scores per service. The stated goal is identical results for valid calls and identical errors for invalid ones.

For engineers, this is a first-party alternative to third-party emulators, and the fidelity scores give a way to judge where tests can be trusted. The missing IAM evaluation matters, since permissions are a common source of deployment failures. The Register notes the tool ultimately nudges developers towards using AWS.
