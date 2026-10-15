---
id: 5572913d8e
title: Netflix reduced Spark job tuning time from hours to minutes with async checkpointing
original_title: Running Apache Spark experiments in my sleep (and on a plane)
url: >-
  https://netflixtechblog.com/running-apache-spark-experiments-in-my-sleep-and-on-a-plane-588816b6b5f8?source=rss----2615bd06b42e---4
source: Netflix Tech Blog
kind: blog
section: systems
date: "2026-10-15"
published_at: "2026-10-14T19:49:11.000Z"
authors:
  - Netflix Technology Blog
comments: null
tags:
  - spark
  - testing
  - distributed-systems
  - checkpointing
  - batch-processing
  - blog
why_read: Learn how Netflix cut Spark experiment cycles from hours to minutes using async checkpointing.
rank: 8
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: claude-haiku-4-5-20251001
---

Netflix's member-sessionizer pipeline processes tens of billions of hourly events into viewing sessions. Standard tuning hit a wall: tests at production scale took hours, limiting attempts to three or four daily. The team built async checkpointing to decouple computation from I/O, allowing fast local iteration.

For distributed systems engineers, this matters because test cycle time directly constrains optimisation work. A two-month tuning effort blocked on feedback loops is typical for large-scale batch jobs. Async checkpointing shows how to unblock iteration without shrinking the test dataset.

The mechanism lets developers run experiments on planes or while offline, then submit results to production infrastructure later.
