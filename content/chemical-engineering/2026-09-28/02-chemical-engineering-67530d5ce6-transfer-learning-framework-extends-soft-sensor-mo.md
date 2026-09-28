---
id: 67530d5ce6
title: Transfer learning framework extends soft sensor models across refinery units
original_title: >-
  Heterogeneous transfer learning for dynamic soft sensing in naphtha hydrotreating and catalytic
  reforming units using semi-supervised long short-term memory autoencoder and extreme gradient
  boosting
url: https://www.sciencedirect.com/science/article/pii/S000925092601941X?dgcid=rss_sd_all
source: Chemical Engineering Science
kind: paper
section: modelling-and-control
date: "2026-09-28"
published_at: null
authors:
  - Amirhosein Aghapour
  - Hossein Abolghasemi
  - Saeid Shokri
  - Masoud Nematollahi
  - Fariba Vafaei
  - Isa Khoshrou Roudbaraki
comments: null
tags:
  - soft-sensing
  - transfer-learning
  - refining
  - lstm
  - machine-learning
  - process-monitoring
  - paper
why_read: >-
  You will see how a hybrid LSTM autoencoder and XGBoost transfer learning scheme is used to build
  dynamic soft sensors when one refinery unit has far less labelled data than another.
rank: 2
interest_score: 7.7
depth_score: 8
novelty_score: 7
utility_score: 8
scored: true
model: minimax-m3
---

A study in Chemical Engineering Science proposes a heterogeneous transfer learning method for dynamic soft sensing in naphtha hydrotreating and catalytic reforming units. The approach combines a semi-supervised long short-term memory autoencoder with extreme gradient boosting to estimate process variables when labelled data is scarce.

The framework targets the common problem of one refinery unit having abundant sensor data while a similar unit has limited measurements. By pretraining on the data-rich source and fine-tuning on the target, the method aims to reduce the calibration effort normally required for new soft sensors.

For practising engineers, the practical interest is faster deployment of data-driven models across units with different sensor inventories. The authors claim the hybrid autoencoder and gradient boosting structure handles dynamic time-series behaviour better than static regression approaches. Details of validation accuracy and the specific process variables modelled are not visible in the available abstract text.

The claim is based on the published abstract only; the full paper would be needed to judge how the model performs against conventional soft sensing methods and how transferable it is beyond the two units studied.
