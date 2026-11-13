---
id: 5066227f45
title: wfx-loot campaign uses 4,837 hijacked GitHub accounts to steal CI and cloud secrets
original_title: Hackers compromise 4,800 GitHub accounts to steal cloud credentials
url: >-
  https://www.bleepingcomputer.com/news/security/hackers-compromise-4-800-github-accounts-to-steal-cloud-credentials/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-11-13"
published_at: "2026-11-12T22:25:30.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - github-actions
  - supply-chain
  - credential-theft
  - ci-cd
  - oidc
  - wfx-loot
  - news
why_read: >-
  Aikido's write-up gives the detection indicators and the full list of credential types targeted,
  which helps you decide what to rotate after a suspected run.
rank: 7
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Aikido reports a campaign called wfx-loot that began around 12:45 UTC on 10 November. The attacker used stolen credentials from 4,837 GitHub accounts to probe 61,764 repositories for write access. Pull requests titled 'docs: dependency audit notes' delivered a 1,500-line shell script. Secrets were confirmed stolen from at least 1,835 targets.

The script was added by editing an existing workflow, creating a workflow on a short-lived branch, or planting an npm install hook. It collects GitHub tokens, OIDC tokens, cloud credentials for AWS, Azure and Google Cloud, and developer and AI service keys. It can also exchange OIDC tokens for temporary cloud sessions and create long-lived AWS credentials.

The attacker reverted changes and deleted workflow runs and logs in under a minute, so evidence is thin. Some compromised accounts belonged to Fortune 100 firms, the US General Services Administration and the French government. About 50 appear to hold publishing rights on npm, PyPI, Go, crates and Packagist. Malicious code reached a Packagist package and two Go module versions, which researchers see as a byproduct of automated publishing.

Aikido advises checking for the 'wfx-docs' branch, the probe pull request and gaps in workflow run numbers. If the payload ran, treat all secrets and cloud roles available to those workflows as compromised and rotate them. 92% of the pull requests remain open, which suggests owners have not noticed.
