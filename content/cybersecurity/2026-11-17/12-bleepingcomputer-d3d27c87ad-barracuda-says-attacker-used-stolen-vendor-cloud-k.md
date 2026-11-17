---
id: d3d27c87ad
title: >-
  Barracuda says attacker used stolen vendor cloud key and ARTEX AI framework to breach cloud
  accounts
original_title: Barracuda links cloud breach to ARTEX AI-powered cyberattack
url: >-
  https://www.bleepingcomputer.com/news/security/barracuda-links-cloud-breach-to-artex-ai-powered-cyberattack/
source: BleepingComputer
kind: news
section: incidents
date: "2026-11-17"
published_at: "2026-11-16T19:57:13.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - barracuda
  - artex
  - cloud-security
  - credential-theft
  - supply-chain
  - kubernetes
  - news
why_read: >-
  The article shows how a forgotten vendor key and credential chaining let an AI-driven framework
  move through cloud, code and Kubernetes systems quickly, and what Barracuda told customers to do.
rank: 12
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Barracuda says an attacker accessed about 10 of its cloud accounts over 44 hours between 1 and 2 November. The company found the intrusion on 4 November. It says the attacker used a cloud access key issued to a third-party AI vendor for an earlier project, and that the open-source AI pentesting framework ARTEX drove the activity.

Barracuda did not retire the key when the vendor's work ended. It believes the key was stolen from the vendor in October, and confirmed it sat in a configuration file in the vendor's GitHub repository. The attacker then chained credentials found in one system to reach the data analytics environment, source-code repositories and Kubernetes clusters.

The attacker tried to persist by deploying a container that mounted the host file system, including stored credentials. An attempt to create a new cloud administrator identity was blocked. Commands hunting for private keys, Ethereum keystores and seed phrases suggest a financial motive, though Barracuda does not rule out a diversion.

The attacker reached a system holding customer integration credentials for Barracuda XDR. There is no evidence they were accessed or stolen. Even so, Barracuda asked affected Managed XDR Cloud and Monitored Endpoint customers to revoke and recreate those credentials.
