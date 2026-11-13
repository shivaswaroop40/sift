---
id: f8a528db03
title: Pinned MCP server ran with 15 different dependency sets over five weeks
original_title: Your pinned MCP server may not be as pinned as you think
url: https://www.helpnetsecurity.com/2026/11/13/corelight-mcp-server-supply-chain/
source: Help Net Security
kind: news
section: cloud-and-supply-chain
date: "2026-11-13"
published_at: "2026-11-13T05:30:22.000Z"
authors:
  - Mirko Zorz
comments: null
tags:
  - mcp
  - supply-chain
  - pypi
  - dependency-pinning
  - ai-agents
  - uvx
  - news
why_read: >-
  Read it for the specific launcher behaviour that defeats version pinning, and the
  freeze-and-relock approach Corelight tested across five servers.
rank: 8
interest_score: 7.3
depth_score: 7
novelty_score: 8
utility_score: 7
scored: true
model: claude-sonnet-5-5
---

Corelight's James Lagermann found that an MCP server pinned to one release on an administrator's workstation ran with 15 different dependency sets in five weeks. Of its 69 packages, 23 changed version, including the cryptography library, the JSON Web Token library and the MCP SDK. The configuration was never touched.

The cause was the uvx launcher. It installed from the package's declared dependencies and skipped the project's hash-pinned lock file. Around 60 packages were therefore resolved fresh from PyPI whenever the environment was rebuilt. Pinning a package version does not pin what it depends on.

This matters because MCP servers often hold the user's credentials. On this workstation they made over 1,600 connections in a week to 11 management systems, including the firewall and SIEM. A hijacked dependency would run with that access. A June 2026 Shai-Hulud worm variant on PyPI already targeted MCP-themed packages and AI assistant keys.

Corelight reviewed 35 MCP servers from two vendor catalogs and its lab. Twenty-three recommended an install that pulls from a public registry on each launch, install or image build. Freezing five servers with a commit pin, a hash-pinned lock file and update checks off kept their package lists stable over two weeks. Frozen code ages, though: 40 packages in one server were older than what the launcher would have pulled.
