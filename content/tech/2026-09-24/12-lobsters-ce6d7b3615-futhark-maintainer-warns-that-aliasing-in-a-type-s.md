---
id: ce6d7b3615
title: Futhark maintainer warns that aliasing in a type system is a tar pit
original_title: Do not let your type system reason about aliasing in your programming language
url: https://futhark-lang.org/blog/2026-09-22-aliasing.html
source: Lobsters
kind: community
section: languages-and-tools
date: "2026-09-24"
published_at: "2026-09-23T14:07:23.000Z"
authors:
  - futhark-lang.org via fanf
  - futhark-lang.org via fanf
comments: https://lobste.rs/s/huj44r/do_not_let_your_type_system_reason_about
tags:
  - futhark
  - type-systems
  - language-design
  - aliasing
  - compilers
  - community
why_read: >-
  It is a frank post-mortem on why a type-level aliasing feature turned out to be much harder than
  expected.
rank: 12
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

The Futhark language's in-place update feature requires the type checker to track object identity, so that any variable aliased with a consumed value is itself consumed. The author set out to fix what had been labelled an easy bug, and found that the fix forces a rethink of long-standing design choices.

The post matters to anyone designing a language with destructive updates, or maintaining one that uses alias sets, linear types, or uniqueness annotations. It shows how a single seemingly small rule breaks when it meets other features, and how the resulting complexity can leak into the parts of the language that do not need in-place updates.

In Futhark the trade-off is between soundness and local checking, since whole-program analysis is off the table. Consuming parameters use one asterisk, fresh results use another, and the two meanings share notation for historical reasons. The author's conclusion is that unless a language truly needs this, the complexity is not worth carrying.
