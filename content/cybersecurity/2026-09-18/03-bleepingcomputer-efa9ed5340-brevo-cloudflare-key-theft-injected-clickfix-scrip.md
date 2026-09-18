---
id: efa9ed5340
title: Brevo Cloudflare key theft injected ClickFix scripts into 100,000 customer sites
original_title: Brevo supply-chain attack injected ClickFix scripts on customer sites
url: >-
  https://www.bleepingcomputer.com/news/security/brevo-supply-chain-attack-injected-clickfix-scripts-on-customer-sites/
source: BleepingComputer
kind: news
section: cloud-and-supply-chain
date: "2026-09-18"
published_at: "2026-09-17T17:11:34.000Z"
authors:
  - Bill Toulas
comments: null
tags:
  - supply-chain
  - cloudflare
  - clickfix
  - wordpress
  - api-keys
  - brevo
  - news
why_read: >-
  Shows how a single hardcoded Cloudflare key let attackers rewrite CDN responses and backdoor tens
  of thousands of downstream sites.
rank: 3
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: minimax-m3
---

Brevo confirmed that attackers stole a long-lived Cloudflare API key that had been hardcoded in its application source code. They used the key on September 14 to create a Cloudflare Worker that rewrote CDN edge responses on brevo.com, sendinblue.com, onboarding.brevo.com and sibforms.com for around five and a half hours, stripping Content-Security-Policy headers so origin checks did not detect the change.

The Worker also modified the Brevo forms script, Conversations widget and SDK loader embedded on customer sites. Visitors saw a fake Cloudflare verification page followed by ClickFix instructions to run a Windows command, and on WordPress sites logged-in administrators were pushed a fake 'Web Media Optimizer' plugin from cdn10.sendibt1[.]com that acted as a persistent backdoor.

Security firm Sansec estimates up to 100,000 websites were affected. The malicious plugin hides from the plugin list, copies itself into the must-use folder for persistence, and pulls further JavaScript from corralos[.]beer via glegchner.com/ads.php. It also contains a hardcoded authentication key that lets attackers forge WordPress admin sessions without a password.

Brevo said the key may have been exposed since late August. The firm revoked the key, removed hardcoded credentials, deleted attacker hostnames and purged caches. Brevo did not confirm any link to a separate September 10 SSO incident previously used to hijack accounts, including a Trezor phishing campaign that reached 347,000 addresses and compromised at least 2,500.
