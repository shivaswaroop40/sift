---
id: 59170a89cd
title: One packet can crash TDengine OT servers across industrial sectors
original_title: One Packet Can Crash OT Servers in Industrial Sectors
url: https://www.darkreading.com/ics-ot-security/one-packet-crash-servers-tdengine
source: Dark Reading
kind: news
section: vulnerabilities
date: "2026-09-29"
published_at: "2026-09-28T21:13:04.000Z"
authors:
  - Jai Vijayan
comments: null
tags:
  - tdengine
  - ot-security
  - denial-of-service
  - zero-day
  - ics
  - time-series-database
  - news
why_read: >-
  You will learn how a single packet can take down OT-facing TDengine servers and where to look
  first in your environment.
rank: 12
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A high-severity zero-day vulnerability in the TDengine time-series database lets a single crafted packet crash servers used in industrial, IoT, energy and automotive environments. The flaw was disclosed publicly without prior vendor coordination, leaving operators exposed at disclosure.

For defenders of OT and edge environments, this matters because TDengine often sits on or near operational networks collecting telemetry from PLCs, sensors and vehicles. An unauthenticated remote crash requires only network reachability, not credentials, raising the risk of disruption to monitoring and control pipelines.

Details on the exact protocol path and patched versions are thin in the public report. Practitioners should check whether their TDengine deployments have been updated and whether network segregation is sufficient to block unauthenticated traffic from less trusted zones.
