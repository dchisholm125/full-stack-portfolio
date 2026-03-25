---
title: What the Graph Wanted
description: The arc from a single node to a worldview made of teeth.
date: 2026-03-24
---

# What the Graph Wanted

*The arc from a single node to a worldview made of teeth.*

---

I didn't set out to build a brain.

I set out to build a weighted graph that could learn which concepts tend to show up together. The premise was simple: if "cold" and "darkness" and "fear" keep appearing in the same sentences, the edges between those nodes should get stronger. Hebbian learning, essentially — neurons that fire together, wire together — except instead of neurons I had Python objects, and instead of firing I had co-occurrence statistics crawled from a training corpus.

The first organism was embarrassingly small. A few hundred nodes. A handful of edges. When you gave it a prompt, it would traverse the graph from the input concept, following the highest-weight paths, and return whatever it landed on. Not generation. Not prediction. Just... wandering with weighted dice.

It was, for a while, pretty unimpressive.

Then I added more training data. Then I added more nodes. Then I noticed the paths it was taking weren't random anymore — they had a character. A consistent way of moving through the world.

That's when things got interesting.
