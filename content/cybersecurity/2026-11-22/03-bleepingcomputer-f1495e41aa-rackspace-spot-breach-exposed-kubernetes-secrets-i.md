---
id: f1495e41aa
title: Rackspace Spot breach exposed Kubernetes secrets in customer clusters via leaked credentials
original_title: Rackspace Spot breach let hackers access customer Kubernetes secrets
url: >-
  https://www.bleepingcomputer.com/news/security/rackspace-spot-breach-let-hackers-access-customer-kubernetes-secrets/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-11-22"
published_at: "2026-11-21T22:59:58.000Z"
authors:
  - Lawrence Abrams
comments: null
tags:
  - rackspace
  - kubernetes
  - secrets
  - credential-leak
  - cloud-breach
  - incident-response
  - news
why_read: >-
  The article gives the indicators of compromise and Rackspace's remediation steps, which you can
  check against your own Spot clusters and downstream credentials.
rank: 3
interest_score: 7
depth_score: 5
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Rackspace has told customers that an unauthorised party used leaked credentials to access parts of its Rackspace Spot Kubernetes platform on 17 November 2026, between about 00:20 and 22:00 UTC. The attackers acted as legitimate users in some customer organisations. They could create pods, read Kubernetes Secrets, and list nodes and volumes.

Rackspace says the attackers could have read any Secret in an affected user's clusters, plus any Spot API tokens or refresh tokens that user held. Those Secrets often hold passwords, tokens and API keys for databases and cloud services, so the exposure may extend well beyond Spot itself.

Rackspace revoked tokens and sessions, removed the unauthorised pods and rotated keys. Customers must reissue API tokens, replace refresh tokens in automation, download new kubeconfig files and rotate cluster Secrets. They should review logs from 17 November onwards for databases, registries, Git repositories and cloud storage.

Indicators include IP 23.224.79.106, the range 23.224.0.0/15, and pod or object prefixes i1, glm- and probe. Rackspace has not said how many customers were affected or whether data was stolen. The admin console was down for days while the environment was cleaned, which delayed credential rotation. Service returned on 21 November.
