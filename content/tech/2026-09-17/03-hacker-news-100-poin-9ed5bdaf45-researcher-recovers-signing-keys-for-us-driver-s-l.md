---
id: 9ed5bdaf45
title: Researcher recovers signing keys for US driver's license barcodes
original_title: "Keys Not Included: recovering the signing keys for US driver's license barcodes"
url: https://ryan.science/blog/keys-not-included
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-17"
published_at: "2026-09-17T03:03:23.000Z"
authors:
  - Ryan5453
comments: https://news.ycombinator.com/item?id=49735930
tags:
  - security
  - cryptography
  - identity
  - reverse-engineering
  - dmv
  - barcode
  - community
why_read: >-
  You will see how the signing keys were recovered and what it means for any system that trusts a
  scanned driver's licence barcode.
rank: 3
interest_score: 8.3
depth_score: 9
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A security researcher reports recovering the HMAC and ECDSA signing keys used to sign the barcodes on US driver's licences, allowing forgery of compliant scannable IDs. The post details the reverse engineering of the AAMVA barcode format, the extraction of keys embedded in state DMV-issued cards, and the construction of working forgeries.

For anyone building ID verification or age-gating flows that rely on barcode scans, this is the kind of upstream assumption worth understanding, since the trust model collapses if the signing keys are recoverable from the cards themselves. Tools that only check format conformance, and not cryptographic verification against a trusted source, are exposed.

The practical impact depends on whether each verifier actually checks the signature against the issuing authority's key, or just parses the barcode fields. Many age-check and KYC integrations do the latter, which is where this finding matters.
