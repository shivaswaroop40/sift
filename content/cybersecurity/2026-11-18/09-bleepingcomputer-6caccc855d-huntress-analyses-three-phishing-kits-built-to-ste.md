---
id: 6caccc855d
title: Huntress analyses three phishing kits built to steal Microsoft 365 session tokens
original_title: Inside Modern Phishing Kits Built to Steal Microsoft 365 Sessions
url: >-
  https://www.bleepingcomputer.com/news/security/inside-modern-phishing-kits-built-to-steal-microsoft-365-sessions/
source: BleepingComputer
kind: news
section: defence
date: "2026-11-18"
published_at: "2026-11-17T15:01:11.000Z"
authors:
  - Sponsored by Huntress Labs
comments: null
tags:
  - phishing
  - microsoft-365
  - token-theft
  - aitm
  - device-code
  - incident-response
  - news
why_read: >-
  You get a short summary of three named kits and a practical hunting and containment checklist for
  stolen Microsoft 365 session tokens.
rank: 9
interest_score: 7
depth_score: 7
novelty_score: 6
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Huntress researchers analysed three phishing kits aimed at Microsoft 365 tokens: EvilTokens, Knight Office and Kali365. EvilTokens used device code phishing and abused the Railway PaaS platform to harvest and replay tokens. Knight Office is an adversary-in-the-middle kit with an operator console. Kali365 bundles capture, replay and persistence into one control panel, with built-in AI features.

The kits work by capturing a session after login and MFA are complete. Device code phishing lets the victim authenticate with the real identity provider while the attacker collects the authorisation. AitM kits relay the flow in real time. A replayed token gives access to cloud resources and email without a new MFA prompt.

Completed MFA does not make a session trustworthy on its own. Huntress advises looking beyond the phishing page and tracing the full sequence from lure to token issuance, device registration and mailbox activity. Useful signals include successful sign-ins from unfamiliar cloud infrastructure, device code authentication, automated token refresh, and new devices or authentication methods.

For response, Huntress says to revoke refresh tokens, then remove unauthorised devices and Windows Hello credentials. It also advises restricting device code authentication where possible and checking mailbox forwarding rules. Keep hunting after the phishing domain disappears. The piece is sponsored and written by Huntress, so it is vendor material, and it gives few technical specifics on each kit.
