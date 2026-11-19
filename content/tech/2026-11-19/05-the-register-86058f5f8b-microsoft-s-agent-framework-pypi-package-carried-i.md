---
id: 86058f5f8b
title: >-
  Microsoft's agent-framework PyPI package carried info-stealing malware in versions 1.26.1 and
  1.26.2
original_title: Microsoft's official Python agent framework hijacked to distribute malware
url: >-
  https://www.theregister.com/security/2026/11/18/microsofts-official-python-agent-framework-hijacked-to-distribute-malware/5310858
source: The Register
kind: news
section: security
date: "2026-11-19"
published_at: "2026-11-18T17:23:37.000Z"
authors:
  - Brandon Vigliarolo
comments: null
tags:
  - supply-chain
  - pypi
  - python
  - microsoft
  - malware
  - ci-cd
  - news
why_read: >-
  The Register piece gives the affected versions and what the malware harvests, which is enough to
  decide whether to check your build environments and rotate secrets.
rank: 5
interest_score: 8
depth_score: 6
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Versions 1.26.1 and 1.26.2 of Microsoft's agent-framework on PyPI were found to install an info-stealer. OX Security says 1.26.1 was reverted, then 1.26.2 was uploaded through Microsoft's official publisher account. That suggests the credentials were still in the attacker's hands. The Register links this to apparent unauthorised access to a GitHub organisation admin account.

The malware runs without the package being imported. A Python interpreter starting with the package in site-packages is enough. It pulls the genuine 1.26.0 release so the install looks normal. It collects environment variables and credential files for Azure, Git, Docker and Hugging Face, then sends them, base64-encoded, to a hard-coded webhook.site address.

It also requests fresh identity tokens from GitHub Actions, Azure DevOps and Azure, and exfiltrates those too. Researchers at OpenSourceMalware say this makes CI environments especially exposed, because even short-lived tokens are useful if stolen at once. The malware is not persistent and only runs while the bad version is installed.

The package sees nearly 200,000 downloads a month. The agent-framework GitHub repo is offline, as is the ONNX Runtime repo, though nobody has linked the second to the campaign. Microsoft says it has made some repositories private while it investigates.
