---
id: a27b0b245c
title: Attackers hijacked three country-code registries to issue fake Google HTTPS certificates
original_title: Hackers hijack three country-code domain registries, obtain HTTPS certificates for Google domains
url: https://www.helpnetsecurity.com/2026/10/07/google-unauthorized-https-certificates-cctld-hijacks/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-10-07"
published_at: "2026-10-07T11:10:29.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - dns-hijack
  - certificate-forgery
  - cctld
  - phishing
  - google
  - https
  - news
why_read: >-
  Learn how registry-level compromises enabled certificate forgery and what mitigations Google
  deployed.
rank: 2
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Attackers compromised the third-party operators of Ghana, Sierra Leone and American Samoa country-code domain registries, then changed authoritative DNS records to obtain HTTPS certificates for Google domains and other large organisations. Google discovered the hijacks last week and blocked the unauthorised certificates in Chrome using CRLSets.

This matters because successful DNS hijacks at the registry level put every domain under those country codes at risk, bypassing the need to compromise individual organisations. Attackers can then obtain valid HTTPS certificates for any domain, enabling convincing phishing and man-in-the-middle attacks that browsers would normally trust.

Google worked with certificate authorities to revoke the issued certificates and contacted affected organisations. However, the company acknowledged it cannot guarantee identifying every affected domain, and that Chrome-side blocking does not protect users of other browsers. Google plans to reduce certificate validity periods and certificate reuse to limit future damage from DNS compromises.
