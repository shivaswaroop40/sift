---
id: c14a353497
title: Cloudflare open-sources Forge, a pluggable pipeline for SDK, CLI and doc generation
original_title: "Introducing Forge: the open source pipeline for generating SDKs, CLIs, docs, and more"
url: https://blog.cloudflare.com/forge-open-source-generation-pipeline/
source: Cloudflare Blog
kind: blog
section: languages-and-tools
date: "2026-09-29"
published_at: "2026-09-28T13:00:00.000Z"
authors:
  - Dimitri Mitropoulos
comments: null
tags:
  - cloudflare
  - openapi
  - code-generation
  - sdk
  - developer-tooling
  - ci
  - blog
why_read: >-
  You get a concrete look at how Cloudflare builds and previews SDKs and CLIs across hundreds of
  repos, and a tool you can run yourself.
rank: 12
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: minimax-m3
---

Cloudflare has released Forge, an open source generation pipeline that turns OpenAPI specs into SDKs, CLIs, documentation and other artefacts. It already powers the cf CLI and is planned to drive Cloudflare's API documentation and SDKs. The tool supports chained transformers, so outputs can feed other outputs, and accepts inputs beyond OpenAPI such as AsyncAPI, GraphQL, Cap'n Proto and Protobuf in the future.

The motivation is scale. Cloudflare's API spans more than 3,500 operations across hundreds of services written in Rust, Go, TypeScript and Python. Existing hosted generators could not handle cross-team preview builds at that size, and some have shut down. Forge runs in CI per repository, lints API changes and produces preview CLI, SDK and docs builds on every pull request, so teams can test their additions in isolation before merging.

The pipeline is intentionally extensible, with examples including Cap'n Web bindings, TanStack Query integrations, Zod and Valibot schemas, and MCP servers. It also addresses handwritten CLI commands such as cf dev and cf build, feeding those back into generated documentation. Cloudflare frames Forge as groundwork for managing v4 API churn and future major versions.
