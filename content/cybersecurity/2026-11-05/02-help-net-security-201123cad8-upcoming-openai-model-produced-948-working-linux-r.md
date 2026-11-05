---
id: 201123cad8
title: Upcoming OpenAI model produced 948 working Linux root exploits at $1,279 each
original_title: OpenAI’s upcoming AI model built 948 working Linux root exploits in a single run
url: https://www.helpnetsecurity.com/2026/11/05/openai-linux-kernel-root-exploits/
source: Help Net Security
kind: news
section: papers
date: "2026-11-05"
published_at: "2026-11-05T09:05:06.000Z"
authors:
  - Sinisa Markovic
comments: null
tags:
  - linux-kernel
  - privilege-escalation
  - ai-agents
  - openai
  - patching
  - news
why_read: >-
  You get the full agent pipeline breakdown, per-stage numbers, the validation problem, and OpenAI's
  recommendations on isolation and patching.
rank: 2
interest_score: 7.7
depth_score: 8
novelty_score: 9
utility_score: 6
scored: true
model: glm-5.3
---

OpenAI's Cyber team ran an automated pipeline on an upcoming AI model against the latest Linux kernel in mid-October 2026, with target machines running a stock desktop distribution. The run yielded 948 distinct local privilege escalation vulnerabilities with working root exploits, at a total cost of $1,213,430 in API credits, or $1,279 per exploit. Agents narrowed the audit to roughly 7% of kernel code reachable by low-privileged users, then surfaced 2,308 candidate bugs within 12 hours.

The warning for defenders is blunt. OpenAI says a low-privileged account on an operating system that is not fully patched should now be treated as functionally equivalent to root for a well-resourced threat actor. The team recommends layered defences, including sandboxes and isolation tools such as Firecracker and gVisor. Patching is already moving, with 61 bugs fixed upstream, 43 carrying staging patches, and 299 being reported and discussed publicly.

A sample of 166 exploits used 10 exploitation techniques that third-party kernel experts had not seen before, and OpenAI withheld those details for safety reasons. Agent results also required validation. In an early run, 20 of 200 claimed root exploits reached root through a different zero-day than the assigned one, so OpenAI added an independent check that each exploit uses its intended bug. Human researchers review every exploit, patch and severity rating before anything reaches maintainers.

On an adapted, hardened kernelCTF target, the pipeline produced 21 privilege escalation exploits in 112 hours for $32,936 in credits. OpenAI estimates those would earn about $1.5 million if accepted, and calls the pipeline net profitable at the time of the research. It also predicts that within a few years, frontier models will likely discover whatever vulnerabilities exist in a given software project, and less capable models may develop exploits once flaws are disclosed.
