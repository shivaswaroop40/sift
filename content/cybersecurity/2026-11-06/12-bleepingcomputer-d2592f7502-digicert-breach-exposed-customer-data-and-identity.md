---
id: d2592f7502
title: DigiCert breach exposed customer data and identity documents after migration error
original_title: DigiCert data breach exposes customer information, identity documents
url: >-
  https://www.bleepingcomputer.com/news/security/digicert-data-breach-exposes-customer-information-identity-documents/
source: BleepingComputer
kind: news
section: incidents
date: "2026-11-06"
published_at: "2026-11-05T16:12:46.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - digicert
  - data-breach
  - certificate-authority
  - identity-documents
  - authorization-flaw
  - news
why_read: >-
  The original includes DigiCert's Bugzilla incident report, the breach notification text, and
  details of the authorization flaw and detection timeline.
rank: 12
interest_score: 6.7
depth_score: 6
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

DigiCert has disclosed a data breach affecting archived customer records. According to an incident report on Mozilla's Bugzilla, a server migration in February 2025 exposed an internal business system to the internet that was previously reachable only over VPN. The system kept a self-registration feature, and an authorization flaw let externally created accounts read archived customer data. DigiCert confirmed on 19 October that an unauthorized account accessed customer information between 27 June and 2 July 2026.

The exposed records contained names, business email addresses, phone numbers, and business addresses. For some customers they also held identity documents, such as driver's licenses, passports, and utility bills. DigiCert says the account had read-only access and could not modify records, approve certificate validations, or issue certificates. Its certificate authority services, CertCentral, and DigiCert ONE platforms were not compromised, and customer login credentials and issued certificates remain secure.

Detection took months. DigiCert found unauthorized accounts on the system in June 2026 but judged them harmless because they were not assigned to an application. After a report through its managed security research program, it restricted access and fixed the authorization flaw, yet did not realise archived data had been read. The company acknowledged the incident was initially handled as an account-creation issue rather than a data-access event.

DigiCert has now disabled self-registration and added further access controls. It is still reviewing identification documents to determine who was affected and will notify those customers once the review is complete. The total number of affected people is not yet known.
