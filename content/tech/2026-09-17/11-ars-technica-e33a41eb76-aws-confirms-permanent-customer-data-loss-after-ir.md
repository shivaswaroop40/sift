---
id: e33a41eb76
title: AWS confirms permanent customer data loss after Iranian strikes on Gulf data centres
original_title: Iran strikes on Amazon data centers caused permanent loss of customer data
url: >-
  https://arstechnica.com/gadgets/2026/09/iran-strikes-on-amazon-data-centers-caused-permanent-loss-of-customer-data/
source: Ars Technica
kind: news
section: infrastructure
date: "2026-09-17"
published_at: "2026-09-16T16:40:11.000Z"
authors:
  - Jeremy Hsu
comments: >-
  https://arstechnica.com/gadgets/2026/09/iran-strikes-on-amazon-data-centers-caused-permanent-loss-of-customer-data/#comments
tags:
  - aws
  - cloud
  - disaster-recovery
  - multi-az
  - data-loss
  - infrastructure
  - news
why_read: >-
  A rare, concrete case study of what happens when physical destruction of a cloud region exceeds
  multi-AZ redundancy assumptions.
rank: 11
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Half a year after Iranian drone and missile strikes hit Amazon data centres in Bahrain and the UAE, AWS has acknowledged that some customer data is permanently unrecoverable. One of three availability zones in the UAE region, mec1-az2, lost data irretrievably, and all three availability zones in the Bahrain region were left unrestorable.

An AWS dashboard update on September 15 said damage "spanned multiple Availability Zones and exceeded what our regional and multi-AZ services are designed to withstand". Recovery work continues in the two remaining UAE zones, but Bahrain customers have been told to expect a further update in early 2027.

The strikes began on March 1, two days into a war that started with US-Israeli attacks on Iran. A follow-up Bahrain strike hit on April 1 and a missile strike on July 24 hit another Bahrain facility, confirmed by satellite imagery. AWS has suspended billing in both regions and issued around $150 million in customer credits after the initial attacks.

The episode is a practical test of multi-AZ resilience assumptions. For practitioners it shows that geographic separation inside one region is not a substitute for cross-region replication when physical destruction extends across an entire metropolitan area.
