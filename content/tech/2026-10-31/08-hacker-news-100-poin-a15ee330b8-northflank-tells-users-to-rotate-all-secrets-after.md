---
id: a15ee330b8
title: Northflank tells users to rotate all secrets after AI API key misuse reports
original_title: Northflank Breached
url: https://status.northflank.com
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-10-31"
published_at: "2026-10-30T15:10:31.000Z"
authors:
  - js4ever
comments: https://news.ycombinator.com/item?id=50305025
tags:
  - northflank
  - security-breach
  - secrets
  - api-keys
  - incident-response
  - community
why_read: >-
  The status page holds Northflank's full rotation guidance, the minute-by-minute response timeline,
  and its link to Wiz's Black October report.
rank: 8
interest_score: 7
depth_score: 5
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Northflank, a platform for running containers and databases, declared a major security outage on 30 October 2026. A Wiz threat alert at 11:43 UTC triggered the response, followed by network policy patches within the hour. By 13:58 UTC the company told users to assume all environment variables had been decrypted. Multiple users confirmed unauthorised use of AI API keys supplied to the platform. Seven platform components, including networking, services, addons and builds, sit in major outage.

If you run workloads on Northflank, treat every secret as exposed. Rotate credentials in workloads, secret groups and global secrets, revoke them with the issuing providers, and update the affected services. Disable public access to addons where it is enabled. Review AI provider usage and billing logs for unexpected charges. Northflank has enabled secret rotation for Postgres and MongoDB addons and audit logs for all customers, including free users.

Northflank says the reported IP addresses also appear in Wiz's 'Black October' report on attacks targeting AI credentials, which may place this incident in a wider campaign. The company has not said how the environment variables were decrypted. Its investigation was still open at the last update, on 31 October at 01:04 UTC, which announced the audit log rollout.
