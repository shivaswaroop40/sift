---
id: 7c099fcaa6
title: Fake job interview and tampered installer enabled $6.34 billion Binance theft
original_title: Fake job interview opened the door to $6.34 billion Binance heist
url: https://www.helpnetsecurity.com/2026/11/04/binance-hack-north-korea-fake-job-interview/
source: Help Net Security
kind: news
section: incidents
date: "2026-11-04"
published_at: "2026-11-04T10:29:48.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - binance
  - north-korea
  - social-engineering
  - crypto-theft
  - eip-7702
  - malware
  - news
why_read: >-
  Binance's incident report gives the full attack timeline, from the June Homebrew compromise to the
  EIP-7702 hot wallet abuse, plus industry reaction.
rank: 2
interest_score: 7.3
depth_score: 8
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

Attackers stole about $6.34 billion in digital assets from Binance on 29 October, in what is likely the largest crypto heist on record. The FBI attributed the attack to North Korea, tying it to the TraderTraitor group behind the $1.5 billion Bybit hack of February 2025. Tether, Circle and other partners froze close to $3 billion within the first day, and Binance promised to cover all user losses.

For defenders, the attack chain matters more than the headline figure. It combined fake recruitment, a trojanised package manager, compromised internal AI tooling, a stolen container deployment token, and abuse of Ethereum's EIP-7702 delegation to take partial control of a hot wallet without the private key. Endpoint protection did not detect the payload at the time. Fake recruitment is established North Korean tradecraft, previously used against defence firms in Europe.

The intrusion began in June, when a Wallet DevOps engineer installed a tampered Homebrew while seeking an AI coding tool. Binance replaced his device and reset credentials, but the attackers had already mapped his team. In September, a fake recruiter on a legitimate job platform persuaded a software engineer to download a code repository onto a company computer. The hidden malware replaced the pyenv executable with a malicious copy and launched a zsh process.

On 20 October the attackers used that machine and an internal AI tool to compromise two more engineers, finding a container deployment token on one. On the day of the theft they logged in with stolen credentials, deployed a container, and reached the wallet-signing service. Binance cleared the EIP-7702 delegation the next day, though one already-broadcast transaction still went through. Vulnerability analyst Will Dormann disputed the zero-day malware label, noting the employees simply ran undetected code.
