---
id: b80e26a07a
title: Microsoft tells Exchange 2016 and 2019 users to treat servers as permanently vulnerable
original_title: Microsoft Exchange Server 2016 and 2019 enter their 'permanently vulnerable' era
url: >-
  https://www.theregister.com/saas/2026/11/12/microsoft-exchange-server-2016-and-2019-enter-their-permanently-vulnerable-era/5309401
source: The Register
kind: news
section: security
date: "2026-11-13"
published_at: "2026-11-12T14:55:00.000Z"
authors:
  - Richard Speed
comments: null
tags:
  - exchange-server
  - microsoft
  - security
  - end-of-life
  - patching
  - cve
  - news
why_read: >-
  A short account of how Microsoft's Exchange support dates slipped and what the final cut-off now
  means for unpatched servers.
rank: 11
interest_score: 6.7
depth_score: 5
novelty_score: 7
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

Microsoft's November security update documentation for Exchange Server Subscription Edition says Exchange 2016 and 2019 are no longer tested for vulnerabilities and receive no updates. It tells customers to consider them "permanently vulnerable" and to upgrade immediately. The update fixed nine vulnerabilities in SE, including a critical remote code execution flaw, CVE-2026-118207.

Support for both versions ended on 14 October 2025. Microsoft then launched an Extended Security Updates programme in July 2025, saying it would end in April 2026 and would not be extended. In April it offered another six months of paid updates. The final 2016 and 2019 updates shipped on 13 October.

For anyone still running these versions, the practical point is that fixes for SE are now the only signal of what is wrong. Microsoft is not testing the older versions, so it will not say whether they share the new flaws. A critical RCE in a mail server is a serious exposure to leave unpatched.

The article also notes a Windows Server update broke Exchange in the final weeks of the extension. It gives no figures on how many organisations still run the old versions.
