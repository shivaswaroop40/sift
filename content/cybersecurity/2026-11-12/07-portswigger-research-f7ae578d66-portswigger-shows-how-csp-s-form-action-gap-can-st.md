---
id: f7ae578d66
title: PortSwigger shows how CSP's form-action gap can still leak credentials
original_title: "Blind trust: stealing credentials through CSP"
url: https://portswigger.net/research/blind-trust-stealing-credentials-through-csp
source: PortSwigger Research
kind: research
section: vulnerabilities
date: "2026-11-12"
published_at: "2026-11-11T14:26:01.000Z"
authors: []
comments: null
tags:
  - csp
  - xss
  - burp-suite
  - credential-theft
  - web-security
  - html-injection
  - research
why_read: >-
  Read it to see a concrete CSP configuration that looks airtight but still leaks credentials
  through form-action alone.
rank: 7
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5
---

PortSwigger built a Burp AT skill that analyses a site's Content-Security-Policy for two weaknesses: allow-listed domains that host known script gadgets (using a 350+ entry dataset from cspbypass.com), and form-action policies that still permit a self-submitting form to steal data even when default-src 'none' blocks all scripts.

The second technique matters because form-action does not inherit from default-src. A policy of default-src 'none'; form-action 'self' looks tight but still lets an injected form POST back to the page, reflect a payload with a meta refresh and unsafe-url referrer policy, and leak the victim's username and password in the Referer header to a Collaborator domain.

No JavaScript executes at any point, so CSP's script restrictions never trigger; the attack relies purely on an allowed form submission and a navigation, which CSP does not govern. The skill also accounts for strict-dynamic, nonces, hashes, report-only headers and multiple enforced policies before giving a verdict.

PortSwigger provides a live test page (default-src 'none'; form-action 'self'; style-src 'nonce-...') where the tool identifies the reflected parameter, builds the PoC automatically and confirms credential capture via Collaborator.
