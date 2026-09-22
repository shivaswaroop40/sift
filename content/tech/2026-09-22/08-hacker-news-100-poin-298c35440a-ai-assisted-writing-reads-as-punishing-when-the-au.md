---
id: 298c35440a
title: AI-assisted writing reads as punishing when the author skips the thinking
original_title: I don't want to read what you didn't write
url: https://blog.colinbreck.com/i-dont-want-to-read-what-you-didnt-write/
source: Hacker News (100+ points)
kind: community
section: systems
date: "2026-09-22"
published_at: "2026-09-21T22:30:41.000Z"
authors:
  - mooreds
comments: https://news.ycombinator.com/item?id=49794330
tags:
  - ai-writing
  - documentation
  - pull-requests
  - developer-experience
  - llm
  - community
why_read: >-
  A working engineer's argument, with concrete examples, for why AI-generated docs and PR summaries
  are failing readers and how they used AI usefully in their own writing.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

A practitioner blog post argues that AI-written design docs, pull request summaries, tickets, and meeting notes are unreadable because the writer used AI to produce text without supplying context the reader lacks. The author gives examples of summaries that describe changes exhaustively but omit why the work matters, where input is wanted, or how risky it is, and recounts a personal message that became dispassionate after AI workshopping.

The post matters because it describes a workflow failure already showing up in code review queues and design reviews: people prompt a model, skim the output against context they hold in their head, then ship it to a reader who has to reconstruct that context from scratch. A cited developer survey backs the experience, with 78% of readers stopping when they suspect AI authorship and 98% preferring the author's own voice, flaws and all.

The author then describes the case where AI did help their writing: an academic paper where they supplied the LaTeX template, style guide, prior papers, source code, and production metrics, wrote each paragraph themselves, and used the model only to verify claims against code and logs and to format citations. They note the reverse workflow, asking the AI to generate the paragraph from the supplied context, was never useful.
