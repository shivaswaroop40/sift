---
id: b945d5a7a9
title: >-
  Cisco and OpenAI release Shirudo, an open-source tool that generates eBPF shields for unpatched
  Linux flaws
original_title: Cisco and OpenAI pitch eBPF kernel plugins as the way to tame the patchpocalypse
url: >-
  https://www.theregister.com/security/2026/11/24/cisco-and-openai-pitch-ebpf-kernel-plugins-as-the-way-to-tame-the-patchpocalypse/5311795
source: The Register
kind: news
section: security
date: "2026-11-24"
published_at: "2026-11-24T01:46:56.000Z"
authors:
  - Simon Sharwood
comments: null
tags:
  - ebpf
  - cisco
  - openai
  - linux
  - compensating-controls
  - patch-management
  - news
why_read: >-
  The article gives a short account of what Shirudo does, how it builds on Tetragon, and where the
  commercial interests of Cisco and OpenAI sit.
rank: 5
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Cisco and OpenAI have released Shirudo, an open-source tool that creates compensating controls for Linux using eBPF. The idea is to protect systems that cannot be patched quickly. Agents scan infrastructure for vulnerabilities, then tools such as OpenAI's Codex write eBPF programs, called "shields", to block exploitation. Humans are meant to review every shield before it goes into production.

The pitch responds to the volume of flaws, with more than 100,000 reported this year, many found by AI-powered bug finders. Many organisations already struggle to test patches or find change windows. A kernel-level control that needs no patch or restart could ease that, if the generated programs are trustworthy. The companies say they mitigated recent Java flaws on an Elasticsearch deployment without downtime.

Shirudo is built on Tetragon, a sub-project of Cilium, which Cisco owns through Isovalent. The approach is not new. Rimini Street, VMware, Palo Alto Networks and Rapid7 already offer forms of virtual patching or compensating controls. The difference is the open-source release. The report also notes the motive is not purely altruistic, since wider use could raise demand for Codex and normalise eBPF in Cisco products.

The evidence offered is thin. One demonstration is cited, and the human review step carries much of the safety burden. Source text gives no detail on how many shields would need checking at scale.
