---
id: 9f38366f50
title: WebGPU shader can freeze a Mac from an untrusted site
original_title: "The Deathray: A simple way for an untrusted site to freeze a Mac"
url: https://auberon.xyz/blog/posts/deathray/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-11"
published_at: "2026-09-10T19:34:20.000Z"
authors:
  - auberonedu
comments: https://news.ycombinator.com/item?id=49649124
tags:
  - webgpu
  - macos
  - denial-of-service
  - apple
  - gpu
  - security
  - community
why_read: >-
  You'll get the shader source, the disclosure timeline, and why Apple may struggle to pre-empt
  WebGPU work.
rank: 9
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: deepseek-v4-flash
---

A WebGPU shader on an untrusted website can freeze a Mac's graphics and make the desktop unusable until restart. The researcher reproduced it on Chrome, Firefox and Safari on macOS, but not on other operating systems. The victim only needs to click a link.

The attack uses an infinite loop in a WebGPU compute shader that keeps copying data in a buffer. A vertex shader reads from the same buffer, so it cannot proceed. The stall spills into WindowServer, making macOS unresponsive. A watchdog eventually triggers a kernel panic and restart. Other operating systems tested pre-empt unresponsive shaders; macOS does not.

Apple was told on 27 July 2026 and initially said it would fix the issue. On 26 August it changed course, saying the report had no security implications and would not result in a product change. Apple classifies crash, hang or recoverable data loss as non-security. The researcher notes a similar WebGL issue, ShadyShader, was assigned CVE-2023-40441 with a medium severity score.
