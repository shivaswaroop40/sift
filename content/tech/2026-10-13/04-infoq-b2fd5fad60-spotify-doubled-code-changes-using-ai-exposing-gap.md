---
id: b2fd5fad60
title: Spotify doubled code changes using AI, exposing gaps in testing and quality controls
original_title: Spotify More Than Doubled Monthly Code Changes as AI Accelerated Development
url: >-
  https://www.infoq.com/news/2026/10/spotify-ai-quality-controls/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-10-13"
published_at: "2026-10-12T13:57:00.000Z"
authors:
  - Leela Kumili
comments: null
tags:
  - ai-assisted-development
  - deployment-velocity
  - quality-controls
  - observability
  - production-incidents
  - automation
  - news
why_read: >-
  Learn how Spotify adapted incident response and quality controls when AI doubled their deployment
  velocity.
rank: 4
interest_score: 8.3
depth_score: 8
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Spotify increased merged code changes from 8,100 to 17,000 per month year-over-year by using AI-assisted development. The company operates nearly 3,000 production services handling 11 to 12 million backend requests per second. Higher change volume outpaced some existing verification controls, leading to production incidents.

For platform engineers, this matters because it shows the quality and observability burden scales nonlinearly with change volume. An automated dependency upgrade passed checks but failed in production. A content processing incident caused hours of delays when a quality improvement and scheduling bug competed for resources.

Spotify uses Claude running in Kubernetes pods to handle complex code changes, completing a Java migration across backend services in three days. The company is strengthening safeguards, expanding rollback capacity, and scheduling automated changes during team working hours. Testing, review, and observability are now the bottleneck.
