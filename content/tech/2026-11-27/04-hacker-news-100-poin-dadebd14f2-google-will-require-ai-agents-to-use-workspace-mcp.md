---
id: dadebd14f2
title: >-
  Google will require AI agents to use Workspace MCP servers from February 2027, with Gmail unable
  to send
original_title: Google Will Make AI Agents Use Its MCP Servers. The Gmail One Can't Send Email
url: https://techstackups.com/articles/google-workspace-ai-agents-mcp/
source: Hacker News (100+ points)
kind: community
section: ai-and-ml
date: "2026-11-27"
published_at: "2026-11-26T09:44:23.000Z"
authors:
  - ritzaco
comments: https://news.ycombinator.com/item?id=50653477
tags:
  - google-workspace
  - mcp
  - gmail-api
  - ai-agents
  - api-terms
  - quotas
  - community
why_read: >-
  The original has the full tool-by-tool gap table, the OAuth agent flag edge cases and the quota
  arithmetic, which you need if you run any Workspace integration that touches an LLM.
rank: 4
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

On 24 November Google made eight Workspace MCP servers generally available and added a clause to its API terms. From 1 February 2027, any tool that is or is driven by an AI agent must reach Gmail, Drive, Calendar and other Workspace services through those servers. Agents calling REST directly are held to Standard-tier quotas and would be in breach of the terms.

The public Gmail server can search mail, read threads, create drafts and apply labels. It cannot send, reply, forward or edit a draft after creating it. Google says those tools need partner access. Drive lacks move, rename and share. Docs, Slides and Tasks are close to REST parity.

Independent developers get a narrower route than partners. Anthropic's Claude connector advertises sending and forwarding email, which the public server lacks. Google has not said who qualifies for partner access or when the tools will be widely available.

The terms also cap retention of embeddings, memory indexes and user profiles at 30 days, and ban training, fine-tuning and evals on Workspace data. Standard quota is 5,000 MCP requests per project per day, and a Gmail thread search costs 10. Scaled-tier billing starts 1 April 2027, with no published per-request prices.
