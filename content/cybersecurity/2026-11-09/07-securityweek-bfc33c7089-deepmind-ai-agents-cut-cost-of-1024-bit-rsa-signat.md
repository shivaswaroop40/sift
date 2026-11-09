---
id: bfc33c7089
title: DeepMind AI agents cut cost of 1024-bit RSA signature forgery by 3.5 times
original_title: Google DeepMind’s AI Agents Make 1024-Bit RSA Keys Cheaper to Attack
url: https://www.securityweek.com/google-deepminds-ai-agents-make-1024-bit-rsa-keys-cheaper-to-attack/
source: SecurityWeek
kind: news
section: papers
date: "2026-11-09"
published_at: "2026-11-09T08:35:50.000Z"
authors:
  - Eduard Kovacs
comments: null
tags:
  - rsa
  - cryptography
  - ai-agents
  - digital-signatures
  - factoring
  - news
why_read: >-
  You get the mechanics of both attacks, the padding threshold, and the caveats, including which HSM
  signing setups are affected.
rank: 7
interest_score: 6.3
depth_score: 6
novelty_score: 8
utility_score: 5
scored: true
model: glm-5.3
---

Google DeepMind, working with cryptographers from UC San Diego and Inria, says AI agents under human supervision found two ways to cut the cost of attacking 1024-bit RSA. In a sandboxed test, two agents re-ran an earlier academic forgery attack on the same 1024-bit key and cut CPU time 3.5-fold, from 1,380 core-years to 391. They designed, ran and debugged the computation in under four days, exchanging about 20 messages with a human researcher, mostly approvals.

The padding finding matters to anyone running legacy signing infrastructure. It applies to the PKCS#1 v1.5 format used by the PKCS#11 signing interface of hardware security modules. Padding, the preset data standards add to bring a message to a fixed block size, gives no protection once the attacker controls roughly half or more of the signed block. Where the attacker controls less, such as a 32-byte hash, the agents produced an algorithm estimated to be roughly 1,600 times better than the previous best method against 1024-bit keys.

The second finding concerns factoring many RSA keys of the same size, where the cost of one large upfront computation is shared across all of them. The agents produced an algorithm that makes factoring each additional 1024-bit key roughly 30 times cheaper on average than the best previous approach. The figure is a theoretical estimate. It assumes an initial computation as costly as factoring one key, and the method has not been implemented.

The signature attack does not recover the private key. It needs roughly 4 billion signing queries made in advance and does not work against devices that hash messages internally. The test key was not factored. DeepMind estimates that would take 500,000 to 1 million core-years. The company says the results only affect obsolete 1024-bit RSA, and modern protocols using 2048-bit or larger keys remain secure.
