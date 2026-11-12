---
id: 24372cb02d
title: A dust-triggered smoke alarm shut off cooling in Jane Street's New York datacentre
original_title: A false smoke alarm almost drowned Jane Street's only NYC datacenter
url: https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-11-12"
published_at: "2026-11-11T16:38:44.000Z"
authors:
  - mbac32768
comments: https://news.ycombinator.com/item?id=50455394
tags:
  - datacenter
  - incident
  - jane-street
  - cooling
  - war-story
  - fire-suppression
  - community
why_read: >-
  You get a clear account of how fire-safety interlocks can create an outage, told as a first-hand
  war story, though it is anecdotal and the ending is cut off.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

A systems engineer at Jane Street recounts an evening when contractors working next to the firm's New York datacentre kicked up dust and set off the smoke alarm. The alarm was wired to shut down the room's CRAC cooling units. It also pressurised the overhead sprinkler pipes, which are normally dry.

The sprinklers only spray when each head's heat-sensitive plug opens. With cooling off, the room would heat up until they did. The author ran to the office from his flat, entered a room that felt like a sauna, and pulled the power cord on every device. The temperature peaked at 143.6 F, below the 150 F he feared.

Markets were closed, so downtime was minimal. The datacentre sat beside the trading floor partly so staff could pull power cables by hand, a habit the author links to a partner's nuclear submarine background.
