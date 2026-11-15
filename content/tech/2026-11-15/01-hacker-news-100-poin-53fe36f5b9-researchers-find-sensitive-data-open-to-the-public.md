---
id: 53fe36f5b9
title: Researchers find sensitive data open to the public in Lovable apps using Supabase
original_title: Lovable apps expose passport details and more than 200K private messages
url: https://www.crissyfield.de/research/lovable-en/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-15"
published_at: "2026-11-14T17:43:10.000Z"
authors:
  - armcat
comments: https://news.ycombinator.com/item?id=50499017
tags:
  - lovable
  - supabase
  - access-control
  - data-exposure
  - ai-coding
  - security-research
  - community
why_read: >-
  The original sets out the sampling method and its stated limits, which helps you judge the 30%
  figure and the access-control pattern behind it.
rank: 1
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Crissyfield, working with Handelsblatt, examined 159,041 Lovable projects found through Common Crawl. Of these, 34,545 used Supabase. A total of 24,664 sites sent database records on page load without a login. Further read-only requests with the same API key returned email addresses in 10,560 tables across 7,403 of those sites, about 30%.

The exposed data included more than 80,000 forum profiles with over 200,000 chat messages, ticket and food sales records with payment information, and over 1,000 records with passport numbers. Other finds were contracts, invoices, photo albums, internal WhatsApp communications and 280,000 customer emails. The researchers did not publish access details.

The 30% figure is not a confirmed leak rate. Email addresses can mark public contact data or test records, and the method misses personal records without emails. The sample comes from Common Crawl and is not representative. Only parts of datasets were retrieved, and the researchers could not say whether anyone misused the data.

The report argues that Lovable's recurring database integration patterns let an attacker reuse one approach across many apps. Lovable's terms put responsibility for data handling on customers, while its marketing stresses that no technical knowledge is needed. The researchers say access permissions need expert review before an app handles real data.
