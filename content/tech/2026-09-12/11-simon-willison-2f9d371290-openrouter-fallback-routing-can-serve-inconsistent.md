---
id: 2f9d371290
title: OpenRouter fallback routing can serve inconsistent model behaviour
original_title: So you want to use OpenRouter?
url: https://simonwillison.net/2026/Sep/11/so-you-want-to-use-openrouter/
source: Simon Willison
kind: blog
section: ai-and-ml
date: "2026-09-12"
published_at: "2026-09-11T22:49:18.000Z"
authors: []
comments: null
tags:
  - openrouter
  - llms
  - ai
  - model-routing
  - providers
  - blog
why_read: >-
  You will get the concrete failure modes of OpenRouter's fallback routing and the two options for
  controlling provider choice.
rank: 11
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: deepseek-v4-flash
---

Simon Willison has highlighted a critique by Mohamed Moustafa of OpenRouter's automatic fallback routing. OpenRouter advertises that it handles fallbacks automatically and picks the most cost-effective provider for each request. Moustafa argues this can cause problems. Different providers run different serving software, with different optimisations and settings, so the same endpoint can serve model requests that behave differently.

The inconsistency is not theoretical. Some providers lack vision capability even for vision models, and the way the reasoning effort option is processed can differ between providers. For a developer building on a single OpenRouter endpoint, that means model output can vary by request depending on which backend handles it.

OpenRouter offers a way to pin behaviour. The provider.only option lets you control which provider is routed to, and the /endpoints method returns the list of available providers for a specific model ID. Use those if you need consistent serving software and settings.
