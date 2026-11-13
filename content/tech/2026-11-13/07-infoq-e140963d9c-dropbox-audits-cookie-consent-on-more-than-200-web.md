---
id: e140963d9c
title: Dropbox audits cookie consent on more than 200 web surfaces with a Playwright-based tool
original_title: Dropbox Shares How Its In-House Cookie Auditor Tests Consent Behaviour Across 200+ Web Surfaces
url: >-
  https://www.infoq.com/news/2026/11/dropbox-cookie-auditor/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global
source: InfoQ
kind: news
section: languages-and-tools
date: "2026-11-13"
published_at: "2026-11-13T06:15:00.000Z"
authors:
  - Daniel Curtis
comments: null
tags:
  - playwright
  - privacy
  - cookie-consent
  - gdpr
  - testing
  - dropbox
  - news
why_read: >-
  The original shows how Dropbox structures a large-scale consent test, including the page inventory
  and false-positive handling that the team says are harder than the browser automation.
rank: 7
interest_score: 6.7
depth_score: 7
novelty_score: 6
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Dropbox engineers Yasmin McDowell and Lawrence Good have described an in-house cookie auditor built on Playwright. It runs three tests per page: a standard US visitor, an EU visitor, and a visitor sending a Global Privacy Control signal. Each starts in a fresh browser context, records the cookies loaded before any interaction, declines non-essential cookies, reloads and checks the choice still holds.

The auditor finds consent controls through the underlying elements, not button text, because Dropbox supports 22 languages and the banner takes several forms. Cookie classifications live outside the code, so the Privacy team can change the approved list without an engineering release. The consent banner is also built in-house, which lets the auditor hook into it directly.

A companion URL detector uses traffic data to find live surfaces. It filters billions of visit records to unique paths, then groups them by consent logic so representative URLs stand in for families of similar pages. A weekly report separates likely violations from known false positives and tracks trends.

The team says the browser automation is probably the easy part. The harder work is defining correct behaviour, keeping an accurate inventory and filtering noise. The next step is routing findings to the teams that own each page. The report gives no figures on violations found.
