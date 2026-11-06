---
id: f01570e725
title: Two Barracuda Email Security Gateway flaws chain to unauthenticated root access
original_title: Experts Demonstrate Barracuda Email Security Gateway Chain Enabling Root Access Without Login
url: https://thehackernews.com/2026/11/experts-demonstrate-barracuda-email.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-11-06"
published_at: "2026-11-06T05:39:10.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - barracuda
  - email-security-gateway
  - authorization-bypass
  - cve-2026-116606
  - patching
  - command-execution
  - news
why_read: >-
  The full article details both flaws in the chain and the steps from unauthenticated authorization
  bypass to root command execution.
rank: 6
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Two flaws in Barracuda's Email Security Gateway can be chained to run commands on the appliance as root, its highest level of access, with no login required. Barracuda released patches on Monday. The security firm watchTowr detailed the attack chain on Thursday. One flaw, CVE-2026-116606, is an authorization bypass that an unauthenticated attacker can exploit.

An email security gateway accepts traffic from untrusted senders by design. An unauthenticated path to root on such a device means full control without credentials or a valid session, which weakens log-based detection. With the chain now public, unpatched appliances are practical targets. Apply Monday's patches and review any exposure before that date.

The available detail names only one CVE number, CVE-2026-116606. The second flaw in the chain is not identified, and the description of how the bypass is used is incomplete. The watchTowr write-up carries the full mechanism and the second identifier.
