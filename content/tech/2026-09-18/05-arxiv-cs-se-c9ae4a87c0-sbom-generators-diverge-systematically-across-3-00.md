---
id: c9ae4a87c0
title: SBOM generators diverge systematically across 3,000 projects, study finds
original_title: >-
  Mind the Gap: How SBOM Specification Ambiguities Lead to Divergent Software Bills of Materials. An
  Empirical Tool Study
url: https://arxiv.org/abs/2609.19920
source: arXiv cs.SE
kind: paper
section: security
date: "2026-09-18"
published_at: "2026-09-18T04:00:00.000Z"
authors:
  - Alan Prado (DiverSe)
  - Olivier Zendra (DiverSe)
  - Philippe Boinot (ANSSI)
  - Olivier Barais (DiverSe)
comments: null
tags:
  - sbom
  - supply-chain
  - spdx
  - cyclonedx
  - compliance
  - javascript
  - paper
why_read: >-
  It shows whether the SBOM your build pipeline emits would actually pass a regulator's check, and
  which specification gaps put you at risk.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Researchers ran three widely used SBOM generators against more than 3,000 JavaScript and Rust projects, comparing their output against dependency lockfiles as a ground truth. The tools diverged in both dependency coverage and SBOM completeness across the corpus.

Most of the gaps were systematic rather than accidental, driven by different assumptions about dependency scope, naming, provenance, and representation. Some stemmed from inconsistent support for fields defined in the SBOM specifications themselves, such as SPDX and CycloneDX.

The authors argue these discrepancies cannot be fixed by tuning individual generators. The paper calls for canonical rules in future SBOM standards covering dependency scope, provenance, and representation, since the tool choice itself can drive whether a generated SBOM actually meets a compliance regime.

The CRA makes SBOMs a legal requirement from December 2027, which turns tool selection into a compliance risk rather than a hygiene choice.
