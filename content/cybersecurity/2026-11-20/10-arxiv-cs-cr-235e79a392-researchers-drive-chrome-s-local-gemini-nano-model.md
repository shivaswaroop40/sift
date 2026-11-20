---
id: 235e79a392
title: Researchers drive Chrome's local Gemini Nano model as a post-exploitation tool on the host
original_title: "Living off the Local Model: Abusing Browser-Embedded Language Models for Post-Exploitation"
url: https://arxiv.org/abs/2611.25086
source: arXiv cs.CR
kind: paper
section: papers
date: "2026-11-20"
published_at: "2026-11-20T05:00:00.000Z"
authors:
  - William Fleshman
  - Joseph Lucas
comments: null
tags:
  - browser-ai
  - gemini-nano
  - chrome
  - living-off-the-land
  - post-exploitation
  - research
  - paper
why_read: >-
  The paper gives the mechanism and the measured capabilities, so you can judge how a vendor-signed
  local model changes your post-exploitation detection assumptions.
rank: 10
interest_score: 6.7
depth_score: 6
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

A paper from arXiv cs.CR shows that the Gemini Nano model shipped in Chrome can be used by an attacker who already has access to a host. The model runs on the device, is vendor-signed and produces no network traffic. The authors drive it using only interpreters that ship with the operating system.

The model needs a one-time user-activation check before it downloads. The authors say a simulated click satisfies this check, and that it can also be bypassed entirely. They then measure how well the model finds credentials on the host, detects PII in email, classifies images and calls custom tools.

They combine these abilities in a simulated operation. The model reads a password from a webcam image, unlocks an encrypted archive, triages the contents and stages a private key for exfiltration. The abstract says this ran end-to-end without user interaction.
