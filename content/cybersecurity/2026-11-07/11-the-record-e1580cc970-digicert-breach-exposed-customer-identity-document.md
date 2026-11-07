---
id: e1580cc970
title: DigiCert breach exposed customer identity documents after system left VPN
original_title: Certificate authority DigiCert reports data breach involving business customer info
url: https://therecord.media/digicert-certificate-authority-reports-data-breach
source: The Record
kind: news
section: incidents
date: "2026-11-07"
published_at: "2026-11-06T18:56:00.000Z"
authors: []
comments: null
tags:
  - digicert
  - data-breach
  - certificate-authority
  - misconfiguration
  - identity-documents
  - news
why_read: >-
  The original post-mortem details how a network migration bypassed security review and what
  DigiCert has disclosed about the accessed data.
rank: 11
interest_score: 5.7
depth_score: 5
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

Certificate authority DigiCert has reported a breach of an internal business system. The system was moved out of a VPN-restricted network in February 2025, leaving it externally accessible. DigiCert determined on 21 June 2026 that the exposure was unintended and that an unassigned account had been created. The database was accessed from 27 June. The issue was fixed by 2 July and confirmed as a reportable event on 19 October.

The accessed data included customer names, business email addresses, phone numbers and documents such as driver's licenses, passports and utility bills. DigiCert did not say how many customers were affected. The company said it has found no evidence of misuse and has reported the incident to law enforcement. A spokesperson declined to say whether the attackers had contacted DigiCert.

DigiCert said the attackers could not issue certificates or take other actions, and that its certificate authority services and customer login credentials were unaffected. The incident was still reportable under rules from Mozilla, Google Chrome, Microsoft and Apple. The breach links personal identity documents to specific certificate customers, a pairing several people flagged as a concern on social media.

DigiCert said the breach went undetected because the migration was treated as an infrastructure change rather than a security change, which would have triggered more detailed review and sign-off. The system also lacked alerting for new account creation through the external endpoint and for request volume from internal endpoints. That failure mode applies to any team that moves systems between network zones.
