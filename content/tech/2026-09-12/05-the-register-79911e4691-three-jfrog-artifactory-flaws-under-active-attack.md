---
id: 79911e4691
title: Three JFrog Artifactory flaws under active attack, patches available
original_title: More JFrog Artifactory bugs under attack, and all 3 have patches
url: >-
  https://www.theregister.com/security/2026/09/11/more-jfrog-artifactory-bugs-under-attack-and-all-3-have-patches/5295943
source: The Register
kind: news
section: security
date: "2026-09-12"
published_at: "2026-09-11T17:43:30.000Z"
authors: []
comments: null
tags:
  - jfrog-artifactory
  - cve-2026-42018
  - cve-2026-42016
  - cve-2026-82329
  - active-exploitation
  - supply-chain-security
  - news
why_read: >-
  Get the CVE details, patch status, and post-exploitation behaviour so you can prioritise fixing
  your Artifactory instances.
rank: 5
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: deepseek-v4-flash
---

Multiple attackers are exploiting three JFrog Artifactory vulnerabilities to gain administrative control of vulnerable instances, sometimes days after patches were published. The flaws are CVE-2026-42018, an improper authentication issue that can leak an internal anonymous-user token; CVE-2026-42016, a privilege-escalation bug; and CVE-2026-82329, a critical authentication bypass. Wiz confirmed in-the-wild exploitation of all three across multiple environments.

Artifactory is a package repository manager, so admin access gives attackers a foothold in the software supply chain. Wiz observed intruders chaining the first two flaws to drop a custom Rust backdoor, create persistent admin accounts, install Groovy plugins for remote code execution, run shell commands, and upload web shells. Exploitation of the critical bug included exfiltration of configuration details, token minting, and SSH key attachment.

Patching has been slow. Six weeks after JFrog fixed CVE-2026-42016, 59 percent of organisations remained vulnerable; 62 percent remained vulnerable to CVE-2026-42018 after four weeks. Even for the critical CVE-2026-82329, 49 percent were still unpatched two weeks after disclosure. Wiz advises prioritising internet-accessible Artifactory instances and restricting network access to trusted systems.

One point of agreement is that none of these CVEs were exploited before JFrog published fixes. That makes upgrading the clear move. JFrog has not responded to The Register's questions about the attacks. Wiz and The Register both recommend moving to a fixed Artifactory version as soon as possible.
