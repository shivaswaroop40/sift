---
id: 6f10a49edc
title: Attacker ran commands on six Hex.pm production servers via a CVSS 10.0 flaw
original_title: Hackers Exploited CVSS 10.0 Hex.pm RCE Flaw to Compromise 6 Package Registry Servers
url: https://thehackernews.com/2026/11/hackers-exploited-cvss-100-hexpm-rce.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-11-26"
published_at: "2026-11-25T09:06:59.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - hex-pm
  - elixir
  - erlang
  - supply-chain
  - rce
  - package-registry
  - news
why_read: >-
  Read the original for the maintainers' response timeline and any further detail on the flaw,
  though the text provided cuts off before the technical specifics.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

An attacker ran operating system commands on six production servers of Hex.pm, the package registry used by Elixir and Erlang developers. The attack happened on Monday. The flaw involved was rated CVSS 10.0 and had been present in the registry's code since February 2016.

The maintainers put every server on a patched build within about 15 minutes of the first malicious request. The source text is truncated after that point. It gives no detail on the flaw's mechanism, what the attacker did after gaining command execution, or whether any packages were altered.
