---
id: a2b12258f3
title: AI agents trust each other too much, creating cross-protocol attack paths
original_title: MCP for agent-to-agent comms may be the riskiest protocol you've never heard of
url: >-
  https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/
source: Ars Technica
kind: news
section: security
date: "2026-10-06"
published_at: "2026-10-05T22:26:35.000Z"
authors:
  - Dan Goodin
comments: >-
  https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/#comments
tags:
  - agents
  - mcp
  - injection
  - zero-trust
  - prompt-injection
  - ssrf
  - news
why_read: Understand how agent-to-agent trust assumptions create exploitable gaps in your infrastructure.
rank: 4
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers found that AI agents communicating via Model Context Protocol (MCP) can be exploited to spread malicious instructions between trusted agents. The vulnerability affects Google, JP Morgan Chase, Weviate, Rapid7, and government organisations. An agent receiving instructions from another agent assumes they are legitimate and executes them without proper validation, even when the original instruction was injected through a different protocol.

For platform engineers, this matters because MCP is deployed widely before being hardened, and organisations building agent networks are abandoning zero-trust principles. An attacker who compromises one agent or injects text into content can chain exploits across multiple agents, each trusting the previous one. The underlying bugs—injection and server-side request forgery—are old, but the multi-protocol attack surface is new.

Google's vulnerability (severity 8) involved an HTTP client with no URL validation, allowing redirects to internal endpoints. Rapid7's was rated 2.7 but still exploitable. The fixes require explicit allow-lists and validation at startup, not on first request. Many MCP implementations lack these controls.
