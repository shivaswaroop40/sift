---
id: 97f82f1953
title: Two rare Unicode characters bypass Chromium's phishing protections
original_title: Two characters open up a world of typosquatting opportunities in Chromium browsers
url: >-
  https://www.theregister.com/security/2026/10/10/two-characters-open-up-a-world-of-typosquatting-opportunities-in-chromium-browsers/5302383
source: The Register
kind: news
section: security
date: "2026-10-10"
published_at: "2026-10-10T10:15:00.000Z"
authors: []
comments: null
tags:
  - unicode
  - phishing
  - chromium
  - security
  - domain-spoofing
  - news
why_read: >-
  Understand a concrete Unicode bypass in widely used browsers that attackers are already
  exploiting.
rank: 7
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Researchers found that Cyrillic ө and Latin ƙ can be used to register domains that appear legitimate in browsers but are actually spoofed. They registered twenty lookalike domains including aррӏө.com and niƙe.com that all bypassed Chrome and Edge's safety checks.

Chromium's defences rely on hardcoded lists of dangerous characters and popular domains. The checks fail if even one character is missing from the Cyrillic list, and ƙ forms a combining mark that strips its distinction in skeleton matching, defeating the second layer.

Safety Tips warnings only trigger on exact matches, one-edit differences, or adjacent swaps. Domains with two or more changes, or those under five characters, evade these warnings entirely. Email clients like Gmail display all twenty lookalike domains in Unicode without warning.
