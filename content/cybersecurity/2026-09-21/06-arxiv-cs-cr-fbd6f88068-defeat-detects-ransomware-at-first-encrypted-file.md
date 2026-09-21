---
id: fbd6f88068
title: DEFEAT detects ransomware at first encrypted file by stitching fragmented file operations
original_title: "DEFEAT: Stitching Fragmented File I/O Contexts for Early Ransomware Detection"
url: https://arxiv.org/abs/2609.21426
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-09-21"
published_at: "2026-09-21T04:00:00.000Z"
authors:
  - Muhammad Ejaz Ahmed
  - Hyoungshick Kim
  - Mohsen Ali Alawami
  - Alsharif Abuadbba
  - Seyit Camtepe
  - Surya Nepal
comments: null
tags:
  - ransomware
  - detection
  - file-io
  - graph-neural-networks
  - behavioural-analysis
  - paper
why_read: >-
  You will see a concrete technique for catching ransomware during the first file it encrypts,
  without full-system provenance overhead.
rank: 6
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

The paper proposes DEFEAT, a framework that reconstructs the scattered file operations used by modern ransomware into File Event Gadgets, which are semantically coherent units spanning multiple dynamically created files tied to a single user asset. Each gadget is modelled as an attributed control flow graph and embedded with a graph neural network for unsupervised clustering.

Unlike provenance graphs, the approach avoids whole-system instrumentation and is scoped to one file-operation context, so a cluster label can be assigned as soon as the first encrypted file completes. On a corpus of 97,816,471 file I/O events across 67 ransomware families the authors report 99.2% detection accuracy and 6.57 to 7.56% improvement over UNVEIL, RWGuard and Peeler.

Clustering also cuts analyst annotation effort by 94% because labels apply to whole behavioural clusters rather than individual samples. The claim is from a single paper's evaluation and has not been independently replicated.
