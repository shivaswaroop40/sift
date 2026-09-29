---
id: 831664fd32
title: Misconfigured Supabase databases expose PII, passwords, and auth tokens
original_title: Over 16,000 Supabase databases expose PII, passwords, auth tokens
url: >-
  https://www.bleepingcomputer.com/news/security/misconfigured-supabase-apps-expose-data-in-over-16-000-databases/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-09-29"
published_at: "2026-09-28T18:50:59.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - supabase
  - misconfiguration
  - postgresql
  - data-exposure
  - ai-coding
  - row-level-security
  - news
why_read: >-
  You will see the scale of misconfiguration in a popular Postgres backend and the specific policy
  failures behind the leaks.
rank: 7
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

Researchers at UpGuard scanned roughly 300,000 domains pointing to Supabase and found more than 16,000 databases with publicly readable tables. Over half of the exposed instances contained personally identifiable information, and a smaller subset included passwords and authentication tokens. A few cases also suggested credit card data was present.

Notable exposures include a US valet service with over 100,000 customer records including license plates and visit history, a Canadian immigration service leaking nearly 5,000 user records with 884 plaintext passwords, and an African government consulate exposing records on 25,000 people including emergency housing locations. Other cases covered an India-based creator platform and a Philippines-based OTP service with unrelated SMS data.

The researchers attribute the problem to missing or ineffective row-level security policies and misuse of public keys. They note that many of the affected sites appear to have been built using AI coding agents, though they stress their scans cannot confirm this for every case. UpGuard says it notified owners when significant exposure was confirmed.
