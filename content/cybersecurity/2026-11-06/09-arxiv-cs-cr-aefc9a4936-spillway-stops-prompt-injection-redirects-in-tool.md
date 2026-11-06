---
id: aefc9a4936
title: SPILLWAY stops prompt injection redirects in tool-using agents with a typed-field check
original_title: >-
  SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt
  Injection
url: https://arxiv.org/abs/2611.07222
source: arXiv cs.CR
kind: paper
section: defence
date: "2026-11-06"
published_at: "2026-11-06T05:00:00.000Z"
authors:
  - Woosang Lim (SAINT Machines
  - KAIST)
  - Yeseul Chang (Chung-Ang University)
  - Jaewoo Lee (Chung-Ang University)
comments: null
tags:
  - prompt-injection
  - ai-agents
  - tool-use
  - agent-security
  - sanitisation
  - paper
why_read: >-
  The paper details the admission rule, sanitiser, and judge, and reports utility and attack-success
  numbers across three backbones and seven task suites.
rank: 9
interest_score: 7
depth_score: 7
novelty_score: 7
utility_score: 7
scored: true
model: glm-5.3
---

The paper presents SPILLWAY, a defence for tool-using agents that separates target admission from sanitisation. It reads where an action goes from the tools' typed returns, since an email sender or a payment account arrives in a typed field while injected instructions arrive as free text. A call is admitted only when each target value in tool output but absent from the user's task came from a read-only tool in a typed field, or is covered by a fixed delegation rule.

A deterministic sanitiser removes instruction-like regions its fixed rules match before the model reads them, and retains the removed spans as evidence. A local judge may restore a refused call, never one whose target lies in the removed text. This matters because many runtime defences put a language model on the final decision, one that may itself read the attacker's text, and provenance defences need a model to plan or route each task. SPILLWAY needs neither.

Across three backbones, and seven task suites on one of them, no standard templated injection redirected an action to an attacker's target, and SPILLWAY reached the highest observed mean utility and composite scores (NRP, ERS) among the defences run under that attack. A forged chat template produced a raw zero. A released reinforcement-learning attacker scored .007 mean in-scope attack success. There were no defence-triggered backbone re-runs and almost no added model calls.

The guarantee rests on the target check rather than on catching every injection. The sanitiser removes only the regions its fixed rules match, so instruction shapes the rules miss can still reach the model, though any action's target must still pass the admission rule. For agents handling email, files, and payments, the paper claims an auditable refusal floor on where actions go that holds across backbones.
