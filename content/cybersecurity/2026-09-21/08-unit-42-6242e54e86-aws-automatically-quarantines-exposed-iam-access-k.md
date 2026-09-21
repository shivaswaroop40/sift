---
id: 6242e54e86
title: AWS automatically quarantines exposed IAM access keys through a managed deny policy
original_title: >-
  From Exposure to Lockdown: How AWS Neutralizes Compromised IAM Credentials through Managed
  Policies
url: https://unit42.paloaltonetworks.com/detecting-exposed-aws-iam-credentials/
source: Unit 42
kind: research
section: cloud-and-supply-chain
date: "2026-09-21"
published_at: "2026-09-21T10:00:13.000Z"
authors:
  - Margaret Kelley
comments: null
tags:
  - aws
  - iam
  - credentials
  - secret-scanning
  - cloudtrail
  - github
  - research
why_read: >-
  You will learn how AWS automatically locks down leaked IAM keys, how the deny policy has evolved,
  and how to spot quarantine events in your own logs.
rank: 8
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

AWS attaches the AWSCompromisedKeyQuarantine managed policy to IAM users when it detects exposed access keys, typically via GitHub secret scanning or external notifications. The policy denies a set of permissions commonly abused by attackers while leaving existing resources unaffected. AWS instructs users not to remove the policy and to follow the linked support case instead.

The policy has been revised three times since its creation on 11 August 2020, with V2 released on 21 April 2021 and V3 on 21 August 2024. Each revision widened the scope of denied actions to keep pace with new cloud attack techniques. The article traces how the permission set changed in response to specific observed threats.

For defenders, the practical question is visibility. Quarantine events surface in CloudTrail and related logs, giving security teams a chance to confirm the exposure, rotate credentials, and review CloudTrail for prior misuse. The article outlines monitoring strategies to detect when AWS has applied the policy within a customer's own environment.
