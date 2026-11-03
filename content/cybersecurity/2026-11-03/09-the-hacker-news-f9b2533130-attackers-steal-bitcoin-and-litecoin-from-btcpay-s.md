---
id: f9b2533130
title: Attackers steal Bitcoin and Litecoin from BTCPay Server hot wallets
original_title: Hackers Exploit BTCPay Server Flaw to Steal Bitcoin and Litecoin From Hot Wallets
url: https://thehackernews.com/2026/11/hackers-exploit-btcpay-server-flaw-to.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-03"
published_at: "2026-11-03T08:31:48.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - btcpay
  - cryptocurrency
  - hot-wallet
  - patching
  - vulnerability
  - news
why_read: >-
  The original carries BTCPay Server's own statement on the affected versions and its guidance for
  operators.
rank: 9
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

BTCPay Server, a self-hosted, open-source cryptocurrency payment processor, has urged users to install the latest version of its software after reports of Bitcoin and Litecoin being stolen from hot wallets. The project's investigation found that the attacks targeted servers running BTCPay Server 2.4.1, released on 23 July 2026, or earlier. Instances on newer versions were not implicated in the reports.

For operators of self-hosted payment processors this is a direct key-compromise scenario. Hot wallet private keys sit on the server itself, so an attacker who reaches them can move funds without needing any further access. Anyone running 2.4.1 or earlier should update immediately and treat the hot wallet as exposed until keys are rotated or funds are moved to storage they control.

The available report is truncated. It does not describe the vulnerability's mechanism, state how many instances were affected, or give the value stolen. The version boundary is the only confirmed detail. Verify the flaw and any remediation steps against the project's own advisory before acting on second-hand accounts.
