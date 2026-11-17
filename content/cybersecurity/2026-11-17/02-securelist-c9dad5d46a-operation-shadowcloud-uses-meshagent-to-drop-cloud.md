---
id: c9dad5d46a
title: >-
  Operation ShadowCloud uses MeshAgent to drop cloud-C2 backdoors on Asian and African government
  networks
original_title: >-
  Operation ShadowCloud: cloud service–based backdoors targeting government networks in Asia and
  Africa. Part 1
url: https://securelist.com/operation-shadowcloud-gitdoor/122004/
source: Securelist
kind: research
section: threat-research
date: "2026-11-17"
published_at: "2026-11-17T08:00:37.000Z"
authors:
  - Saurabh Sharma
  - Noushin Shabab
comments: https://securelist.com/operation-shadowcloud-gitdoor/122004/#respond
tags:
  - operation-shadowcloud
  - gitdoor
  - meshagent
  - dll-sideloading
  - cloud-c2
  - apt
  - research
why_read: >-
  The original has the file paths, loader hashes, custom Base64 alphabet and C2 address that you can
  use to build detections and hunt for sideloading.
rank: 2
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Kaspersky found an active campaign, named Operation ShadowCloud, in early 2026. The actor abuses the legitimate MeshCentral agent to deliver two new backdoors, GitDoor and GraphDoor. Their C2 traffic runs over Microsoft SharePoint, GitHub and Ably. Victims are mainly government bodies in Asia and Africa. Sophos has covered a fragment of the campaign.

In the cases analysed, MeshAgent ran inside a Taiwanese organisation and connected to a hard-coded WebSocket server. The entry point is unknown, though the evidence suggests reuse of an earlier infection. Through the agent, the actor dropped a legitimate signed binary, a malicious loader DLL and an encrypted config.ini payload.

The loaders are sideloaded by trusted programs including Sandboxie Start, a Python binary, OpenJDK's javaw.exe and Sysinternals ZoomIt. Type 1 decodes the payload with custom Base64, RC4 and XOR. It then uses the RtlEthernetAddressToStringA and RtlEthernetStringToAddressA APIs to transform the bytes. Type 2 uses XOR alone. Both run the result in memory.

This is Part 1 and covers the infection chain, GitDoor and shellcode families. The source text is truncated before the GitDoor command processing and GitHub details. Part 2 covers GraphDoor, the plug-ins and the attribution to Chinese-speaking groups.
