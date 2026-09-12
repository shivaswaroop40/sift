---
id: 9a0b33672d
title: GitLab patches CVSS 10 file-read flaw after in-the-wild probes
original_title: GitLab CVSS 10 File-Read Flaw Draws In-the-Wild Probes After Disclosure
url: https://thehackernews.com/2026/09/gitlab-cvss-10-file-read-flaw-draws-in.html
source: The Hacker News
kind: news
section: vulnerabilities
date: "2026-09-12"
published_at: "2026-09-11T16:30:18.000Z"
authors:
  - info@thehackernews.com (The Hacker News)
  - info@thehackernews.com (The Hacker News)
comments: null
tags:
  - gitlab
  - cve-2026-85706
  - path-traversal
  - file-read
  - unauthenticated
  - news
why_read: Get the details on a critical GitLab file-read flaw that is already being probed in the wild.
rank: 4
interest_score: 8
depth_score: 7
novelty_score: 8
utility_score: 9
scored: true
model: deepseek-v4-flash
---

GitLab has released patches for multiple flaws, including CVE-2026-85706, a maximum-severity path traversal vulnerability in the repository commits API. The flaw allows an unauthenticated user to read arbitrary files from the GitLab server. In-the-wild probes were observed within hours of public disclosure.

This matters because an unauthenticated file read on a GitLab server can expose source code, credentials, and internal configuration. Attackers often turn such reads into further compromise. The fact that probes appeared within hours means exploitation is already being attempted. Apply the patches immediately and check for signs of unauthorised access.

The vulnerability carries a CVSS score of 10.0, the highest possible severity. The source text is truncated before describing the exact conditions, so the full impact may be broader than stated. GitLab's advisory should be consulted for affected versions and workarounds.
