---
id: 80b8a546af
title: Cloudflare extends its Flamingo test framework to probe DNS from every data centre
original_title: Probing DNS at Cloudflare
url: https://blog.cloudflare.com/probing-dns-at-cloudflare/
source: Cloudflare Blog
kind: blog
section: infrastructure
date: "2026-11-23"
published_at: "2026-11-23T14:00:00.000Z"
authors:
  - Doug Aaser
comments: null
tags:
  - dns
  - cloudflare
  - synthetic-testing
  - rust
  - release-engineering
  - observability
  - blog
why_read: >-
  You will get the design reasoning behind a protocol-agnostic synthetic testing framework,
  including the DSL and Rust module structure, and how it ties into release decisions.
rank: 3
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Cloudflare's DNS team describes extending Flamingo, its internal end-to-end testing framework, to test DNS against production. The trigger was a rollout of the service that publishes DNS records to the edge. A scheduling bug left some record changes unpublished for hours. The service looked healthy, but new hostnames resolved slowly and certificates could not be issued.

Flamingo runs hundreds of millions of tests a day against the edge. Tests are written in a small DSL with a setup, action and response shape, rather than a general-purpose language. Cloudflare says this avoids debugging both the test and the system under test. The tool is written in Rust, and typed enums for actions and outputs let teams add modules, such as DNS queries, without handling scheduling or resource management.

The excerpt is truncated before the DNS section. The stated aims are to measure propagation and to let those measurements decide whether a release proceeds or is rolled back, but the method and results are not in the text provided.
