---
id: f3bf97b358
title: Google traced intermittent GKE API timeouts to three bugs, one in the Linux kernel's TCP stack
original_title: How Google Traced GKE API Timeouts to a Linux Kernel TCP Bug
url: >-
  https://www.infoq.com/news/2026/11/gke-kernel-network-bug/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-21"
published_at: "2026-11-21T09:44:00.000Z"
authors:
  - Renato Losio
comments: null
tags:
  - gke
  - kubernetes
  - linux-kernel
  - tcp
  - envoy
  - debugging
  - news
why_read: >-
  You get a worked example of debugging a failure that spans a cloud networking layer, a proxy and
  the kernel TCP state machine, with the fix and affected versions.
rank: 1
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Google has described how intermittent Kubernetes API timeouts on GKE clusters using Private Service Connect (PSC) blocked around 800 developers from deploying to production. Packet captures showed the control plane answering new TCP connection requests with stale ACKs from previously closed connections. Engineers found three interacting causes: packet reordering in PSC, Envoy's half-close behaviour, and a kernel bug that discarded certain reordered FIN packets.

The kernel bug left sockets stuck in FIN_WAIT_2 indefinitely. Google fixed it in stages over several weeks. It rolled back a PSC change, corrected proxy protocol handling and added regression tests. The final fix was a kernel patch by Eric Dumazet, merged into Linux 6.9.7 and backported to the 6.6 and 6.1 LTS branches. It reached GKE in version 1.33.5 and later.

The symptom, an i/o timeout on a connection that never completed, looked the same at the PSC, Envoy and kernel layers. Each layer had a plausible explanation and each was incomplete. Packet captures at several layers, correlated with rollout events, were what tied the three bugs together.

There are caveats. One commenter notes the case is anonymised, gives no population failure rate and does not explain all API timeouts. Another points out that GKE was running a roughly three-year-old 6.1 kernel and that the bug was already fixed upstream, so Google had to backport it.
