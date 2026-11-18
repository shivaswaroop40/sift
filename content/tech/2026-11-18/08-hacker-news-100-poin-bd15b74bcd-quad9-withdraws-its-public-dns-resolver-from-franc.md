---
id: bd15b74bcd
title: Quad9 withdraws its public DNS resolver from France after court blocking order and daily penalties
original_title: "Quad9's withdrawal from France: A canary in the coal mine"
url: https://blog.cloudflare.com/quad9-withdrawal-from-france/
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-11-18"
published_at: "2026-11-17T22:13:34.000Z"
authors:
  - subset
comments: https://news.ycombinator.com/item?id=50538994
tags:
  - dns
  - quad9
  - france
  - censorship
  - cloudflare
  - public-resolvers
  - community
why_read: >-
  You get Cloudflare's argument against resolver-level blocking and a list of precedents, useful if
  you pin public resolvers in infrastructure serving European users.
rank: 8
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Quad9, the Swiss non-profit, is withdrawing its free public DNS resolver from France. A French court ordered it to block domains linked to alleged copyright infringement and imposed daily financial penalties for not doing so. Cloudflare, which wrote the post, says Quad9 chose exit over paying penalties or changing its service.

Quad9 is not the first. Cisco pulled OpenDNS from France, Portugal and Belgium, the last temporarily. A Belgian court has now ordered Cloudflare, Google and Cisco to block sites through their public resolvers by early January 2027 or face substantial penalties. Cloudflare says it has never blocked on 1.1.1.1.

The practical risk is silent failure. Quad9 is used in France by government bodies, schools, hospitals and utilities, and it cannot contact them directly. Anyone who does not change resolver before the service is removed will lose name resolution with no explanation. Check your fleet configs for 9.9.9.9.

Cloudflare argues resolver blocking is ineffective and blunt. Users can switch resolver in under a minute or use an IP address directly. Blocking works at domain level, so legal content on a domain goes too. It cites no evidence of reduced infringement. This is an interested party's view, and the source text is cut off.
