---
id: 819229fc61
title: Claude Code sent user email addresses in User-Agent headers during web searches
original_title: Claude Code sends your email address to websites
url: https://github.com/anthropics/claude-code/issues/107757
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-06"
published_at: "2026-11-05T22:17:15.000Z"
authors:
  - motoroco
comments: https://news.ycombinator.com/item?id=50385272
tags:
  - claude-code
  - anthropic
  - privacy
  - user-agent
  - security
  - community
why_read: >-
  The GitHub thread carries the original report, the affected version, and Anthropic's contributor
  response describing the default-on privacy mod.
rank: 10
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

A bug report against Claude Code, issue #107757 filed on 5 November, claims the tool transmits the user's email address in the User-Agent header of web-search requests, exposing it to arbitrary third-party sites without consent. The reporter, on version 2.1.318 under macOS and tmux, says the result is dozens of scam emails a day. GitHub triaged the issue under security and tools labels, and it drew 492 upvotes.

For teams running agents that make outbound web requests, headers are an easy leak surface to overlook. An operator identifier in User-Agent reaches every site the agent visits, persists in access logs, and is trivial to harvest. The reporter argues the header serves no one, since sites that dislike agentic traffic get nothing useful from it, and says the company is migrating to Pi via OpenRouter over lost trust.

An Anthropic contributor replied that a built-in mod, cc-plugin-privacy, deterministically blocks the behaviour from v2.1.317 onward. It ships enabled by default, can be turned off under /plugins, and its source is due to be published alongside the other built-in mods. The thread shows no header capture, but the fix response treats the behaviour as real. The reporter's environment listed 2.1.318, which the stated fix version should already cover, so the timeline is unclear.
