---
id: d6a51ae6c2
title: eMudhra admits script error gave eight TLS intermediate CAs weak keys, and exits public TLS
original_title: eMudhra Statement on Recent Certificate Security Incident
url: https://emudhra.com/en/post/certificate-security-incident
source: Lobsters
kind: community
section: security
date: "2026-11-12"
published_at: "2026-11-11T19:19:58.000Z"
authors:
  - emudhra.com via liberty
  - emudhra.com via liberty
comments: https://lobste.rs/s/pfscsm/emudhra_statement_on_recent_certificate
tags:
  - webpki
  - certificate-authority
  - emudhra
  - tls
  - chrome
  - apple
  - community
why_read: >-
  The statement gives the exact distrust dates and the migration status, which matter if you have
  any emSign G1 chained certificates in your estate.
rank: 7
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

eMudhra says a script error issued eight emSign G3 intermediate TLS CAs with weak keys, and a researcher showed the private keys were recoverable. The intermediates were revoked within 14 hours of confirmation. The company says they had not issued publicly trusted end-entity certificates and that its infrastructure and customer data were not compromised.

Browser root programs have since distrusted the affected hierarchies. Chrome and Mozilla will stop trusting new emSign G1 certificates after SCTNotAfter dates of 16 November 2026. Apple will remove G1 entirely on 30 November 2026, which affects every certificate issued under it. eMudhra is winding down public TLS issuance.

Most customers have moved to other providers at no cost. The exception is a US client ecosystem with about 30,800 certificates under the affected G3 hierarchies. It is using an alternate G1 RSA pathway while it migrates, and eMudhra says it expects this to finish before Apple's date.

eMudhra has appointed KPMG as independent reviewer and promises a root-cause analysis through CCADB. That analysis has not yet appeared in the text. The statement gives no detail on how the script failed or why controls missed weak keys.
