---
id: ffac1671bc
title: Whistle speech model runs in 16.9 MB on device CPU
original_title: "Whistle: Speech to Text in 16.9 MB"
url: https://cactuscompute.com/blog/whistle
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-10-09"
published_at: "2026-10-08T16:59:39.000Z"
authors:
  - gmays
comments: https://news.ycombinator.com/item?id=50008427
tags:
  - speech-recognition
  - model-compression
  - on-device-inference
  - attention-architecture
  - embedded-systems
  - community
why_read: >-
  Learn the architecture and trade-offs of a practical on-device speech model constrained to
  embedded hardware.
rank: 5
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Cactus Compute released Whistle, a speech recognition model that fits in a single 16.9 MB file, runs on CPU with no external dependencies, and performs transcription, word timestamps and speech embeddings entirely on device. It supports English, German, French, Spanish, Italian, Dutch and Polish, with audio input up to 30 seconds.

For platform engineers, the constraint is significant: the model runs on mobile, wearable and microcontroller hardware where model size and latency matter. Whistle achieves 11.1 ms time to first token on an Apple M4 Pro CPU, compared to 73.2 ms for Whisper base at 145.3 MB. It decodes at 1,319 tokens per second versus 266 for Whisper.

Word error rates vary by dataset. Whistle leads on LibriSpeech, SPGISpeech, Earnings-22 and FLEURS average. Whisper base performs better on TED-LIUM, AMI and MLS average. The encoder uses eight Simple Attention blocks shared with their text model Needle; the decoder adds gated cross attention per layer and supports variable depth via a ladder design.
