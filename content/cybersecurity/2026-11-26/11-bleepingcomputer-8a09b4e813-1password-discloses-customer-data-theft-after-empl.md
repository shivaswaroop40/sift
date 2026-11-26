---
id: 8a09b4e813
title: 1Password discloses customer data theft after employee GitHub account compromise
original_title: 1Password customer data stolen after employee GitHub account breach
url: >-
  https://www.bleepingcomputer.com/news/security/1password-customer-data-stolen-after-employee-github-account-breach/
source: BleepingComputer
kind: news
section: incidents
date: "2026-11-26"
published_at: "2026-11-25T21:33:33.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - 1password
  - github
  - supply-chain
  - data-breach
  - phishing
  - ci-cd
  - news
why_read: >-
  You get the list of stolen data fields, the remediation steps 1Password took, and the phishing
  risks its customers now face.
rank: 11
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

1Password says an attacker compromised an employee's corporate GitHub account, accessed private repositories and injected malicious code into backend services that downloaded customer account records. The company began investigating on 19 November. It says customer vaults and the keys protecting them were not compromised.

The stolen data includes names, email addresses, account and user IDs, sign-in timestamps, public keys, SRP parameters and invitation, provisioning and recovery tokens. The attacker also took internal source code and accessed the CI/CD environment, which may have exposed infrastructure credentials.

1Password says the tokens cannot be used alone, because completing an invitation or recovery needs SSO or an emailed six-digit code. It has changed that code to ten alphanumeric characters as a brute-force precaution. It says a small number of users were affected and notified, and it has found no evidence of account takeovers.

The company disabled the account, revoked the token, restored clean services and rotated or revoked exposed credentials. Outside experts are validating the work. Customers need not change passwords or Secret Keys. BleepingComputer's questions to 1Password had not been answered at publication.
