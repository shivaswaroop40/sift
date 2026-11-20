---
id: 4536919bbc
title: OpenSSL public PR fixes EVP_EncodeBlock overflow, CVE-2026-121481, rated CVSS 9.8
original_title: "OpenSSL: Buffer overflow in EVP_EncodeBlock() (CVE-2026-121481, CVSS 9.8)"
url: https://github.com/openssl/openssl/pull/33652
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-20"
published_at: "2026-11-20T02:01:09.000Z"
authors:
  - JacobHenner
comments: https://news.ycombinator.com/item?id=50569226
tags:
  - openssl
  - cve
  - buffer-overflow
  - base64
  - security
  - c
  - community
why_read: >-
  The thread shows the real design argument over error return values in a widely linked C API,
  before the advisory lands, and lists the call sites that need checking.
rank: 4
interest_score: 7.7
depth_score: 6
novelty_score: 8
utility_score: 9
scored: true
model: claude-sonnet-5-5
---

A public pull request to OpenSSL fixes a buffer overflow in EVP_EncodeBlock(), tracked as CVE-2026-121481 with a CVSS score of 9.8. The patch returns -1 for NULL buffers, negative lengths, and lengths whose encoded size does not fit in an int. The OpenSSL security team asked for the fix to be made publicly. The advisory is still pending.

The same PR adds matching guards to EVP_DecodeBlock(), corrects a length check in base64encode() in http_client.c that only rejected len > INT_MAX, adds tests, and documents the new -1 returns. The author says the pattern resembles CVE-2021-23840. He reproduced it from the command line with a very large -proxy_pass value passed to openssl s_client through an environment variable.

The review has raised a compatibility question. Reviewers note that these functions can now fail where callers may not expect it. PEM_SignFinal() and NETSCAPE_SPKI_b64_encode() were named as call sites that need return checks. One maintainer worried that third-party code casting the result to size_t would mishandle -1, and suggested returning 0. The author replied that 0 is already a valid result for empty input, so it cannot signal an error.
