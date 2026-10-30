---
id: "1264657e31"
title: Binance loses $6.3 billion in theft attributed to North Korea's TraderTraitor
original_title: Binance hit by $6.3 billion theft in what could be the biggest crypto heist on record
url: https://www.helpnetsecurity.com/2026/10/30/binance-crypto-hack/
source: Help Net Security
kind: news
section: incidents
date: "2026-10-30"
published_at: "2026-10-30T08:26:13.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - binance
  - crypto-theft
  - north-korea
  - hot-wallet
  - signing-infrastructure
  - devops
  - news
why_read: >-
  You get Binance's security updates, the stablecoin freeze figures, and TRM's on-chain analysis of
  the signing infrastructure compromise.
rank: 5
interest_score: 7.7
depth_score: 7
novelty_score: 9
utility_score: 7
scored: true
model: glm-5.3
---

About $6.3 billion in cryptocurrency was stolen from Binance in what may be the largest crypto theft on record. TRM Labs counts about $6.36 billion leaving Binance wallets across ten blockchains, around four times the $1.5 billion taken from Bybit in February 2025. The firm attributes the theft with high confidence to TraderTraitor, the North Korean group behind the Bybit hack, and Chainalysis reached the same conclusion. Binance's initial investigation suggests a compromised DevOps engineer's laptop let an attacker reach a service container and submit unauthorised withdrawal transactions.

The mechanism matters for anyone running signing infrastructure. Wallets on different chains, using different key types and signing schemes, all produced valid signatures for the attackers within about half an hour. On Ethereum, the attackers took control of a hot wallet using 50 authorisations signed in advance, which early indicators suggest were phished. TRM assesses the pattern as a compromise of Binance's hot wallet signing infrastructure. Binance says it found no evidence of a wallet private key leak.

Freezes have locked part of the stolen funds. Tether froze more than 1.567 billion USDT and Circle froze more than 800 million USDC. Combined freezes by Tether, Circle, Ripple, World Liberty Financial and Arbitrum's Security Council reached about $2.7 billion by early 30 October, and Binance puts the on-chain total frozen with blockchain partners close to $3 billion. The attackers still hold more than 420,000 ETH and 18,270 BTC, worth about $2.4 billion.

Binance says it will cover all losses from its SAFU fund and company funds. Withdrawals stay paused until a security revamp of the withdrawal service finishes, with resumption expected within 48 hours. TRM expects the remaining funds to move through cross-chain bridges, swap services and over-the-counter brokers, and advises exchanges to screen deposits against the addresses it has tied to the theft. A technical post-mortem and an updated Proof of Reserves are promised.
