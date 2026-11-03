---
id: 84644139ec
title: Uber's MCP gateway governs agent access to 800+ servers and 5,000+ tools
original_title: Uber Builds MCP Gateway to Govern Access to 800+ Servers and 5,000+ AI Agent Tools
url: >-
  https://www.infoq.com/news/2026/11/uber-mcp-gateway-ai-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: ai-and-ml
date: "2026-11-03"
published_at: "2026-11-02T13:53:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - mcp
  - uber
  - ai-agents
  - api-gateway
  - service-discovery
  - governance
  - news
why_read: >-
  The original details the registry and proxy split, AutoCrawler's IDL-driven tool generation, and
  the incremental discovery scheme that keeps agent context small.
rank: 5
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

Uber has built an MCP Gateway to standardise how AI agents discover and invoke internal services. It fronts more than 800 MCP servers and 5,000 tools. The design splits a control plane, the MCP Registry, which holds tool definitions, schemas, ownership and enablement settings, from a Proxy Gateway that translates MCP requests into HTTP, gRPC or TChannel calls. Existing APIs become MCP tools without changes to the underlying services.

The pattern is familiar. Commentators compared it to API gateways built over decades for REST and later GraphQL, with the same concerns of security, discovery, observability and governance. The governance detail is what stands out. AutoCrawler, built on Cadence, scans internal IDL registries, extracts definitions from Protocol Buffers and Thrift schemas, and uses a large language model to write tool descriptions. New tools stay disabled until their owning teams review and enable them, and configuration changes reach the data plane without restarts or redeploys.

Security and context management get specific treatment. Authorization is enforced at both server and tool level through Uber's internal access control system, with redaction of PII in tool responses and a token exchange service for third-party integrations such as Jira and Google. To avoid loading thousands of tool definitions into agent context, Omni MCP supports incremental discovery, and Response Projection lets agents request specific fields rather than full payloads. An aifx CLI lets coding agents invoke tools and write results to files.
