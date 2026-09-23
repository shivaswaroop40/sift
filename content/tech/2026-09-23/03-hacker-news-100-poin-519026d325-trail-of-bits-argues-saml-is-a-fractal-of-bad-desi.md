---
id: 519026d325
title: Trail of Bits argues SAML is a fractal of bad design and should be retired for OIDC
original_title: "SAML: A fractal of bad design"
url: https://blog.trailofbits.com/2026/09/21/saml-a-fractal-of-bad-design/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-23"
published_at: "2026-09-22T18:57:17.000Z"
authors:
  - aray07
comments: https://news.ycombinator.com/item?id=49806335
tags:
  - saml
  - oidc
  - sso
  - xml
  - security
  - authentication
  - community
why_read: >-
  A practitioner's history of SAML's design choices and a clear argument for why OIDC is the better
  default for new SSO work.
rank: 3
interest_score: 8.7
depth_score: 9
novelty_score: 8
utility_score: 9
scored: true
model: minimax-m3
---

A Trail of Bits engineer has published a detailed post arguing that the SAML SSO protocol, defined by OASIS in 2002, should be deprecated in favour of OpenID Connect. The piece describes SAML as a fractal of bad design, born from merging four rival XML-based proposals (S2ML, AuthXML, X-TASS, ITML) into one committee-driven spec.

The author ties most of SAML's problems to its XML foundation: signature validation depends on libxmlsec, a C library few people read, and the format's complexity pulls in a long tail of old bug classes including XXE, billion laughs, DTD-based SSRF and XPath injection before any SAML logic even runs.

The post also recaps the XML Signature Wracking (XSW) attack lineage from 2012 onwards, noting that simpleSAMLphp was an early exception and that XSW still shows up in modern deployments. The practical takeaway for engineers is that SAML's failure modes keep recurring because the format itself is the weak layer.

The article frames OIDC as a simpler, JSON-based alternative that avoids these structural problems. It is an opinion piece with cited research and history, not a new vulnerability disclosure.
