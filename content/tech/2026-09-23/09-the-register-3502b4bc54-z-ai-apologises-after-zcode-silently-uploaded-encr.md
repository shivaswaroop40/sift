---
id: 3502b4bc54
title: Z.ai apologises after ZCode silently uploaded encrypted workspaces to Alibaba Cloud
original_title: Z.ai says sorry for slurping up your code, open sources ZCode
url: >-
  https://www.theregister.com/security/2026/09/22/zai-says-sorry-for-slurping-up-your-code-open-sources-zcode/5298300
source: The Register
kind: news
section: security
date: "2026-09-23"
published_at: "2026-09-22T15:59:00.000Z"
authors: []
comments: null
tags:
  - ai
  - security
  - zcode
  - supply-chain
  - coding-tools
  - alibaba-cloud
  - news
why_read: >-
  It is a concrete case study of a coding agent silently exfiltrating source code under heavy
  encryption with no opt-out, plus the vendor response.
rank: 9
interest_score: 8
depth_score: 8
novelty_score: 8
utility_score: 8
scored: true
model: minimax-m3
---

Chinese AI vendor Z.ai has apologised after its ZCode coding harness was found packaging entire user workspaces, including full git histories, encrypting them and uploading them to Alibaba Cloud. The decryption private key was held only on Z.ai's servers, so users could neither read nor delete the files.

Independent researcher Ferstar disclosed that the uploads were triggered by the Repository Index and Repo Wiki features, with no setting to disable the behaviour and no mention in the privacy policy. The data path mirrors the July xAI/Grok incident.

Z.ai said the uploaded data was never used for training, removed the Repo Wiki feature, and had CAICT and NSFOCUS audit it. The audit reportedly confirmed deletion. ZCode has been open sourced on GitHub, though Ferstar noted that pre-patch commit history and the upload code were wiped from the repository.

For practitioners using ZCode or any agentic coding tool, the episode shows how repository syncing, encryption-at-rest with vendor-held keys, and undocumented cloud egress can combine into a quiet data leak. It is also a reminder to watch for similar behaviour in other assistants that maintain a cloud-side index.
