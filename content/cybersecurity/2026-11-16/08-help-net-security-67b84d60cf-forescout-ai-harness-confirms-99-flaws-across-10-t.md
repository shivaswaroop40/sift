---
id: 67b84d60cf
title: Forescout AI harness confirms 99 flaws across 10 TCP/IP stacks for under $2,300
original_title: AI uncovers flaws in discontinued devices with no vendor left to patch them
url: https://www.helpnetsecurity.com/2026/11/16/forescout-ai-models-vulnerability-research/
source: Help Net Security
kind: news
section: papers
date: "2026-11-16"
published_at: "2026-11-16T05:00:22.000Z"
authors:
  - Anamarija Pogorelec
comments: null
tags:
  - ai-vulnerability-research
  - tcp-ip-stacks
  - forescout
  - legacy-devices
  - ot-security
  - vulnerability-disclosure
  - news
why_read: >-
  Read it for the cost and time figures, the limits of the method, and the Forescout detail on
  unpatchable legacy devices where containment is the only option.
rank: 8
interest_score: 6.7
depth_score: 6
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Forescout researchers built a harness around Claude models and existing security tools to hunt for flaws in 10 TCP/IP stacks, using both open-source code and compiled binaries. They confirmed 99 vulnerabilities. Sixty-six were previously unknown, and 52% of those were rated high or critical. Siemens has found affected building controllers in its APOGEE, Desigo and TALON lines.

Automated analysis took about 10 hours, plus roughly 80 hours of validation. Project Memoria in 2020 and 2021 took about nine months of manual code analysis for comparable work. Model costs ran from about $1,200 to $2,300. Those figures exclude the effort of building the system, such as writing 32 scanning rules and preparing test environments.

The method has limits. It rediscovered 33 of 82 known vulnerabilities used for comparison. It did best on memory errors in network-facing code and struggled with logic and design flaws, such as predictable values meant to be random. Compiled targets cost about six times as much and took about twice as long, with more false alarms. Of 312 candidates after de-duplication, 99 were confirmed.

Some affected products have no vendor left to patch them. One was firmware from a discontinued access point whose maker had ceased operating. The system found seven device-specific flaws there, including unchangeable administrator credentials and a buffer overflow in the firmware upload process. Forescout was withholding the names of three stacks still under disclosure.
