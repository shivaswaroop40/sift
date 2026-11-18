---
id: c663ce6590
title: Java4Shell memory flaw in OpenJDK Base64 decoding patched, enabling RCE on default enterprise apps
original_title: Java4Shell Vulnerability Puts Many Enterprise Applications at Risk of Takeover
url: >-
  https://www.securityweek.com/java4shell-vulnerability-puts-many-enterprise-applications-at-risk-of-takeover/
source: SecurityWeek
kind: news
section: vulnerabilities
date: "2026-11-18"
published_at: "2026-11-18T07:43:34.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - java
  - openjdk
  - cve-2026-114938
  - rce
  - memory-safety
  - patching
  - news
why_read: >-
  The original gives the affected products, hardware conditions and vendor patch status, which help
  you scope exposure and prioritise Java upgrades before weaponised exploits are published.
rank: 7
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

CVE-2026-114938, dubbed Java4Shell, is a memory safety bug in OpenJDK's Base64 decoder for x86-64 CPUs with AVX-512 VBMI. Invalid input can make the routine write past its output buffer and corrupt nearby heap data. Calif says it achieved pre-authentication RCE on default Keycloak, Jira, Confluence, Artifactory, Jenkins and PingFederate. Authenticated RCE worked on Kafka, Solr, Elasticsearch, Gerrit and Spinnaker.

Affected builds include OpenJDK from 17.0.6 and distributions based on it, such as Corretto, Temurin, Zulu and Oracle Java SE. The OpenJDK advisory lists Java 17, 21, 25 and 27. ARM64 systems are not vulnerable. Oracle fixed it in its November 2026 update, but other vendors must ship their own builds, and Endor Labs said the public OpenJDK 17, 21 and 25 update repositories lacked the fix as of 17 November.

Exploitation is not simple. Calif says there is no universal exploit, and VulnCheck says full RCE needs heap layout control and a per-target address leak to bypass ASLR. Crashing a JVM through a reachable decoder is easy, though. Client-side attacks over TLS to a malicious server are also possible, per an exploit from samczsun. Calif's public PoC shows corruption only. Weaponised chains stay private for now.

Scores differ. Calif gives CVSS 4.0 of 9.2, while Oracle gives CVSS 3.1 of 8.1 with high attack complexity. CISA urges immediate patching and a search for Java embedded in third-party software, containers and appliances. Cisco Talos has seen no exploitation yet but expects probing.
