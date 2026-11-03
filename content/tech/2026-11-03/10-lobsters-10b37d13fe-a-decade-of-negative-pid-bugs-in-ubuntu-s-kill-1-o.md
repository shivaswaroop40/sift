---
id: 10b37d13fe
title: A decade of negative-pid bugs in Ubuntu's kill(1), one of which kills all but init
original_title: A Decade of Kill Bugs
url: https://alangrow.com/blog/a-decade-of-kill-bugs
source: Lobsters
kind: community
section: systems
date: "2026-11-03"
published_at: "2026-11-02T21:23:24.000Z"
authors:
  - alangrow.com by acg
  - alangrow.com by acg
comments: https://lobste.rs/s/wgoato/decade_kill_bugs
tags:
  - kill
  - procps
  - ubuntu
  - getopt
  - process-groups
  - community
why_read: You get the code-level root cause, the history of all four bugs, and the author's recommendations.
rank: 10
interest_score: 6.3
depth_score: 7
novelty_score: 6
utility_score: 6
scored: true
model: glm-5.3
---

On 24 September 2026 the author took Endcrawl offline with one command. He ran sudo kill -TERM -1490947 as root to cancel a large test render, targeting a process group by its negative pgid. Every process on the machine died except init. The cause was not a typo. It was a bug in kill(1) from procps 4.0.4, the /bin/kill in Ubuntu 24.04 LTS.

The bug sits in the getopt fallback. An argument such as -1490947 counts as an unrecognized option, so getopt returns '?' and stores only the first character after the dash in optopt. The code then computes the pid as '0' minus that digit, which yields -1. A signal to pid -1 from root reaches every process the caller may signal, except process 1.

Negative pids are not exotic. Killing a process group this way dates to Unix V9 in 1986, and every ^C sends SIGINT to a foreground process group. The author documents four distinct negative-pid bugs shipped across Ubuntu 14, 16, 18, 22 and 24 LTS. Trouble began around 2013 with procps 3.3.9, after BSD-style argv parsing was rewritten to use getopt. The BSDs appear to have handled negative pids correctly all along.
