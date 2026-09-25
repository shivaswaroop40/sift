---
id: 438ecba507
title: Salesforce Agentforce flaws let poisoned leads exfiltrate CRM data and phish via Slack
original_title: Salesforce Agentforce vulns allowed 0-click CRM data theft, anonymous phishing
url: >-
  https://www.theregister.com/security/2026/09/24/salesforce-agentforce-vulns-allowed-0-click-crm-data-theft-anonymous-phishing/5298958
source: The Register
kind: news
section: security
date: "2026-09-25"
published_at: "2026-09-24T19:01:15.000Z"
authors: []
comments: null
tags:
  - salesforce
  - agentforce
  - prompt-injection
  - data-exfiltration
  - slack
  - security
  - news
why_read: >-
  It shows exactly where agent guardrails failed in production and what to audit in your own
  AI-integrated CRM.
rank: 11
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Researchers at Zenity Labs disclosed three Salesforce Agentforce vulnerabilities, dubbed SalesBleed, that let an attacker submit a poisoned web-to-lead form and trigger zero-click theft of CRM data when an employee later asked an agent about that lead.

The first two flaws chained indirect prompt injection with weaknesses in Agentforce's Trusted URLs controls, bypassing URL redaction by abusing unfamiliar top-level domains and parsing quirks. Agentforce was tricked into querying the Accounts table and embedding customer fields in an image request to an attacker-controlled hostname, with exfiltration visible to the employee.

A variant of the same chain abused Slack's link unfurling, so CRM data leaked the moment a crafted link appeared in a channel. The third flaw sat in the Reply to a Slack Thread action, which sent messages without user confirmation and without showing who triggered them, enabling anonymous phishing under the agent's identity.

Salesforce patched all three issues after a June disclosure from Zenity. Zenity warned the pattern is generic: any agent that ingests external records, renders links or images to a user, and holds tool access to sensitive data has the same three ingredients in one place.
