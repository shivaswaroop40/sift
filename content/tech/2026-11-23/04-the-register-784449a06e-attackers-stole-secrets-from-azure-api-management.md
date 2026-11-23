---
id: 784449a06e
title: >-
  Attackers stole secrets from Azure API Management Classic instances, hitting two Norwegian energy
  firms
original_title: Norway links energy firm cyberattacks to critical Azure API Management flaw
url: >-
  https://www.theregister.com/security/2026/11/23/norway-links-energy-firm-cyberattacks-to-critical-azure-api-management-flaw/5311598
source: The Register
kind: news
section: security
date: "2026-11-23"
published_at: "2026-11-23T12:29:00.000Z"
authors:
  - Connor Jones
comments: null
tags:
  - azure
  - api-management
  - vulnerability
  - secrets-management
  - energy-sector
  - incident-response
  - news
why_read: >-
  The article gives the affected tiers, the configuration risk factors and NSM's remediation advice,
  which is useful if you run Classic APIM or keep secrets inside it.
rank: 4
interest_score: 7.3
depth_score: 6
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Microsoft has issued a critical advisory after attackers extracted secrets and performed admin operations on Azure API Management Classic instances. Norway's NSM says Equinor and Skagerak Energi were among those affected. Microsoft says the v2 tiers are not affected. It identified the issue on 18 November and applied a mitigation automatically the next day.

Microsoft ties exposure to Classic configurations that ignored its network security guidance, or that stored secrets directly in APIM instead of referencing Azure Key Vault. Exposed material may include named values, identity provider and OpenID Connect client secrets, subscription keys and tokens for direct management APIs.

The mitigation closes the access path but does not tell you whether you were compromised earlier. Microsoft says customers must investigate that themselves. NSM advises assuming all secrets and named values were exposed, rotating them, and mapping what each instance can reach.

Stolen credentials may work against backend services directly, outside APIM, depending on their permissions and validity. Customers warned that forgotten development and test instances could widen exposure. The extent of exploitation is unclear, and the advisory is nonpublic, as seen by The Register.
