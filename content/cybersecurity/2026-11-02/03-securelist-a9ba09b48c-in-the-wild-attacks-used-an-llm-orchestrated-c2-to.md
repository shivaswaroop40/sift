---
id: a9ba09b48c
title: In-the-wild attacks used an LLM-orchestrated C2 to reach full domain compromise
original_title: "CyberStrikeAI in the wild: the use of AI in real-world attacks on organizations"
url: https://securelist.com/tr/cyberstrikeai-attacks/121715/
source: Securelist
kind: research
section: threat-research
date: "2026-11-02"
published_at: "2026-11-02T08:00:24.000Z"
authors:
  - Kirill Antonov
  - Vladislav Vlasov
  - Dmitry Chizhmak
comments: https://securelist.com/tr/cyberstrikeai-attacks/121715/#respond
tags:
  - llm
  - c2
  - cyberstrikeai
  - attribution
  - detection
  - post-exploitation
  - research
why_read: >-
  The original sets out the full attack timeline, CyberStrikeAI's architecture, the attribution
  artefacts and Kaspersky's indicators of compromise.
rank: 3
interest_score: 8
depth_score: 8
novelty_score: 9
utility_score: 7
scored: true
model: glm-5.3
---

Kaspersky's threat intelligence team found a live campaign run through CyberStrikeAI, an open-source Go framework in which an LLM orchestrator on the command-and-control server plans actions, picks tools and generates commands, while a conventional implant executes them on hosts. Confirmed victims were education sector organisations across Africa and Latin America. Kaspersky calls it one of the first public descriptions of an LLM used inside a real compromise.

Initial access came through a compromised SQL Server, version 16.0.1000, where a human operator spent nearly a day on recon before a two-week pause. The CyberStrikeAI agent then set up persistence and finished local recon in two minutes, ran domain recon over five hours, and after several days moved laterally via SMB and WMI, dumped credentials at scale and exported databases in under an hour. Post-exploitation, the stage that traditionally needed a hands-on operator, was delegated to the model.

For detection, the implant side is conventional. It carries no AI logic, no API keys and no autonomous behaviour, and polls the listener over HTTP/S, TCP or WebSocket, so traffic looks like an ordinary remote-control session. The control panel's self-signed TLS certificate names CyberStrikeAI in its issuer and subject fields and is rebuilt in memory at each start, so not_before records process launch time. Go build metadata holds a generator path identical across payloads, and the implant sends an X-Implant-Token header unique to each C2 server.

Attribution has a caveat. The implant version does not track the server version, and an agent can run for months while the operator updates server-side components. Kaspersky saw a single agent version throughout the incident. A sample's build date marks the earliest possible deployment of the CyberStrikeAI infrastructure, but gives no estimate of how long the compromise lasted.
