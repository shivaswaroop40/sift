---
id: "9259775416"
title: Automated PFD-to-simulation tool parses flow diagrams and builds models from images
original_title: >-
  Automated process flow diagram parsing and simulation model generation via visual perception and
  topology reasoning
url: https://www.sciencedirect.com/science/article/pii/S0263876226006180?dgcid=rss_sd_all
source: Chem Eng Research and Design
kind: paper
section: modelling-and-control
date: "2026-09-17"
published_at: null
authors:
  - Yunlong Yu
  - Song Zheng
comments: null
tags:
  - process-simulation
  - computer-vision
  - process-flow-diagrams
  - digitalisation
  - modelling
  - paper
why_read: >-
  It shows how far visual parsing has come towards turning a static flowsheet image into a working
  simulation model.
rank: 10
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers describe a tool that reads a process flow diagram (PFD) image, recognises unit symbols and stream labels, and reconstructs the topology needed to drive a process simulator. The pipeline combines computer-vision detection of equipment with graph-based reasoning over how streams connect units.

For practising engineers it cuts the manual step of re-entering flowsheet information when an old PFD exists only as a scanned or CAD image. The claim is faster model regeneration for revamps and studies where the original simulation file is missing or out of date.

The paper presents the method and case studies rather than a commercial benchmark, so throughput and error rates on unfamiliar plant drawings are not quantified. Practitioners would still need to validate stream data and unit parameters before running cases.
