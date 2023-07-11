---
title: &title Recursive Sorts
description: *title
summary: *title
redirect_to: &redirect https://docs.google.com/presentation/d/1vqrEcx-osC_WxCKal6nsoxjAno7jRlVmpT35GkfFhHI/edit?usp=sharing
canonical_url: *redirect
---

Unrolling recurrences
How much do print debugging statements cost in terms of runtime? In the lesson, we studied the recurrence T(N) = T(N / 2) + 1. Let’s consider T(N) = T(N / 2) + N.
What is the recursive work in the recurrence? What is the non-recursive work?


Unroll the recurrence and give a big-theta bound for T(N).
1

Invariants
Without simulating an actual run of merge sort, show the two arrays that will be merged by the final step of merge sort on: [9, 1, 1, 3, 5, 5, 6, 8].

Last time, we determined that the sorting algorithm run on this input array couldn’t have been insertion sort or selection sort. Could it have been merge sort instead?
Input array.		[0, 4, 2, 7, 6, 1, 3, 5]
During sorting.	[0, 2, 4, 7, 1, 6, 3, 5]
2

Multiple recursion
Give a recurrence T(N) describing the runtime of g(N, 1) with respect to N.

Draw the first 3 levels and the final level of a recurrence diagram representing the runtime of g(N, 1).
3
static void g(int goal, int step) {
    if (step > goal) {
        return;
    }
    for (int i = 0; i < goal; i += step) {
        System.out.print(i + " ");
    }
    System.out.println();
    g(goal, step * 2);
    g(goal, step * 2);
}

Case analysis





Assume k() runs in constant time and returns a boolean.
Give a recurrence relation describing the best case and worst case runtime for g.
4
static void g(int N) {
    if (N == 0)
        return;
    g(N / 2);
    if (k())
        g(N / 2);
}

Quicksort stability
Although we introduced quicksort as an unstable sort, quicksort can be made a stable sort if we have a stable partitioning algorithm and consider pivot choice.
If we always pick the leftmost element as the pivot p, fill in each blank with one symbol from the choices { <, ≤, >, ≥ } to partition the elements to ensure stability.


If we always pick the rightmost element as the pivot p, fill in each blank with one symbol from the choices { <, ≤, >, ≥ } to partition the elements to ensure stability.


If we always pick a random element as the pivot p, how can we ensure stability?
5
elements ____ p
p
elements ____ p
elements ____ p
p
elements ____ p

Median finding
Exact median finding. Must consider all elements at least once, hence Ω(N) time.
Approximate median finding. Real-world quicksort implementations choose the median of 3 elements: the first, middle, and last elements in constant time.
Doesn’t change worst-case asymptotic analysis.
Even if you are unlucky enough to have a pivotthat never lands near the middle, but is at least10% from the edge, runtime is still O(N log N)!

6
a = data[0];
b = data[data.length / 2];
c = data[data.length - 1];
if (a < b)
  if      (b < c) return b;
  else if (a < c) return c;
  else            return a;
else
  if      (a < c) return a;
  else if (b < c) return c;
  else            return b;
N
N/10
9N/10
N/100
9N/100
9N/100
81N/100
Josh Hug. 2020. Quicksort. In CS 61B Spring 2020.
