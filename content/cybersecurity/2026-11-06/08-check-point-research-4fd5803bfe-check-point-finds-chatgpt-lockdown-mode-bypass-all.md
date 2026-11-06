---
id: 4fd5803bfe
title: Check Point finds ChatGPT Lockdown Mode bypass allowing silent data exfiltration
original_title: "ChatGPT Lockdown Mode Bypass: Phishing, Malware Delivery, and Silent Data Exfiltration"
url: >-
  https://research.checkpoint.com/2026/chatgpt-lockdown-mode-bypass-phishing-malware-delivery-and-silent-data-exfiltration/
source: Check Point Research
kind: research
section: vulnerabilities
date: "2026-11-06"
published_at: "2026-11-05T14:00:11.000Z"
authors:
  - stcpresearch
comments: null
tags:
  - chatgpt
  - openai
  - prompt-injection
  - sandbox-escape
  - data-exfiltration
  - phishing
  - research
why_read: >-
  The write-up details the sandbox internals, the nested-iframe technique that recovers the native
  window.open, and the phishing and exfiltration scenarios it enables.
rank: 8
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

Check Point Research has found a vulnerability in ChatGPT that bypasses Lockdown Mode, OpenAI's optional setting for blocking prompt-injection exfiltration. The bypass allowed silent transfer of an entire chat history to an external server, popup phishing inside the ChatGPT Classic interface, and malware delivery. In ChatGPT Classic, simply having a conversation was enough to trigger exfiltration, with no user interaction. The attack could arrive through a malicious prompt, a malicious GPT, or a shared chat.

Lockdown Mode works by cutting the channels data could use to leave a conversation. It restricts web access to cached content, blocks remote images, disables network requests from Canvas code, and turns off Deep Research, Agent Mode, live connectors, and file downloads. The bypass renders those core protections ineffective, so teams treating Lockdown Mode as a safeguard against prompt-injection exfiltration should not rely on it alone.

The bypass targets the HTML page preview feature added to ChatGPT code blocks in February 2026. Rendered pages sit inside two nested sandboxed iframes, but the sandbox grants the allow-popups and allow-popups-to-escape-sandbox tokens. Popups are controlled only by a redefined window.open in the sandbox scripts, which holds them for user approval. Creating a further nested iframe and calling its contentWindow.open recovers the native function, opening a popup that escapes both the sandbox and Lockdown Mode.

The write-up does not state whether OpenAI has patched this bypass, so its current status is unclear. It notes that an earlier, separate flaw in ChatGPT's code-execution runtime, which exfiltrated conversation data through DNS tunnelling past the runtime's network isolation, was fixed promptly after disclosure.
