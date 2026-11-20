---
id: a434aab487
title: Argo CD self-heal can skip Sync hook migrations after a deny window closes
original_title: "When a sync window closes: How Argo CD self-heal skipped the migration hook"
url: >-
  https://www.cncf.io/blog/2026/11/20/when-a-sync-window-closes-how-argo-cd-self-heal-skipped-the-migration-hook/
source: CNCF
kind: blog
section: infrastructure
date: "2026-11-20"
published_at: "2026-11-20T12:30:00.000Z"
authors:
  - Afzal Ansari (CNCF Ambassador)
comments: null
tags:
  - argo-cd
  - gitops
  - kubernetes
  - database-migrations
  - sync-windows
  - self-heal
  - blog
why_read: >-
  The post gives the refresh-path mechanism, a reproducible lab setup, and a concrete manifest
  pattern, plus caveats on ttlSecondsAfterFinished and untested failure cases.
rank: 2
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

An Argo CD user pushed a release during a deny sync window. When it closed, five regional Applications rolled out the same commit. Three ran the database migration hook. Two did not, and the new code ran for 36 to 44 minutes against the old schema. Both Applications showed Synced and Healthy.

The author reproduced this in a lab, five times out of six. A level-1 refresh, triggered by a change to a managed object, compares against the revision already recorded in status. It concludes nothing changed. With self-heal on, it runs a partial sync of drifted resources, which skips hooks and writes no history.

A timer-driven level-2 refresh compares against targetRevision and runs a full sync with hooks. Whichever refresh arrives first after the window closes decides the outcome. The author says the bug is that the last compared revision is mistaken for the last synced one.

The suggested fix is to drop the hook annotations. Make the migration an ordinary resource in an earlier sync wave, with a unique name per release. In the lab this survived the broken path. The author did not test a failing migration, or the alternative hook settings.
