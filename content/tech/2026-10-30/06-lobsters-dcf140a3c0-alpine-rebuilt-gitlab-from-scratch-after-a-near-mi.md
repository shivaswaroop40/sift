---
id: dcf140a3c0
title: Alpine rebuilt GitLab from scratch after a near-miss exploit of a Ruby regex flaw
original_title: "GitLab security incident: attempted exploitation of CVE-2026-97229"
url: https://alpinelinux.org/posts/GitLab-security-incident-CVE-2026-97229.html
source: Lobsters
kind: community
section: security
date: "2026-10-30"
published_at: "2026-10-28T23:01:26.000Z"
authors:
  - alpinelinux.org by durrendal
  - alpinelinux.org by durrendal
comments: https://lobste.rs/s/2zsjwt/gitlab_security_incident_attempted
tags:
  - gitlab
  - security-incident
  - ruby
  - cve
  - alpine-linux
  - regex
  - community
why_read: >-
  You get the full incident timeline, the verification method, and the Ruby versions you need if you
  run GitLab with your own build.
rank: 6
interest_score: 7
depth_score: 6
novelty_score: 8
utility_score: 7
scored: true
model: kimi-k3
---

On 20 and 21 October an attacker used a newly registered account to send crafted CI configurations to Alpine Linux's GitLab instance, exploiting CVE-2026-97229. The flaw is rated CVSS 10.0 and sits in Onigmo, the regular expression engine inside Ruby, which GitLab uses to evaluate CI configuration. The attempts crashed GitLab worker processes eight times and in four cases got partway through the exploit. Alpine found no evidence of code execution but could not rule it out, so it rebuilt the instance from scratch and reset all passwords.

The patching detail is the part worth noting. GitLab's fix is a patch to the Ruby it bundles in its own packages and images, not to GitLab's code. Alpine upgraded to 19.3.6 on 22 October and stayed vulnerable because its image uses standard Ruby. Anyone running GitLab with their own Ruby, from source or in a custom container image, needs Ruby 3.3.13, 3.4.12 or 4.0.9. The bug also exposes any program that compiles regular expressions from untrusted input, not just GitLab.

Verification held up where it mattered. Alpine checked aports commits against records the attacker could not reach, including a developer's clone and all 45 builders, and found the releases and packages untampered. Signing keys were never on the server. But a successful exploit would have left no trace, some logs were gone, and there was no outbound network logging, so rebuilding was the only safe option. Had it succeeded, password hashes, 2FA secrets, CI variables and runner tokens could have been exposed.
