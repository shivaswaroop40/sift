---
id: 7c21268c0f
title: "Firefox prefetches rel=next link headers, prompting Datasette issue #3046 to drop them"
original_title: "datasette #3046: Don't serve link: rel=next HTTP headers to Firefox for HTML pages"
url: https://simonwillison.net/2026/Nov/7/link-rel-next/
source: Simon Willison
kind: blog
section: languages-and-tools
date: "2026-11-08"
published_at: "2026-11-07T23:57:46.000Z"
authors: []
comments: null
tags:
  - firefox
  - prefetching
  - http-headers
  - datasette
  - pagination
  - blog
why_read: >-
  The original shows the header that triggers the prefetch and links to the Firefox issue, open for
  24 years.
rank: 8
interest_score: 6
depth_score: 6
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

Simon Willison was watching Firefox's network panel and noticed that requests to a Datasette table page triggered an HTTP prefetch of the next page of rows. The cause was an HTTP link header, marked rel="next", that Datasette serves on those pages. He has opened Datasette issue #3046, which proposes not serving that header to Firefox for HTML pages.

The waste is concrete. Only a tiny fraction of visitors click the next link, so most prefetches pull data nobody asked for and make the server render an entire page that is then thrown away. Any site serving paginated HTML with rel=next link headers generates this speculative load from every Firefox visitor.

The browser side is unlikely to move. The Firefox issue covering this behaviour has been open for 24 years, and an early comment on it links to a blog post Willison wrote in 2002 complaining about the same feature. He had forgotten both the post and the feature.
