---
id: 96abbb8c95
title: Puppet deserialization flaw allowed RCE on the server from any agent since 2021
original_title: Pulling the right strings for RCE on a Puppet
url: https://neodyme.io/en/blog/puppet_rce
source: Lobsters
kind: community
section: security
date: "2026-11-04"
published_at: "2026-11-04T07:39:20.000Z"
authors:
  - neodyme.io via buherator
  - neodyme.io via buherator
comments: https://lobste.rs/s/sfzkeb/pulling_right_strings_for_rce_on_puppet
tags:
  - puppet
  - rce
  - deserialization
  - ruby
  - security
  - community
why_read: >-
  The write-up traces the deserialization chain from the report endpoint to class_eval, showing the
  Ruby source at each step.
rank: 9
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

Neodyme researchers found two CVSS 9+ Puppet vulnerabilities while preparing a red team engagement. Both allow remote code execution on the management server in a default configuration, and both date back to 2021. The first, CVE-2026-115731, affects Puppet 8.20.0, the engine in Puppet Enterprise 2025.11.2, and open-source Puppet 6.24.0. Perforce and OpenVox have addressed them in newer releases. The team used AI-assisted analysis, but says strict steering and explicit prompting were needed.

The attack needs only a valid certificate for a single agent. The report endpoint /puppet/v3/report/{agent_name} on port 8140 accepts a JSON event object, which Puppet::Pops::Serialization::FromDataConverter deserialises. A crafted __ptype value reaches RubyGenerator, which builds a class body from attacker input and passes it to class_eval. A backtick in the generated method body then runs shell commands.

The Puppet server decides what every agent deploys, so code execution there turns a single agent certificate into control of the whole fleet. Puppet is widely used in large companies to provision and patch servers, which makes the management server a high-value target. The researchers also found a host impersonation flaw in a non-default but commonly used configuration.
