---
id: 5401f7fc63
title: Cloudflare's post-quantum GeoKey Manager beta drops attribute-based encryption
original_title: Cloudflare’s Post-Quantum GeoKey Manager Enters Closed Beta Without Attribute-Based Encryption
url: >-
  https://www.infoq.com/news/2026/10/cf-pq-geokey-manager/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-11-01"
published_at: "2026-10-31T19:56:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - cloudflare
  - post-quantum
  - encryption
  - key-management
  - data-sovereignty
  - news
why_read: >-
  The Cloudflare post details the HPKE construction, the epoch rotation model, and the checks that
  gate root key delivery to edge servers.
rank: 9
interest_score: 6
depth_score: 6
novelty_score: 7
utility_score: 5
scored: true
model: glm-5.3
---

Cloudflare has moved a post-quantum rebuild of GeoKey Manager into closed beta. The beta opened on 23 October to existing Data Localization Suite customers, with general availability planned for the first quarter of 2027. The redesign drops the attribute-based encryption used since 2022, because no production-ready post-quantum variant exists and customers do not need that many regions. Key protection now uses HPKE from RFC 9180, with a KEM combining ML-KEM-768 and X25519, HKDF-SHA-256 and AES-256-GCM.

Two key types replace the old policy expressions. Regional root keys are 256-bit symmetric secrets, one per region. Application-specific key pairs are derived from a root for a single service, such as Tunnel or Gateway, and a single epoch, Cloudflare's term for a key generation. Quicksilver, the globally replicated key-value store, carries only wrapped keys and metadata. Root keys travel a separate path through the provisioning service into Vault, and edge servers must clear TPM identity checks, a Zinc inventory lookup, and a provisioning decision before receiving one.

Root keys load into the kernel keyring rather than onto disk, so a machine restart wipes them and the server must re-authenticate. Rotation works through epochs. A soft rotation creates a new epoch while a limited number of previous ones stay usable. A hard rotation rewraps keys under a replacement epoch and removes the old access. The design fails closed. Any failed check on service context, region, or epoch rejects the request, and a missing or malformed key at the edge means the service does not start.

Cloudflare calls failing closed "a very intentional design choice", but commenters asked whether a failed provisioning or rotation step could cause a region-wide outage, and what the blast radius of a compromised regional root key or control plane would be. The rebuild extends earlier post-quantum work, including hybrid ML-KEM for IPsec from March, when over 60% of human-generated TLS traffic on the network already used it.
