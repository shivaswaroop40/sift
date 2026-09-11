---
id: 1186aba9f2
title: Shopify moves from React Native back to Swift and Kotlin
original_title: Shopify is moving from React Native back to Swift and Kotlin
url: https://shopify.engineering/back-to-native
source: Hacker News (100+ points)
kind: community
section: industry
date: "2026-09-11"
published_at: "2026-09-10T14:09:31.000Z"
authors:
  - fnthawar2
comments: https://news.ycombinator.com/item?id=49643982
tags:
  - react-native
  - swift
  - kotlin
  - mobile-development
  - coding-agents
  - shopify
  - community
why_read: >-
  See Shopify's reasoning for reversing its React Native bet and what it means for its open-source
  libraries.
rank: 3
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: deepseek-v4-flash
---

Shopify has announced it is moving its mobile apps from React Native back to native Swift and Kotlin. The company says coding agents have changed the economics, so building the same feature twice no longer costs what it did in 2020. It rebuilt core parts of its biggest apps in native using LLMs as prototypes.

Native development previously meant maintaining two codebases and chasing feature parity. Shopify says agents can now implement a feature on Android using the iOS version as reference, and vice versa, and can handle enough translation, testing and review that the shared-implementation advantage of React Native is no longer decisive. Native still means building and maintaining software on two platforms, but that cost is no longer the deciding factor. Native also keeps apps closer to platform capabilities and first-party tooling, with fewer framework layers.

Shopify chose greenfield over gradual migration. The Shop app went from proof of concept to a rebuilt native app in the app stores in 12 weeks. The Shopify app, its largest with 300+ screens, widgets and an Apple Watch app, is underway and due later this year. For open-source libraries, FlashList, with about 2 million downloads a week, will keep getting critical fixes while Shopify looks for a new steward; Restyle will be archived after 2026; React Native Skia will be forked under a new name.
