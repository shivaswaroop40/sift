---
id: 746be3de99
title: Malicious agent-framework 1.26.1 and 1.26.2 on PyPI steal Azure and CI credentials
original_title: "Microsoft agent-framework Compromised: Credential Stealer Targets Azure and CI Pipelines"
url: https://www.wiz.io/blog/malicious-version-of-microsofts-agent-framework-published-to-pypi
source: Wiz Blog
kind: research
section: cloud-and-supply-chain
date: "2026-11-18"
published_at: "2026-11-17T22:03:37.000Z"
authors:
  - Rami McCarthy
  - Rami McCarthy
comments: null
tags:
  - pypi
  - supply-chain
  - azure
  - credential-theft
  - github-actions
  - oidc
  - research
why_read: >-
  The original has the full indicator list, hashes, file names for both versions and the Wiz
  response steps for checking exposure and rotating credentials.
rank: 4
interest_score: 8
depth_score: 6
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Two malicious versions of Microsoft's agent-framework package, 1.26.1 and 1.26.2, were uploaded to PyPI on 17 November 2026 at 20:35 and 21:08 UTC. Both were gone by 21:30 UTC. They drop a .pth file into site-packages, so the stealer runs on every Python start, even if the package is never imported. The last safe version is 1.26.0.

The stealer targets Azure and Azure DevOps. It collects secret-looking environment variables, up to 300 other processes' environments, and credential files such as ~/.azure, .npmrc, .git-credentials and Hugging Face tokens. It also requests Azure DevOps OIDC tokens and managed-identity tokens for 12 Azure resources. Version 1.26.2 adds GitHub Actions OIDC token theft and a new file name, af_runtime_diag.pth, so searches for 1.26.1 names alone will miss it.

The root cause is unconfirmed. There is no matching tag in the Microsoft repository, and 1.26.1 was a wheel only, unlike legitimate releases. That suggests it was built outside the normal release process and uploaded directly. Wiz has not linked it to an earlier durabletask compromise.

Data went by HTTPS POST to a free-tier webhook.site URL, which caps at 100 requests. Wiz confirmed at most 50 were captured. That limits exposure, but the captured requests can hold working cloud, CI and registry credentials.
