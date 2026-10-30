---
id: 9d0b7d7a62
title: Kamaji and HAMi run isolated tenant clusters with fractional GPUs on one GPU-less host
original_title: Multi-tenant GPU Kubernetes on simulated hardware with Kamaji and HAMi
url: >-
  https://www.cncf.io/blog/2026/10/23/multi-tenant-gpu-kubernetes-on-simulated-hardware-with-kamaji-and-hami/
source: CNCF
kind: blog
section: infrastructure
date: "2026-10-30"
published_at: "2026-10-23T11:30:00.000Z"
authors:
  - By Anish Bista | CNCF Golden Kubestronaut
comments: null
tags:
  - kubernetes
  - kamaji
  - hami
  - gpu-sharing
  - multi-tenancy
  - kind
  - blog
why_read: >-
  The original gives the full five-step build with exact versions, working commands, the errors hit
  and their fixes, plus the Konnectivity path proof.
rank: 10
interest_score: 6.7
depth_score: 7
novelty_score: 6
utility_score: 7
scored: true
model: glm-5.3
---

A CNCF blog post runs two isolated tenant Kubernetes clusters with fractional GPU scheduling on a single machine with no GPU. Kamaji hosts each tenant's control plane as pods inside one management cluster. HAMi lets pods request GPU memory in MB and compute as a percentage, and its mock device plugin simulates cards from node annotations. Tenant-a gets a simulated A100 80 GB; tenant-b gets two L4 24 GB cards. All eight tests passed on 4 CPU cores, 8 GB of free RAM and 20 GB of disk.

This targets two familiar costs. Kubernetes hands out GPUs as whole cards, so a pod needing 4 GB of an 80 GB card blocks the entire device. A cluster per team means paying for a control plane per team, while one shared cluster gives weak isolation. The lab also proves the fragile join point. The tenant API server runs in the management cluster while HAMi's webhook runs on tenant workers, so every GPU pod creation depends on Kamaji's Konnectivity tunnel.

Some mechanics matter for reproduction. The mock plugin skips hardware discovery and registers gpumem and gpucores capacity from an annotation, after which the webhook, scheduler and quota logic run as on real nodes. Workers are kindest/node containers joined with kubeadm, version-matched to the tenant. The post warns against labelling a worker gpu=on, since that starts HAMi's real NVIDIA plugin, which fails without a driver. This is a lab on simulated hardware, not production validation.
