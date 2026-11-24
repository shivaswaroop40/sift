---
id: 8c9e9cae26
title: Kubernetes v1.38 will require a running container runtime before the kubelet starts
original_title: Kubernetes v1.38 Sneak Peek
url: https://kubernetes.io/blog/2026/11/23/kubernetes-v1-38-sneak-peek/
source: Kubernetes Blog
kind: blog
section: infrastructure
date: "2026-11-24"
published_at: "2026-11-23T16:00:00.000Z"
authors: []
comments: null
tags:
  - kubernetes
  - kubelet
  - cgroups
  - kubeadm
  - deprecations
  - kubectl
  - blog
why_read: >-
  The original gives the exact feature gates, config fields and KEP links to audit your nodes,
  kubeadm settings, webhooks and CI scripts before upgrading.
rank: 6
interest_score: 7
depth_score: 6
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

The v1.38 sneak peek lists planned changes, all subject to revision before release. The kubelet will default to discovering the cgroup driver through the CRI RuntimeConfig RPC. The legacy cgroupDriver field in the kubelet config will be deprecated and rejected unless the temporary LegacyCgroupDriverFallback gate is enabled. If the runtime cannot supply the driver after retries, the kubelet exits before registering the node.

kubeadm will stop defaulting cgroupDriver to systemd, and its preflight checks will error if the runtime lacks the RPC. Nodes with older runtimes will need upgrading. Node bootstrap ordering also changes, because the runtime must be up first. Check this in image builds and provisioning scripts before moving to v1.38.

Other breaking changes are narrower. Pods using pod-level resources on LimitedSwap nodes with cgroup v2 will get swap limits from pod-level memory settings. If the pod-level request equals the limit, the Pod and all its containers get no swap. The kubectl WebSocket opt-out environment variables are removed, and kuberc drops the name alias for command in v1.

Cgroup v1 is still on a path to removal. The kubelet has refused to start on cgroup v1 nodes since v1.35 unless failCgroupV1 is false, and that option remains in v1.38. The ExcludeAdmissionWebhookVirtualResources gate, on since v1.37, stops webhooks seeing TokenReview and SubjectAccessReview-style requests. Pod-level resources and kuberc are expected to go stable.
