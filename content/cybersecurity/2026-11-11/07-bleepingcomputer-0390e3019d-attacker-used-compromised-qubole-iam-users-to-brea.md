---
id: 0390e3019d
title: Attacker used compromised Qubole IAM users to breach dozens of customer AWS accounts
original_title: Hackers exploit trusted AWS access to breach multiple cloud environments
url: >-
  https://www.bleepingcomputer.com/news/security/hackers-exploit-trusted-aws-access-to-breach-multiple-cloud-environments/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-11-11"
published_at: "2026-11-10T19:31:11.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - aws
  - iam
  - qubole
  - supply-chain
  - cloud-security
  - data-theft
  - news
why_read: >-
  It gives the attack sequence and concrete CloudTrail and trust-policy steps for checking whether
  an unused third-party role in your AWS accounts was abused.
rank: 7
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Between October 14 and 26, an attacker used two compromised IAM users from Qubole's AWS account to assume cross-account roles in customer environments. Those roles had been set up to trust Qubole and were otherwise unused. Sentra confirmed dozens of victims and millions of files stolen from one customer alone. Wiz and Mandiant investigated.

Once inside, the attacker surveyed resources and pulled secrets from Secrets Manager and SSM Parameter Store, and read Lambda environment variables. TruffleHog was used to validate AWS keys, Microsoft Entra ID client secrets and Okta credentials. Sentra says the attacker collected 100 passwords and keys in seven minutes. Data was then taken from every reachable S3 bucket using ListBuckets, ListObjects, HeadObject and GetObject.

The incident shows how a dormant third-party trust relationship can become an entry point. The compromise sat in the provider's account, not the victims' own, so their controls did not see the initial breach. AWS says its services operated as designed and the activity came from customer-configured trust.

The report does not say how the Qubole accounts were compromised or how many downstream victims there are. BleepingComputer found no public statement from Qubole. Advice includes reviewing CloudTrail from October 1, rotating exposed credentials, revoking role sessions, removing unused integrations, and restricting trust policies and source networks.
