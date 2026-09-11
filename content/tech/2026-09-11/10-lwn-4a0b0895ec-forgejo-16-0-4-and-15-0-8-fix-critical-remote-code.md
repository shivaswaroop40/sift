---
id: 4a0b0895ec
title: Forgejo 16.0.4 and 15.0.8 fix critical remote code execution flaw
original_title: Forgejo 16.0.4 and 15.0.8 address critical security vulnerability
url: https://lwn.net/Articles/1093671/
source: LWN
kind: news
section: security
date: "2026-09-11"
published_at: "2026-09-10T20:05:50.000Z"
authors:
  - jzb
comments: null
tags:
  - forgejo
  - security
  - remote-code-execution
  - git
  - self-hosting
  - news
why_read: You get the exact template-expansion attack chain, the fix, and the versions to upgrade to.
rank: 10
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: deepseek-v4-flash
---

The Forgejo software-forge project has released versions 16.0.4 and 15.0.8 to fix two security vulnerabilities. One is a critical remote code execution flaw in repository creation from templates. When a new repository is generated from a template, Forgejo clones the template, removes the .git folder, expands variables in files listed in .forgejo/template, and initialises a new git repository. A malicious template can abuse that expansion to create a new .git folder, which git then adopts.

The impact is arbitrary data read from the Forgejo host and arbitrary process execution on it. The fix removes any existing .git folder from the directory after variable expansion completes, before git initialises the new repository. The project recommends upgrading to the latest version as soon as possible.

Codeberg has been returning lots of 504s and 502s, making downloads difficult. A commenter on the LWN article said they managed to get proper downloads using a scripted curl, and supplied a SHA256 checksum for forgejo-15.0.8-linux-amd64: 6a3d207d9d8506f8147c660528b631ec123e896790bc60f1a02d8ddaeebb1afe. The checksum can be used to verify a downloaded binary.
