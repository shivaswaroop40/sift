---
id: 2a922873bb
title: Patched Ghostscript flaw lets crafted uploads escape sandbox and run commands
original_title: Researchers Demonstrate Ghostscript Sandbox-Escape RCE via Crafted File Uploads in Popular Apps
url: https://thehackernews.com/2026/11/researchers-demonstrate-ghostscript.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-22"
published_at: "2026-11-22T05:03:41.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - ghostscript
  - sandbox-escape
  - rce
  - file-upload
  - patching
  - news
why_read: >-
  The original may carry the exploit detail and affected apps, which this truncated text does not
  include.
rank: 2
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Researchers at pwn.ai showed that a now-patched flaw in Ghostscript lets a crafted file escape the program's security sandbox. The file can then run commands on the server that processes it. The demonstration was published this week.

Ghostscript is the interpreter many Linux servers use to convert uploaded PDFs, PostScript files and images into other formats. Applications often invoke it indirectly, through other libraries or tools, so developers may not know it is in the processing path.
