---
id: 75167e48c4
title: Two PyPI releases of Microsoft's agent-framework carried a credential stealer
original_title: Credential stealer slipped into Microsoft’s official Python agent framework
url: https://www.helpnetsecurity.com/2026/11/19/microsoft-agent-framework-package-pypi-compromised/
source: Help Net Security
kind: news
section: cloud-and-supply-chain
date: "2026-11-19"
published_at: "2026-11-19T12:53:44.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - pypi
  - supply-chain
  - credential-theft
  - microsoft
  - python
  - ci-cd
  - news
why_read: >-
  The original lists the payload's targets, the affected versions and the response steps from
  StepSecurity and OX, including why rotating stored secrets alone falls short.
rank: 2
interest_score: 8.3
depth_score: 7
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Versions 1.26.1 and 1.26.2 of Microsoft's agent-framework package were published to PyPI on 17 November 2026 with a credential-stealing payload. It runs from a .pth startup hook, so it executes when Python starts, with no import of the framework needed. PyPI quarantined both releases. The attacker uploaded 1.26.2 after 1.26.1 was already quarantined. Version 1.26.0 is the last clean release.

The stealer gathers environment variables with names containing TOKEN, SECRET, AZURE, AWS or GITHUB. It reads the environments of up to 300 other processes. It copies .env files and credential files for Azure CLI, pip, npm, Git, Docker and Hugging Face. It also requests fresh Azure managed-identity and CI federation tokens. Version 1.26.2 added GitHub Actions OIDC tokens. Everything is sent to a webhook.site endpoint.

The package has about 192,534 monthly downloads, and the malicious versions still depended on the genuine agent-framework-core 1.26.0, so the framework kept working. Rotating stored secrets is not enough, because tokens already issued stay valid. Teams should also review OIDC permissions, federated credentials and managed-identity role assignments. StepSecurity says the token requests are only attempts, and no issuance is confirmed.

None of the reports explain how the attacker obtained publishing rights. In 1.26.2 the attacker restored Microsoft's original package initializer and moved the hook into af_runtime_diag.pth, which is harder to spot. Mitigations suggested include internal mirrors of approved versions, short-lived build environments and credentials, and outbound allow-lists.
