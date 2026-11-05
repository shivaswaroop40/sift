---
id: 1a72054c35
title: PortSwigger automates escalation of HTTP header injection to critical desync attacks
original_title: Making HTTP header injection critical with one prompt
url: https://portswigger.net/research/making-http-header-injection-critical-with-one-prompt
source: PortSwigger Research
kind: research
section: threat-research
date: "2026-11-05"
published_at: "2026-11-04T15:12:29.000Z"
authors: []
comments: null
tags:
  - request-smuggling
  - crlf-injection
  - header-injection
  - burp-suite
  - cache-poisoning
  - research
why_read: >-
  The original details each phase of the automated methodology, with example payloads and the edge
  cases the skills cover.
rank: 4
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

PortSwigger has released a scan check for HTTP request header injection and a Burp AT skill that automates its CRLF-Powered Desync methodology. Given a header injection finding, the skill runs four phases. It locates where the injected value lands upstream, for example whether a rewritten path becomes a custom header before or after the host header. It then validates a desync through request splitting, crawls for an open redirect gadget, and builds an exploit that serves random users a redirect to an attacker-chosen domain.

For defenders, this changes how header injection findings should be triaged. A finding that might otherwise be dismissed as minor can now be escalated to a critical request smuggling exploit from a single prompt. The researchers encountered several cases where a path was rewritten into a custom header upstream, which is what makes request splitting possible. They note the redirect primitive supports full-site takeover when chained with cache poisoning.

PortSwigger chose a deliberately conservative exploit. Response queue poisoning proved too destructive in their testing, so the skill serves a redirect to a collaborator instead. The skills fail gracefully. A failed gadget search still returns a validated desync finding, and a failed desync falls back to a CRLF-Powered Tunnelling skill that looks for access control bypasses. The skills are enabled by default.
