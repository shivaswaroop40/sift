---
id: c93c591c2d
title: Only 48.8% of randomly sampled MCP servers complete initialize handshake
original_title: What a Random Draw from the MCP Registry Contains, and What Tool-Use Benchmarks Contain Instead
url: https://arxiv.org/abs/2609.10962
source: arXiv cs.SE
kind: paper
section: ai-and-ml
date: "2026-09-11"
published_at: "2026-09-11T04:00:00.000Z"
authors:
  - Haseeb Mohammed Afsar
comments: null
tags:
  - mcp
  - model-context-protocol
  - tool-use-benchmarks
  - sampling-bias
  - server-ecosystem
  - paper
why_read: Read this to see how sampling bias inflates MCP server and benchmark quality numbers.
rank: 5
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: deepseek-v4-flash
---

Researchers drew 400 npm/stdio servers from a 24,135-server census of the Model Context Protocol registry, using a published seed, and probed each over the wire. Only 48.8% completed an initialize handshake. A hand-curated frame measured with the same instrument completed at 66.7%. The dominant failure was servers that never started at all, at 37.5%, not missing credentials, at 13.3%.

Most earlier MCP studies draw from reference sets, popularity lists, hand-curated frames, or repair pipelines, so they quietly select for servers that work. The random draw shows that curation flatters the ecosystem. The gap between curated and random completion is 17.9 points. It also flatters tool metadata. Optional safety annotation omission was 58.8% on the random draw and 41.5% on the curated frame.

Among the 195 servers that did run, hard conformance was total, with zero fatal JSON Schema violations across 2,766 advertised tools. The real variance was in optional safety annotations. Tool descriptions advertised by real MCP servers showed 2.8% near-duplication at cosine 0.70, and all of it lay within single servers. Cross-author near-duplication was 0.0% at every threshold tested.

The same method applied to two tool-use benchmark corpora shows the duplication is not inherent to synthetic data. BFCL v4 had 16.7% near-duplication, of which 16.4 points lay between independently presented tasks. UltraTool had 0.3%. Raw BFCL rows were 68.8% exact name-plus-description repeats, and raw UltraTool rows were 85.6%, against 0.4% for real MCP. Statistics over these releases without global deduplication measure repetition rather than tools.
