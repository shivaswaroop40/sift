---
id: 8f23336470
title: Six of eight popular SVG sanitizers bypassed with namespace and XSLT tricks
original_title: Scalable Vector Grief
url: https://portswigger.net/research/scalable-vector-grief
source: PortSwigger Research
kind: research
section: defence
date: "2026-10-30"
published_at: "2026-10-27T14:29:26.000Z"
authors: []
comments: null
tags:
  - svg
  - xss
  - sanitizers
  - xslt
  - firefox
  - namespace-confusion
  - research
why_read: >-
  The original gives working payloads for every bypass, including the full base64 XSLT stylesheet
  and the Firefox Link header payload you can edit in Hackvertor.
rank: 2
interest_score: 7.7
depth_score: 8
novelty_score: 8
utility_score: 7
scored: true
model: glm-5.3
---

PortSwigger researcher Gareth Heyes tested eight popular SVG sanitizers and bypassed six. The libraries named as affected include mattkrick/sanitize-svg, Borewit/svg-sanitizer, bgalek/safe-svg and alnorris/SVG-Sanitizer. The mattkrick library fell to namespace confusion. Switching a single element's XML namespace to XHTML makes the browser render it as HTML inside the SVG, so a frame with a javascript: URL executes. It also missed foreignObject payloads because it queried the lower-case element name after the browser had converted it to camelCase.

SVG files can carry scripts, event handlers, links, animations and embedded HTML, so applications that accept SVG uploads usually depend on a sanitizer to strip them. Every bypass here gives script execution in the document's origin, not a null origin. If your upload pipeline uses an affected library, a crafted upload can run JavaScript when rendered. Borewit/svg-sanitizer, for example, passed animate tags through untouched, letting an attacker animate a link's href into a JavaScript URL.

Three libraries, bgalek/safe-svg, mattkrick/sanitize-svg and alnorris/SVG-Sanitizer, fell to a self-contained XSLT stylesheet. An xml-stylesheet processing instruction points at a base64 data URL that holds the stylesheet, which rewrites the document into an HTML page containing a script. The payload alerts document.domain, proving execution lands in the document's origin. The underlying XSLT feature is deprecated and due for removal in November 2026, which limits the life of this particular vector.

Separately, Heyes found that Firefox's Link response header, already known to load external CSS, also accepts data URLs pointing at XSLT stylesheets. A response header alone can therefore run JavaScript in Firefox even when the response body is harmless XML. The post also claims Safari can be made to import a GIF as SVG and execute JavaScript from it.
