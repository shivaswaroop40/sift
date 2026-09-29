---
id: 07a05c8d9e
title: Cloudflare publishes BEACON, a daily-updated RUM dataset covering 10,000 sites
original_title: How fast is the web? Explore billions of real-user measurements with BEACON
url: https://blog.cloudflare.com/how-fast-is-the-web/
source: Cloudflare Blog
kind: blog
section: infrastructure
date: "2026-09-29"
published_at: "2026-09-28T14:43:05.000Z"
authors:
  - Ryan Townsend
comments: null
tags:
  - cloudflare
  - core-web-vitals
  - performance
  - bigquery
  - rum
  - spa
  - blog
why_read: >-
  See percentile-level Core Web Vitals breakdowns by browser, country, and industry, plus LCP and
  INP sub-part analysis across billions of real page views.
rank: 9
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

Cloudflare has released BEACON, an anonymised dataset built from billions of real-user performance measurements across 10,000 of the largest websites on its network. It covers every major browser engine, refreshes daily in Google BigQuery, and follows the RUM Archive schema. Metrics include all three Core Web Vitals reported as full histograms rather than single P75 averages.

The data lets practitioners examine the long tail of web performance by browser engine, country, and industry classification. WebKit on iOS performs best overall, but in 46 countries where it exceeds 10% of traffic its LCP or INP is at least 10% worse than Blink-based browsers. In Cambodia WebKit's LCP is 50% worse than Blink's despite only 17.5% share of page views.

Cloudflare argues the common assumption that large resource downloads drive slow loads is wrong. BEACON's LCP and INP sub-parts show the bigger wins come from discovering the LCP candidate earlier and unblocking its render, plus cutting main-thread processing time for slow interactions.

For single-page apps using Soft Navigations, subsequent loads render two to three times faster than hard navigations at every percentile, yet the landing page LCP hits 5.4 seconds at P90 and 8.9 seconds at P95. Teams adopting this pattern must weigh faster later navigations against a heavier first paint.
