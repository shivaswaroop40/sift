---
id: 8442eed6c9
title: >-
  1Password says attacker used a stolen GitHub token to push code and download customer account
  records
original_title: 1Password Security Incident
url: https://1password.com/blog/update-on-nov-2026-security-incident
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-26"
published_at: "2026-11-25T17:18:26.000Z"
authors:
  - lxhrstn
comments: https://news.ycombinator.com/item?id=50644817
tags:
  - 1password
  - security-incident
  - github
  - ci-cd
  - supply-chain
  - credential-rotation
  - community
why_read: >-
  The post gives a short, concrete account of how a single stolen GitHub token reached backend code
  and CI/CD, and what the company changed afterwards.
rank: 2
interest_score: 8
depth_score: 6
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

1Password began investigating on 19 November 2026 after signs that an attacker had reached an employee's corporate GitHub account. The attacker copied source code from private repositories, reached the CI/CD system and pushed malicious code to backend services. That code downloaded account records for a subset of users, including names, email addresses, identifiers and sign-in times.

The records also included tokens in emailed links for invitations, provisioning and account recovery. 1Password says each token works only with an SSO sign-in or a six-digit emailed code. It has lengthened that code to ten alphanumeric characters. It says vault contents and vault keys were never accessible to the attacker, and that it found no evidence of account takeover.

The chain matters more than the data. One compromised developer account led to write access to production backend code and to CI/CD secrets. 1Password has rotated all credentials that may have been exposed and added detections and tighter GitHub, CI/CD and endpoint controls.

The account is the company's own and has not been independently verified. 1Password says it has brought in outside experts to validate containment. The post does not say how the GitHub token was stolen, how long the attacker had access, or how many users were affected.
