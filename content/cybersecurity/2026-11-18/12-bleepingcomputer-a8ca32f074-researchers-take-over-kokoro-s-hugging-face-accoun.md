---
id: a8ca32f074
title: Researchers take over Kokoro's Hugging Face account by registering the owner's lapsed domain
original_title: Researchers hijack Hugging Face account for popular Kokoro AI model
url: >-
  https://www.bleepingcomputer.com/news/security/researchers-hijack-hugging-face-account-for-popular-kokoro-ai-model/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-11-18"
published_at: "2026-11-17T18:21:24.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - hugging-face
  - supply-chain
  - account-takeover
  - model-poisoning
  - open-weight-models
  - domain-hijacking
  - news
why_read: >-
  The piece shows a low-effort account takeover route and a weights-only poisoning method that code
  scanning would miss, which bears on how you pin and verify model downloads.
rank: 12
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Researchers led by Alon Hertz took control of the Hugging Face account for Kokoro, an open-weight text-to-speech model with nearly 13 million monthly downloads. They registered hexgrad.com, the domain listed in the project's DONATE.md file, and used it to reset the publisher's password.

They then fine-tuned the model weights in 87 seconds on a gaming GPU. The modified model spoke different audio from the same input text, voice file, configuration and inference code. The weights were tested locally and never uploaded to Hugging Face.

Only the weights change, so there is no malicious code or signature for malware scanners to find. Tests from another account showed Hugging Face would not flag such an update. Publisher name, file format, architecture and delivery route would all look normal, and file sizes would be similar.

Kokoro is supported in tooling from Google, NVIDIA and Intel, and in AWS and AMD guides. Its developer has not pushed an update since April 2025. Hertz says Hugging Face does not verify publishers or whether an account is still held by its original owner. He reported the issue and received no reply.
