---
id: 3264efeaae
title: Attackers hid commands in GitHub issues to steal CI secrets across 61 repos
original_title: >-
  Attackers turn GitHub issues into supply chain campaign against 61 public repos in less than an
  hour
url: >-
  https://www.theregister.com/security/2026/10/29/attackers-turn-github-issues-into-supply-chain-campaign-against-61-public-repos-in-less-than-an-hour/5306153
source: The Register
kind: news
section: security
date: "2026-10-30"
published_at: "2026-10-29T12:00:00.000Z"
authors:
  - Jessica Lyons
comments: null
tags:
  - github
  - supply-chain
  - ci-cd
  - security
  - secrets
  - news
why_read: >-
  The Register's exclusive lays out the attack chain, the full target list and the researchers'
  advice for hardening CI/CD workflows.
rank: 1
interest_score: 8
depth_score: 7
novelty_score: 9
utility_score: 8
scored: true
model: glm-5.3
---

Radware researchers counted 83 malicious items across 61 public GitHub repositories, including Trivy, MLflow, Brave browser and Google LangExtract. Seventy-seven appeared in a 43-minute window on September 1, with the remaining six within two minutes. The team suspects a single person using 74 GitHub accounts, many with legitimate development histories and therefore likely compromised.

The attack needs no write access to the target repository. The attacker posts an issue, pull request or comment with commands hidden in HTML comments, invisible on the rendered page. If the repo's workflow triggers on that event and folds the content into shell source code, the hidden command runs within a second and exfiltrates environment variables to an attacker-controlled server. Any GitHub user can attempt it, so any repo with a vulnerable workflow is a target.

The suspected goal is repository credentials, which would let the attacker modify code and push it downstream. The researchers found two workflow runs where the malicious command executed, but cannot confirm write access, source changes, or downstream compromise. They disclosed to all maintainers. Most repositories were closed or fixed, though not every fix is verified.

Nothing stops attackers from attempting this, the researchers note, so the defence is workflow design. Apply least-privilege access to CI/CD jobs, keep externally triggered workflows separate from jobs with elevated permissions, and limit the secrets and environment variables a workflow can see. Treat all external content as untrusted input.
