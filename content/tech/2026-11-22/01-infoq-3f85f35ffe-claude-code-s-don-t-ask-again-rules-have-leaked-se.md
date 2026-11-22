---
id: 3f85f35ffe
title: >-
  Claude Code's 'don't ask again' rules have leaked secrets from public repositories at 63
  organisations
original_title: Claude Code Has Been Leaking Secrets Through Its "Don't Ask Again" Feature
url: >-
  https://www.infoq.com/news/2026/11/claude-code-leaking-secrets/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-11-22"
published_at: "2026-11-22T11:00:00.000Z"
authors:
  - Sergio De Simone
comments: null
tags:
  - claude-code
  - secrets
  - git
  - ai-agents
  - devsecops
  - secret-scanning
  - news
why_read: >-
  The article gives the exact file path, the git commands Apiiro recommends for cleanup, and the
  numbers from both Apiiro and GitGuardian, so you can audit your own repositories.
rank: 1
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Security firm Apiiro found that Claude Code saves approved shell commands as permanent rules in .claude/settings.local.json. When a command contains a password or token, the secret is stored with it. Apiiro counted 1,122 secrets in those files and 1,160 more in git history, committed settings.json files and chat transcripts. It says 63 organisations were affected.

Claude Code adds the file to the developer's global git ignore list, but not to the repository's own .gitignore. That protection does not travel with a clone, a folder that becomes a repo later, or a file already committed. Apiiro also saw cases where Claude Code committed the file itself.

Gitleaks and TruffleHog missed some of the secrets, mostly because they sit inside shell commands rather than in key formats the scanners expect. The same pattern applies to transcripts, memory files and handoff notes. Malware also gets a predictable file listing reachable systems and their credentials.

GitGuardian reports 31,088 secrets in these files on public GitHub, 5,343 of them valid when detected, plus 613 in Docker Hub images. Apiiro advises untracking the file, ignoring it in .gitignore, rotating every credential it held, and passing secrets through environment variables.
