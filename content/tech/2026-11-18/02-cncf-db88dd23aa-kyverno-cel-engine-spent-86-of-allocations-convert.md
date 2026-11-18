---
id: db88dd23aa
title: Kyverno CEL engine spent 86% of allocations converting the same object once per policy
original_title: "Optimizing Kubernetes admission control: Where Kyverno’s CEL admission cost actually goes"
url: >-
  https://www.cncf.io/blog/2026/11/18/optimizing-kubernetes-admission-control-where-kyvernos-cel-admission-cost-actually-goes/
source: CNCF
kind: blog
section: infrastructure
date: "2026-11-18"
published_at: "2026-11-18T12:30:00.000Z"
authors:
  - Raunak Madan (Software Engineer Intern
  - Nirmata)
comments: null
tags:
  - kyverno
  - kubernetes
  - admission-control
  - cel
  - performance
  - profiling
  - blog
why_read: >-
  You get the heap profile shares, the benchmark table across policy counts, and the method used to
  keep policy behaviour identical, plus the authors' own limitations section.
rank: 2
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Profiling Kyverno's CEL-based engines showed about 86% of allocated bytes went into converting the admitted object to the unstructured form CEL needs, not into evaluating policy. The conversion ran inside the loop over matched policies. With the Pod Security Standards set, roughly 16 policies match a Pod, so the same Pod was parsed 16 times.

The fix converts the request once, before the loop, and reuses it. In a benchmark with a 50 KB Pod and 64 matched policies, ValidatingPolicy engine time fell from 20.01 ms to 0.36 ms, and allocations from 148,131 to 8,672. MutatingPolicy went from 10.59 ms to 2.97 ms. The fix ships in Kyverno 1.19.2.

Cost now scales with the policies you run rather than with policies multiplied by object size. Allocations grew about 63 times from 1 to 64 policies before, and about 10 times after. The residual growth is CEL evaluation. Each engine keeps its existing view of request.object, so deployed expressions should behave as before.

The numbers come from a benchmark that calls the engine directly, so they are not end-to-end admission latencies. The comparison with native ValidatingAdmissionPolicy used Kyverno 1.19.0 and was not re-run. There, native led at one policy (9.2 ms against 12.8 ms) and Kyverno led at 16 (about 20 ms against 29 ms).
