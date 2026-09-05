---
id: e4b0269723
title: "Kubernetes v1.37: KubeletInUserNamespace (aka Rootless mode) Graduates to Beta"
original_title: "Kubernetes v1.37: KubeletInUserNamespace (aka Rootless mode) Graduates to Beta"
url: https://kubernetes.io/blog/2026/09/04/kubernetes-v1-37-rootless-beta/
source: Kubernetes Blog
kind: blog
section: systems
date: "2026-09-05"
published_at: "2026-09-04T18:30:00.000Z"
authors: []
comments: null
tags:
  - blog
why_read: ""
rank: 6
interest_score: 10
depth_score: 10
novelty_score: 10
utility_score: 10
scored: false
model: null
---

Kubernetes v1.37 promotes the KubeletInUserNamespace feature gate to beta.
With this feature enabled, all of the node components (kubelet, CRI and OCI runtimes,
CNI plugins, and kube-proxy) can run as a non-root user on the host, using a
Linux user namespace .
This technique is also known as rootless mode .
The work started as an experiment in 2018, and was merged into Kubernetes v1.22 (2021)
as an alpha feature (Kubernetes Enhancement Proposal KEP-2033 ).
This feature should not be confused…
