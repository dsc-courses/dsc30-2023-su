---
layout: minimal
title: Projects
description: &desc Project instructions and specifications.
summary: *desc
has_children: true
has_toc: true
parent: DSC 30
permalink: /:path/
---

# {{ page.title }}
{: .no_toc .mb-2 }

{{ page.description }}
{: .fs-6 .fw-300 }

Why does `30 + 30` evaluate to `60` while `"30" + "30"` evaluate to `"3030"`? Underlying this question is the concept of a data type. In Java, every variable has a **data type** like `int` or `String`. Data types combine representation and functionality. An `int` can only represent integer numbers within a certain range and the plus operator computes the sum of the two values. A `String`, on the other hand, represents data as a sequence of characters and the plus operator appends the two strings.

**Abstract data types** are data types that do not specify a single representation of data and only include a specification for the functionality of the data type. In Java, abstract data types are often represented using interfaces like `List`, `Set`, or `Map`. Java provides **implementations** or specific representations of each interface through classes like `ArrayList`, `TreeSet`, or `HashMap`.

The projects in this course aim to highlight the relationship between abstractions, implementations, and problems. The purpose of programming in this course is to explore the capabilities and design effort that goes into writing a specification. But programming is only a small portion of the projects: a much larger emphasis is placed on comparing the qualities of different solutions. The goal of the projects is learn the *how* and the *why* hidden within the project specifications through a synthesis of programming, analysis, and communication.
