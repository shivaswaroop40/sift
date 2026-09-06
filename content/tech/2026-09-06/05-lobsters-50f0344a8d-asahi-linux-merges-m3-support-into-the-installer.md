---
id: 50f0344a8d
title: Asahi Linux merges M3 support into the installer
original_title: "M2: Episode 1 (or, Asahi Linux on M3)"
url: https://asahilinux.org/2026/09/m2-episode-1/
source: Lobsters
kind: community
section: systems
date: "2026-09-06"
published_at: "2026-09-06T00:52:57.000Z"
authors:
  - asahilinux.org via kreeft
  - asahilinux.org via kreeft
comments: https://lobste.rs/s/ben6a4/m2_episode_1_asahi_linux_on_m3
tags:
  - asahi-linux
  - apple-silicon
  - linux
  - fedora
  - m3
  - gpu
  - community
why_read: >-
  It is the clearest signal yet that Apple Silicon Linux is no longer a one-generation-behind
  project, with a candid list of what still does not work.
rank: 5
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Asahi Linux has merged support for Apple M3 series SoCs into its installer. The team says almost everything that works on M1 and M2 also works on M3, including the webcam, microphones, USB at the hardware's 10 Gb/s limit, hardware-accelerated AV1 video decoding, WiFi and Bluetooth.

For anyone running Linux on Apple Silicon, this is the first time M3 hardware has been a supported target rather than an experimental one. The practical effects are real: M3 MacBook and iMac owners can now install Asahi without hand-building images, and the list of broken features is short.

The major gaps are the GPU, full DCP support, sleep and HDMI output, all of which depend on DCP work still in progress. The Mac Studio with M3 Ultra is not supported yet, and the merge is gated behind Expert mode in the installer until the Fedora Linux 45 beta in a couple of weeks.
