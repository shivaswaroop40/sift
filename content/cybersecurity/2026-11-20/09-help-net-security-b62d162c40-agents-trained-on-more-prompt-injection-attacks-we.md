---
id: b62d162c40
title: Agents trained on more prompt injection attacks were easier to hijack in three of four tests
original_title: Your AI red team may be finding the same prompt injection thousands of times
url: https://www.helpnetsecurity.com/2026/11/20/ai-prompt-injection-red-team/
source: Help Net Security
kind: news
section: papers
date: "2026-11-20"
published_at: "2026-11-20T06:30:20.000Z"
authors:
  - Mirko Zorz
comments: null
tags:
  - prompt-injection
  - ai-agents
  - red-teaming
  - llm-security
  - adversarial-training
  - research
  - news
why_read: >-
  The piece gives concrete questions to put to vendors about red-team coverage, plus the figures
  showing why a raw count of successful attacks is a weak signal.
rank: 9
interest_score: 6.7
depth_score: 6
novelty_score: 8
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Researchers at Waterloo, Zhejiang and KTH compared two automated red-teaming tools, PISmith and RL-Hammer, against Qwen3-4B across 560 tasks. PISmith broke into 68.75% of tasks and found 7,132 working attacks, against 33.39% and 4,282 for RL-Hammer. After reinforcement learning on each haul, the PISmith-trained model was hijacked up to 47.5% of the time on unseen attacks. The RL-Hammer model peaked at 27.5%.

The authors blame attack tools that repeat one trick, such as claiming the user's task is finished. Built-in diversity checks measure wording, so they can be satisfied by changing capitals or adding filler. A large attack set may therefore hold many rewordings of a few techniques. That gives more copies, not more coverage, so retraining closes few holes.

The researchers built PIPETTE, which rewards attackers for finding new techniques and trains the agent to check each action against the user's request. On AgentDojo, off-the-shelf attacks got through under 0.5% of the time on average. Adaptive attackers with around 250 tries reached up to 10% on the 40 hardest tasks. On GPT-OSS-20B, one search-based attacker still succeeded on 4 of 40 tasks.

The evidence is thin in places. The hijack gap was 19 tasks against 11 out of 40, on tasks chosen because simple attacks had already broken them. Models were open-weight and small. The technique-coverage grader was not checked against human judgement, and narrow coverage is not claimed as the only cause.
