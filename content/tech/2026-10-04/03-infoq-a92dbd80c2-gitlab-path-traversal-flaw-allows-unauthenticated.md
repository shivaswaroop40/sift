---
id: a92dbd80c2
title: GitLab path-traversal flaw allows unauthenticated file read in active attacks
original_title: GitLab Vulnerability Under Active Exploitation Enables Unauthenticated Data Exfiltration
url: >-
  https://www.infoq.com/news/2026/10/gitlab-critical-vulnerabilities/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: security
date: "2026-10-04"
published_at: "2026-10-03T16:00:00.000Z"
authors:
  - Sergio De Simone
comments: null
tags:
  - gitlab
  - cve
  - path-traversal
  - security
  - ci-cd
  - credentials
  - news
why_read: >-
  Understand the exposure window, what's at risk in self-managed GitLab, and what credential
  rotation you need beyond patching.
rank: 3
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

CVE-2026-85706 is a critical path-traversal vulnerability in GitLab CE/EE versions 18.7 through 19.3.1. Attackers can read arbitrary files without authentication if the instance has at least one public project. The flaw was actively exploited within hours of disclosure on September 11.

For self-managed deployments, this exposes CI/CD variables, runner tokens, SSH keys and logs. An attacker can steal secrets to compromise pipelines and pivot to connected systems. The CVSS score is 10.0 with minimal exploitation requirements.

Patching stops new reads but does not revoke already-copied credentials. Teams must rotate deploy tokens, CI variables, SSH keys, and verify packages and images pulled during the exposure window. Defenders can hunt logs for POST requests to /api/v4/projects/{id}/repository/commits/ endpoints with file.path parameters.
