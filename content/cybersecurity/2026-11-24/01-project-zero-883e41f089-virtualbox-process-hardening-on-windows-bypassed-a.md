---
id: 883e41f089
title: VirtualBox process hardening on Windows bypassed again via .NET flat image fallback
original_title: "VirtualBox Process Hardening on Windows 2026 Edition: What’s a Single Bit Between Friends?"
url: https://projectzero.google/2026/11/virtualbox-process-hardening.html
source: Project Zero
kind: research
section: vulnerabilities
date: "2026-11-24"
published_at: "2026-11-23T08:00:00.000Z"
authors:
  - James Forshaw
comments: null
tags:
  - virtualbox
  - dotnet
  - windows
  - process-hardening
  - project-zero
  - cve-2026-87268
  - research
why_read: >-
  The original walks through the CLR code path and the VirtualBox loader hooks, which helps if you
  rely on image-load checks to protect processes.
rank: 1
interest_score: 8
depth_score: 9
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

James Forshaw of Project Zero revisited VirtualBox's Windows process protection, first studied in 2017. He found three new bypasses, plus a broken fix for a 2020 COM bypass that stopped working after Windows changes. The post details one, CVE-2026-87268, which loads arbitrary code into a protected VM process.

The root cause is in .NET Framework v4 assembly loading. PEImageLayout::Map first tries a SEC_IMAGE mapping. If CreateFileMapping fails with ERROR_BAD_EXE_FORMAT, it falls back to FlatImageLayout, which maps the file as plain data. A valid assembly then runs from memory with no image section load for hooks to inspect.

VirtualBox hooks NtCreateSection, which CreateFileMapping calls to make image sections, to block untrusted DLLs. Code that never creates an image section avoids that check. Any defence that relies on watching image loads shares this blind spot for managed code.

The fallback does not apply under every configuration. The mapping constructor throws if code integrity enforcement or a Windows Lockdown Policy is active. Older .NET versions 3.5 and 2 fail later at LoadLibrary, and the author did not test .NET 5 and above. The excerpt cuts off before the VirtualBox exploitation details.
