---
id: d4cad60c00
title: >-
  Hex.pm attacker gained command execution through unsafe Erlang term decoding in unauthenticated
  requests
original_title: Security incident on Hex.pm
url: https://hex.pm/blog/security-incident-on-hexpm
source: Lobsters
kind: community
section: security
date: "2026-11-24"
published_at: "2026-11-24T14:52:19.000Z"
authors:
  - hex.pm via munksgaard
  - hex.pm via munksgaard
comments: https://lobste.rs/s/rfcgkx/security_incident_on_hex_pm
tags:
  - hex-pm
  - elixir
  - security-incident
  - deserialisation
  - supply-chain
  - cve
  - community
why_read: >-
  The post gives a precise, step-by-step exploit chain through Plug, Sentry, Ecto and db_connection,
  plus a minute-level timeline and the exact remediation steps for users.
rank: 7
interest_score: 7
depth_score: 5
novelty_score: 8
utility_score: 8
scored: true
model: claude-sonnet-5-5
---

On 23 November 2026 an attacker sent 69 requests to hex.pm and ran commands on six web servers. The team blocked the traffic and deployed a patched build within about 20 minutes. They found no evidence of changed packages or database writes, but database reads are not logged, so exposure of emails, password hashes, API key hashes, 2FA secrets and sessions cannot be ruled out.

The cause was a custom body parser for the application/vnd.hex+erlang content type. It used Plug.Crypto.non_executable_binary_to_term/2, which blocks functions and new atoms but lets maps through. An Elixir struct is a map with a __struct__ key, so the attacker could supply forged structs. The parser ran before routing and authentication, so every route was reachable.

The chain then ran through error reporting. Plug.MethodOverride raised an error on the struct, and Sentry and the log formatters called inspect on it. That dispatched to Ecto.Query.DynamicExpr, then to a DBConnection.Stream, whose :log option took a {module, function, args} tuple from the request. The result was OS command execution as the BEAM user.

The fix rejects any decoded term containing a map with a __struct__ key. The team rotated storage, CDN, email and database credentials plus session and token signing keys, which logged everyone out. The registry signing key is not yet rotated, so users should fetch only from repo.hex.pm and avoid mirrors until new clients ship. The team also found the same class of bug in Ash keyset pagination, fixed in 3.38.0.
