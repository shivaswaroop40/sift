---
id: 3b5dcfd259
title: Attacker used Qubole's AWS account to assume customer roles and steal S3 data
original_title: "Trusted by Default: Qubole Cross-Account Access Abused in the Wild"
url: https://www.wiz.io/blog/qubole-cross-account-access-abused-in-the-wild
source: Wiz Blog
kind: research
section: cloud-and-supply-chain
date: "2026-11-11"
published_at: "2026-11-09T14:56:32.000Z"
authors:
  - Zack Morrow
  - Zack Morrow
comments: null
tags:
  - supply-chain
  - aws
  - iam
  - qubole
  - cross-account-access
  - trufflehog
  - research
why_read: >-
  The post gives indicators, the quiam- session name pattern and CloudTrail hunting guidance, plus
  advice on reducing exposure from vendor cross-account trust.
rank: 2
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Wiz, with Sentra and Mandiant, saw a threat actor use IAM user credentials from an AWS account tied to Qubole between 14 and 26 October 2026. The actor assumed integration roles that customers had created to trust Qubole. Every AssumeRole call included the correct External ID and succeeded. Requests came from Mullvad VPN addresses and an OVH VPS.

Inside victim accounts, the actor enumerated resources and read Lambda environment variables, Secrets Manager values and SSM parameters. It then used TruffleHog to test found credentials against AWS, Entra ID and Okta. It also downloaded S3 data opportunistically, in some cases whole buckets in one session.

Most of the roles were otherwise unused. In most environments, the actor's requests were the only AssumeRole activity from the vendor account that month. The trust policies stayed in place, so the External ID gave no protection once the vendor side was compromised.

Wiz also found a bootable Linux ISO, sso_agent.iso, on the actor's OVH server. It polls the server for shell scripts, reboots after 90 minutes and loads the ntfs3 driver, which suggests Windows targets. Wiz found no deployments and cannot say whether it was used.
