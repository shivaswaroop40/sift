---
id: c702a1a9d1
title: Microsoft Agent Framework PyPI package hijacked to publish two credential-stealing releases
original_title: Microsoft’s Agent Framework PyPI package compromised to steal credentials
url: >-
  https://www.bleepingcomputer.com/news/security/microsofts-agent-framework-pypi-package-compromised-to-steal-credentials/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-11-19"
published_at: "2026-11-18T16:58:42.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - pypi
  - supply-chain
  - credential-theft
  - microsoft
  - github-actions
  - azure
  - news
why_read: >-
  The article lists the affected versions, the .pth file names and the exfiltration endpoint, which
  you can use to check your environments and egress logs.
rank: 6
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Attackers published two malicious versions of Microsoft's Agent Framework, 1.26.1 and 1.26.2, to PyPI on 17 November 2026. The package has roughly 200,000 monthly downloads. The malware ran at Python startup through .pth files, so it executed even when the package was never imported. Both versions kept the legitimate agent-framework-core 1.26.0 dependency, so the framework still worked.

Version 1.26.1 harvested secrets from environment variables, config files and readable processes. Targets included Azure, AWS, GitHub, Docker, Hugging Face and OpenAI. It also tried to obtain Azure managed identity tokens and Azure DevOps OIDC tokens. Version 1.26.2 added GitHub Actions OIDC token requests and searches of runner directories. Both sent data to the same webhook.site endpoint.

PyPI quarantined the first release, but a second appeared about 2.5 minutes later and was quarantined about eight minutes after that. This suggests the attacker kept publishing access after the first takedown. How they gained access to Microsoft's PyPI project is still unknown, and Microsoft had not responded to BleepingComputer.

Anyone who installed either version should isolate the environment and rebuild from a clean one using 1.26.0. Rotate every credential within reach of the host. Search egress logs for the webhook URL path, and separate blocked requests from completed transfers to judge the extent of exposure.
