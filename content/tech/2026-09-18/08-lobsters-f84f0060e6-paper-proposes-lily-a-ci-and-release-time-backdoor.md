---
id: f84f0060e6
title: Paper proposes Lily, a CI and release-time backdoor detector for open source projects
original_title: "Not In My Git Yard: Catching Backdoors at Commit and Release Time"
url: https://arxiv.org/abs/2607.26719
source: Lobsters
kind: community
section: security
date: "2026-09-18"
published_at: "2026-09-18T08:14:44.000Z"
authors:
  - arxiv.org via 7tehdt3cnw6kir6o
  - arxiv.org via 7tehdt3cnw6kir6o
comments: https://lobste.rs/s/tvrnbv/not_my_git_yard_catching_backdoors_at
tags:
  - security
  - supply-chain
  - ci
  - fuzzing
  - open-source
  - community
why_read: >-
  It offers a concrete proposal for plugging a known gap in open-source supply-chain security, with
  claimed results and stated evasion limits.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

Researchers from LSL and IP Paris have proposed Lily, a tool that scans commits in CI pipelines and vets release packages for hidden code-level backdoors, those stealthy changes that grant attackers access via secret triggers. The work is accepted at ASE 2026 in Munich.

The paper argues existing CI cannot catch malicious commits and current binary analysis requires too much manual work. Lily combines CI-friendly fuzzing with execution-history analysis to detect trigger conditions, then ties results to code changes so maintainers see the suspect region even when a release touches millions of lines.

The authors also list five evasion strategies attackers might try and claim defences against them. Experiments across hundreds of benign and backdoored commits and releases report high detection accuracy and low false alarms, with the authors stating Lily would have caught real-world incidents. The paper itself does not publish those numbers.

The claim that prior backdoor attempts were stopped only by luck is repeated across the abstract but is not quantified. Evaluation details, false-positive rate and the list of real incidents caught are in the PDF, not the abstract.
