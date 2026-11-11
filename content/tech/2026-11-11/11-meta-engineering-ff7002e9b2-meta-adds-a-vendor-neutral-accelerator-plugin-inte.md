---
id: ff7002e9b2
title: Meta adds a vendor-neutral accelerator plugin interface to lldb-server for CPU and GPU debugging
original_title: Extending LLDB to Debug Applications That Span CPUs and GPUs
url: >-
  https://engineering.fb.com/2026/11/09/developer-tools/extending-lldb-to-debug-applications-that-span-cpus-and-gpus/
source: Meta Engineering
kind: blog
section: languages-and-tools
date: "2026-11-11"
published_at: "2026-11-09T17:00:12.000Z"
authors: []
comments: null
tags:
  - lldb
  - gpu-debugging
  - debuggers
  - llvm
  - hip
  - developer-tools
  - blog
why_read: >-
  You get the design reasoning for splitting host and device into separate targets, and the plugin
  handshake that lets LLDB coordinate them.
rank: 11
interest_score: 6.7
depth_score: 7
novelty_score: 7
utility_score: 6
scored: true
model: claude-sonnet-5-5
---

Meta engineers describe a plugin architecture in lldb-server for debugging applications that run on both CPUs and GPUs. The CPU and GPU are modelled as separate LLDB targets, each with its own debugger process, architecture, registers and address space. Both appear in one LLDB or IDE session.

A plugin translates a vendor's device debugging API into concepts LLDB already has, such as processes, threads, registers, memory, modules and stop reasons. The plugin asks LLDB to set internal breakpoints in the host process. When the host reaches one, lldb-server tells the plugin to initialise the vendor API, and LLDB then creates and connects to the device target.

The aim is to keep the LLDB client vendor-neutral. Improvements to the command line, remote protocol, symbol handling and IDE integration would then serve every accelerator, while vendors implement only hardware-specific behaviour. This contrasts with separate tools such as AMD's ROCgdb and NVIDIA's CUDA-GDB, where common features are maintained separately.

Two details are worth noting. GPU support activates only when the application uses a supported GPU runtime, so CPU-only debugging takes the existing path with no added runtime overhead, according to the authors. Meta also built a mock accelerator plugin so the LLVM test suite can check discovery, breakpoint coordination and connection setup without GPU hardware. The excerpt shows an AMD HIP sample session but is truncated, so it gives no performance figures or list of supported vendors.
