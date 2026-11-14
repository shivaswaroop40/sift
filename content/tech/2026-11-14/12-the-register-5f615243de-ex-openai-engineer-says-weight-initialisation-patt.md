---
id: 5f615243de
title: >-
  Ex-OpenAI engineer says weight initialisation patterns show Chinese labs used Nvidia Blackwell
  GPUs
original_title: >-
  Chinese AI labs are training models on Nvidia's Blackwell despite export controls, says ex-OpenAI
  engineer
url: >-
  https://www.theregister.com/ai-and-ml/2026/11/13/chinese-ai-labs-are-training-models-on-nvidias-blackwell-despite-export-controls-says-ex-openai-engineer/5309891
source: The Register
kind: news
section: industry
date: "2026-11-14"
published_at: "2026-11-13T21:16:22.000Z"
authors:
  - Thomas Claburn
comments: null
tags:
  - nvidia
  - blackwell
  - export-controls
  - china
  - model-weights
  - pytorch
  - news
why_read: >-
  The original sets out the Philox and cuRAND fingerprinting method and the political context,
  though the confirmation claims rest on DePue's own account.
rank: 12
interest_score: 6
depth_score: 6
novelty_score: 7
utility_score: 5
scored: true
model: claude-sonnet-5-5
---

Will DePue, formerly of OpenAI and now running the consultancy Unemployment Labs, published a report claiming that models from DeepSeek, Moonshot AI, MiniMax and Ant Group carry the fingerprint of Nvidia Blackwell GPUs. He says he found conclusive evidence that six Chinese models, including DeepSeek-V4-Pro, Kimi K3 and MiniMax-M3, were initialised on Blackwell systems. Four match Grace Blackwell parts, the GB200 and GB300.

The method rests on how weights are initialised. PyTorch can use Nvidia's cuRAND library and the Philox pseudorandom generator across parallel GPU threads. The output depends on the seed and the chip layout. DePue searched more than six trillion combinations of layout and seed and matched them against published open weights. He argues traces of the pattern survive training.

DePue lists a limit himself. Blackwell use does not show where the hardware sat, so labs may have rented it from US providers, a gap the Cloud Security Act targets. His report includes seeds linking DeepSeek-V3 to Hopper and V4-Flash to Blackwell so others can reproduce it. He says senior researchers have confirmed the result. The Register does not name them, and the claim has not been independently verified here.
