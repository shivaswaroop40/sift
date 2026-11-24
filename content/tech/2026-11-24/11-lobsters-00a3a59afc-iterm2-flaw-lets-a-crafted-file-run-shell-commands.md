---
id: 00a3a59afc
title: iTerm2 flaw lets a crafted file run shell commands when printed with cat
original_title: iTerm2 Arbitrary Command Execution via Kitty Image Protocol APC Response Injection
url: https://ii4gsp.github.io/iterm2-rce/
source: Lobsters
kind: community
section: security
date: "2026-11-24"
published_at: "2026-11-24T14:06:14.000Z"
authors:
  - ii4gsp.github.io via nortti
  - ii4gsp.github.io via nortti
comments: https://lobste.rs/s/j66n8x/iterm2_arbitrary_command_execution_via
tags:
  - iterm2
  - terminal
  - security
  - escape-sequences
  - kitty-protocol
  - vulnerability
  - community
why_read: >-
  You get the exact code path, the list of bypassed controls and the reasoning for the sanitisation
  fix, which is useful if you build or audit terminal software.
rank: 11
interest_score: 6.7
depth_score: 6
novelty_score: 7
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

A researcher found a command execution bug in iTerm2's Kitty image protocol support, affecting versions 3.6.1 to 3.7.8 and fixed in 3.7.9. An escape sequence in any file asks the terminal to transmit a file with a crafted path. The path does not exist, so the error reply echoes it back, including literal newlines.

The terminal writes that reply to the PTY as if the user had typed it. The shell reads the newlines as command separators and runs what follows. The write-up says it is a logic bug, reproduces every time on default settings, and works with bash, zsh and fish.

Three flaws combine. The APC handler has no trust check, unlike the OSC handlers. The filename safety check sits after the existence check, so it never runs for missing files. The default verbosity always sends the reply, error or not.

The fix sanitises the response, replacing C0 control characters and DEL with spaces. The author notes that a trust check alone would not help, because the setting behind it is off by default. The source text is truncated, so the full patch detail is not covered here.
