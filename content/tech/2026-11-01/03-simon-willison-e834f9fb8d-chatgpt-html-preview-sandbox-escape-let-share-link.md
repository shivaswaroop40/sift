---
id: e834f9fb8d
title: ChatGPT HTML preview sandbox escape let share links steal signed-in users' data
original_title: How We Took Over ChatGPT Accounts
url: https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/
source: Simon Willison
kind: blog
section: security
date: "2026-11-01"
published_at: "2026-10-31T23:15:22.000Z"
authors: []
comments: null
tags:
  - security
  - sandboxing
  - xss
  - chatgpt
  - iframes
  - content-security-policy
  - blog
why_read: >-
  You get the full exploit chain, from the MathLive postMessage handler to the YouTube oEmbed
  bypass, plus Willison's view on the $5,000 bounty.
rank: 3
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

Parameter Labs found an exploit chain against ChatGPT's HTML previews, formerly called Canvas, where generated HTML apps are displayed in a sandboxed iframe. The chain started in a postMessage handler, escaped the sandbox, achieved script execution despite OpenAI's content security policy, and ended with a share URL that could steal private data from any signed-in user who opened it.

This is the artifacts pattern, not an OpenAI quirk, and the failure modes are general. A sandboxed iframe is only as safe as the postMessage handlers in the parent page. Handlers that write to innerHTML turn every sandboxed frame into an HTML injection source, and content security policy allowlists can become script execution channels, as YouTube did here.

The specifics show how the pieces lined up. OpenAI uses the MathLive library for graph support, and its virtual keyboard can be triggered in the parent page via postMessage() from the iframe. That handler uses innerHTML, and nothing stopped other sandboxed frames from calling it. innerHTML does not run script elements, but the injected markup could add a new iframe without sandbox restrictions. OpenAI's CSP blocked inline scripts, yet YouTube was on the allowlist, and its oEmbed endpoint could reflect JavaScript back in a way that executed.

With script execution on ChatGPT, fetching private user data and exfiltrating it through an image reference was trivial, and the attacker could also take actions on the victim's behalf. OpenAI closed the hole and paid a $5,000 bug bounty, which Willison considers cheap for a vulnerability this serious.
