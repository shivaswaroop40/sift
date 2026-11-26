---
id: 4b202823bb
title: 1Password discloses breach via hijacked employee GitHub account, with customer records copied
original_title: 1Password breached through hijacked employee GitHub account, customer names and emails stolen
url: https://www.helpnetsecurity.com/2026/11/26/1password-breach-github-customer-records/
source: Help Net Security
kind: news
section: incidents
date: "2026-11-26"
published_at: "2026-11-26T08:42:32.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - 1password
  - data-breach
  - github
  - supply-chain
  - ci-cd
  - password-manager
  - news
why_read: >-
  The original sets out exactly which data was taken and the remediation steps, and shows how a
  single hijacked GitHub account led to malicious code reaching backend services.
rank: 7
interest_score: 7.7
depth_score: 6
novelty_score: 9
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

An attacker took over an employee's corporate GitHub account, 1Password said on Wednesday. The company began investigating on 19 November 2026. The attacker accessed source code, pushed malicious code to backend services and used it to download administrative data on a subset of customers.

The records hold names, email addresses, account and user identifiers, creation dates and last sign-in times. The attacker also took public keys and SRP parameters, which 1Password says cannot be used to access accounts. A smaller group had invitation, provisioning and account recovery tokens copied. These need an SSO sign-in or a six digit code to work.

1Password says vault contents, vault keys and recovery keys were not reached. It has lengthened the code from six digits to ten alphanumeric characters. It reports no evidence of account takeover using the exposed tokens. The attacker also reached the CI/CD system, and infrastructure secrets stored there have been rotated.

Gaps remain. The post does not say how the employee's access was obtained, when the intruder was detected or removed, or how many users are affected. It also does not say which account types were hit. Customers are warned to expect phishing by email, text or phone.
