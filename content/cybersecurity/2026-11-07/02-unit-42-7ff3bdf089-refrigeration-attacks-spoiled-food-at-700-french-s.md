---
id: 7ff3bdf089
title: Refrigeration attacks spoiled food at 700 French supermarkets and spread to 10 countries
original_title: "Turning Up the Heat: Inside the Attacks on Europe’s Refrigeration System"
url: https://unit42.paloaltonetworks.com/europes-refrigeration-systems-attacks/
source: Unit 42
kind: research
section: threat-research
date: "2026-11-07"
published_at: "2026-11-06T21:15:09.000Z"
authors:
  - Matt Brady
  - Jared Valentine
comments: null
tags:
  - ot-security
  - refrigeration
  - exposure
  - default-credentials
  - retail
  - europe
  - research
why_read: >-
  You get the full attack timeline, country-by-country exposure figures from Cortex Xpanse, and
  guidance on defending exposed controllers.
rank: 2
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

Unidentified attackers gained unauthorised access to refrigeration controllers and set them to defrost mode, forcing hundreds of supermarkets to throw away spoiled food. The first wave, overnight on 11 to 12 October, hit roughly 700 supermarkets in France. A second wave overnight on 1 to 2 November reached at least 10 more European countries and more than 100 retail locations. Temperatures were reportedly raised as high as 50°C, and some incidents caused fires.

The initial access vector remains unconfirmed. Widespread speculation points to vulnerable software versions or default manufacturer credentials that attackers easily identified. CISA warned on 5 November of potential exploitation through authentication bypass, arbitrary code injection and weak configurations. For defenders, the immediate checks are internet exposure, default credentials and unpatched firmware on any similar controllers.

Unit 42 used Cortex Xpanse to measure exposure. On 5 to 6 November it counted more than 5,000 internet-exposed devices from manufacturers named in the CERT-FR advisory. Exposure does not prove exploitability, since those devices may not run vulnerable software. In France, exposed device counts fell across three periods, from 1,853 on 1 to 15 October to 558 on 16 to 31 October and 316 on 1 to 6 November.

Two claims warrant caution. The pro-Russian hacktivist groups NoName057(16) and Z-Pentest claimed responsibility on Telegram on 3 November, but the allegations remain unverified. French authorities also disclosed that refrigeration systems at medical facilities were affected, though there is no evidence blood products were spoiled. The timing raises the stakes, since retailers need stable inventory heading into the holiday spending period.
