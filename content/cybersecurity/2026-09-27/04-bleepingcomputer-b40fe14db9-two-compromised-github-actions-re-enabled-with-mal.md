---
id: b40fe14db9
title: Two compromised GitHub Actions re-enabled with malware payload still active for nine days
original_title: GitHub Actions re-enabled with Mini Shai-Hulud payload still active
url: >-
  https://www.bleepingcomputer.com/news/security/github-actions-re-enabled-with-mini-shai-hulud-payload-still-active/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-09-27"
published_at: "2026-09-26T14:19:46.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - github-actions
  - supply-chain
  - shai-hulud
  - npm
  - ci-cd
  - news
why_read: >-
  You will learn which two GitHub Actions were live with a malware payload for nine days and what to
  check and rotate in your workflows.
rank: 4
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

Two third-party GitHub Actions compromised in the May Mini Shai-Hulud campaign were re-enabled by their maintainer on September 16 and remained accessible until September 25 with release tags still pointing to the original malicious commit. The actions, actions-cool/issues-helper and actions-cool/maintain-one-comment, were disabled by GitHub after the May 18 compromise but came back without the tags being cleaned. Any workflow referencing these actions by a version tag would have downloaded and executed the obfuscated payload in index.js on its next run.

The Mini Shai-Hulud attack in May affected 323 npm packages and 639 versions, stealing developer tokens, credentials, and CI/CD secrets. Socket estimates roughly 15,000 repositories depend on issues-helper through GitHub's dependency graph, though not all reference it by mutable tag. The actions support issue-housekeeping and run frequently, raising the chance of execution during the nine-day exposure window.

Socket recommends searching for references to both actions, removing them or pinning a verified clean commit, reviewing workflow runs since September 16, and rotating any secrets accessible to those workflows. The reason the repositories were re-enabled without cleanup is not yet known.
