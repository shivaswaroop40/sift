---
id: 7f9fbed954
title: WordPress backdoor uses files, database and memory to rebuild itself after cleanup
original_title: WordPress Backdoor Rebuilds Itself After Cleanup Using Files, Database, and Shared Memory
url: https://thehackernews.com/2026/10/wordpress-backdoor-rebuilds-itself.html
source: The Hacker News
kind: news
section: threat-research
date: "2026-10-02"
published_at: "2026-10-01T14:37:35.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - wordpress
  - backdoor
  - persistence
  - incident-response
  - malware
  - authentication
  - news
why_read: >-
  Learn how to identify and fully remove this multi-layer WordPress backdoor without leaving
  persistence vectors behind.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers discovered a WordPress backdoor named SC that uses multiple persistence mechanisms to survive cleanup attempts. The malware injects code marked with SC_ identifiers across files, the database, and shared memory, allowing the final payload to automatically regenerate.

For defenders managing WordPress installations, this demonstrates a critical lesson: removing backdoors requires checking beyond the web root. Traditional file deletion and database cleaning leave gaps if shared memory persistence is overlooked. The attacker needs only one mechanism to survive to restore the others.

The malware functions as what researchers call a self-healing mesh, where each persistence layer can rebuild the complete backdoor if the others are removed. This design makes one-step cleanup insufficient and requires systematic verification across all three attack surfaces.
