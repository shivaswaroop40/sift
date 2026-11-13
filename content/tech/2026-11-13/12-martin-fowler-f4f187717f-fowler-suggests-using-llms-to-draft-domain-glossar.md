---
id: f4f187717f
title: Fowler suggests using LLMs to draft domain glossaries that other agents then consult
original_title: "Bliki: Generated Glossary"
url: https://martinfowler.com/bliki/GeneratedGlossary.html
source: Martin Fowler
kind: blog
section: ai-and-ml
date: "2026-11-13"
published_at: "2026-11-12T14:15:00.000Z"
authors:
  - Martin Fowler
comments: null
tags:
  - llm
  - documentation
  - domain-driven-design
  - agentic-engineering
  - glossary
  - context
  - blog
why_read: >-
  You get a short, practical recipe for building and maintaining a glossary for agents, including
  the bounded-context argument against a single enterprise-wide vocabulary.
rank: 12
interest_score: 6.3
depth_score: 6
novelty_score: 6
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Martin Fowler describes a technique for making LLMs work better in specialised domains. An LLM reads internal material such as documents, emails and chat logs. It extracts terms that are new to it, and known words used in unfamiliar ways. It then drafts a dictionary-style glossary, with alternative definitions where usage varies by context.

Human domain experts review the draft. The glossary is then stored where other LLMs can read it cheaply, kept in version control, and refreshed on a schedule by agents and humans. For large glossaries, he suggests loading only terms and links first, so the model fetches full definitions as needed.

He ties this to Domain Driven Design bounded contexts and advises against a single standard glossary, saying he has not seen one work. Separate glossaries per context let models compare usage. Source code can be one such context. Entries can also list deprecated terms and their replacements.

Fowler says the idea comes from conversations with practitioners, not from measurement. He gives no evidence on how much accuracy improves. It is a practice note, not a study.
