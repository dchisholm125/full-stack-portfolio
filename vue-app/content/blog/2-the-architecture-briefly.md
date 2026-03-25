---
title: The Architecture, Briefly
description: What the system actually is — and why "it's not an LLM" deserves more than a footnote.
date: 2026-03-24
tags: ["Architecture", "SRM", "AI"]
---

# The Architecture, Briefly

Before I get into what the system *did*, here's what it *is* — because "it's not an LLM" is doing a lot of work and deserves more than a footnote.

Each organism is a directed weighted graph. Nodes are concepts. Edges are co-occurrence relationships, weighted by frequency and recency. When a prompt arrives, the organism begins a traversal: starting from nodes that match the input, it walks the graph probabilistically — not randomly, but biased toward higher-weight edges. The output is the path it took, and the concepts it found most strongly connected to the input.

There's no backpropagation. No attention mechanism. No embedding space. The "learning" happens when training text is processed: co-occurring concepts get their shared edges strengthened. That's the whole thing.

What you get, it turns out, depends almost entirely on what you feed it.
