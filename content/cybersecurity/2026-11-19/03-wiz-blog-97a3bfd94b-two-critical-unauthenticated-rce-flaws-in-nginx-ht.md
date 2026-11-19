---
id: 97a3bfd94b
title: Two critical unauthenticated RCE flaws in NGINX HTTP/2 handling, one dating to 2015
original_title: "Unauthenticated Remote Code Execution in NGINX: CVE-2026-123633 and CVE-2026-123007"
url: https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities
source: Wiz Blog
kind: research
section: vulnerabilities
date: "2026-11-19"
published_at: "2026-11-18T15:13:20.000Z"
authors:
  - Nir Ohfeld
  - Nir Ohfeld
comments: null
tags:
  - nginx
  - http2
  - rce
  - use-after-free
  - cve-2026-123633
  - cve-2026-123007
  - research
why_read: >-
  Read it for the affected-version and configuration conditions, the disclosure timeline, and the
  mitigation and detection guidance, which the excerpt does not fully cover.
rank: 3
interest_score: 8
depth_score: 6
novelty_score: 9
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

Wiz Research and four other teams independently found two critical memory-safety flaws in NGINX's HTTP/2 handling. CVE-2026-123633 is a use-after-free on a connection. CVE-2026-123007 is a send_window integer underflow that causes an invalid memory copy. Both score 9.2 on CVSS 4.0 and allow unauthenticated code execution. F5 released fixes on 18 November.

Both require HTTP/2 to be enabled on the affected server. CVE-2026-123007 affects versions back to NGINX 1.9.5 from 2015. The use-after-free is nearly six years old. Wiz says it demonstrated code execution on NGINX serving ordinary static files, with no backend application or third-party modules involved.

NGINX often fronts several applications, so one compromised instance can expose many services, whatever the quality of the code behind it. Wiz advises identifying affected deployments, prioritising internet-reachable ones, and updating to the latest release. If you cannot upgrade straight away, disable HTTP/2 as a temporary measure.

Wiz says it found both bugs using its AI code scanning harness, and argues that AI is lowering the cost of finding long-standing memory-safety flaws. That is the vendor's own framing. The excerpt does not report in-the-wild exploitation, and the text is cut off before the detection guidance.
