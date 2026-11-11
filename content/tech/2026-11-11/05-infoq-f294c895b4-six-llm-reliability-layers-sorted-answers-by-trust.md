---
id: f294c895b4
title: Six LLM reliability layers sorted answers by trust but corrected almost none
original_title: "Article: LLM Reliability Layers Under Test: Accuracy, Yield, and the Limits of Verification"
url: >-
  https://www.infoq.com/articles/llm-reliability-layers-limits-accuracy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-11-11"
published_at: "2026-11-10T09:00:00.000Z"
authors:
  - Pushpdeep Mishra
  - Wejdan Bagais
comments: null
tags:
  - llm
  - reliability
  - verification
  - evaluation
  - snomed
  - retrieval
  - news
why_read: >-
  You get measured evidence on where verification layers stop helping, plus a concrete design rule:
  have the model name things and let a deterministic retriever supply the identifiers.
rank: 5
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Authors from InfoQ's architect programme tested six checks around an open-weight model extracting adverse drug reactions from 1,250 CADEC forum posts. The checks were deterministic validation, retry, voting, a second model as judge, withholding, and human review. The model was right about one answer in three and reported full confidence on two-thirds. Stacking layers did not raise accuracy additively.

The layers ranked answers by how far to trust them but fixed very few. Deterministic code can prove an answer wrong, such as a nonexistent code or a span absent from the post. It cannot prove one right, so plausible wrong answers still need a model or a person. The authors argue for measuring yield, right answers over all records, rather than accuracy alone.

Letting the model recall SNOMED codes from memory was broken. It returned null on up to 38 percent of records, and 13 to 18 percent of the codes it gave exist in no release. Naming the concept and picking from a retrieved menu of 20 candidates scored eight to twelve times better. Detection sets a ceiling, since no layer recovers a mention the extractor missed.

Caveats are stated. The judge model is small, and CADEC is probably in the training data. Gold labels are not the only valid answer. Temperature zero gave identical output in four of five model families, but one run of the extractor still differed by four F1 points, with only 70 percent of mentions agreeing across three runs. The held-out split was 60 documents, run once.
