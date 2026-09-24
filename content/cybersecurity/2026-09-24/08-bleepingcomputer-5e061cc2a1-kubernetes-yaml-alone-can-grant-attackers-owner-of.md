---
id: 5e061cc2a1
title: Kubernetes YAML alone can grant attackers owner of a GCP organisation
original_title: How One Kubernetes YAML Can Hand Over a GCP Organization
url: >-
  https://www.bleepingcomputer.com/news/security/how-one-kubernetes-yaml-can-hand-over-a-gcp-organization/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-09-24"
published_at: "2026-09-23T14:01:11.000Z"
authors:
  - Sponsored by Varonis
comments: null
tags:
  - kubernetes
  - gcp
  - iam
  - configconnector
  - confused-deputy
  - privilege-escalation
  - news
why_read: >-
  You will see the exact YAML that escalates a Kubernetes namespace user to GCP organisation owner
  and the confused-deputy reasoning behind it.
rank: 8
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

A security researcher has shown that a single Kubernetes YAML submitted to Google Kubernetes Config Connector (KCC) can grant the attacker roles/owner on an entire Google Cloud organisation, without the attacker ever holding a GCP credential. The technique, called ConfigConfusion, abuses the fact that KCC performs every Cloud API call through its own service account, regardless of which Kubernetes user submitted the request.

If a user has permission to create IAMPolicyMember resources in any namespace watched by KCC, and KCC's service account holds roles/owner or roles/resourcemanager.organizationAdmin, the user can bind an attacker-controlled service account to that organisation-level role. Kubernetes RBAC only checks the cluster-side action; GCP IAM only sees KCC's service account and approves the call. Neither system knows the original requester.

Google responded that this is expected behaviour: granting KCC an organisation-level identity and allowing IAMPolicyMember creation in managed namespaces are configuration choices the administrator made. KCC does not enforce which GCP roles the submitting Kubernetes user is entitled to request.

The practical mitigation is to tighten who can create IAMPolicyMember and similar CRDs in KCC-managed namespaces, split KCC service accounts per scope instead of using one organisation-wide identity, and validate that requested GCP bindings fall within the namespace owner's intended blast radius.
