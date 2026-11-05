---
id: fc87c55535
title: PEP 723 lets Python scripts declare their own dependencies, but official support lags
original_title: "[$] Portable Python scripts with dependencies"
url: https://lwn.net/Articles/1104646/
source: LWN
kind: news
section: languages-and-tools
date: "2026-11-05"
published_at: "2026-11-04T14:45:02.000Z"
authors:
  - jake
comments: null
tags:
  - python
  - pep-723
  - packaging
  - dependencies
  - portability
  - news
why_read: >-
  You get LWN's account of how PEP 723 metadata works, the tools that support it, and where official
  support falls short.
rank: 12
interest_score: 6.7
depth_score: 7
novelty_score: 6
utility_score: 7
scored: true
model: glm-5.3
---

A bare Python script copies between machines with little concern for compatibility. A script that imports third-party packages does not. PEP 723, accepted in 2023, defines a standard for declaring a script's dependencies inside the script itself. Several third-party tools can now read that metadata and install the packages automatically. Official support for the approach remains minimal.

This matters for engineers who distribute small utilities or automation scripts. A single file that declares its own dependencies can run on a fresh machine without a separate requirements file or project scaffold. The catch is that official support is thin. The workflow depends on third-party tools, and the interpreter itself offers little help.
