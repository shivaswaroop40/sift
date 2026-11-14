---
id: da727b3c25
title: >-
  Google Compute Engine API gains immutable date-based versions alongside /v1, with no end-of-life
  for /v1
original_title: Google Cloud Moves the Compute Engine API to Immutable Date-Based Versions
url: >-
  https://www.infoq.com/news/2026/11/compute-engine-api-versioning/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-14"
published_at: "2026-11-14T07:27:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - google-cloud
  - compute-engine
  - api-versioning
  - terraform
  - sdk
  - iam
  - news
why_read: >-
  The original has the SDK, gcloud and Terraform details and a comparison with Azure, AWS and Stripe
  versioning, useful if you pin or automate against Compute Engine.
rank: 6
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Google Cloud has made multi-versioning of the Compute Engine API generally available. Stable versions are named YYYY-MM-DD and released quarterly, starting with 2026-09-01. Previews carry a -preview suffix and last one year. Callers pick a version with the X-Goog-Api-Version header or the $apiVersion query parameter on the unchanged /compute/v1/ path. Requests that name no version still get /v1, which has no end-of-life date.

Google says /v1 was a single mutable surface shared by every customer, so even small default or error-format fixes risked breaking scripts. Date-based versions are locked snapshots with no breaking changes after publication. Differences so far: AggregatedList returns partial results by default, errors use structured google.rpc.ErrorInfo, and IAM permission checks can be tightened. Automation pinned to /v1 sees none of this.

Most users will meet the change through tooling. Client libraries for seven languages each bind to one date-based version and keep the compute_v1 and apiv1 namespaces, so imports do not change. gcloud has a new preview compute group, and the Terraform google and google-beta providers target stable and preview versions respectively, with no version setting in HCL.

Several gaps remain. Google gives no end-of-life date for /v1, no route from preview to stable, no full list of differences between /v1 and 2026-09-01, and no word on other Google Cloud APIs or the /beta and /alpha channels. It has also not said which quarterly versions may contain breaking changes.
