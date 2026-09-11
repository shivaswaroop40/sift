---
id: b9cd7abc28
title: IETF publishes RFC 10008, adding QUERY method for safe HTTP requests with a body
original_title: IETF Publishes RFC 10008, Adding the QUERY Method for Safe Requests With a Body
url: >-
  https://www.infoq.com/news/2026/09/http-query-method/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-11"
published_at: "2026-09-10T06:27:00.000Z"
authors:
  - Daniel Curtis
comments: null
tags:
  - http
  - ietf
  - rfc-10008
  - query-method
  - web-development
  - api
  - news
why_read: Get the rationale, examples and adoption caveats for HTTP's first new method since PATCH.
rank: 7
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: deepseek-v4-flash
---

The IETF has published RFC 10008, defining the QUERY method for HTTP. It is the first new standard request method since PATCH in 2010. The RFC was authored by Julian Reschke, James Snell and Mike Bishop, following a discussion reopened at the 2019 HTTP Workshop.

QUERY lets clients send a request body while keeping GET's safety, idempotency and cacheability. A GET has to put filters in the URL, where they hit length limits, leak into logs and struggle with nested structures. A POST can carry a body but is not safe or idempotent, so caches skip it and clients cannot safely retry it. QUERY is the missing third option.

Responses stay cacheable as long as the cache key incorporates the request content, and servers can advertise support with the Accept-Query field. GraphQL and Elasticsearch already tunnel complex reads through POST bodies; QUERY offers a standards-based alternative. Tooling support has been merged into the Rust http crate and is tracked across .NET, Axum, Quarkus and Bruno.

The specification treats QUERY as additive, not a replacement for GET or POST. The draft history shows a long path from earlier work on a safe method with a body, and real adoption will likely be measured in years, as with PATCH.
