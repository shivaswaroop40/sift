---
id: 4a9a946634
title: Barracuda ESG authentication bypass can be chained with command injection for root
original_title: Barracuda ESG Authentication Bypass Flaw Opens Path to Root
url: >-
  https://www.securityweek.com/barracuda-email-security-gateway-authentication-bypass-opens-path-to-root/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-11-05"
published_at: "2026-11-04T14:24:54.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - barracuda
  - email-security-gateway
  - authentication-bypass
  - command-injection
  - patching
  - news
why_read: >-
  The original gives the CVE identifiers, the full affected product list, patching guidance, and
  Mandiant's advisories for both flaws.
rank: 10
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: glm-5.3
---

Barracuda has patched two vulnerabilities that can be chained to gain root access to its Email Security Gateway appliances. CVE-2026-116606, scored 9.3, is an authentication bypass affecting ESG versions earlier than 9.4.0.030. It lets an unauthenticated remote attacker invoke a configuration-import function and restore a crafted backup archive, modifying the appliance's global configuration. CVE-2026-111560, scored 8.6, is command injection in the timezone setting, in code shared across Barracuda products.

The command injection also affects the Load Balancer ADC, Message Archiver, WAF Control Center, Web Application Firewall, and Web Security Gateway. An attacker with administrator privileges can use it to run OS commands as root. Barracuda says attackers must be able to reach an appliance's admin interface, and advises keeping those interfaces on trusted internal networks only. Mandiant states the ESG bug is exploitable without authentication, even though Barracuda's advisory marks admin access as required for both flaws.

Neither advisory says whether the flaws have been exploited in the wild. Barracuda advises updating to the newest firmware, confirming every available patch is installed, manually applying any patch not applied automatically, and re-enabling automatic patching where it was disabled. ESG appliances were previously compromised by Chinese cyberspies through the CVE-2023-2868 zero-day from October 2022, a campaign that ended with Barracuda telling customers to replace affected devices.
