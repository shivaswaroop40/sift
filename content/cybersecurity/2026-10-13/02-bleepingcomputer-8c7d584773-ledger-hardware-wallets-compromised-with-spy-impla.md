---
id: 8c7d584773
title: Ledger hardware wallets compromised with spy implants in Southeast Asia supply chain
original_title: Ledger confirms spy chip implant behind wallet crypto thefts
url: >-
  https://www.bleepingcomputer.com/news/security/ledger-confirms-hardware-wallet-spy-implant-behind-crypto-thefts/
source: BleepingComputer
kind: news
section: incidents
date: "2026-10-13"
published_at: "2026-10-12T16:27:23.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - supply-chain
  - hardware-implant
  - ledger
  - cryptocurrency
  - tampering
  - southeast-asia
  - news
why_read: >-
  Learn the specific implant design, detection gaps, and supply chain vectors used to compromise
  hardware security keys at scale.
rank: 2
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Ledger confirmed that devices sold through Malaysian reseller CryptoBilis contained unauthorised hardware implants designed to steal cryptocurrency. The implants captured display output and button presses to extract seed phrases, then transmitted them via LTE using an eSIM. Researchers identified two variants, with the newer version hidden beneath the OLED display using a smaller battery.

For your infrastructure, this matters because hardware supply chains for sensitive systems remain vulnerable to physical tampering at the point of sale. Ledger's own authenticity verification cannot detect added implants when the secure element is intact. The implants were manufactured professional grade, not hand-built, suggesting organised criminal operation with manufacturing capability.

The affected devices came through unauthorized resellers on platforms like Amazon Japan and Yahoo Auctions, not through Ledger's direct channels. Ledger advises users not to set up affected devices and to migrate assets to new hardware. No other resellers have been confirmed compromised, but trust in the reseller network has degraded.
