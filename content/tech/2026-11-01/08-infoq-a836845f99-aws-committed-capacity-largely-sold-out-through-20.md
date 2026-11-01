---
id: a836845f99
title: AWS committed capacity largely sold out through 2027, Jassy says
original_title: AWS Capacity Largely Sold Out Through 2027, With On Demand Headroom Reserved
url: >-
  https://www.infoq.com/news/2026/11/aws-capacity-sold-out/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: industry
date: "2026-11-01"
published_at: "2026-11-01T08:03:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - aws
  - capacity
  - ec2
  - reservations
  - cloud
  - capex
  - news
why_read: >-
  You get Jassy's exact claims, the gap between reserved blocks and daily allocation, and
  practitioner reports of current EC2 shortages.
rank: 8
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Amazon CEO Andy Jassy said AWS's large committed capacity is largely sold out through 2027, with a good chunk of 2028 already allocated and 2026 gone entirely. He made the remarks in a podcast with Andreessen Horowitz's Ben Horowitz and Erik Torenberg, reported by Reuters on October 23. AWS still reserves headroom for On Demand, EC2 and Bedrock. Jassy added Amazon could invest well beyond the roughly $220 billion in capital expenditure planned for this year.

The claim covers pre-reserved blocks, sold as On-Demand Capacity Reservations and Capacity Blocks for ML, not what a customer can allocate in the console today. Analyst David Linthicum argued the reporting overstated the position for that reason. Practitioners still report constraints. A widely upvoted Reddit comment describes a month of shortages on ordinary EC2 on-demand instances, hitting CI and constraining production Kubernetes clusters on some days. Others report trouble getting compute from all three major providers, not only GPUs.

The $220 billion figure is total capital expenditure, not AI spending alone. AWS raised Capacity Blocks for ML rates by about 15% across every region in January, covering P5en, P5e, P5 and P4d GPU instances plus Trn2 and Trn1. Amazon reports third-quarter results on October 29, where its remaining performance obligations disclosure will show how much of the committed capacity is contracted revenue.

The shortage response carries its own cost. Ian Rae, replying to Linthicum, warned that reserving resources you worry you might need is an anti-cloud pattern. AWS already ships EC2 Capacity Manager, which aggregates capacity across accounts and regions and reports the ratio of used to unused reserved capacity as a measure of reservation efficiency.
