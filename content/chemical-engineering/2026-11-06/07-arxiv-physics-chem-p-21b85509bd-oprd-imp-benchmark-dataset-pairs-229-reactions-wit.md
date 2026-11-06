---
id: 21b85509bd
title: OPRD-Imp benchmark dataset pairs 229 reactions with 784 observed impurities
original_title: >-
  OPRD-Imp: a dataset of experimentally observed impurities and side products in multi-step
  pharmaceutical syntheses
url: https://arxiv.org/abs/2611.07488
source: arXiv physics.chem-ph
kind: paper
section: papers
date: "2026-11-06"
published_at: "2026-11-06T05:00:00.000Z"
authors:
  - Heejeong Kim
  - Seonbin Kim
  - Jihwan Kim
  - Tim Pinkhassik
  - Magdalena Lederbauer
  - Suong Tran
comments: null
tags:
  - impurities
  - dataset
  - machine-learning
  - process-chemistry
  - pharmaceuticals
  - paper
why_read: >-
  The original sets out the extraction and validation protocol, the four impurity origin categories
  and the intended use as a benchmark for impurity prediction models.
rank: 7
interest_score: 5.7
depth_score: 5
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

The authors have released OPRD-Imp, a curated dataset of 229 organic reactions taken from 62 papers in Organic Process Research & Development. It holds 784 impurity entries, each annotated with the experimentally observed impurity and its mechanistic origin, sorted into four origin categories. Reactions are encoded as reaction SMILES and impurities as individual SMILES, with connectivity across multi-step routes preserved. Trained chemists extracted the data manually under a standardised protocol, with expert validation and manually drawn structures.

Impurity prediction matters on plant and in development. Impurity profiles set purge arguments, purification loads and analytical control strategies, yet benchmarking machine learning models on impurities has been impractical because no curated, publicly accessible dataset existed. OPRD-Imp fills that gap with experimentally reported impurities and mechanistic origin labels, which conventional reaction datasets do not carry systematically.

The scale is modest. With 229 reactions and 784 entries, the resource is positioned as an evaluation benchmark rather than a training corpus, so it serves to test models rather than to build them. The claims here come from the abstract of a newly announced preprint.
