---
id: e45114ef40
title: 78% of developers stop reading when they detect LLM-authored text, survey finds
original_title: The revolt of the reader
url: https://bcantrill.dtrace.org/2026/09/05/the-revolt-of-the-reader/
source: Hacker News (100+ points)
kind: community
section: culture
date: "2026-09-06"
published_at: "2026-09-05T21:37:49.000Z"
authors:
  - chmaynard
comments: https://news.ycombinator.com/item?id=49580939
tags:
  - llm
  - writing
  - developer-survey
  - ai-detection
  - pangram
  - reputation
  - community
why_read: >-
  You will get a concrete developer survey on reader reaction to LLM writing and a practitioner's
  view on using Pangram as a detection gate.
rank: 7
interest_score: 7
depth_score: 8
novelty_score: 7
utility_score: 6
scored: true
model: minimax-m3
---

Bryan Cantrill cites a survey by Cynthia Dunlop of 668 developers, in which 78% said they stop reading immediately when they detect LLM authorship and 71% said they avoid the author in future. 98% said they preferred an author's own imperfect prose over LLM-polished text. Cantrill frames LLM-authored public writing as a broken contract with readers, who cannot tell which sentences the writer actually worked to produce.

For anyone publishing technical or public writing, the practical effect is reputational: the survey respondents are the active social-media readers who amplify work, so LLM authorship now repels the audience most likely to spread a piece. Cantrill argues the economics resemble email spam, where better identification made spam uneconomic and being labelled as spam became brand-damaging.

Cantrill has adopted Pangram Labs' Pangram 4 detector at Oxide, mandating that public writing test as human-authored. He reports Pangram 4 has both a low false positive rate and a low false negative rate in his use, a step up from Pangram 3, and better than earlier LLM-on-LLM detectors and surface heuristics like em-dash counting.
