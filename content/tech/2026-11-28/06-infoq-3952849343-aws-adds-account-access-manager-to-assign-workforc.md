---
id: "3952849343"
title: AWS adds Account Access Manager to assign workforce users to existing IAM roles centrally
original_title: AWS Introduces Centralized Workforce Access to IAM Roles Across Accounts
url: >-
  https://www.infoq.com/news/2026/11/aws-centralized-workforce-access/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: infrastructure
date: "2026-11-28"
published_at: "2026-11-28T07:57:00.000Z"
authors:
  - Renato Losio
comments: null
tags:
  - aws
  - iam
  - identity-center
  - access-management
  - cloudtrail
  - federation
  - news
why_read: >-
  The original lists the launch partners, the migration tool's capabilities and the CLI change,
  which you need to judge whether moving from Identity Center or SAML federation is worth it.
rank: 6
interest_score: 6
depth_score: 5
novelty_score: 6
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

AWS has launched Account Access Manager, which assigns workforce users and groups to existing IAM roles across an organisation from one place. It keeps custom trust policies, role paths and ABAC configurations. It uses the same users and groups as IAM Identity Center and can run alongside its permission sets or independently.

Until now teams chose between direct IAM role federation and IAM Identity Center. Federation is flexible but needs an identity provider set up and access managed in each account. Identity Center is centralised but can be restrictive when teams need account-specific roles. AWS says the new service removes that trade-off.

The service passes individual user identities into IAM role sessions, so actions can be attributed to a person even when several people share a role. It adds a dedicated account-access API namespace, with its own IAM permissions and CloudTrail events for auditing assignments. AWS recommends enabling it in the management account, in the same Region as Identity Center.

Migration has some friction. AWS released an open source AAM Migration Tool with a CLI and browser interface, which generates CloudFormation templates. Identity Center commands such as aws sso configure do not work for these assignments, and aws login replaces them. It is free in all commercial regions. Corey Quinn criticised it as yet another option adding to fragmentation.
