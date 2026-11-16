---
id: a6b9f4e32f
title: New CoffeeLoader variant uses OpenGL packer and adds a downloader stage
original_title: "A USB worm’s second life: Retadup spreading CoffeeLoader"
url: https://securelist.com/retadup-delivers-coffeeloader/121908/
source: Securelist
kind: research
section: threat-research
date: "2026-11-16"
published_at: "2026-11-16T07:00:37.000Z"
authors:
  - Oleg Kupreev
comments: https://securelist.com/retadup-delivers-coffeeloader/121908/#respond
tags:
  - coffeeloader
  - retadup
  - armoury-packer
  - malware
  - dll-sideloading
  - persistence
  - research
why_read: >-
  The original has the registry paths, request format, C2 hostname and shader code that you can turn
  into detections for this CoffeeLoader variant.
rank: 6
interest_score: 6.7
depth_score: 8
novelty_score: 7
utility_score: 5
scored: true
model: claude-sonnet-5-5
---

Kaspersky's Securelist reports a new CoffeeLoader variant seen in August 2026. An NSIS installer drops a patched 7z.dll, a modified 7-Zip library, and runs it through rundll32.exe. Malicious self-decrypting shellcode replaces part of the library's code. It is a new version of the Armoury packer, also used in earlier CoffeeLoader samples.

The packer still decrypts the payload on the GPU, but now uses OpenGL instead of OpenCL. The decryption is a simple XOR in a compute shader. The payload also changed. Armoury now delivers an extra shellcode, a new downloader stage, ahead of the dropper and stager, and the main body is now an executable rather than a DLL.

The downloader copies 7z.dll into a folder under %PROGRAMDATA% or %LOCALAPPDATA%. Folder, file and Run key names are eight hex digits derived from system volume information. It adds a StartupApproved entry so Task Manager cannot disable autorun. It then injects into a process such as dllhost.exe, WerFault.exe or svchost.exe.

The downloader fetches the main body over HTTPS from a hardcoded C2 using /payload?md5=, with zeros on the first request and the previous payload's hash afterwards. The sample shows api.internet-speed-check.com behind Cloudflare. The source text is truncated, so distribution, geography and the main module are not covered here.
