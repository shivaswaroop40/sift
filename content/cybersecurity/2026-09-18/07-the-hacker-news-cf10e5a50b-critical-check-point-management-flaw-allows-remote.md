---
id: cf10e5a50b
title: Critical Check Point management flaw allows remote root code execution
original_title: Critical Check Point Management Flaw Lets Unauthenticated Attackers Run Code as Root
url: https://thehackernews.com/2026/09/critical-check-point-management-server.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-18"
published_at: "2026-09-17T18:08:28.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - check-point
  - rce
  - vulnerability
  - management-plane
  - firewall
  - patch
  - news
why_read: >-
  You will see what the flaw is, why a management-plane root RCE is severe, and that a fix is
  available via LivePatch.
rank: 7
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

A critical vulnerability in Check Point Security Management and Log Servers lets unauthenticated attackers run code as root over the network. The Security Management Server handles firewall policy and administrator access, so compromise gives broad control over the managed estate.

Check Point has shipped a fix through its LivePatch update channel. The vendor says there is no indication the flaw has been exploited in the wild, though it is confirmed unauthenticated and pre-authentication flaws on management planes are routinely probed quickly after disclosure.

Because the affected component is the central management plane, any root execution there exposes stored firewall policies, administrator credentials and logs across every gateway the server touches. Practitioners running Check Point management infrastructure should confirm the LivePatch has been applied and review management-server access logs for unexpected activity.
