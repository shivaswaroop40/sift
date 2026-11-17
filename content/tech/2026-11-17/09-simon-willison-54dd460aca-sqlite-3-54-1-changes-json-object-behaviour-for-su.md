---
id: 54dd460aca
title: SQLite 3.54.1 changes json_object behaviour for subqueries, breaking LLM's logging
original_title: llm 0.37.3
url: https://simonwillison.net/2026/Nov/16/llm/
source: Simon Willison
kind: blog
section: languages-and-tools
date: "2026-11-17"
published_at: "2026-11-16T23:57:26.000Z"
authors: []
comments: null
tags:
  - sqlite
  - json
  - llm
  - homebrew
  - bug-fix
  - simon-willison
  - blog
why_read: >-
  You get the exact query that changed behaviour and the json() workaround, which you can check
  against your own SQLite code.
rank: 9
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

LLM 0.37.3 is a bug fix release. Homebrew now ships SQLite 3.54.1, which broke LLM's logging code. The cause is a change in how json_object treats a subquery that returns json_array output.

In 3.54.0, select json_object('a', (select json_array(1))) returned {"a":[1]}. In 3.54.1 the same query returns {"a":"[1]"}, with the array now a quoted string. The fix is to wrap the subquery in json(), as in json_object('a', json((select json_array(1)))).

D. Richard Hipp says the new behaviour is correct. The documentation says a (SELECT json_array(...)) subquery returns SQL text, not JSON, so 3.54.0 was the bug. The change was deliberate.
