---
id: 6fe9f1386a
title: Lumma and RedLine dominate infostealer theft of cloud and AI credentials
original_title: "The Infostealer Incursion: How Stolen Credentials Breach Cloud, Code, and AI Environments"
url: https://www.wiz.io/blog/infostealer-incursion-cloud-ai-credentials
source: Wiz Blog
kind: research
section: cloud-and-supply-chain
date: "2026-09-27"
published_at: "2026-09-25T14:51:15.000Z"
authors:
  - Gili Tikochinski
  - Gili Tikochinski
comments: null
tags:
  - infostealers
  - credentials
  - aws
  - github
  - ai
  - session-hijacking
  - research
why_read: >-
  You will see which credential types are most stolen, which malware families lead the market, and
  how session-cookie replay defeats MFA on AWS and other clouds.
rank: 7
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

Wiz analysed secrets harvested by infostealer malware and found three families, Lumma C2, RedLine, and Vidar, account for 85.7% of detected incidents. Stolen cloud credentials dominate the haul, with AWS keys at 46% and GCP at 13% of compromised secrets. GitHub tokens make up roughly 10%, while AI platform keys, led by OpenAI, account for 5%. Over 400 distinct non-credential secret types were also identified.

The supply chain behind these attacks is industrialised. Malware-as-a-Service rents the stealers for a few hundred dollars a month, and Initial Access Brokers resell harvested logs, sometimes within hours of a phishing click. This means time from a developer falling for a phishing link to corporate cloud credentials appearing on a marketplace can be very short.

Session cookie theft is the main route past MFA. Attackers extract the post-authentication token from the victim's browser and replay it from their own machine, bypassing prompts entirely. AWS console session cookies and long-term IAM access keys left in developer config files are the primary AWS targets.

Newer stealers such as Miasma target CI/CD pipelines and build servers by trojanising software dependencies rather than relying on phishing. Traditional malware still spreads through trojanised Windows binaries like vbc.exe and fake game tools such as Roblox.exe and Valorant SkinChanger.exe, aimed at developers' personal machines.
