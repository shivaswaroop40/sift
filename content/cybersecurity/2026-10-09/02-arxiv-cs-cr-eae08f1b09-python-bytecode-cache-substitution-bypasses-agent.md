---
id: eae08f1b09
title: Python bytecode cache substitution bypasses agent skill scanners in production deployments
original_title: "PyCache Trap: The Inspection-Execution Gap in Agent Skill Scanners"
url: https://arxiv.org/abs/2610.10612
source: arXiv cs.CR
kind: paper
section: threat-research
date: "2026-10-09"
published_at: "2026-10-09T04:00:00.000Z"
authors:
  - Jie Liao
  - Simeng Qin
  - Wenqi Ren
  - Wei Zhou
  - Junhao Wen
  - Ranjie Duan
comments: null
tags:
  - agents
  - supply-chain
  - python
  - bytecode
  - scanner-evasion
  - validation
  - paper
why_read: >-
  Learn how current agent skill scanners fail on cached bytecode and what execution-aware validation
  requires.
rank: 2
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: claude-haiku-4-5-20251001
---

Agent skills bundle instructions with executable resources, granting third-party packages runtime access. Researchers demonstrated PyCache Trap, which pairs benign visible source code with a substituted Python bytecode cache that executes different behaviour. Scanners inspecting documentation and source code failed to detect the swap.

Skill admission decisions rely on static source inspection, but Python's loader may execute cached bytecode with different semantics. This inspection-execution gap is exploitable when a package admission decision separates from detection of the concealed runtime behaviour. Across 100 skills and seven scanners, the attack achieved 94-100% success with no semantic recognition.

The researchers propose execution-aware validation to check compiled artifacts during skill admission. The method connects inspected instructions, scripts, imports and runtime artefacts in a typed execution graph. Testing showed detection of all 100 substitution attacks and 92.8% recall across five attack families with 10% false positive rate.
