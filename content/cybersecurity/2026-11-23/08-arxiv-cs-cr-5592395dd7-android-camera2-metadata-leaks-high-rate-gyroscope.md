---
id: 5592395dd7
title: Android Camera2 metadata leaks high-rate gyroscope data that can reconstruct speech
original_title: "Your Camera Can Hear You: Side-Channel Acoustic Eavesdropping via Android Camera2 Metadata"
url: https://arxiv.org/abs/2611.27964
source: arXiv cs.CR
kind: paper
section: vulnerabilities
date: "2026-11-23"
published_at: "2026-11-23T05:00:00.000Z"
authors:
  - Guangyuan Ji
  - Wenjing Wang
  - Bingsheng Zhang
comments: null
tags:
  - android
  - side-channel
  - gyroscope
  - camera2
  - privacy
  - eavesdropping
  - paper
why_read: >-
  The paper gives the device survey, the mechanism and the attack results, which help you judge how
  far camera permissions should be trusted on Android fleets.
rank: 8
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Researchers report that Android's Camera2 subsystem bypasses the sensor rate limits added in Android 12. During an active Camera2 session, stabilisation pipelines export high-rate gyroscope readings in vendor CaptureResult metadata. Loudspeaker speech vibrates the phone chassis and shows up in this data. Of 50 phones tested from 10 vendors, 37 expose gyroscope metadata and 26 exceed 200 Hz. Six flagships reach 800-1000 Hz.

The channel needs neither RECORD_AUDIO nor HIGH_SAMPLING_RATE_SENSORS. Turning off the microphone toggle does not throttle the metadata. Turning off the camera toggle blanks video frames, but the 800-1000 Hz metadata keeps streaming. Android's existing privacy controls therefore do not cover this path, and a camera-permission app could in principle act as a covert microphone.

The authors also present CamEar, a recogniser trained only on simulated leakage from a physics-constrained simulator, with no traces from the target phone. Across the six fast phones it reaches 52.1% mean word accuracy and 74.3% character accuracy. They say ISpyU models fine-tuned on real data fall to 25.9% word accuracy on unseen phones. These figures come from the authors' own tests.
