---
id: c77f68f5a0
title: SAP confirms cyberattack on development infrastructure, with GitHub tokens reportedly stolen
original_title: SAP Confirms Cyberattack, Source Code Reportedly Compromised
url: https://www.securityweek.com/sap-confirms-cyberattack-source-code-reportedly-compromised/
source: SecurityWeek
kind: news
section: incidents
date: "2026-11-27"
published_at: "2026-11-27T07:36:14.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - sap
  - github
  - supply-chain
  - source-code
  - token-theft
  - data-breach
  - news
why_read: >-
  Read the original for the reported details of the GitHub token theft and SAP's response, which is
  a useful reference for supply chain and developer credential defences.
rank: 2
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

SAP has confirmed it is investigating a security incident after Der Spiegel reported that attackers targeted its development infrastructure. Internal communications seen by DPA place the suspicious activity within GitHub. An insider told Der Spiegel the attackers obtained employee authentication tokens, which let them copy and alter source code. SAP has not disclosed details.

SAP says it has found no evidence of unauthorised access to customer business data. It is unclear whether any proprietary code was accessed, as SAP publishes developer tools, samples and open source projects on GitHub. None of the reports say tampered code reached customers.

Handelsblatt reports that SAP has replaced signing keys, limited GitHub access and suspended automated development operations, disrupting many teams. Stolen tokens that allow write access to source repositories are a supply chain concern, which explains the key rotation and pipeline pause.

Der Spiegel sources suggested AI may have assisted the attack, but this is unconfirmed. Separately, the Gentlemen ransomware group listed SAP's Latin American operations in October. SecurityWeek says the two incidents do not appear connected, and it is unclear whether SAP or a third party was compromised in that case.
