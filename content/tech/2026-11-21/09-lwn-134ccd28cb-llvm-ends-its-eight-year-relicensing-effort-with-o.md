---
id: 134ccd28cb
title: LLVM ends its eight-year relicensing effort with over 99.5% of code covered
original_title: "Beyls: Wrapping up LLVM's relicensing effort"
url: https://lwn.net/Articles/1108818/
source: LWN
kind: news
section: industry
date: "2026-11-21"
published_at: "2026-11-20T14:35:24.000Z"
authors:
  - jzb
comments: null
tags:
  - llvm
  - licensing
  - apache-2-0
  - open-source
  - compilers
  - news
why_read: >-
  The post is short and gives the project's own account of how it closed out a long, slow licence
  migration and what happens to the remainder.
rank: 9
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Kristof Beyls has announced on the LLVM discussion forum that the project is closing its relicensing effort after eight years. Contributors have been asked to relicense past work since 2018. New contributions have used Apache-2.0 WITH LLVM-exception since 19 January 2019.

Code from before that date was under older licences, namely UIUC/NCSA, plus MIT for some runtime libraries. Authors had to give permission for it to move. Beyls says more than 99.5% of all lines ever contributed are now under the new licence, too small for copyright to apply, or no longer in the repository.

The project will not "chase the last tiny fraction forever". Contributors of pre-2019 code who have not signed an agreement, and do not want the code under Apache-2.0 with the LLVM-exception, can contact the project. LLVM will then make sure their code carries the right SPDX licence identifier.
