---
id: 469f15fa83
title: Google Search rewrites organic result links to opaque google.com/goto redirects
original_title: "google.com/goto: Google's anti-scraping update"
url: https://www.autom.dev/blog/google-search-goto-links
source: Hacker News (100+ points)
kind: community
section: systems
date: "2026-09-12"
published_at: "2026-09-12T03:14:20.000Z"
authors:
  - 1e1a
comments: https://news.ycombinator.com/item?id=49668386
tags:
  - google-search
  - serp-scraping
  - anti-scraping
  - redirects
  - web-scraping
  - community
why_read: Learn how Google's goto redirects work and why they raise the cost of SERP scraping.
rank: 9
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: deepseek-v4-flash
---

Google Search has started rewriting organic result links to google.com/goto?url=... rather than exposing the destination URL in the HTML. The url parameter is an opaque reference to Google's index record, not a plain base64 encoding. As of late August 2026, the change is consistent across searches for logged-out and private sessions. The older google.com/url?q= wrapper exposed the destination in the query string; the new format does not.

For anyone building a search index from SERP data, this raises the cost of scraping. Each result now needs a request back to Google just to learn the destination, because the real URL is in the Location header on /goto. Resolving many links in sequence gives Google a clear signal. The change fits Google's broader push against automated SERP harvesting, particularly from AI crawlers and SEO scrapers.

Google still needs the destination to draw the SERP, so copies of the URL remain on the page. That is separate from reading Location. The change may still be an experiment, but it is no longer limited to a small slice of SERPs. Autom, the source of this report, has updated its pipeline to resolve goto links and return final URLs in API responses.
