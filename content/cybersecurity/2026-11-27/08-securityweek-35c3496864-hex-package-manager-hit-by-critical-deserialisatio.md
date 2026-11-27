---
id: 35c3496864
title: Hex package manager hit by critical deserialisation flaw, data exposure cannot be ruled out
original_title: Hex Package Manager Warns of Potential Data Breach
url: https://www.securityweek.com/hex-package-manager-warns-of-potential-data-breach/
source: SecurityWeek
kind: news
section: cloud-and-supply-chain
date: "2026-11-27"
published_at: "2026-11-27T07:44:49.000Z"
authors:
  - Ionut Arghire
comments: null
tags:
  - hex
  - elixir
  - supply-chain
  - deserialization
  - rce
  - credential-rotation
  - news
why_read: >-
  The original gives the incident timeline, the exposed data categories and Hex's remediation
  advice, plus the CVEs for the related Elixir libraries.
rank: 8
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Hex, the package manager for Elixir and Erlang, says an attacker gained remote code execution on its hex.pm web servers on 23 November. The flaw was unauthenticated deserialisation of untrusted data (CVE-2026-129514, CVSS 10), triggered by a crafted Erlang external term format request body. The attacker sent 69 requests to six servers between 18:16 and 18:29 UTC.

Hex replaced all servers with patched versions at 18:30 and blocked the attacker's traffic by firewall at 18:33. It found no evidence of package modification, database changes or persistent access. It cannot rule out reads of email addresses, password hashes, API key hashes, sessions, 2FA secrets and audit logs. Database and private documentation reads are not logged.

Hex rotated its storage, CDN, email and database credentials, plus session and token signing keys, which logged everyone out. It advises all account holders to change passwords and reset 2FA. Until new clients ship, users should fetch only from repo.hex.pm and avoid third-party mirrors. Phishing emails posing as Hex are a risk.

The same class of bug affected the Ash Framework (CVE-2026-124283, patched 24 November), db_connection (CVE-2026-133555) and flop (CVE-2026-130411). Ash warned of possible code execution or SQL injection.
