---
id: bd2d07a634
title: ClearFake WebDAV chain delivers Amatera stealer, ZigCryptoStealer and NetSupport Manager
original_title: >-
  ClearFake WebDAV infection chain delivers Amatera stealer, ZigCryptoStealer, and NetSupport
  Manager
url: https://blog.talosintelligence.com/clearfake-webdav-infection-chain/
source: Cisco Talos
kind: research
section: threat-research
date: "2026-09-11"
published_at: "2026-09-08T10:01:07.000Z"
authors:
  - Vanja Svajcer
comments: null
tags:
  - clearfake
  - webdav
  - amatera
  - zigcryptostealer
  - netsupport-manager
  - clickfix
  - research
why_read: >-
  Read the original for the full ClickFix and WebDAV chain, the C2 configuration, and indicators for
  both loaders.
rank: 9
interest_score: 7.3
depth_score: 8
novelty_score: 7
utility_score: 7
scored: true
model: deepseek-v4-flash
---

Cisco Talos investigated a DLL named "verification.google" executing from WebDAV at a Ukrainian government organisation. The same WebDAV and ordinal execution pattern led to a second loader, "pf.ch". Both chains use a Cloudflare Worker to inject JavaScript stored on BNB Smart Chain, followed by a ClickFix prompt impersonating Google CAPTCHA. The primary payload in both is the Amatera stealer.

The two Amatera builds received different secondary payloads from their command-and-control servers. The "pf.ch" loader was told to deploy a NativeAOT loader running ZigCryptoStealer and a Go-based reverse proxy. The "verification.google" loader was told to install an unauthorised instance of NetSupport Manager, with a C2 server using an IP address based in Russia. Talos assesses with moderate confidence that this branch was Russian threat actor activity, tracked as UAT-10820.

The chain starts on a compromised website. A Cloudflare Worker queries BNB Smart Chain testnet contract 0x886d310Ac23e05EA705e24E513D19f53793832A9 to fetch encoded JavaScript, a technique known as EtherHiding. The script checks for local and headless browser environments, identifies the operating system, and for Windows overlays a fake Google CAPTCHA checkbox. The victim is told to open the Windows Run dialog, paste the clipboard contents, and press Enter, which opens a WebDAV path and executes the loader.

Talos assesses with moderate confidence that the attacks are not targeted at a particular organisation, but are part of a cryptocurrency and credential-stealing operation. The two chains share the Amatera family but no common infrastructure with other recent Amatera campaigns documented by Malwarebytes and Blackpoint Cyber.
