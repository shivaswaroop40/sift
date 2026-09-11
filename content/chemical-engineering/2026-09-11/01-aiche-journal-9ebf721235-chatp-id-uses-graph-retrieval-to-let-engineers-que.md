---
id: 9ebf721235
title: ChatP&ID uses graph retrieval to let engineers query P&IDs in natural language
original_title: "GraphRAG for engineering diagrams: ChatP&ID enables LLM interaction with P&IDs"
url: https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.70540?af=R
source: AIChE Journal
kind: paper
section: modelling-and-control
date: "2026-09-11"
published_at: "2026-09-08T08:56:41.000Z"
authors:
  - Achmad Anggawirya Alimin
  - Artur M. Schweidtmann
comments: null
tags:
  - graphrag
  - p-and-ids
  - llm
  - process-engineering
  - hazop
  - dexpi
  - paper
why_read: >-
  Get the benchmark numbers and retrieval trade-offs if you are evaluating LLM tools for P&ID data
  extraction.
rank: 1
interest_score: 8
depth_score: 7
novelty_score: 9
utility_score: 8
scored: true
model: deepseek-v4-flash
---

Researchers have built ChatP&ID, a framework that turns DEXPI-encoded P&IDs into knowledge graphs and lets large language models answer natural-language queries about them. In benchmarks, graph-based retrieval improved accuracy by 18% over raw image inputs and cut token costs by 85% compared with directly ingesting smart P&ID files.

For process engineers, this means faster extraction of line, instrument and valve information from P&IDs without manual tracing. The authors position it as groundwork for AI-assisted tasks such as HAZOP, where grounded answers matter more than fluent ones. The graph representation keeps responses tied to the original diagram data.

The best retrieval strategy, ContextRAG, reached 91% accuracy at $0.004 per query using GPT-5-mini. For smaller open-source models, vector-based retrieval improved accuracy by up to 40%. The authors describe this as, to their knowledge, the first application and benchmark of GraphRAG to structured engineering diagrams, so the results are not yet independently verified.
