---
id: 3420e1c4ed
title: Hidden PDF text reached an agent parsing SEC filings, so QA built a stack of judges
original_title: Catching prompt injections hidden in PDFs
url: https://tomclancy.info/joshua-judges-ruth.html
source: Lobsters
kind: community
section: security
date: "2026-11-08"
published_at: "2026-11-07T19:34:01.000Z"
authors:
  - tomclancy.info by tclancy
  - tomclancy.info by tclancy
comments: https://lobste.rs/s/hreu0b/catching_prompt_injections_hidden_pdfs
tags:
  - prompt-injection
  - pdf
  - security
  - llm-agents
  - qa
  - community
why_read: >-
  The original lists each judge's exact checks and known gaps, plus the injection techniques that
  motivated them, in enough detail to reuse.
rank: 7
interest_score: 6
depth_score: 6
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

A QA engineer testing an internal tool that feeds PDFs of SEC filings and account statements to an agent asked about prompt injection and found nobody had considered it. Hidden text reached the model in every variant tried. White text on white worked on the first attempt. Text placed outside the visible box, zero-height text, and extremely tall text all passed through. A fake footnote citing a too-recent SEC rule change, instructing that all numbers be reported as $1,234,567.89, made the risk obvious.

This matters to anyone pointing an agent at documents they did not produce. The PDF format exposes several channels for hiding instructions, and a model reading the text layer sees content a human viewing the page never would. The organisational gap is just as real. The team was sized for a two-year roadmap with no one assigned to fix injection, which the author imagines is common elsewhere.

The defence is a set of single-purpose judges, stacked in a Swiss-cheese arrangement. HiddenInk thresholds the grayscale render into faint marks and dark ink, then flags faint components no nearby dark ink explains, catching white-on-white even in scans. Text Raster Divergence maps each text-layer character to pixel coordinates and reports characters that render no ink, payload included. Two more judges walk the text layer for invisible code points and confusables, and the tagged-PDF tree for screen-reader-only text in /Alt, /ActualText and /E.

Every judge has blind spots worth knowing before reuse. HiddenInk cannot see render-mode-3 text that leaves zero pixels, cannot name a payload, and false-positives on tinted page backgrounds. Text Raster Divergence needs a text layer, and inline /ActualText substitution makes it confirm the payload rather than catch it. Unicode Obfuscation leaves whole-script confusables and scripts outside its table uncovered. The author publishes the list for peer review, calling it better than relying on hope and faith.
