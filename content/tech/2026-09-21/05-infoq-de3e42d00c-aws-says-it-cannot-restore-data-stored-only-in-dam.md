---
id: de3e42d00c
title: AWS says it cannot restore data stored only in damaged Middle East availability zones
original_title: AWS Cannot Restore Data Held Only in Damaged Middle East Availability Zones
url: >-
  https://www.infoq.com/news/2026/09/aws-middle-east-data-loss/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-21"
published_at: "2026-09-21T08:43:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - aws
  - outage
  - multi-az
  - data-residency
  - disaster-recovery
  - middle-east
  - news
why_read: >-
  It shows the gap between multi-AZ guarantees and regional loss, and the residency constraints that
  block the usual fix.
rank: 5
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

Amazon Web Services has told customers that data held only in parts of its Middle East regions damaged during the Iran conflict is unrecoverable. In the me-central-1 UAE region, AWS cannot restore resources in availability zone mec1-az2, while mec1-az1 and mec1-az3 remain under recovery. In me-south-1 Bahrain, damage spanned multiple zones and exceeded what regional and multi-AZ services were designed to absorb, so data stored only in that region is also lost.

For practitioners running multi-AZ architectures this matters because the failure mode AWS designs for, including power loss, tornadoes and lightning, shares roughly the same geographic envelope as multi-AZ. A single coordinated attacker that reaches several facilities in one night defeats that envelope, and S3 durability and three-AZ replication are regional properties, not protection against regional loss.

There is a harder constraint underneath the outage. AWS's wording covers data hosted exclusively in the affected zones or region, which is the same shape as data residency obligations that forbid copies leaving the jurisdiction. Encrypted backups sent abroad do not help if the keys must also leave to be useful after a regional loss, and a T-Systems architect warned in March that crisis migrations can push regulated data across borders while restoring service.

The practical test for any team is whether anything currently sits in one region with no copy elsewhere, and whether the law permits a copy to leave. AWS says it will replace infrastructure and give a further Bahrain update in early 2027. The Bahrain region opened in 2019 and the UAE region in 2022.
