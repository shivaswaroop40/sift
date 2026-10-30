---
id: 3c3d6e8d41
title: GitHub's 2026 Actions hardening leaves Pwn request gaps in SHA pins and issue_comment
original_title: "The Pwn Request Reckoning: What Still Works Against GitHub Actions"
url: https://www.wiz.io/blog/github-actions-security-pwn-request-reckoning
source: Wiz Blog
kind: research
section: cloud-and-supply-chain
date: "2026-10-30"
published_at: "2026-10-26T13:24:12.000Z"
authors:
  - Shay Berkovich
  - Shay Berkovich
comments: null
tags:
  - github-actions
  - pwn-request
  - ci-security
  - sha-pinning
  - supply-chain
  - research
why_read: >-
  The post details GitHub's 2026 protection timeline, the surviving exploit paths, and an audit
  checklist for your own workflows.
rank: 12
interest_score: 7.3
depth_score: 7
novelty_score: 7
utility_score: 8
scored: true
model: glm-5.3
---

Wiz has updated its GitHub Actions threat model after GitHub's 2026 platform changes. Checkout v7.0.0, released on 18 June, blocks fork code checkouts by default in untrusted triggers. Read-only cache tokens followed on 26 June, blocking cache poisoning. Protections were backported to older checkout majors on 20 July. Workflow Execution Protections reached general availability on 17 September, and on 2 December GitHub is scheduled to enforce a default event policy blocking pull_request_target in public repositories without an explicit policy.

These changes close the trivial paths but shift the vulnerability class rather than remove it. SHA pinning, standard supply chain hardening advice, can bypass the defences entirely. A commit SHA from before the 20 July backport runs legacy checkout code with no safety checks. Direct git clone, gh pr checkout and third-party checkout actions also sidestep the protections, which live inside actions/checkout itself.

Checkout protections cover only pull_request_target and workflow_run. Workflows triggered by issue_comment, common for bot commands such as /deploy, remain fully exploitable with checkout v7. repository_dispatch also runs with secrets and is exploitable when attacker-influenced payload data chooses a checkout ref. The December rule is a default, not a ban, and does not cover private or internal repositories or workflow_run.

SHA-pinned refs must resolve to v2.8.0, v3.7.0, v4.4.0, v5.1.0, v6.1.0 or v7.0.0 or later to keep protection. Mutable tags such as @v4 stay protected, while @v4.3.0 does not. For unprotected triggers, Wiz advises checking the commenter's actual repository permission rather than author_association, and treating repository_dispatch payloads as untrusted. The post ends with an audit checklist.
