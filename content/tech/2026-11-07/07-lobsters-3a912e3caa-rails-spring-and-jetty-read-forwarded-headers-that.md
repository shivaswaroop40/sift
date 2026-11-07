---
id: 3a912e3caa
title: Rails, Spring and Jetty read Forwarded headers that most proxies pass through
original_title: "Forwarded Without Question: How Web Frameworks Overtrust the Forwarded Header"
url: https://www.lkoskela.fi/blog/2026-11-05-forwarded-without-question/
source: Lobsters
kind: community
section: security
date: "2026-11-07"
published_at: "2026-11-07T06:18:48.000Z"
authors:
  - lkoskela.fi via cameron
  - lkoskela.fi via cameron
comments: https://lobste.rs/s/m5kism/forwarded_without_question_how_web
tags:
  - forwarded
  - security
  - proxy-headers
  - spoofing
  - web-frameworks
  - community
why_read: >-
  The original covers the RFC 7239 header fields, the echo-server testing method, and detailed
  per-framework findings.
rank: 7
interest_score: 6.3
depth_score: 6
novelty_score: 6
utility_score: 7
scored: true
model: glm-5.3
---

Rails, Spring and Jetty read values from the Forwarded request header in their default configuration, according to tests of framework behaviour. Most reverse proxies, CDNs and middleware servers do not touch the Forwarded header on incoming requests. A Forwarded header set by an untrusted client therefore passes through the proxy chain intact, and the application may treat it as trusted. The result is client IP and request host name spoofing.

The usual trusted-proxy defence does not stop this. Frameworks parse forwarded headers only when the request comes from a listed proxy address, but the proxy itself forwards the attacker's header alongside its own correct X-Forwarded-* values. When the framework prefers Forwarded, the spoofed value wins. In the author's test, an application set remote_ip to 127.0.0.1 from Forwarded while the proxy reported 1.2.3.4 in X-Forwarded-For.

Practical impact includes bypassing IP restrictions and rate limits, and password reset email deception through host name overrides. The fix is to make proxies and applications agree on which headers are trusted, and to configure proxies to drop untrusted proxy headers. The author's own Envoy setup now drops all incoming X-Forwarded-* and Forwarded headers.

The findings have limits. The framework list is arbitrary and not exhaustive. Testing used the latest versions at the start of 2026, with the minimum changes needed to enable forwarded header support. Some frameworks have since issued patches for the behaviour described.
