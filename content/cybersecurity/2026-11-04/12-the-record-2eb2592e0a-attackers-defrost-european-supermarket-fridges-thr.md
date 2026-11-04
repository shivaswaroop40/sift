---
id: 2eb2592e0a
title: Attackers defrost European supermarket fridges through unpatched Copeland controllers
original_title: British businesses caught in Europe-wide supermarket fridge attacks
url: https://therecord.media/british-businesses-caught-in-europe-wide-supermarket-fridge-attacks
source: The Record
kind: news
section: incidents
date: "2026-11-04"
published_at: "2026-11-03T17:43:00.000Z"
authors: []
comments: null
tags:
  - ot-security
  - ics
  - firmware
  - supply-chain
  - uk
  - news
why_read: >-
  The original details the attack timeline, the specific XWEB firmware versions affected, and the UK
  policy gap leaving food suppliers outside critical infrastructure rules.
rank: 12
interest_score: 5.3
depth_score: 5
novelty_score: 7
utility_score: 4
scored: true
model: glm-5.3
---

Attackers hacked supermarket and grocery refrigeration controls across Europe in the early hours of Monday, in a second wave after an earlier one in France, defrosting fridges and causing stock to spoil. Three British meat suppliers and the wholesaler Langridge Organic were among those hit. The entry point was vulnerable Copeland XWEB supervisory controllers.

The exploited flaw is a severe authentication bypass in Copeland XWEB firmware version 1.12.1 and earlier, which lets attackers take control without a password. Claroty researchers disclosed almost two dozen vulnerabilities in the XWEB Pro controllers in August, and a firmware update has been available since then. The NCSC says the attacks were not sophisticated and used vulnerabilities that have been public for a long time.

None of the affected British meat suppliers lost stock. Langridge's managing director interrupted a live attack by physically disconnecting a fridge he watched being put into defrost mode remotely. The NCSC worked through the night to contact companies it detected had vulnerable systems exposed to the internet, and called the national impact minimal. No group has claimed responsibility, and Belgian authorities say the perpetrators may never be identified.

No individual food sector assets are designated as critical infrastructure in Britain, and the sector is excluded from the forthcoming Cyber Security and Resilience Bill, which would fine operators up to £17 million or 4% of global turnover for serious failures. The EU's NIS2 does cover food production and distribution.
