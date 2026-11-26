---
id: 4f01a8f37f
title: 1Password attacker stole source code and customer account data via an employee's GitHub account
original_title: Hackers help themselves to 1Password's source code and customer data
url: >-
  https://www.theregister.com/security/2026/11/26/hackers-help-themselves-to-1passwords-source-code-and-customer-data/5312317
source: The Register
kind: news
section: security
date: "2026-11-26"
published_at: "2026-11-26T11:02:00.000Z"
authors:
  - Carly Page
comments: null
tags:
  - 1password
  - supply-chain
  - ci-cd
  - github
  - data-breach
  - password-managers
  - news
why_read: >-
  The article gives the disclosed scope, the remediation steps and the unanswered questions about
  how a GitHub compromise reached backend deployment, plus the LastPass comparison.
rank: 6
interest_score: 7.3
depth_score: 5
novelty_score: 9
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

1Password says an attacker compromised an employee's corporate GitHub account, stole private source code and deployed malicious code to backend services to collect customer data. Investigation began on 19 November. Stolen data includes names, sign-in email addresses, account identifiers, creation and last-access timestamps and some non-secret metadata. The company has not said how many customers were affected.

The attacker also reached CI/CD infrastructure, which holds credentials, and took tokens embedded in invitation, provisioning and recovery emails. 1Password says vault contents were never accessible, and that apps and browser extensions were unaffected. It has rotated or revoked exposed credentials, rolled back affected services and replaced six-digit email codes with ten-character alphanumeric ones.

The main gap is mechanism. 1Password has not explained how a GitHub account let the attacker deploy code to backend services, nor how far they reached into build and distribution systems. It did not answer The Register's questions. For anyone running CI/CD, that link between source control access and production deployment is the part worth examining.

The Register compares it with the first stage of LastPass's 2022 breach, where stolen source code helped enable a later theft of vault backups. 1Password reports no evidence of account takeovers and is not asking users to change passwords, but it warns of phishing.
