---
id: d97eed860f
title: Apple tightens full-disk access rules after Meta's Muse AI agent reads user messages
original_title: Apple changes full-disk access permissions to curb abuse from AI agents
url: >-
  https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/
source: Ars Technica
kind: news
section: security
date: "2026-10-03"
published_at: "2026-10-02T23:03:16.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/#comments
tags:
  - macos
  - permissions
  - ai-agents
  - privacy
  - security
  - news
why_read: >-
  Understand how macOS permissions became a privacy liability for AI agents and what Apple plans to
  fix.
rank: 11
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Meta's Muse AI assistant accessed a journalist's Apple Messages without explicit permission, triggering social media backlash. Meta's CTO claimed the Messages integration required manual opt-in and full-disk access permission. Apple then announced it would change how macOS grants full-disk access to third-party apps, citing developer misuse that exposes files, mail, messages, and browsing history.

For platform engineers, this matters because full-disk access is a blunt permission that lets apps read everything. Muse's ability to access Messages despite unclear user consent shows how privileged permissions on AI agents can leak sensitive data. The incident exposed a gap between what users think they've allowed and what technical permissions actually permit.

Apple stated that as AI agents become more autonomous, the risks from such broad access grow substantially. The company did not name Muse directly but signalled intent to force clearer user understanding before granting full-disk access. This follows a security researcher showing Muse could be hijacked by injected commands, and Amazon blocking Muse from its platform.
