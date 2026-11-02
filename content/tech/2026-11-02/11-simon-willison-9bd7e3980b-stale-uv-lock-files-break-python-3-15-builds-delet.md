---
id: 9bd7e3980b
title: Stale uv.lock files break Python 3.15 builds; deleting them fixes it
original_title: If in doubt, delete the uv.lock file
url: https://simonwillison.net/2026/Nov/1/delete-uv-lock-first/
source: Simon Willison
kind: blog
section: languages-and-tools
date: "2026-11-02"
published_at: "2026-11-01T23:24:22.000Z"
authors: []
comments: null
tags:
  - uv
  - python
  - dependencies
  - pyo3
  - lockfiles
  - blog
why_read: >-
  The original note gives the exact error message and Willison's reasoning on why libraries should
  not ship lock files.
rank: 11
interest_score: 5.7
depth_score: 5
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

Simon Willison reports a recurring dependency failure since switching to Python 3.15. Commands such as uv run pytest leave a uv.lock file behind in projects that do not commit one. That lock can pin a dependency version with no Python 3.15 wheel. His example is watchfiles 1.1.1, which fails to build because PyO3 supports Python 3.14 at most. Deleting uv.lock and rerunning usually fixes it.

This affects library projects in particular. Willison keeps uv.lock out of his repositories because a library should not lock versions for its downstream users, so the file exists only locally and is easy to forget. A stale lock silently constrains resolution to old pins. On a new interpreter that means attempted source builds of packages whose native tooling has not caught up.

The failure is a version ceiling in native build tooling. PyO3 declares a maximum supported Python version, here 3.14, and maturin's build_wheel fails when the configured interpreter is newer. The lock keeps that pinned version in place, so removing it lets uv resolve dependencies afresh.
