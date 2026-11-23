---
id: 19aca882cd
title: CircumVolve uses GPT-5.1 to find censorship evasion methods for under $1 in tokens
original_title: $1 of GPT-5.1 tokens finds new ways around China’s Great Firewall
url: >-
  https://www.theregister.com/security/2026/11/23/1-of-gpt-51-tokens-finds-new-ways-around-chinas-great-firewall/5311532
source: The Register
kind: news
section: papers
date: "2026-11-23"
published_at: "2026-11-23T00:23:31.000Z"
authors:
  - Simon Sharwood
comments: null
tags:
  - censorship
  - great-firewall
  - llm
  - gpt-5-1
  - security-research
  - networking
  - news
why_read: >-
  The original links to the paper, which is the place to check how evasion success was measured and
  which techniques the model actually found.
rank: 12
interest_score: 6
depth_score: 6
novelty_score: 7
utility_score: 5
scored: true
model: claude-sonnet-5-5
---

Researchers from UMass Amherst, University of Colorado Boulder and the Great Firewall Report built CircumVolve, a system that uses an LLM to write and test censorship evasion strategies. Each strategy is an executable Python program that manipulates packets or protocols, such as TCP/IP header fields, DNS queries or QUIC Initial packets. The paper was presented at ACM CCS.

The team tested it against simulated censors modelled on China, Iran, Pakistan and Kazakhstan, and on virtual private servers in those countries. Median API cost to the first successful evasion was under $1 in GPT-5.1 tokens. The system iterates on feedback from each test run.

The authors say the traffic footprint is small, at 80 KB outgoing and 150 KB incoming, with 25 to 45 second pauses between tests. They think this may avoid detection, but they only say it might. They call it a first step and argue it narrows the resource gap between Internet freedom groups and well-funded censors.

The source is a news roundup item, so detail on success rates and the specific techniques found is limited. The cost figure is a median for first success, not a total cost of a full evasion campaign.
