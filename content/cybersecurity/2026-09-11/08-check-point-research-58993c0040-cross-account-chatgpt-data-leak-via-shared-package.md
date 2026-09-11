---
id: 58993c0040
title: Cross-account ChatGPT data leak via shared package service
original_title: "The Shared Clipboard Inside the Sandbox: Cross-Account Data Leakage in ChatGPT"
url: >-
  https://research.checkpoint.com/2026/the-shared-clipboard-inside-the-sandbox-cross-account-data-leakage-in-chatgpt/
source: Check Point Research
kind: research
section: vulnerabilities
date: "2026-09-11"
published_at: "2026-09-08T13:00:18.000Z"
authors:
  - stcpresearch
comments: null
tags:
  - chatgpt
  - ai-security
  - container-isolation
  - data-exfiltration
  - jfrog-artifactory
  - check-point-research
  - research
why_read: >-
  Read the original to see the proof of concept and the exact API mechanism behind the cross-account
  leak.
rank: 8
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: deepseek-v4-flash
---

Check Point Research found a covert cross-account command channel in ChatGPT. An attacker could use a victim's session to run hidden tasks with the tools, data and connected apps available to that session. In a proof of concept, ChatGPT retrieved email data from the victim's connected Gmail account and relayed it to the attacker. The victim received a normal answer to their visible request.

The channel worked through code-execution containers belonging to different ChatGPT accounts. The containers could not reach the public internet or talk to each other directly, but they could all reach the same internal JFrog Artifactory instance used to deliver software packages. Check Point says the exposed Item Management API turned that shared service into an unintended communication layer.

The hidden instruction could arrive through a malicious prompt, a shared conversation or a custom GPT. Once present in the victim's context, an ordinary message triggered the attacker-controlled task without showing it in the visible response. The same channel could exfiltrate conversation history and files in the affected chat and its code-execution environment.

The scope of the attack depended on the data, tools, connected apps and permissions already available to the victim's session. Check Point reported the issue in June 2026, separately from OpenAI's postmortem of the Hugging Face incident, which described similar cross-environment communication.
