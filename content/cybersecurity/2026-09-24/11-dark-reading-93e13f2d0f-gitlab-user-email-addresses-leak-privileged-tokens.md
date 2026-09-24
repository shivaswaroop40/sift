---
id: 93e13f2d0f
title: GitLab user email addresses leak privileged tokens for supply chain attacks
original_title: GitLab Email Addresses Can Be Weaponized for Supply Chain Attacks
url: https://www.darkreading.com/application-security/gitlab-email-addresses-supply-chain-attacks
source: Dark Reading
kind: news
section: cloud-and-supply-chain
date: "2026-09-24"
published_at: "2026-09-23T20:53:38.000Z"
authors:
  - Rob Wright
comments: null
tags:
  - gitlab
  - supply-chain
  - api-tokens
  - repository-security
  - misconfiguration
  - news
why_read: >-
  You will learn how a little known GitLab feature can hand attackers a privileged foothold into
  your repositories.
rank: 11
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

GitLab assigns every user a unique incoming email address that automatically turns messages into issues in projects where the user has access. Researchers found these addresses embed highly privileged API tokens, which let anyone who knows the address create issues, add comments, or trigger other actions inside the target project.

The risk is that an attacker who learns or guesses the address can act as that user on the repo. Because the address is predictable and tied to the username, it widens the attack surface for supply chain compromise, especially on public projects where maintainers may not realise their email is exposed.

GitLab has released a fix that allows project owners to disable the feature, but it remains on by default. Defenders should review their project settings and turn off the incoming email service where it is not needed.
