---
id: 1e231fb79e
title: "Breaking the Seal: Static Deobfuscation of JSCeal’s Compiled V8 Bytecode"
original_title: "Breaking the Seal: Static Deobfuscation of JSCeal’s Compiled V8 Bytecode"
url: >-
  https://research.checkpoint.com/2026/breaking-the-seal-static-deobfuscation-of-jsceals-compiled-v8-bytecode/
source: Check Point Research
kind: research
section: vulnerabilities
date: "2026-09-05"
published_at: "2026-08-31T13:38:28.000Z"
authors:
  - shlomoo@checkpoint.com
comments: null
tags:
  - research
why_read: ""
rank: 8
interest_score: 10
depth_score: 10
novelty_score: 10
utility_score: 10
scored: false
model: null
---

Research by: hasherezade
Key Points
Since early 2025, Check Point Research has been tracking JSCeal, a sophisticated cryptocurrency-focused stealer with broader credential-theft, surveillance, and traffic-interception capabilities, delivered as compiled V8 bytecode (JSC files).
The payloads are protected with javascript-obfuscator , using multiple techniques including RC4-protected strings, control-flow flattening, proxy functions, and operation wrappers.
Our goal was to recover the code to a…
