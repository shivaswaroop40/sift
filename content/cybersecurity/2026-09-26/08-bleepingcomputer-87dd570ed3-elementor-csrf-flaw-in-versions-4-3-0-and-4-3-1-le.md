---
id: 87dd570ed3
title: >-
  Elementor CSRF flaw in versions 4.3.0 and 4.3.1 lets unauthenticated attackers create admin
  accounts
original_title: Elementor WordPress flaw lets attackers create admin accounts
url: >-
  https://www.bleepingcomputer.com/news/security/elementor-wordpress-flaw-lets-attackers-create-admin-accounts/
source: BleepingComputer
kind: news
section: vulnerabilities
date: "2026-09-26"
published_at: "2026-09-25T18:13:33.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - wordpress
  - elementor
  - csrf
  - rest-api
  - patchstack
  - admin-takeover
  - news
why_read: >-
  You will get the exact mechanism of the CSRF bypass, the affected versions, and the upgrade you
  need to apply on any site running Elementor.
rank: 8
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

A cross-site request forgery vulnerability in the Elementor WordPress plugin allows an unauthenticated attacker to create administrator accounts. The flaw affects only versions 4.3.0 and 4.3.1, which are installed on up to 2 million sites. The Elementor Website Builder plugin is active on roughly 10 million websites.

The bug sits in Elementor's Editor Events module, which checks the raw request URI for the elementor/v1/events/ path and bypasses WordPress's REST nonce validation when that string is present. Because the URI also contains attacker-controlled query parameters, the path can be appended to other REST endpoints to trick a logged-in administrator into performing privileged actions. Triggering it requires only that an administrator open a link delivered by email, chat, or comment. No JavaScript, attacker-controlled page, or form submission is needed.

Patchstack reported the issue to Elementor on September 22 after receiving it from a bug hunter, and Elementor shipped a fix in version 4.3.2 two days later. Users are advised to upgrade immediately. Releases before 4.3.0 do not contain the affected proxy, but those older versions have other known flaws, some already under active exploitation.
