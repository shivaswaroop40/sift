---
id: 981cbff393
title: AvisLoader loader uses Tox P2P network to evade command-and-control disruption
original_title: "Inside AvisLoader: A Windows Malware Loader Built to Resist Disruption"
url: >-
  https://www.bleepingcomputer.com/news/security/inside-avisloader-a-windows-malware-loader-built-to-resist-disruption/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-10-13"
published_at: "2026-10-12T14:00:10.000Z"
authors:
  - Sponsored by Varonis
comments: null
tags:
  - loader
  - malware
  - tox-p2p
  - c2-evasion
  - clickfix
  - windows
  - news
why_read: >-
  Learn how AvisLoader uses P2P networks to resist takedowns and what indicators will help you
  detect it.
rank: 5
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Varonis researchers found AvisLoader, a Windows loader delivered via ClickFix lures hosted on Cloudflare Workers. The malware masquerades as a DocuSign verification prompt, tricking users into pasting a terminal command that downloads and executes code from a Cloudflare Quick Tunnel address.

AvisLoader uses the Tox encrypted peer-to-peer messaging protocol for command-and-control instead of traditional domains. This design prevents domain-based takedowns and allows operators to maintain the same identity when moving infrastructure, making the malware significantly more resilient to disruption than conventional loaders.

The recovered command centre shows operators can manage clients by hardware, location, and admin status, schedule tasks for online clients, and stage payloads for distribution. AvisLoader also includes UAC bypass helpers and process-hiding functionality, though successful deployment of these components is not confirmed from recovered files.
