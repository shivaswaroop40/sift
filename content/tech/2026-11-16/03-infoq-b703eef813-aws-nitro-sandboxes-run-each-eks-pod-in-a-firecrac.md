---
id: b703eef813
title: AWS Nitro Sandboxes run each EKS pod in a Firecracker microVM, with density and GPU limits
original_title: AWS Nitro Sandboxes Put Each EKS Pod in Its Own MicroVM with One RuntimeClass Field
url: >-
  https://www.infoq.com/news/2026/11/aws-nitro-sandboxes-eks/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-16"
published_at: "2026-11-16T09:07:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - aws
  - eks
  - kubernetes
  - firecracker
  - sandboxing
  - multi-tenancy
  - news
why_read: >-
  The article sets out the trust model, the capacity arithmetic and the GKE Sandbox comparison, so
  you can judge whether the sandbox fits your multi-tenant or untrusted-code workloads.
rank: 3
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

AWS has launched Nitro Sandboxes, which run an opted-in EKS pod, ECS task or EC2 workload in its own Firecracker microVM with a separate guest kernel. On EKS the opt-in is one field, runtimeClassName set to isolated-sandbox or confidential-sandbox. It is available in all commercial regions at no extra charge. AWS names coding agents as the first use case.

The two modes differ in who is trusted. Isolated mode trusts the parent instance, so kubectl exec and logs still work. Confidential mode treats the parent as untrusted. It applies a Cedar policy, denies exec, and measures the image and policy into PCRs. Secrets can be released through KMS only to a matching sandbox. The documentation says that without a KMS policy or external verifier checking the PCRs, the confidentiality guarantees are incomplete.

The limits are significant. GPU and device passthrough is unsupported. Sandbox vCPUs and sandbox counts are each capped at five times the node's vCPUs, with the count halved on CPU-overcommit types. Core scheduling leaves roughly half the advertised vCPUs usable on SMT instances, though Graviton is unaffected. Network-isolated mode removes DNS, NTP, IMDS and Pod Identity, and breaks HTTP and TCP probes.

AWS Container Hero Sandip Das notes that isolated mode protects in one direction only. A compromised parent can still tamper with unencrypted traffic and mint Pod Identity credentials for any pod on the node. He also lists prerequisites missing from the launch blog, including Kubernetes 1.36 or later and Nitro Enclaves enabled in the launch template. He suggests treating AWS's near-native performance claim as a vendor claim and benchmarking it.
