---
id: 9dde15c6db
title: Kaspersky details NetamLoader attacks on custom Asian government Windows 10 builds
original_title: NetamLoader Malware Targets Government Windows 10 Systems in Asia via .NET Injection
url: https://thehackernews.com/2026/11/netamloader-malware-targets-government.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-11-01"
published_at: "2026-11-01T07:02:58.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - netamloader
  - malware
  - dotnet-injection
  - windows
  - government
  - kaspersky
  - news
why_read: >-
  You will get Kaspersky's account of the NetamLoader infection chain and how .NET assembly loading
  was used against Asian government systems.
rank: 2
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

Kaspersky has disclosed details of an infection chain described as highly sophisticated that targets government organizations in Asia. The activity focuses on a custom Windows 10 build used exclusively by government entities in the region. The chain involves the deployment of a previously undocumented .NET assembly-loading framework, codenamed NetamLoader.

The target set is narrow and specific. A Windows 10 build used only by government entities implies the operators knew the exact software environment they were attacking. The loader was previously undocumented, so no vendor had signatures for it before this disclosure. Defenders in public-sector environments should check their coverage for .NET assembly loading and injection.

The disclosure, published this week, does not state the initial access vector, the number of affected organizations, or any attribution. It also gives no indicators of compromise in the summary coverage. Defenders should treat the current detail as partial and wait for Kaspersky's full technical report before hunting for specific artifacts.
