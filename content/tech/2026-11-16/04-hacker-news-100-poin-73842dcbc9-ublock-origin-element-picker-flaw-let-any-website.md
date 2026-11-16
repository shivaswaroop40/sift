---
id: 73842dcbc9
title: >-
  uBlock Origin element picker flaw let any website add trusted filters and run script on other
  sites
original_title: Universal XSS in uBlock Origin from website-driven element picker
url: https://iter.ca/post/ubo-uxss/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-16"
published_at: "2026-11-16T02:04:48.000Z"
authors:
  - zaik
comments: https://news.ycombinator.com/item?id=50513160
tags:
  - ublock-origin
  - xss
  - browser-extensions
  - firefox
  - security
  - clickjacking
  - community
why_read: >-
  The post gives a clear, step-by-step exploit chain through a web-accessible extension page, useful
  if you build or audit browser extensions or other message-driven tools.
rank: 4
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

A researcher found a one-click universal XSS in the MV2 Firefox build of uBlock Origin. A malicious page could embed the extension's element picker in an invisible iframe, drive it by postMessage, and make it add arbitrary trusted filters. A less severe variant affected uBO Lite (MV3). The bug is fixed.

The attack needs the per-install extension UUID. A default filter hooks fetch and makes an XHR to a moz-extension URL, so the attacker hooks XMLHttpRequest, triggers the filter and reads the UUID. The author notes other leaks are possible. The page then loads epicker-ui.html in an iframe and sends it messages.

The filter check was bypassed through the opt field, normally a request type such as image. It is appended after a $, but a newline lets an attacker inject a separate filter, such as a trusted scriptlet that runs JavaScript on any chosen domain. The user must click the invisible Create button. The author did not build that clickjacking step.

The core fault is that the picker accepted messages from any page. One fix adds a secret, passed from the content script to the picker in the first postMessage. Trust lasts until a filter recompile, but an attacker could open the victim site straight away. The author says an AI model found the bug and he verified it.
