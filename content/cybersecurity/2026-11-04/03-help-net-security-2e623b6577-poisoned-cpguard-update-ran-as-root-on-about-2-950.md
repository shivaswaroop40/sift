---
id: 2e623b6577
title: Poisoned cPGuard update ran as root on about 2,950 hosting servers
original_title: Poisoned cPGuard update hits thousands of web hosting servers
url: https://www.helpnetsecurity.com/2026/11/04/cpguard-update-supply-chain-compromised/
source: Help Net Security
kind: news
section: cloud-and-supply-chain
date: "2026-11-04"
published_at: "2026-11-04T11:18:23.000Z"
authors:
  - Zeljka Zorz
comments: null
tags:
  - supply-chain
  - cpguard
  - web-hosting
  - linux
  - root-shell
  - news
why_read: >-
  The original gives the full indicator list, the remediation steps in order, and OPSShield's own
  account of the entry points it has and has not ruled out.
rank: 3
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

An attacker compromised the update infrastructure of cPGuard, a security suite for Linux web hosting servers, and uploaded fake updates, versions 5.88.12 through 5.88.19, on 2 November 2026 between 02:04 and 02:09 UTC. For the next 70 minutes, agents on about 2,950 customer servers installed the fake update and ran it as root. The script collected password hashes, root SSH keys, MySQL root passwords, root shell history and cloud storage keys, and exfiltrated them. It also left a hidden root shell at /var/tmp/.cpg91511_sh.

This is a supply chain compromise of a security product that runs as root on customer servers. The stolen material includes credentials that grant direct access to those servers, and the hidden root shell gives the attacker persistence. The billing and licensing server breach also exposed the names, addresses, email addresses and bcrypt-hashed passwords of about 7,900 customers. Anyone running cPGuard should check whether versions 5.88.12 to 5.88.19 were installed.

The attacker first registered a trial account on OPSShield's billing portal under a false identity and studied how the agent talks to the licensing system. Ninety minutes later, crafted requests to the portal's callback pages gave them command execution on the billing and licensing server. The whole attack took about ten hours from first probe to fake update. OPSShield still does not know how the attacker obtained the update-storage key or achieved command execution, because its logs do not record the exact request.

A clean update, version 5.88.26, removes the hidden root shell, and a follow-up removes the i93677 scheduled task. OPSShield advises customers to reset root and local account passwords, rotate database passwords, S3 keys and tokens, and replace SSH keys under /root/.ssh. Servers that were offline during the upload window did not receive the fake update. Customers the attacker logged into by hand should rebuild from a clean backup taken before 1 November.
