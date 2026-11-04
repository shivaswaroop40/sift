---
id: 340104c685
title: China-aligned SlippyNunchucks hijacks Sogou DNS to deploy DarkVigil backdoor
original_title: China-Aligned Hackers Hijack Sogou Input Method DNS Requests to Deploy DarkVigil Backdoor
url: https://thehackernews.com/2026/11/china-aligned-hackers-hijack-sogou.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-11-04"
published_at: "2026-11-04T11:24:31.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - dns-hijacking
  - backdoor
  - sogou
  - windows
  - china-aligned
  - news
why_read: >-
  The original article carries the rest of the campaign details, which are missing from this
  truncated excerpt.
rank: 4
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

A China-aligned threat actor tracked as SlippyNunchucks has been attributed to a DNS hijacking operation against Windows versions of Sogou Input Method. The actor abuses insecure HTTP communications in the software to hijack its DNS requests. The campaign, observed from 1 July 2026, is assessed to be a surveillance operation that deploys an implant called DarkVigil, also known as FDMTP.

The mechanism is the notable part for defenders. A widely installed desktop application making requests over plaintext HTTP gives an attacker a way to intercept and redirect its DNS traffic, turning a legitimate client into a delivery channel for an implant. Windows hosts running Sogou Input Method are the exposed population, and unusual DNS behaviour from that process is the likely detection point.

The source text is truncated. It states the campaign is assessed to have targeted organisations, but it names no sectors, victims, or countries. Details on how DarkVigil operates, how it persists, and how confident the China attribution is are not present in the available text.
