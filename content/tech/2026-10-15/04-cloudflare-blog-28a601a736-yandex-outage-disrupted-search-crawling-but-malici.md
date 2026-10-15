---
id: 28a601a736
title: Yandex outage disrupted search crawling but malicious bots simply moved elsewhere
original_title: "Yandex outage: Data shows that instead of going dark, malicious bots went on the move"
url: https://blog.cloudflare.com/yandex-outage/
source: Cloudflare Blog
kind: blog
section: infrastructure
date: "2026-10-15"
published_at: "2026-10-14T20:24:19.000Z"
authors:
  - Marina Elmore
comments: null
tags:
  - infrastructure
  - measurement
  - bot-traffic
  - distributed-systems
  - blog
why_read: >-
  Learn why traffic collapse at one provider tells you less than you think about actual bot
  activity.
rank: 4
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Ukrainian drone strikes in October knocked Yandex's networks offline by 85 to 90 percent. However, aggregate traffic drops masked a key distinction: Yandex Search traffic fell because legitimate crawlers went down, whilst Yandex.Cloud bot traffic migrated to other hosting providers rather than disappearing.

For platform operators, this matters because it shows that infrastructure damage targeting specific providers does not eliminate distributed malicious activity. Attackers shifted operations to other ASNs. Overall global bot traffic barely changed during the outage, despite a 40 percent drop from Yandex.Cloud alone.

WordPress plugin scanning fell 90 percent and scanner-identified requests fell 93 percent from Yandex.Cloud, but this reflected migration rather than cessation. The data suggests that looking at aggregate metrics from a single provider can create a false sense of disruption to actual threat activity.
