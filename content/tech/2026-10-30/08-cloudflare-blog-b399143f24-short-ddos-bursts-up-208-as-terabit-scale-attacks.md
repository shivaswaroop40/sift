---
id: b399143f24
title: Short DDoS bursts up 208% as terabit-scale attacks fall 69% in Q3 2026
original_title: "Cloudflare DDoS Threat Report 2026 Q3: More swarms, fewer giants"
url: https://blog.cloudflare.com/ddos-threat-report-2026-q3/
source: Cloudflare Blog
kind: blog
section: security
date: "2026-10-30"
published_at: "2026-10-29T12:55:00.000Z"
authors:
  - Cloudforce One
comments: null
tags:
  - ddos
  - cloudflare
  - botnets
  - udp-amplification
  - network-security
  - blog
why_read: >-
  The full report gives per-vector shares, the industry and country rankings, Mirai byte volumes by
  day, and details of Cloudflare's free botnet threat feed for service providers.
rank: 8
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

Cloudflare autonomously mitigated 18.2 million network-layer DDoS attacks in Q3 2026, up 208% from the same quarter in 2025. That is roughly 8,226 per hour, or one every 0.44 seconds. Mitigated network-layer traffic came to 272.6 PB. Short-burst, low-bandwidth attacks under 10 minutes and 1 Gbps surged 208%. Attacks above 1 Tbps fell nearly 69% to 251, from 805 in Q2, coinciding with early-2026 law enforcement action against four large IoT botnets.

Reflection and amplification tactics rotated quickly. CLDAP floods, which surged 580% quarter-on-quarter in the first half, collapsed 99.5% to 0.05% of attacks. DNS amplification rose 215% to 3.43% of network-layer attacks, and general UDP floods climbed from 14.06% to 31.31%. Mirai-classified mitigation peaked in August at 57.23 PB, 46.5% of all mitigated network-layer bytes in Q3. The longest sustained Mirai attack ran 49.7 hours.

The threat model has shifted from few giants to many swarms. These bursts are the operational signature of DDoS-for-hire booter services, aimed mostly at computer software, gambling and casinos, and information technology. Cloudflare points out that most attacks end long before a human analyst could see the alert, so detection and mitigation must be autonomous. Defences sized for sustained floods can miss a sub-10-minute burst entirely.

Targets broadened across industries and geographies. The United States took the most-attacked position back from China, with Indonesia third at 2.93% of attacks. Canada jumped from 16th to 6th, and Israel rose seven places to 10th. Media, Production & Publishing stayed the most-attacked industry, but its share fell to roughly a quarter of its Q2 level. New variants such as Dysphoria and Evooo1Bot keep emerging, and Cloudflare calls IoT botnets a durable, high-volume threat.
