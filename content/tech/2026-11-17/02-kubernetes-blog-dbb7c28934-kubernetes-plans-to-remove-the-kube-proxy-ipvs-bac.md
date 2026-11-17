---
id: dbb7c28934
title: Kubernetes plans to remove the kube-proxy ipvs backend in version 1.40
original_title: Scheduling the removal of the kube-proxy IPVS backend
url: https://kubernetes.io/blog/2026/11/16/ipvs-removal/
source: Kubernetes Blog
kind: blog
section: infrastructure
date: "2026-11-17"
published_at: "2026-11-16T18:35:00.000Z"
authors: []
comments: null
tags:
  - kubernetes
  - kube-proxy
  - ipvs
  - nftables
  - iptables
  - deprecation
  - blog
why_read: >-
  You get the deprecation timeline, the technical reasons ipvs failed to scale, and the migration
  prerequisites for moving to nftables, including version and kernel requirements.
rank: 2
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Kubernetes SIG Network has deprecated the ipvs backend for kube-proxy as of 1.35 and plans to remove it in 1.40. It still works today, with a deprecation warning. The project tells ipvs users to move to the nftables or iptables backends. The post is written by Dan Winship of Red Hat.

The ipvs backend was built to fix iptables scaling. Hash tables removed the linear rule matching, and incremental updates avoided rewriting the whole ruleset. But the kernel IPVS API has no batch updates, so ipvs can be slower than iptables when many changes arrive at once. It also falls back to iptables for features beyond basic load balancing.

The original authors left the Kubernetes ecosystem and compatibility gaps with iptables were never closed. Red Hat plans to remove the iptables API from RHEL, which would end ipvs mode there too. The post also says IPVS schedulers give little benefit, because kube-proxy instances on different nodes do not share scheduler state. The mh scheduler needs a two-layer design that kube-proxy cannot provide.

The recommended target is nftables, which went GA in 1.33. The post advises running 1.36 or later with kernel 5.13 or later, because later scaling fixes were not backported. It reports latency very slightly better than ipvs, and says the point is only that it is not slower. Migration means changing the mode in the kube-proxy config and restarting. Any ipvs-specific options also need changing.
