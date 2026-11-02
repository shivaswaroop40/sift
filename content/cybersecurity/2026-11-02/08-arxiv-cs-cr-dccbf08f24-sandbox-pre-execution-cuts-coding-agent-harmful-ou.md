---
id: dccbf08f24
title: Sandbox pre-execution cuts coding agent harmful outcomes to 6.7% on SABER
original_title: "\"Shall We Approve?\" Consequence-Aware Approval for Autonomous Coding Agents"
url: https://arxiv.org/abs/2610.40753
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-11-02"
published_at: "2026-11-02T05:00:00.000Z"
authors:
  - Weiheng Wu
  - Junkai Chen
  - Zhensu Sun
  - Jieke Shi
  - Yunbo Lyu
  - David Lo
comments: null
tags:
  - coding-agents
  - sandboxing
  - command-approval
  - agent-safety
  - benchmarks
  - paper
why_read: >-
  You will get the full Caper design, its sandbox and rollback mechanism, and benchmark numbers for
  effect-based approval against six existing systems.
rank: 8
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

Researchers have built Caper, an approval mechanism for autonomous coding agents that judges commands by their effects rather than their text. It pre-executes each proposed shell command in a snapshotted sandbox, hands an independent approver a bounded report of what the command did, commits allowed commands, and rolls back blocked ones with a reason the agent can act on. Existing approvers, from rule-based checkers to guardrail models and deployed permission classifiers, see only the request and command text.

The gap matters in production. A command's behaviour depends on the code it invokes and the state of the workspace, so text-based approval can miss harmful actions hidden inside invoked tools. On YoloFS-Ext, a benchmark the authors built for exactly that case, Caper recorded a 7.8% harmful-outcome rate against at least 35.3% for six existing systems. On SABER it scored 6.7% against at least 14.8%.

Over-blocking stays low in this evaluation. Caper blocked 1.0% of the safe twins of the dangerous tasks in YoloFS-Ext. Note that YoloFS-Ext is the authors' own benchmark, and these figures come from the paper's abstract, so the comparison still awaits independent replication.
