---
id: 9a3fe4e492
title: Stateless MCP spec drops session affinity for AWS deployments
original_title: Stateless MCP Removes Session Affinity Requirements for AWS Server Deployments
url: >-
  https://www.infoq.com/news/2026/09/aws-stateless-mcp/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-09-26"
published_at: "2026-09-25T12:58:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - mcp
  - aws
  - load-balancing
  - serverless
  - observability
  - distributed-systems
  - news
why_read: >-
  You will see exactly which protocol elements AWS is dropping, what replaces them, and what your
  gateway and tool layer need to handle now.
rank: 11
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: minimax-m3
---

AWS has detailed how the updated Model Context Protocol removes the initialize handshake and the Mcp-Session-Id header, letting requests hit any server instance behind a standard load balancer. MRTR replaces server-initiated streams with input_required responses, and new Mcp-Method and Mcp-N headers let gateways route and throttle calls.

For teams running remote MCP servers, the change removes the need for sticky session routing and dedicated session stores. AWS Lambda fits the request-response shape because persistent connections are no longer required, simplifying horizontal scaling and cutting protocol-specific infrastructure.

Stream resumability is gone, so clients must retry interrupted calls. Tool calls that produce side effects now depend on idempotency, raising the bar for clients that previously relied on held-open streams. W3C Trace Context support is included for distributed tracing.

Apify is implementing stateless support alongside its existing sessionful server while running conformance tests across both protocol versions. AWS recommends tracking protocol versions at the gateway and keeping legacy session infrastructure in place until older clients are retired.
