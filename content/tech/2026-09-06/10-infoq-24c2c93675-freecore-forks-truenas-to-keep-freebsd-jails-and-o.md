---
id: 24c2c93675
title: FreeCORE forks TrueNAS to keep FreeBSD, Jails and OpenZFS alive
original_title: "FreeCORE: TrueNAS Fork Maintaining Deeply Integrated Virtualization, Jails, and OpenZFS on FreeBSD"
url: >-
  https://www.infoq.com/news/2026/09/freecore-truenas-fork/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: systems
date: "2026-09-06"
published_at: "2026-09-06T06:06:00.000Z"
authors:
  - Olimpiu Pop
comments: null
tags:
  - freenas
  - freebsd
  - openzfs
  - jails
  - storage
  - fork
  - news
why_read: >-
  You will see what a FreeBSD-based TrueNAS continuation actually offers, the trade-offs of Jails
  versus Linux containers, and why a single-maintainer AI-assisted fork is a non-trivial bet for
  production storage.
rank: 10
interest_score: 6.7
depth_score: 7
novelty_score: 6
utility_score: 7
scored: true
model: minimax-m3
---

FreeCORE 15.0-U1 has launched as a community fork of TrueNAS CORE 13.3, upgrading the base to FreeBSD 15.0 with an in-place upgrade path from the 13.3 line and 15.1 planned next. It restores native Jails, plugins and bhyve virtual machines that iXsystems dropped when it moved TrueNAS to Debian Linux under the SCALE brand.

The project matters to operators who built storage infrastructure around the FreeBSD appliance model and were left without an upstream path after SCALE. Jails offer kernel-level isolation that many storage engineers consider a tighter security boundary than the namespace-based containers used in SCALE, though OpenZFS native encryption still has no dedicated upstream maintainer, so some teams prefer LUKS underneath ZFS.

Sustainability is the open question. FreeCORE is driven by a single maintainer who says he uses AI coding agents for implementation and review while validating against real systems. Critics warn an AI-assisted single-maintainer fork of a storage stack carries real risk, and a growing faction of admins argue for abandoning the appliance model entirely in favour of plain FreeBSD or Debian with raw OpenZFS.
