---
id: f690c9419e
title: Telstra's mobile network failed because a GPS receiver thought it was 2006
original_title: "Telstra outage: The night a network decided the year was 2006"
url: https://www.netnod.se/blog/telstra-outage-night-network-decided-year-was-2006
source: Lobsters
kind: community
section: infrastructure
date: "2026-09-18"
published_at: "2026-09-18T00:27:43.000Z"
authors:
  - netnod.se via fanf
  - netnod.se via fanf
comments: https://lobste.rs/s/3qdik0/telstra_outage_night_network_decided
tags:
  - ntp
  - time-sync
  - 5g
  - telstra
  - incident
  - gps
  - community
why_read: >-
  You will get a practitioner's walkthrough of how one bad clock cascaded through a national mobile
  network and the NTP design choices that let it happen.
rank: 9
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

On 8 July 2026, a GPS receiver in a single Melbourne chassis came back from maintenance believing the year was 2006. Telstra's mobile voice, SMS, emergency calling, trains, payment terminals, ticketing systems and EV chargers were disrupted. The post walks through the independent TAP report into how one bad time source cascaded through the network.

Time matters here because modern 5G is mostly TDD, where every cell on the same frequency must switch between transmit and receive in lockstep. A cell whose clock drifts transmits into its neighbour's receive window and the network starts jamming itself. The dependency on agreed time is a design choice, not a law of physics, and it concentrates risk in whatever feeds the clocks.

Telstra's 2010 design pulled time from Australia's NMI into two stratum 2 servers feeding three stratum 3 servers and then thousands of mobile nodes. The TAP report called this fit for purpose. NTP has two defences against bad sources: preferring lower stratum, and voting out servers whose time disagrees with the rest. Both only work if the sources are genuinely independent.

The post warns that Telstra later moved to a symmetric NTP peering topology where nodes mutually exchange time. Peering is resilient to losing a source but means the live topology emerges rather than being documented, so it can quietly rearrange into a shape no one approved. That is a single point of management more than a single point of failure.
