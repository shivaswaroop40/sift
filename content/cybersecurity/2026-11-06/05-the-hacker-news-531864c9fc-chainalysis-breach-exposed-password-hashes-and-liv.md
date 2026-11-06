---
id: 531864c9fc
title: Chainalysis breach exposed password hashes and live tokens for all users
original_title: Chainalysis Breach Exposes All Users' Credentials, Forces Shutdown of Key Services
url: https://thehackernews.com/2026/11/chainalysis-breach-exposes-all-users.html
source: The Hacker News
kind: news
section: incidents
date: "2026-11-06"
published_at: "2026-11-06T08:04:49.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - chainalysis
  - data-breach
  - credential-exposure
  - agentic-attack
  - live-tokens
  - news
why_read: >-
  The original carries Chainalysis's own statement on the scope of the exposure and the services
  taken offline, though detail on the attack mechanism is thin.
rank: 5
interest_score: 7.7
depth_score: 7
novelty_score: 9
utility_score: 7
scored: true
model: glm-5.3
---

Chainalysis has disclosed that an agentic cyber attack on its systems exposed names, usernames, password hashes and live tokens for all users. The blockchain analysis firm removed access to Reactor and Data Solutions while it investigated. It says it continues to have no evidence that any investigations data was accessed.

The live tokens are the most immediate risk. An attacker holding one can hijack an active session without cracking the password hash, so revoking sessions matters more than password resets in the first hours. Taking Reactor and Data Solutions offline also cuts off the sessions those tokens would unlock. Every user is affected, so any Chainalysis account should be treated as exposed until rotation is confirmed.

The statement that no investigations data was accessed is provisional, since the investigation is still under way. The company calls the attack agentic but gives no detail here on the mechanism, the access it gained, or when the two services will return.
