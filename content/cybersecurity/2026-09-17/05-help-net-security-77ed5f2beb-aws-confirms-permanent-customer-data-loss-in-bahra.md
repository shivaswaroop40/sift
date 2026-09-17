---
id: 77ed5f2beb
title: AWS confirms permanent customer data loss in Bahrain after Iranian strikes, partial loss in UAE
original_title: Iranian strikes on AWS facilities left customer data beyond recovery in Bahrain, UAE
url: https://www.helpnetsecurity.com/2026/09/17/aws-middle-east-outage-permanent-data-loss-bahrain-uae/
source: Help Net Security
kind: news
section: incidents
date: "2026-09-17"
published_at: "2026-09-17T13:12:47.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - aws
  - data-loss
  - middle-east
  - kinetic-risk
  - disaster-recovery
  - cloud-architecture
  - news
why_read: >-
  You will see how AWS handled a kinetic event that overwhelmed its regional redundancy, and what it
  tells you about designing for worst-case physical loss.
rank: 5
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Amazon Web Services has confirmed it cannot recover customer data and resources stored exclusively in its me-south-1 (Bahrain) region, and cannot restore one of three availability zones, mec1-az2, in its me-central-1 (UAE) region, following Iranian drone strikes six months ago.

The Bahrain loss spans multiple availability zones and exceeded the redundancy design. In the UAE, two of three zones remain operational, but data hosted only in mec1-az2 is gone. AWS says most affected customers had already relocated using backups or alternative solutions before the losses became final.

The strikes began in March as retaliation for a joint US-Israeli military campaign and damaged power delivery and structures at AWS sites in both countries. A second Bahrain availability zone went offline in April, taking the whole region down. AWS expects further updates in early 2027 and has notified authorities.

Practitioners running workloads in the Middle East should treat single-region or single-AZ reliance as inadequate against kinetic events. Cross-region replication and tested off-cloud backups remain the only defences against permanent loss when physical infrastructure is destroyed.
