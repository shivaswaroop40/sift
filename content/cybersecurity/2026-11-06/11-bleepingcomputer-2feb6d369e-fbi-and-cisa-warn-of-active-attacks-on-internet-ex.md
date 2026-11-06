---
id: 2feb6d369e
title: FBI and CISA warn of active attacks on internet-exposed refrigeration controllers
original_title: FBI, CISA warn of cyberattacks targeting refrigeration systems
url: >-
  https://www.bleepingcomputer.com/news/security/fbi-cisa-warn-of-cyberattacks-targeting-refrigeration-systems/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-11-06"
published_at: "2026-11-06T00:56:44.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - refrigeration
  - ot-security
  - cisa
  - cold-chain
  - critical-infrastructure
  - news
why_read: >-
  The joint advisory details the exploited weaknesses, the European incidents behind it, and the
  mitigations US agencies expect operators to apply.
rank: 11
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

The FBI and CISA, joined by HHS, USDA and DOT, have issued a joint advisory warning that attackers are actively targeting industrial refrigeration and cold-chain monitoring systems. The attackers exploit unpatched or internet-accessible electronic temperature controllers and commercial refrigeration management systems, using authentication bypass flaws, arbitrary code injection and weak configurations to change temperature settings and force equipment into continuous heating or defrost cycles.

The advisory follows confirmed attacks in Europe. In October, attackers compromised controllers at an estimated 250 to 350 French supermarkets, remotely activating defrost functions and raising temperatures. A second wave in November hit more than 115 stores across six European countries, with some systems shut down entirely and others heated to 50°C. On 3 November, the French Blood Establishment confirmed altered temperature and defrost settings at three blood product storage facilities.

Successful attacks cause inventory losses, equipment damage, fire hazards and unsafe storage conditions. They can also cut operators' visibility into current temperatures, delaying detection. The agencies advise removing refrigeration controllers from the public internet, changing default passwords, applying security updates, securing remote access, isolating operational technology from business networks, and enforcing safe temperature limits so controllers cannot operate outside acceptable ranges.
