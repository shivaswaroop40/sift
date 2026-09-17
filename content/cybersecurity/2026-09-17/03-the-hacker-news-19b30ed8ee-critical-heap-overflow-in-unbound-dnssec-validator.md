---
id: 19b30ed8ee
title: Critical heap overflow in Unbound DNSSEC validator allows remote code execution
original_title: Critical Unbound DNSSEC Validator Flaw Could Allow RCE via a Malicious DNS Zone
url: https://thehackernews.com/2026/09/critical-unbound-dnssec-validator-flaw.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-17"
published_at: "2026-09-17T12:30:00.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - unbound
  - dnssec
  - rce
  - heap-overflow
  - cve-2026-81642
  - dns
  - news
why_read: >-
  You will learn about a patch-now RCE in a core DNS resolver that an attacker can reach through a
  malicious zone alone.
rank: 3
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

NLnet Labs has disclosed a critical heap overflow in the DNSSEC validator of Unbound, the widely used recursive DNS resolver. The flaw affects every release prior to 1.26.1 and is tracked as CVE-2026-81642.

An attacker who controls a malicious DNS zone and tricks a vulnerable resolver into querying it can trigger the overflow and achieve remote code execution on the resolver host. This puts any recursive resolver with DNSSEC validation enabled at risk of full compromise from a single crafted zone.

Unbound 1.26.1 was released the same day as the advisory and fixes the issue. Operators running Unbound with DNSSEC validation should upgrade immediately, as exploitation only requires the attacker to serve a malicious zone that the resolver attempts to validate.

The advisory text was truncated in the source, so additional technical detail on the overflow mechanism is not available here.
