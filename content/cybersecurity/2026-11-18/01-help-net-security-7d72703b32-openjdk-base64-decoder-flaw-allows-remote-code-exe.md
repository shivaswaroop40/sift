---
id: 7d72703b32
title: OpenJDK Base64 decoder flaw allows remote code execution, but only on certain CPUs
original_title: "Java4Shell OpenJDK flaw: Exploitation is tricky and hinges on specific CPUs (CVE-2026-114938)"
url: https://www.helpnetsecurity.com/2026/11/18/java4shell-openjdk-vulnerability-cve-2026-114938/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-11-18"
published_at: "2026-11-18T11:12:12.000Z"
authors:
  - Zeljka Zorz
comments: null
tags:
  - openjdk
  - java
  - cve-2026-114938
  - memory-corruption
  - rce
  - patching
  - news
why_read: >-
  Read it for the affected JDK builds, the AVX-512 hardware condition that narrows exposure, and
  CISA's interim controls if you cannot patch straight away.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

CVE-2026-114938, nicknamed Java4Shell, is a memory corruption bug in OpenJDK's optimised x86-64 Base64 decoder. Calif found it, and Oracle and OpenJDK fixed it on Tuesday. Malformed input, such as 64 A characters followed by an equals sign, overwrites neighbouring memory. Calif reports unauthenticated RCE in default Keycloak, Jira, Confluence, Artifactory, Jenkins and PingFederate, and authenticated RCE in several others.

Exploitation is harder than the headline suggests. VulnCheck says the vulnerable path runs only on CPUs with AVX-512 VBMI and BW features. Other CPUs use a different decode path, and ARM64 is unaffected. Crashing a JVM is trivial and repeated requests can keep a service down. RCE needs heap grooming and a separate memory leak to defeat ASLR.

Any Base64 value passed to java.util.Base64.Decoder can carry the payload. That includes HTTP Basic credentials, SAML artifacts, CSRF tokens and MIME encoded words. Oracle scores the flaw 8.1 on CVSS 3.1, while Calif scores it 9.2 under CVSS 4.0. No successful attacks are known, and VulnCheck and watchTowr expect narrow, application-specific exploitation rather than indiscriminate attacks.

Affected builds include Oracle Java SE, GraalVM and distributions from Amazon, Eclipse, Microsoft, Azul, SAP, BellSoft and Red Hat. Calif's public proof of concept only checks whether a JDK and CPU pair reproduces the corruption. It is withholding product-specific chains. Its team built the first exploit in two hours with AI help. CISA urges immediate patching and, failing that, input validation and size limits.
