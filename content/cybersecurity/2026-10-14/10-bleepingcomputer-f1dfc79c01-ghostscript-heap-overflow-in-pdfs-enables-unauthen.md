---
id: f1dfc79c01
title: Ghostscript heap overflow in PDFs enables unauthenticated remote code execution
original_title: Ghostscript flaw lets hackers hijack servers via PDF uploads
url: >-
  https://www.bleepingcomputer.com/news/security/ghostscript-flaw-lets-hackers-hijack-servers-via-pdf-uploads/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-10-14"
published_at: "2026-10-13T21:33:26.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - ghostscript
  - cve-2026-39919
  - pdf
  - rce
  - wordpress
  - buffer-overflow
  - news
why_read: Understand the attack surface of PDF processing in your infrastructure and required mitigations.
rank: 10
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

A heap buffer overflow in Ghostscript versions 9.21 to 10.07.1 (CVE-2026-39919) allows remote code execution via specially crafted PDF files with JPEG 2000 images. Wordfence researchers demonstrated two working exploits that write 1,024 bytes into a 256-byte buffer, corrupting memory and achieving code execution.

Any system rendering untrusted PDFs through vulnerable Ghostscript becomes a target. WordPress sites are particularly exposed if they accept PDF uploads and process them for preview generation, though exploitation success depends on system configuration, fonts, and libraries. No in-the-wild attacks have been observed yet.

Ghostscript 10.08.0, released September 8, patches the flaw. Organisations unable to upgrade should block PDF uploads or disable PDF rendering in ImageMagick. The vulnerability affects Debian, Ubuntu, Fedora, Alpine, and AlmaLinux distributions.
