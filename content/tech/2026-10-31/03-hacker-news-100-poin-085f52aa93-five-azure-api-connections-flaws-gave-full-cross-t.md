---
id: 085f52aa93
title: Five Azure API Connections flaws gave full cross-tenant access to victim backends
original_title: Azure's Weakest Link – Five Full Cross-Tenant Compromises
url: https://www.binarysecurity.no/posts/2026/10/one-root-case
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-10-31"
published_at: "2026-10-30T10:06:15.000Z"
authors:
  - swq115
comments: https://news.ycombinator.com/item?id=50301854
tags:
  - azure
  - security
  - logic-apps
  - cross-tenant
  - path-traversal
  - community
why_read: >-
  The post details the API Connection architecture, the ARM endpoints used to reach the shared API
  Management instance, and working payloads for cross-tenant Key Vault reads and SQL writes.
rank: 3
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: glm-5.3
---

A researcher has documented five vulnerabilities in Azure API Connections, the Logic Apps component that holds credentials for backend services. Each one gives the same primitive, full compromise of any other connection worldwide, across tenants. The flaws netted $200,000 in bounties and were presented at Blue Hat Asia 2026.

The mechanism sits in a shared Azure API Management instance. It validates the connector's OpenAPI definition, then exchanges the caller's token for the token configured on the target connection. Trick it into operating on a connection you do not own and you inherit the victim's credentials on their backend. The list of backends is effectively unbounded, covering Key Vault, Azure SQL, Jira and Salesforce. One payload read a secret from another tenant's Key Vault through ARM's DynamicInvoke endpoint using encoded path traversal.

Microsoft's first fix restricted the paths allowed on DynamicInvoke rather than the underlying token exchange. The author created a Standard Logic App on a dedicated host, extracted the ARM code over SSH, and found the fix was a path blacklist. Undocumented sibling functions on the same path, including DynamicList, sat outside it. A DynamicList payload achieved a cross-tenant write against a victim's SQL server.

Scoping is the main mitigation available to tenants. Connection owners can limit the tokens or keys an API Connection holds, though the author expects this is rarely done. OAuth connections carry the token of whoever created them. Beyond that, the defence is layered input validation, which the author shows is difficult to get right across every edge case.
