---
id: da14c48055
title: Embedded browser flaws in five AI coding tools leave Codex and VS Code unpatched
original_title: Researchers find bugs in 5 AI developer tools, with OpenAI and Microsoft flaws still unpatched
url: >-
  https://www.theregister.com/security/2026/10/29/researchers-find-bugs-in-5-ai-developer-tools-with-openai-and-microsoft-flaws-still-unpatched/5306508
source: The Register
kind: news
section: security
date: "2026-10-30"
published_at: "2026-10-29T23:12:26.000Z"
authors:
  - Jessica Lyons
comments: null
tags:
  - ai-security
  - prompt-injection
  - embedded-browsers
  - vulnerability-disclosure
  - developer-tools
  - news
why_read: >-
  The original breaks down each tool's flaw, how the embedded browser enables it, and which vendors
  fixed, rejected or ignored the reports.
rank: 7
interest_score: 7
depth_score: 5
novelty_score: 8
utility_score: 8
scored: true
model: glm-5.3
---

Forever Security found vulnerabilities in five AI developer tools, namely Cursor, GitHub Copilot, Anthropic's Claude Desktop, Microsoft's VS Code and OpenAI's Codex. All share one weakness, which the researchers call Embrace, short for embedded browser. Each tool gave its embedded browser capabilities beyond those of a normal browser. The flaws produced arbitrary code execution in Cursor, data theft in Claude Desktop, Codex and VS Code, and address bar spoofing in Copilot. The Codex and VS Code flaws remain unpatched.

These tools run on developer machines, where their agents can read files and run commands. The embedded browser turns untrusted web content into a channel to the host. A malicious page opened in a built-in browser could execute commands, read files beyond the project folder, or show a fake github.com/login address over a phishing page. Two of the five flaws are still unfixed, so those configurations remain exposed.

In Cursor, a web page can call the agent's composer with instructions hidden from the user, a prompt injection route to host commands. Claude Desktop and VS Code limit local pages to their project folders, but the limit does not cover web workers, so a background thread can reach any file. Codex applied no such limit. Copilot let a page declare its own address and checked only that the text began with http, https or file.

Cursor silently patched its flaw on October 1 and published no security advisory. GitHub independently fixed Copilot's spoofing bug in build 1.1.29 on October 13, without a report. Anthropic rejected the Claude Desktop report on July 23 as invalid under a workspace trust boundary, then accepted the same flaw from Noma Security a day later. OpenAI says it is aware of the Codex flaw and working on it. Microsoft also labelled the VS Code report invalid.
