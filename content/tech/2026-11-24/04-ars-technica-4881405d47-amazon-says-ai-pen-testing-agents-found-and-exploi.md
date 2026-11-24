---
id: 4881405d47
title: Amazon says AI pen-testing agents found and exploited a zero-day in 11 minutes
original_title: Amazon says hackers' AI agents found and exploited 0-day with little human input
url: >-
  https://arstechnica.com/security/2026/11/amazon-says-hackers-ai-agents-found-and-exploited-0-day-with-little-human-input/
source: Ars Technica
kind: news
section: security
date: "2026-11-24"
published_at: "2026-11-24T12:30:05.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/11/amazon-says-hackers-ai-agents-found-and-exploited-0-day-with-little-human-input/#comments
tags:
  - ai-agents
  - zero-day
  - cairn
  - penetration-testing
  - security-operations
  - amazon
  - news
why_read: >-
  The original gives the full attack chain on the medical imaging app and the Palo Alto campaign
  figures, which show where the agents failed as well as where they succeeded.
rank: 4
interest_score: 7.3
depth_score: 6
novelty_score: 9
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Amazon Threat Intelligence reports that attackers using Cairn, an open source AI penetration-testing framework, had agents find and exploit a zero-day on an East Asian university server. The only instruction was to obtain shell access. The agents found a path traversal flaw in an upload endpoint of an open source medical imaging AI application. About 11 minutes passed between mapping the API and writing arbitrary files.

In a later session the agents wrote a Python reverse shell to sitecustomize.py, then triggered a training API endpoint to spawn a new process. That process imported the payload and gave a root shell. Amazon says there was no advisory, fix or prior mention for the bug, so it assesses with high confidence that it was a zero-day.

Most of the activity failed. Agents spent over 16 hours on a Redis server, trying replication abuse, sandbox escape and Log4Shell, without success. Another operation tried 30,000 credential combinations against 80 usernames on a GPU server and also failed. Humans stepped in after the zero-day was found, supplying a proxy into a second university network.

Palo Alto Networks separately reported a Cairn campaign of 25 autonomous operations against at least 19 organisations, with at least 10 breached. The attackers added a prompt preamble telling agents never to refuse the task. Amazon notes that this tempo can outrun manual alert triage in many security operations centres.
