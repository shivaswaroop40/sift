---
id: 071df7d217
title: Android wcscspn bug breaks wide-character string scanning with non-ASCII text
original_title: AOSP Source Releases Are So Late Developers Disassemble Libraries to Report Bugs
url: https://github.com/android/ndk/issues/2260
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-10-14"
published_at: "2026-10-14T06:18:01.000Z"
authors:
  - tharen
comments: https://news.ycombinator.com/item?id=50083130
tags:
  - android
  - libc
  - regression
  - wide-characters
  - bug
  - community
why_read: >-
  Learn how a library regression broke production apps and why delayed source code release forced
  reverse-engineering to diagnose it.
rank: 5
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Android 17's bionic library has a regression in wcscspn() and wcspbrk() functions. When scanning a wide-character string for ASCII delimiters using a reject set of two or more ASCII characters, any character >= U+0100 (emoji, CJK, Cyrillic, Greek) stops the scan immediately and is falsely reported as matching, even though it is not in the set.

This breaks real applications. Visual Pinball's VBScript engine stopped loading tables with emoji in comments because its lexer uses wcspbrk() to find line ends. File operations treating paths with non-ASCII characters as wildcard patterns also failed. Developers initially had to disassemble the shipped libc.so to diagnose the issue because June release sources do not match September build binaries.

The mechanism is a lookup table optimisation. When all reject-set characters are ASCII, wcscspn() fills a 256-byte table and scans the haystack against it, but the code branch for haystack characters >= 0x100 incorrectly stops the scan instead of continuing. The existing test suite used only ASCII input and did not catch the regression.
