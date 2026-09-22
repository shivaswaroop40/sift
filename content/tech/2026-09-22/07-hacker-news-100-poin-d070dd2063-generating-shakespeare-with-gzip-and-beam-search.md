---
id: d070dd2063
title: Generating Shakespeare with gzip and beam search
original_title: Can gzip be a language model?
url: https://nathan.rs/posts/gzip-lm/
source: Hacker News (100+ points)
kind: community
section: papers
date: "2026-09-22"
published_at: "2026-09-22T06:08:39.000Z"
authors:
  - networked
comments: https://news.ycombinator.com/item?id=49797323
tags:
  - compression
  - nlp
  - python
  - beam-search
  - information-theory
  - community
why_read: >-
  You will see a working, standard-library-only generator that turns compression length into a
  language-model score, with a clear explanation of why beam search is necessary.
rank: 7
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

The author builds a text generator called gzipt that uses nothing but the zlib standard library. It primes a 32 KiB DEFLATE sliding window with a corpus, then scores candidate continuations by their compressed length, where smaller means more predicted.

Because DEFLATE only returns integer byte lengths, single-byte scoring produces too many ties to rank. The fix is a beam search that extends each candidate by every byte present in the corpus, prunes back to beam_width, and commits the most compressible span. Only the recent tail of output stays in the scoring window to stop verbatim copying loops.

On tiny Shakespeare, primed with MENENIUS:, gzipt produces partly coherent dialogue with real character names and stage cue formatting. It is not fluent, but it knows the structure. The source paper tried gzip as a language model and reported poor results, and the author argues beam search is what unlocks the rest of the signal.
