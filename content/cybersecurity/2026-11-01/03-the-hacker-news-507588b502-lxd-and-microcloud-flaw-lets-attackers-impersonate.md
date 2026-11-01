---
id: 507588b502
title: LXD and MicroCloud flaw lets attackers impersonate trusted clients without keys
original_title: CVSS 10.0 LXD, MicroCloud Flaw Lets Attackers Impersonate Trusted Clients Without a Private Key
url: https://thehackernews.com/2026/11/critical-lxd-and-microcloud-flaw-cvss.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-01"
published_at: "2026-11-01T08:51:31.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - lxd
  - microcloud
  - canonical
  - authentication-bypass
  - virtualization
  - news
why_read: >-
  The original details the attack preconditions and the cluster access an impersonated client gains,
  though the text itself is cut short.
rank: 3
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

A critical flaw in Canonical's LXD and MicroCloud, scored CVSS 10.0, lets an attacker log in as a trusted client without holding that client's private key. The attacker needs to reach the HTTPS API over the network and to hold the trusted client's public certificate. Once in, the attacker acts as that client, with access to the cluster and its virtual machines.

This matters for anyone running LXD or MicroCloud in production. Authentication is meant to depend on holding the private key. If a public certificate alone is enough, any network peer holding one can act as a trusted client and reach the cluster's virtual machines. Teams should check whether the HTTPS API is exposed beyond trusted networks, and how client certificates are stored and shared.

The source text is truncated. It cuts off mid-sentence before describing what happens if the impersonated account holds elevated privileges. It also names no CVE identifier, affected versions, or patch. Confirm those details in Canonical's own advisory before planning remediation.
