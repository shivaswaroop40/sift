---
id: dc0983ebbd
title: Shai-Hulud attack exfiltrated 170 CrowdSec repositories via stolen OAuth token
original_title: Shai-Hulud Attack Nips Cyber-Firm CrowdSec's GitHub Data
url: >-
  https://www.darkreading.com/cyberattacks-data-breaches/shai-hulud-attack-cyber-firm-crowdsec-github-data
source: Dark Reading
kind: news
section: cloud-and-supply-chain
date: "2026-09-23"
published_at: "2026-09-22T17:32:49.000Z"
authors:
  - Elizabeth Montalbano
comments: null
tags:
  - supply-chain
  - oauth
  - github
  - crowdsec
  - shai-hulud
  - incident
  - news
why_read: >-
  See how an npm supply chain pivot produced a direct repository theft, and what token hygiene gaps
  enabled it.
rank: 9
interest_score: 8
depth_score: 8
novelty_score: 7
utility_score: 9
scored: true
model: minimax-m3
---

Threat actors stole 170 private repositories from CrowdStrike-adjacent detection firm CrowdSec after compromising an OAuth token on a former employee's machine. The token was obtained through the TanStack npm supply chain compromise, chaining a third-party dependency breach into direct access to CrowdSec's GitHub organisation.

The incident shows how a single developer endpoint infected by an upstream package attack can hand attackers the keys to an organisation's private code. For defenders, it underlines the risk of long-lived OAuth tokens tied to personal devices and the need to scope, rotate, and audit them continuously.

CrowdSec said the stolen repositories have been reviewed for secrets, and any exposed credentials have been revoked and rotated. The company has not disclosed which environments or customers could be affected by information held in the exfiltrated code.
