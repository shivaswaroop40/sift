---
id: 3c3f85267b
title: Go 1.27 makes encoding/json/v2 and jsontext generally available
original_title: A new Go API for JSON
url: https://go.dev/blog/jsonv2
source: Hacker News (100+ points)
kind: community
section: languages-and-tools
date: "2026-11-05"
published_at: "2026-11-04T17:52:11.000Z"
authors:
  - olexsmir
comments: https://news.ycombinator.com/item?id=50369106
tags:
  - go
  - json
  - standard-library
  - compatibility
  - api-design
  - go-1-27
  - community
why_read: >-
  You get the Go team's full accounting of why encoding/json could not be fixed and how jsontext
  splits JSON syntax from value mapping.
rank: 1
interest_score: 8.7
depth_score: 8
novelty_score: 9
utility_score: 9
scored: true
model: glm-5.3
---

The Go team has declared encoding/json/v2 and encoding/json/jsontext stable and generally available in Go 1.27, following a year of feedback on the experimental API. The post explains why the original package could not be patched instead. Its flaws are inherent to the existing API, and the Go 1 compatibility promise prevents changing behaviour in place. Separate names such as MarshalV2 would amount to a parallel namespace inside one package.

The listed flaws are concrete. The v1 decoder accepts invalid UTF-8, which RFC 8259 forbids, and accepts objects with duplicate member names, which have no universally agreed meaning and were exploited in CVE-2017-12635. Nil slices and maps marshal as JSON null, breaking consumers that expect arrays or objects. Unmarshaling resolves names to struct fields case-insensitively, a default the team calls surprising and a security risk.

The performance limits are structural. MarshalJSON forces an allocation and requires the result to be validated and reformatted. UnmarshalJSON needs a complete JSON value, so the package parses it once to find where it ends and the method parses it again. Encoder and Decoder buffer whole values despite taking readers and writers, and options like DisallowUnknownFields never reach custom UnmarshalJSON implementations.

The jsontext package underpins v2 by splitting syntactic handling of the JSON grammar, called encode and decode, from the semantic mapping to Go values, called marshal and unmarshal. Defaults change in ways visible on the wire. A survey found most Go users prefer nil slices and maps marshaled as empty arrays or objects rather than null.
