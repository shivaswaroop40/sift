---
id: cca5d0db2b
title: Masato Kinugawa solves 'impossible' innerHTML XSS lab using the selectedcontent element
original_title: "Achieving the impossible: XSS in innerHTML without equals"
url: https://portswigger.net/research/achieving-the-impossible-xss-in-innerhtml-without-equals
source: PortSwigger Research
kind: research
section: threat-research
date: "2026-11-19"
published_at: "2026-11-18T14:39:45.000Z"
authors: []
comments: null
tags:
  - xss
  - innerhtml
  - selectedcontent
  - dompurify
  - browser-security
  - safari
  - research
why_read: >-
  The original has the full parsing explanation of why cloned scripts execute, plus the innerHTML
  payload, for anyone checking sanitiser and filter assumptions.
rank: 5
interest_score: 7.3
depth_score: 8
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Guest researcher Masato Kinugawa found a way to run JavaScript when input lands in innerHTML and the equals sign is blocked. The vector uses the newer <selectedcontent> element, which clones the child nodes of the selected <option>. In Chrome and Safari, a cloned <script> executes. The payload still works in Safari 27.2, but not in Chrome since version 153.

The idea came from a May 2026 DOMPurify bypass by Kabir Acharya that also used <selectedcontent>. Kinugawa first showed that an unclosed <script> inside an <option> runs once, because the clone is executed. With Mathias Karlsson, he then removed whitespace, '/' and '=' from the vector.

A plain script has a flaw: any page content after it becomes part of the script and likely causes a syntax error. Wrapping the script in SVG fixes this, since the HTML parser reads a following <foo> as a start tag. This variant works in Chrome 157 and Safari, with no whitespace, '/' or '='.
