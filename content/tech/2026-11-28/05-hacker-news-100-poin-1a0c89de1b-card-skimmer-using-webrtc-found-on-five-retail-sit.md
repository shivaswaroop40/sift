---
id: 1a0c89de1b
title: Card skimmer using WebRTC found on five retail sites before Black Friday
original_title: Credit card skimming scripts using WebRTC found on popular shopping sites
url: https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer
source: Hacker News (100+ points)
kind: community
section: security
date: "2026-11-28"
published_at: "2026-11-27T15:40:31.000Z"
authors:
  - scanr
comments: https://news.ycombinator.com/item?id=50668145
tags:
  - webrtc
  - skimming
  - content-security-policy
  - supply-chain
  - ecommerce
  - cloudflare
  - community
why_read: >-
  The original has the seven-step attack chain, the indicators to search for, and the exact point
  where a connect-src rule breaks it.
rank: 5
interest_score: 6.3
depth_score: 5
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

InfoHawk found a card-skimming script on the online stores of Lascana, Samsonite, American Tourister, Revolve and FWRD. It was delivered through an altered Quorum marketing pixel, edited Seers cookie-banner settings, and a modified file on Revolve's CDN. All five removed it on 24 or 25 November. The researchers saw live exfiltration of a test card only on Lascana, and do not know how many shoppers were affected.

The script loads from an S3 bucket, runs on mobile or touch screens, and appears only on checkout pages. It fetches relay details and sends a WebRTC offer over two ordinary HTTP requests. After that, the skimmer code arrives and card data leaves over a WebRTC data channel, relayed through Cloudflare's TURN service. The code is checked against a SHA-256 digest and run with eval.

This matters because the data channel sits outside connect-src, and monitoring often watches it less closely. Relaying through Cloudflare also hides the real endpoint among legitimate traffic. The script sent data before payment validation, so declined or cancelled orders could still leak cards. Mobile-only, checkout-only activation means desktop and homepage scans would likely miss it.

The suggested mitigation is a strict connect-src list on every payment page, which blocks the two HTTP requests needed to start the WebRTC session. Teams are also told to search page source, tag managers, consent settings and CDN files for the named script files and bucket patterns. Shared infrastructure suggests other sites may be affected.
