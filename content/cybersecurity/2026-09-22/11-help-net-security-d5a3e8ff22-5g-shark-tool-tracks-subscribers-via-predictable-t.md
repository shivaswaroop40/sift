---
id: d5a3e8ff22
title: 5G-Shark tool tracks subscribers via predictable temporary IDs on live networks
original_title: A cheap fake base station can still track 5G subscribers
url: https://www.helpnetsecurity.com/2026/09/22/5g-subscriber-tracking-research/
source: Help Net Security
kind: news
section: papers
date: "2026-09-22"
published_at: "2026-09-22T06:30:21.000Z"
authors:
  - Anamarija Pogorelec
comments: null
tags:
  - 5g
  - mobile-security
  - tracking
  - privacy
  - research
  - sdr
  - news
why_read: >-
  You will see how a low-cost fake base station still tracks 5G subscribers on live networks and
  which operator choices break the chain.
rank: 11
interest_score: 7.3
depth_score: 8
novelty_score: 8
utility_score: 6
scored: true
model: minimax-m3
---

Researchers from the i2CAT Foundation, the University of Murcia, and NEC Laboratories Europe built 5G-Shark, a low-cost tool that impersonates a base station and queries nearby idle phones. It runs on open-source software and inexpensive software-defined radio hardware, needs no jamming, and stays invisible to the user.

On the networks measured, IMSI caving was mostly fixed, but temporary IDs followed predictable patterns. Across 3,742 identifiers, successive reassignments on two networks advanced by at most 0.11 percent of the range, allowing 84 to 96 percent of consecutive registrations to be linked. One operator randomised IDs at around 29 percent, collapsing the link.

The tool also caused a Samsung Galaxy S23 to drop to limited-service 3G via a crafted Registration Reject, enter infinite retry loops, or freeze the modem. The behaviours appeared on both standalone-5G operators, pointing at modem firmware rather than operator policy.

The work is a preprint, not peer reviewed, tested only the team's own phones on three networks, and requires proximity to an idle target across seven device models.
