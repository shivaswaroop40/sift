---
id: c1f2ca6682
title: Danfoss refrigeration controllers expose thousands of machines to remote takeover
original_title: >-
  Freeze the Controller, Defrost the Food: Uncovering Vulnerabilities in Danfoss Refrigeration
  Controllers
url: >-
  https://claroty.com/team82/research/freeze-the-controller-defrost-the-food-uncovering-vulnerabilities-in-danfoss-refrigeration-controllers
source: Lobsters
kind: community
section: security
date: "2026-10-13"
published_at: "2026-10-13T07:09:54.000Z"
authors:
  - claroty.com via Verfeuil
  - claroty.com via Verfeuil
comments: https://lobste.rs/s/nsmm3j/freeze_controller_defrost_food
tags:
  - industrial-control
  - vulnerability
  - authentication-bypass
  - remote-code-execution
  - refrigeration
  - nginx
  - community
why_read: >-
  Learn how adversaries could seize control of refrigeration infrastructure at scale and what
  architectural flaws made it possible.
rank: 2
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Researchers at Team82 found three critical vulnerabilities in Danfoss AK-SM 800A controllers, which manage refrigeration systems across supermarkets and warehouses. A hidden authentication bypass, command-injection flaw, and Nginx configuration vulnerability allow unauthenticated attackers to run code remotely. Danfoss has issued patches.

These controllers are centralized management hubs that operators access via embedded web interfaces for monitoring and configuring refrigeration equipment. Compromising one gains control over an entire site's refrigeration infrastructure, including temperature thresholds and remote maintenance.

Internet scans found approximately 2,765 AK-SM 800A devices publicly accessible online. The researchers reverse-engineered the firmware to trace vulnerabilities through multiple layers of Nginx reverse proxies and CGI handlers, demonstrating how undocumented functionality and insecure command construction create attack chains against internet-facing industrial systems.
