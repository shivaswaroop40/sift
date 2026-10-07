---
id: 5fabb5dd9d
title: LibreOffice and OpenOffice allow code execution from spreadsheets without macro warnings
original_title: LibreOffice and OpenOffice Flaws Let Malicious Spreadsheets Run Code Without Macro Warnings
url: https://thehackernews.com/2026/10/libreoffice-and-openoffice-flaws-let.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-10-07"
published_at: "2026-10-06T11:57:00.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - libreoffice
  - openoffice
  - code-execution
  - spreadsheet
  - java
  - macro
  - news
why_read: Understand how spreadsheet files bypass protective warnings to run code on your systems.
rank: 8
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers demonstrated that malicious spreadsheets can execute attacker code in LibreOffice and Apache OpenOffice on file open, bypassing the macro warning dialogs both applications normally display.

The attack requires Java support to be enabled in the target application. Code runs immediately when a user opens the file, giving no opportunity to refuse execution. This means spreadsheets become an effective vector for arbitrary code execution on vulnerable systems.

The technique is currently a proof of concept with no confirmed real-world exploitation. The scope of affected versions and deployment prevalence remain unclear from available information.
