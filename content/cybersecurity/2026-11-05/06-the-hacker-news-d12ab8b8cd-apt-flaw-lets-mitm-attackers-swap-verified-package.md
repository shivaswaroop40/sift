---
id: d12ab8b8cd
title: APT flaw lets MitM attackers swap verified packages and run code as root
original_title: Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root
url: https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html
source: The Hacker News
kind: news
section: cloud-and-supply-chain
date: "2026-11-05"
published_at: "2026-11-04T17:00:46.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - apt
  - debian
  - ubuntu
  - mitm
  - supply-chain
  - package-manager
  - news
why_read: >-
  The original spells out the full attack conditions, affected releases, and fix details that this
  truncated extract does not include.
rank: 6
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Debian, Ubuntu, and the APT developers published advisories on November 4 describing a flaw in the package manager. An attacker who can modify package downloads in transit can swap a package that has already passed verification for one of their own. The substituted code then runs as root. The attack relies on APT retrying failed downloads, which is the default from Debian 12.

This matters because APT's verification of packages is the control that makes it safe to install from untrusted mirrors and networks. The flaw lets an attacker defeat that control and gain root on every host that installs the swapped package. Any deployment fetching packages over a network an adversary can tamper with is exposed until APT is updated.

The available text is truncated. It names no CVE identifier, no fixed APT version, and no complete list of affected releases. The only scope detail confirmed is the retry precondition and its default status from Debian 12. Read the advisories themselves before deciding which hosts need attention.
