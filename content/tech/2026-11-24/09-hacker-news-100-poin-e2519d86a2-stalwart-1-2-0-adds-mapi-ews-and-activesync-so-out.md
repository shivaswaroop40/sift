---
id: e2519d86a2
title: Stalwart 1.2.0 adds MAPI, EWS and ActiveSync so Outlook can connect without Exchange
original_title: Stalwart is now a drop-in replacement for Microsoft Exchange
url: https://stalw.art/blog/microsoft-exchange-replacement/
source: Hacker News (100+ points)
kind: community
section: infrastructure
date: "2026-11-24"
published_at: "2026-11-23T22:32:29.000Z"
authors:
  - shaunpud
comments: https://news.ycombinator.com/item?id=50620349
tags:
  - stalwart
  - microsoft-exchange
  - email
  - self-hosting
  - open-source
  - data-sovereignty
  - community
why_read: >-
  Read it for the full protocol and client compatibility list, and to judge whether Stalwart's
  claims hold up against your own Outlook-dependent estate.
rank: 9
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Stalwart 1.2.0, an open source mail server, now implements the protocols Exchange clients use: MAPI over HTTP, Exchange Web Services (2010 SP2 to 2016 schemas), Exchange ActiveSync 14.1 and 16.1, and Autodiscover. All are served on the same HTTPS port as JMAP and the WebUI. The maintainer says classic Outlook, Outlook for Mac, Apple Mail, iOS, Android apps and Thunderbird connect as they would to Exchange. The support is in the AGPL Community edition.

The post argues the client, not the server, is what stops most Exchange migrations. Standard IMAP and CalDAV servers force users off Outlook or into a reduced mode without calendar and contact sync. Here, an administrator moves mailboxes, repoints DNS, and users sign in with an address and password. Exchange data shares accounts with IMAP, JMAP, CalDAV and CardDAV. Outlook rules are stored server-side and run as Sieve.

The context is Microsoft's direction. Exchange 2016 and 2019 left support in October 2025, and Subscription Edition is the last on-premises version. The new Outlook does not support on-premises accounts, and EWS in Exchange Online is being switched off, with removal due in April 2027. The post presents data sovereignty and US CLOUD Act exposure as the reason to avoid the cloud route.

This is the maintainer's own release announcement, so the compatibility claims are untested here. The extract is truncated, and it gives no migration tooling details, scale limits or independent test results.
