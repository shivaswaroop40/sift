---
id: df1e936b27
title: Researchers find cloud keys in Docker Hub images are abused within seconds of publication
original_title: Cloud keys leaked in Docker Hub images are stolen within seconds
url: >-
  https://www.bleepingcomputer.com/news/security/cloud-keys-leaked-in-docker-hub-images-are-stolen-within-seconds/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-11-18"
published_at: "2026-11-17T21:27:17.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - docker-hub
  - secrets-leakage
  - aws
  - container-registries
  - honeypot
  - api-keys
  - news
why_read: >-
  The article gives the measured time-to-exploit figures and the researchers' recommendations, which
  help you judge how fast leaked registry secrets must be revoked.
rank: 11
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Researchers at Stony Brook University published 300 honeypot images across eight public container registries over four months. The images held planted AWS, OpenAI and Anthropic API keys, plus decoy SSH and database credentials. The fastest use of an AWS key came 7.86 seconds after publication on Docker Hub. The median was 51.19 seconds, and all 100 AWS keys were used within 15 minutes.

The images were pulled more than 75,000 times. The AWS keys received over 140,000 API calls from 5,000 unique IP addresses. Activity ranged from checking whether keys worked, to listing resources, to consuming them. The OpenAI and Anthropic keys were hijacked quickly to drain test-account balances. Docker Hub drew nearly all the AWS activity, and Harbor saw some abuse too.

Monitoring rarely showed anyone running the images. The authors conclude that scanners pull secrets by unpacking image layers or querying the registry API, without starting a container. The scanners showed no sign of common operators, so "ContainerBots" is a loose label.

This means a leaked key in a public image should be treated as compromised at once. Rotating after a few hours is too slow. The researchers urge Docker Hub to scan for secrets before images go live and to limit its public feed of new images. They reported this to Docker in May and got only an acknowledgment. An August check found no changes.
