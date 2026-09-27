---
id: 9ff7197e64
title: How the Intel 8087 computes tangent, beyond plain CORDIC
original_title: "Reverse-engineering the vintage Intel 8087's tangent algorithm: more than CORDIC"
url: http://www.righto.com/2026/09/8087-tangent-cordic.html
source: Lobsters
kind: community
section: papers
date: "2026-09-27"
published_at: "2026-09-26T19:01:50.000Z"
authors:
  - righto.com via calvin
  - righto.com via calvin
comments: https://lobste.rs/s/5soxba/reverse_engineering_vintage_intel_8087_s
tags:
  - intel-8087
  - cordic
  - floating-point
  - reverse-engineering
  - fpga
  - hardware
  - community
why_read: >-
  You get a die-level walkthrough of how a 1980 floating-point chip splits one trig instruction
  between CORDIC and polynomial approximation.
rank: 2
interest_score: 7.3
depth_score: 9
novelty_score: 7
utility_score: 6
scored: true
model: minimax-m3
---

Ken Shirriff has reverse-engineered the die and microcode of the Intel 8087 floating-point coprocessor to explain how its FPTAN instruction actually works. The chip computes a tangent in 90 microseconds, compared with 13,000 microseconds in software on the 8086.

The 8087 is often described as using CORDIC, but Shirriff shows the silicon combines CORDIC iteration with a rational polynomial approximation. CORDIC alone would give roughly 16 bits of accuracy per term, so a second stage lifts the result to 64-bit precision before the final divide.

The article links the algorithm back to its 1956 origin on the B-58 Hustler navigation computer designed by Jack Volder, then walks through the rotation matrix trick that turns each special angle into a shift and add. It maps each step onto the 8087 datapath blocks visible in the microscope die photo, including the constant ROM, shifter, adder and the 16-bit shift register dedicated to CORDIC status.

The article is truncated at the point where it is about to explain the polynomial stage, so the full accuracy mechanism is not described in this text alone.
