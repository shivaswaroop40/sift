---
id: 0376a1a42b
title: Threat actors abuse trusted AI platforms to deliver malware
original_title: How Threat Actors Are Turning Trusted AI Platforms Into an Attack Surface
url: >-
  https://www.bleepingcomputer.com/news/security/how-threat-actors-are-turning-trusted-ai-platforms-into-an-attack-surface/
source: BleepingComputer
kind: news
section: threat-research
date: "2026-09-12"
published_at: "2026-09-11T14:01:11.000Z"
authors:
  - Sponsored by Huntress Labs
comments: null
tags:
  - ai-platform-abuse
  - claude-artifacts
  - malvertising
  - clickfix
  - sectoprat
  - amos-stealer
  - news
why_read: >-
  Get the concrete abuse patterns and mitigations for defending users against malware delivered
  through trusted AI platforms.
rank: 7
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: deepseek-v4-flash
---

Huntress SOC says attackers are abusing trusted AI platform features rather than breaking into AI companies. Over nine months it tracked campaigns using Claude Artifacts, claude.ai/share links, and shared ChatGPT and Grok conversations to host malicious pages and advice. One campaign, FakeAgent, hit more than 29 organisations in July via a fake Claude Desktop download page hosted on claude.ai, redirecting victims to SectopRAT.

The abuse works because content sits on real, trusted domains. A fake Apple Support guide on a claude.ai/share link told a victim to paste a curl command, leading to the MacSync stealer. Another pattern used SEO-poisoned ChatGPT and Grok conversations to push ClickFix-style instructions for clearing disk space, delivering the AMOS stealer. No platform security was broken.

Defenders should treat clipboard-driven execution and AI-assisted troubleshooting as risks. Huntress recommends restricting script execution from the clipboard, enforcing application allow-listing, watching for scheduled tasks and antivirus exclusion changes, and training users to spot ClickFix lures. Campaigns are short-lived, so fast reporting and layered controls shrink the window attackers get to exploit them.
