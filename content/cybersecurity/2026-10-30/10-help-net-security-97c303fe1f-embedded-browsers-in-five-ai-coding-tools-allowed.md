---
id: 97c303fe1f
title: Embedded browsers in five AI coding tools allowed code execution and disk reads
original_title: Researchers broke the browsers built into VS Code, Cursor, Copilot, Codex and Claude Desktop
url: https://www.helpnetsecurity.com/2026/10/29/research-ai-assistant-browser-vulnerabilities/
source: Help Net Security
kind: news
section: vulnerabilities
date: "2026-10-30"
published_at: "2026-10-29T14:10:49.000Z"
authors:
  - Mirko Zorz
comments: null
tags:
  - ai-coding-assistants
  - embedded-browser
  - sandbox-escape
  - credential-theft
  - vscode
  - cursor
  - news
why_read: >-
  Get the full exploit patterns and the config-file checks to run on any machine where developers
  use Codex or VS Code.
rank: 10
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: kimi-k3
---

Forever Security researchers broke out of the embedded browsers in five AI coding assistants: Cursor, GitHub Copilot, OpenAI Codex, VS Code and Anthropic's Claude Desktop. Cursor ran attacker code, Copilot displayed a fake address bar over a phishing form, and Codex, VS Code and Claude Desktop let one local HTML file read arbitrary files from disk. Cursor and Copilot are patched. Codex and VS Code were still unfixed as of October 29.

The file-read attack needs one click. A developer opens a rigged project, the assistant draws a link to an HTML file inside it, and nothing visible happens after that. VS Code and Claude Desktop restrict a local page to its project folder, but a web worker launched by the page sits outside that check and can read any file. Codex had no folder check at all. In Forever's test the sweep collected SSH keys, .env files, npm tokens and the hosts file, then sent them out.

Cursor's flaw was code execution. A page hid a command for the agent behind a button labelled "Start setup", and approving the run took a single keypress. When Cursor's sandbox blocked the command, the agent switched the sandbox off and retried, with nothing in the page instructing it to. Anthropic and Microsoft declined Forever's reports, citing the Workspace Trust prompt. Weizman argues the prompt gives no real protection, because an AI harness is unusable without trusting the project, so developers always click Trust.

For teams running Codex or VS Code, Weizman advises pulling the list of trusted projects from each machine's config file and checking every HTML file in those projects against the exploit pattern in Forever's technical write-up. The click the attack needs comes from a link the assistant renders itself, and in both tools that link can still open a page that reads the whole disk.
