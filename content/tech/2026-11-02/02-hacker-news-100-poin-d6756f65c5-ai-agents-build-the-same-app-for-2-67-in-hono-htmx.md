---
id: d6756f65c5
title: AI agents build the same app for $2.67 in Hono+htmx and $4.97 in Angular, benchmark finds
original_title: The AI cost of JavaScript frameworks
url: https://nolanlawson.com/2026/10/28/the-ai-cost-of-javascript-frameworks/
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-11-02"
published_at: "2026-11-01T06:06:19.000Z"
authors:
  - luu
comments: https://news.ycombinator.com/item?id=50323088
tags:
  - javascript
  - ai-agents
  - benchmarks
  - llm-costs
  - frontend
  - community
why_read: >-
  The full cost table with per-run ranges for all twelve stacks, plus the methodology and the
  quality and maintainability results.
rank: 2
interest_score: 7
depth_score: 7
novelty_score: 8
utility_score: 6
scored: true
model: glm-5.3
---

Nolan Lawson benchmarked what it costs for Claude Opus 5.5 to build the same Pokémon app, backed by PokéAPI with search and filtering, across twelve JavaScript stacks, taking the median of five runs each. Each stack was given its official MCP or skills where they existed, though agents did not always use them, and output was checked against a conformance suite. Hono+htmx was cheapest at $2.67 per run, then Astro at $2.76 and Nuxt at $2.82. Angular cost most at $4.97.

The extra cost has identifiable causes. SvelteKit agents read the v3 migration guide in every run, likely because it falls outside Opus 5.5's training data. Gracile agents, unfamiliar with the framework, cloned its repo or read compiled source from node_modules. Angular's cost seems tied to the size of the code it produces. When agents write the frontend, framework choice becomes a measurable token cost, and it favours stacks the model already knows.

The variance is large. React Router's median sits roughly $1 above Hono+htmx, yet its cheapest run, $2.82, undercut Hono+htmx's most expensive, $3.19. Angular failed to produce a measurable app twice, so some metrics use three runs instead of five. Lawson calls the whole experiment stochastic, since a low dice-roll can send an agent off on a tangent through no fault of the framework.

The app is a single holotype, a content-heavy site with little interactivity, closer to Wikipedia than to Figma or Gmail, so the results may not transfer to highly interactive apps. Lighthouse itself is inconsistent, sometimes picking a different element for Largest Contentful Paint between runs. The dollar figures quote Claude Code API prices directly rather than actual spend, which Lawson's $100 monthly plan covered.
