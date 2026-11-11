---
id: 60bc3b9442
title: OpenSSH flaw on musl systems lets oversized passwords bypass blocked password login
original_title: New OpenSSH Vulnerability
url: https://www.schneier.com/blog/archives/2026/11/new-openssh-vulnerability.html
source: Schneier on Security
kind: blog
section: vulnerabilities
date: "2026-11-11"
published_at: "2026-11-10T12:02:38.000Z"
authors:
  - Bruce Schneier
comments: null
tags:
  - openssh
  - musl
  - alpine-linux
  - authentication-bypass
  - ssh
  - blog
why_read: >-
  Schneier's post is a brief pointer to the technical details and news coverage, which you will need
  to check whether your Alpine or musl-based hosts are exposed.
rank: 11
interest_score: 7
depth_score: 5
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

A flaw dubbed "*sshole" affects OpenSSH on Alpine Linux and other musl-based Linux systems. Attackers can log in to accounts that are configured to block password authentication. They do this by entering an oversized password, meaning one longer than 256 bytes. The post says the bug has been in the code for a decade.

The post is a short pointer to other coverage, so it gives no exploit details, CVE number, affected versions or patch status. Those are in the linked write-ups, which this summary has not seen.
