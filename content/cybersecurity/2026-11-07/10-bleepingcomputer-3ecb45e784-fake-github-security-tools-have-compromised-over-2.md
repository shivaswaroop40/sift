---
id: 3ecb45e784
title: Fake GitHub security tools have compromised over 2,000 Windows systems
original_title: Fake security tools on GitHub push backdoors and infostealers
url: >-
  https://www.bleepingcomputer.com/news/security/fake-security-tools-on-github-push-backdoors-and-infostealers/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-11-07"
published_at: "2026-11-06T18:46:52.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - github-malware
  - supply-chain
  - infostealer
  - edr-evasion
  - backdoor
  - news
why_read: >-
  You get the full infection chain, the six evasion techniques, and Dr. Web's indicators of
  compromise for this campaign.
rank: 10
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Dr. Web researchers found a two-year campaign publishing malicious GitHub repositories that pose as security tooling. More than 2,000 Windows systems are compromised. The actor first targeted crypto wallet users with blockchain games and cheat tools, but recently published repos for automating scans, security testing, and log analysis. One lure is a fake script claiming to parse and format output from the Fscan network scanner. Malicious code sits in Visual Studio project files, Python scripts, and Go sources, hidden behind long whitespace, and pre-build events run it before compilation.

The targeting shift matters because the new lures are utilities that security and platform engineers routinely clone. The loader also undermines standard endpoint defences. In its default Mode3 it makes explorer.exe appear as the parent process, disables Smart App Control through the registry, restores original ntdll.dll code from disk to remove hooks added by security software, makes direct system calls, and patches EtwEventWrite and AmsiScanBuffer in memory.

PowerShell retrieves an encrypted link to an Electron-based loader named Microsoft.exe. If Mode3 fails, Mode2 adds Microsoft Defender exclusions and injects decrypted payloads into RegAsm.exe. Final payloads are an AsyncRAT backdoor, a clipper that swaps crypto wallet addresses in the clipboard, and an infostealer that grabs browser data, VPN settings, FTP configurations, gaming accounts, and Discord tokens, exfiltrating through a Telegram bot. The malware also removes ESET, McAfee, and Malwarebytes products, cuts them off from update servers, and interferes with Windows backups.

Dr. Web also found an unfinished component designed to keep the loader running and re-download it after removal from disk, which suggests the threat actor is still adding features. The researchers published a complete list of indicators of compromise observed across the campaign, useful for sweeping developer machines and build hosts.
