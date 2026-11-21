---
id: 1bb7f7d1ac
title: Ruby heap overflow in string case conversion is reachable pre-auth in default Rails apps
original_title: How Cloudflare WAF protects against ruby2shell (CVE-2026-132825)
url: https://blog.cloudflare.com/ruby2shell-waf-protection/
source: Cloudflare Blog
kind: blog
section: security
date: "2026-11-21"
published_at: "2026-11-20T20:24:38.000Z"
authors:
  - Daniele Molteni
comments: null
tags:
  - ruby
  - rails
  - cve
  - waf
  - cloudflare
  - memory-safety
  - blog
why_read: >-
  The original has the affected version ranges, the bundled-product list, rule IDs and the cases the
  WAF cannot see, which help you scope patching.
rank: 6
interest_score: 7
depth_score: 5
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Ruby disclosed ruby2shell (CVE-2026-132825) on 19 November 2026. It is a heap buffer overflow in string case conversion, rated Critical. Ruby says proofs of concept exist that reach remote code execution in some scenarios. Fixes are in Ruby 3.3.14, 3.4.13 and 4.0.10. Ruby 3.2 and earlier are end of life and get no fix.

The mechanism is the German sharp s. In 14 legacy single-byte encodings, its uppercase form is two bytes, but Ruby checks for room for one. Veria Labs says 21 sharp s characters overflow the buffer by one byte. UTF-8 strings are unaffected. The affected methods are upcase, swapcase, downcase(:fold) and casecmp?.

Rails and classic-style Sinatra reach the bug by default. Rack's MethodOverride middleware upcases the _method parameter during routing, before authentication. An attacker can send a multipart POST declaring a legacy charset. GitLab, GitHub Enterprise Server, Mastodon, OpenProject, Discourse and Chatwoot bundled an affected Ruby at disclosure.

Cloudflare has added WAF rules that block by default for all plans, including Free. It calls them a compensating control, not a substitute for patching, since traffic that bypasses Cloudflare is not covered. The same Ruby releases fix six other memory safety flaws, five in the regex engine, mostly needing attacker-supplied patterns.
