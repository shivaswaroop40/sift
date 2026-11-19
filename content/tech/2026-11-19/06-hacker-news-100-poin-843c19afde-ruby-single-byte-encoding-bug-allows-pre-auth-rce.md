---
id: 843c19afde
title: Ruby single-byte encoding bug allows pre-auth RCE on default Rails and Sinatra apps
original_title: "Ruby2ßhell: Pre-authentication RCE on stock Rails"
url: https://verialabs.com/ruby2shell/
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-19"
published_at: "2026-11-19T05:09:11.000Z"
authors:
  - jdns
comments: https://news.ycombinator.com/item?id=50556287
tags:
  - ruby
  - rails
  - rce
  - heap-overflow
  - security
  - sinatra
  - community
why_read: >-
  The post has the affected version table, the vulnerable C loop and the list of bundled products,
  so you can check your own exposure quickly.
rank: 6
interest_score: 7.7
depth_score: 7
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Verialabs disclosed a one-byte heap overflow in Ruby's case-mapping code for single-byte encodings. Upcasing the character ß writes two bytes, S S, but the loop bounds-checks only one. The output buffer is input length plus 20 bytes, so an input with 21 of them overflows by one byte. The bug has existed since Ruby 2.4.0.

Affected releases are 4.0.0 to 4.0.9, 3.4.0 to 3.4.12 and 3.3.0 to 3.3.13. Fixes are 4.0.10, 3.4.13 and 3.3.14. Ruby 3.2 and older are end of life and get no fix. Rails and classic-style Sinatra are exposed in default configuration. Plain Rack and other frameworks are not exposed by default.

Several bundled products are affected. GitLab 19.6.0 ships Ruby 3.3.13, GitHub Enterprise Server 3.22.5 ships 4.0.9, and Chatwoot 4.20.0 ships 3.4.4. Mastodon, OpenProject and the Discourse base image already bundle 4.0.10. Self-hosters should wait for vendor releases or check their images.

The primitive is narrow. The written byte is 0x53 when upcasing or 0x73 when case-folding, and it lands just after the buffer. The attacker controls buffer size through input length. UTF-8 strings take a different path and are not affected. The proof of concept is due in a week, so the patching window is short.
