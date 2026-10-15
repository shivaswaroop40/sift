---
id: 59747c3f6e
title: Claude Code Desktop preview pane leaks developer credentials silently
original_title: Anthropic 'SneakPeek' Flaw Is a Silent Zero-Click Threat
url: https://www.darkreading.com/threat-intelligence/new-anthropic-sneakpeek-silent-zero-click-threat
source: Dark Reading
kind: news
section: threat-research
date: "2026-10-15"
published_at: "2026-10-14T20:09:42.000Z"
authors:
  - Becky Bracken
comments: null
tags:
  - claude
  - credentials
  - zero-click
  - developers
  - oauth
  - ssh
  - news
why_read: >-
  Learn about a zero-click credential leak in a widely-used developer tool and its implications for
  your environment.
rank: 4
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

A flaw in the preview pane of Claude Code Desktop allows attackers to extract credentials without user action. Affected secrets include SSH private keys, AWS tokens, and Claude OAuth tokens. The vulnerability requires no interaction from the developer.

Developers using Claude Code Desktop may expose sensitive credentials through normal workflow. An attacker viewing or sharing code containing secrets can harvest them via the preview pane. This affects authentication to infrastructure and third-party services.

The silent nature of the exploit means developers are unlikely to detect credential theft as it occurs. No user action or warning is generated when secrets are extracted.
