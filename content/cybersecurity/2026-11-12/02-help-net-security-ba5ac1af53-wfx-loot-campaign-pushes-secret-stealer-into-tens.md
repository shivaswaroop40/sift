---
id: ba5ac1af53
title: wfx-loot campaign pushes secret stealer into tens of thousands of GitHub repositories
original_title: "Check your GitHub repos: A secret stealer hit tens of thousands of them"
url: https://www.helpnetsecurity.com/2026/11/12/wfx-loot-github-actions-secret-stealer/
source: Help Net Security
kind: news
section: incidents
date: "2026-11-12"
published_at: "2026-11-12T09:24:32.000Z"
authors:
  - Mirko Zorz
comments: null
tags:
  - github-actions
  - supply-chain
  - secret-theft
  - aws
  - azure
  - wfx-loot
  - news
why_read: >-
  The original lists the indicators to search for in your repositories and the cloud persistence
  mechanisms that survive secret rotation, which you need for incident response.
rank: 2
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Aikido has named a campaign, wfx-loot, in which an attacker uses stolen GitHub credentials to push a credential-stealing payload. Since 10 November, 4,837 compromised accounts have opened probe pull requests in 61,764 repositories. In more than 1,800 of them the malware ran and sent Actions secrets and cloud credentials to the attacker. Of the probe pull requests, 92 percent remain open.

The attacker opens a pull request titled "docs: dependency audit notes" to test write access. It then pushes a shell script of about 1,500 lines through an existing workflow, an npm install hook or a new workflow on a throwaway branch. Within a minute it reverts the change and deletes the run and its logs. Often only a skipped run number remains.

The script takes Actions secrets, cloud and SSH credential files, shell histories and AI tool tokens. It creates long-lived AWS access keys, rewrites an AWS role trust policy to accept any account, and adds federated identity credentials to Azure applications. These survive secret rotation, so rotating tokens alone does not evict the attacker. Each change must be found and removed in every linked cloud account.

Detection is hard. Data went straight to two attacker servers over HTTP, so missing artifacts prove little. Indicators include a wfx-docs branch, the probe pull request, and commits titled "ci: refresh build cache", "chore: add ci helper" or "chore: add dependency audit workflow". Packagist package digitalelvis/neuronai-studio 3.14.3 carried the payload, and any machine that installed it should be treated as compromised.
