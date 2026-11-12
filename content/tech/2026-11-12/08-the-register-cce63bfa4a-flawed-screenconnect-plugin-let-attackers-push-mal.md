---
id: cce63bfa4a
title: Flawed ScreenConnect plugin let attackers push malware to 288 machines in 90 minutes
original_title: Hackers exploiting ScreenConnect plugin flaw to spread malware across hundreds of PCs
url: >-
  https://www.theregister.com/security/2026/11/12/hackers-exploiting-screenconnect-plugin-flaw-to-spread-malware-across-hundreds-of-pcs/5309361
source: The Register
kind: news
section: security
date: "2026-11-12"
published_at: "2026-11-12T13:02:00.000Z"
authors:
  - Carly Page
comments: null
tags:
  - screenconnect
  - connectwise
  - msp
  - supply-chain
  - malware
  - huntress
  - news
why_read: >-
  The original has the timeline, the affected versions and the response guidance, including why you
  should not investigate infected hosts through ScreenConnect itself.
rank: 8
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Attackers used RMM+, a third-party ScreenConnect extension, to install rogue clients on at least 288 endpoints across 48 organisations. Huntress saw the activity start around 1747 UTC. All 288 machines were hit within 90 minutes, about a third in the first ten. The payload was a 16-file toolkit called SCKit, which installs a separate ScreenConnect client for persistent access.

Versions 1.0.31 and 1.0.32 of RMM+ accept a blank access key when none is configured. The extension runs outside ScreenConnect's normal accounts and authentication, so commands can arrive without defeating MFA. Huntress saw commands reach machines with no matching login activity. Affected ScreenConnect builds included 26.6.6.9747 and 26.7.6.9783, so running the latest release did not protect anyone.

ConnectWise found about 400 installations with at least one extension from the RMM+ family and has remotely disabled five extensions, including RMM+, RMM Plus and Labtech Plus. It says the 400 were identified by the extension, not by evidence of compromise. It reports no sign of a breach of its own infrastructure or a flaw in ScreenConnect itself, and has not confirmed the initial access route.

SCKit also tries to turn the investigating technician into a victim. If they connect via ScreenConnect, it attempts to move malware to their workstation, steal authentication cookies and spread further. Huntress says this has failed in every recovered host log so far. It also says some machines were reinfected within minutes of leaving isolation, because the malware had not been fully removed.
