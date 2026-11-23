---
id: 57be79fe23
title: Wiz tracks surge in attacks using ARTEX and other agentic offensive frameworks
original_title: "Agentic Attacks: In The Wild"
url: https://www.wiz.io/blog/agentic-attacks-artex-offensive-ai-frameworks
source: Wiz Blog
kind: research
section: threat-research
date: "2026-11-23"
published_at: "2026-11-23T14:46:19.000Z"
authors:
  - Rami McCarthy
  - Rami McCarthy
comments: null
tags:
  - agentic-attacks
  - artex
  - cloud-security
  - kubernetes
  - ci-cd
  - threat-intelligence
  - research
why_read: >-
  It gives concrete fingerprints, an attack chain from CI to Kubernetes cluster-admin, and detection
  signals you can compare with your own logs.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Wiz Research reports rapid growth in successful attacks driven by agentic offensive frameworks, including ARTEX, Cairn, CyberStrikeAI and HexStrike. Twenty more related incidents have been disclosed by vendors since its Black October post three weeks ago. Wiz's incident response team has seen a 3x rise in engagement requests. ARTEX is open source with hundreds of forks, so activity under its name comes from unrelated operators.

Wiz describes one tracked campaign, ARTEX-Harvester, linked to more than a dozen organisations between late October and mid-November 2026. Requests used residential and ISP proxy exits, across more than 220 IPs at a single target. In one success, stolen version control credentials led to CI workload identity abuse, secrets and Terraform state theft, and a Kubernetes pod escape that ended in cluster-admin via cert-manager and ArgoCD secrets.

The campaigns are noisy and self-labelling. Agents leave strings such as pentest and recon in user agents, workspaces and pods, plus an incrementing intent counter (pentest-iNNNNNN). Wiz says rules that do not depend on the framework still caught the activity, including privileged container creation, nsenter use and IMDS kube-env queries.

Poor operational security gives defenders extra visibility. ARTEX exposed its web console by default, often with default credentials, and Censys counted over 1,400 exposed consoles in early November. These expose operator prompts, agent transcripts and model reasoning. The source text is truncated before the paired-telemetry case study is complete.
