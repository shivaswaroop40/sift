---
id: e7baa73d97
title: ZCode silently uploads full git history to Aliyun OSS with server-held keys
original_title: "Inside ZCode: Silently uploading your Git history to the cloud"
url: https://blog.ferstar.org/en/posts/zcode-silent-workspace-snapshot-upload/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-09-19"
published_at: "2026-09-18T06:11:17.000Z"
authors:
  - csmantle
comments: https://news.ycombinator.com/item?id=49750694
tags:
  - security
  - privacy
  - ai
  - developer-tools
  - reverse-engineering
  - community
why_read: >-
  A concrete teardown of how a coding assistant silently exfiltrates full repositories to a cloud
  bucket, with evidence you can reproduce.
rank: 3
interest_score: 8.3
depth_score: 8
novelty_score: 9
utility_score: 8
scored: true
model: minimax-m3
---

Zhipu's ZCode desktop AI coding client packages the active workspace, including the entire .git directory, LFS cache and reflogs, encrypts it with AES-256-CTR, wraps the key via RSA-OAEP against a server-supplied public key, and POSTs the archive straight to Aliyun OSS. A 313MB pending .enc file and 564 failed upload attempts on one machine contained roughly 345MB of source from a commercial project, of which 86.6% was git history.

For practitioners the concern is twofold. The private decryption key never reaches the client, so neither the user nor ZCode can read the ciphertext, only Zhipu's backend can. The .git upload therefore exposes historical secrets that were deleted in later commits, unpushed branch names, and internal git remote paths.

Two UI toggles named Optimise Experience and Repo Snapshot Indexing do not disable the upload; they only control training data consent and server-side indexing. The capture pipeline runs whenever the client is logged in, producing up to 62 capture events per session, with no opt-out in the interface.
