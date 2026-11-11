---
id: dab0d41e67
title: DeepMind's AlphaProof Code verifies Signal's PQXDH and Triple Ratchet in four weeks
original_title: Google DeepMind melds humans and AI agents to vet Signal's secure messaging techniques
url: >-
  https://www.theregister.com/ai-and-ml/2026/11/10/google-deepmind-melds-humans-and-ai-agents-to-vet-signals-secure-messaging-techniques/5308625
source: The Register
kind: news
section: papers
date: "2026-11-11"
published_at: "2026-11-10T12:00:00.000Z"
authors:
  - Thomas Claburn
comments: null
tags:
  - formal-verification
  - signal
  - cryptography
  - lean
  - deepmind
  - ai-agents
  - news
why_read: >-
  The original has the cost comparison with seL4 and CompCert, and Chaudhuri's account of why
  specification, not proof, is now the bottleneck.
rank: 4
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Google DeepMind researchers say they have formally verified Signal's post-quantum PQXDH handshake and Triple Ratchet, linking protocol-level guarantees to the libsignal implementation at machine-code level. They claim it is the first AI-assisted proof of this kind. Humans reviewed a Lean specification, and Gemini agents then generated about 6.5 million lines of Lean proof, which the Lean kernel checks.

The properties covered are forward secrecy, authentication, post-compromise security and handshake secrecy. The result is theoretical. It assumes perfect cryptography and does not guarantee the computational secrecy of bytes. An auditing pass flagged parts of the output for human review.

The cost is the interesting number. The paper cites 20 person-years for seL4 and six years for CompCert. This work took four weeks for five people, plus what the team calls quite a few tokens. That is one data point on one well-studied protocol, so treat any claim of general cost reduction as unproven.

Lead researcher Swarat Chaudhuri says the hard part has moved from proving to specifying. Humans still had to decide what to prove. The team wants to apply this to code in general during design, but says it has not yet worked out how to write those properties at scale.
