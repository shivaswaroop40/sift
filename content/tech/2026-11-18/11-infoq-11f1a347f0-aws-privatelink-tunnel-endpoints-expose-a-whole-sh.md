---
id: 11f1a347f0
title: AWS PrivateLink tunnel endpoints expose a whole shared CIDR range, with GENEVE and TCP-only limits
original_title: AWS PrivateLink Tunnel Endpoints Open a Whole CIDR Range to Another Account
url: >-
  https://www.infoq.com/news/2026/11/aws-privatelink-tunnel-endpoints/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-18"
published_at: "2026-11-18T09:29:00.000Z"
authors:
  - Steef-Jan Wiggers
comments: null
tags:
  - aws
  - privatelink
  - networking
  - vpc
  - geneve
  - terraform
  - news
why_read: >-
  The original gives the GENEVE setup details, the full list of documented limits and the two
  practitioner experiments, which show where the design gets awkward in practice.
rank: 11
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

AWS has published a walkthrough of tunnel endpoints, a VPC endpoint type launched in September. A provider shares a CIDR-type resource configuration through Resource Access Manager. The consumer creates a tunnel endpoint against it and can then reach every address in the range, including resources created after the share. Traffic is one-way, from consumer to provider, and the two VPCs may use overlapping CIDR blocks.

The design targets vendor access without a PrivateLink resource configuration per host. Unlike peering, it shares a subset of address space in one direction. Unlike VPC Lattice services, it works at layer 4. The catch is on the consumer side. Traffic must be wrapped in GENEVE over UDP port 6081, in the same Availability Zone. The walkthrough does this with a Linux kernel GENEVE link inside a network namespace.

The constraints are material. Inner traffic must be TCP, with UDP allowed only for DNS, so ping does not work and fragments are dropped. Private DNS names are unsupported. Access logs identify the consumer endpoint but not the inner source address. Sharing 0.0.0.0/0 grants reach to everything the provider VPC can route to, including peered, Direct Connect and VPN networks.

A Classmethod engineer tested overlapping 10.0.0.0/16 ranges. It worked, but only with a root GENEVE relay, a /32 route per host, or an HAProxy or NAT instance in front. He judged the 0.0.0.0/0 case difficult to use permanently in production. Pricing is hourly plus per GB, and it is available in 28 regions.
