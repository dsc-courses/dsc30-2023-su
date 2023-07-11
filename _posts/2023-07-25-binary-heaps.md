---
title: &title Binary Heaps
description: *title
summary: *title
redirect_to: &redirect https://docs.google.com/presentation/d/1c0kzu99_67ymomR-_6jjExQPOqVa-_uhFzEqsjW-MOI/edit?usp=sharing
canonical_url: *redirect
---

Heap operations
Draw the state of this min-heap after each line of code.
removeMin()




add(0)
1
1
6
1
5
2
8
8

Array representation
Consider this binary min-heap whose values coincidentally match the array indices.
What is the index of the leftmost leaf node?
What is the index of the right child of 3?
What is the index of the parent of 10?



The above array is sorted. Give an example of an array min-heap that is not sorted.
2
1
2
3
4
5
6
7
8
9
10
11

Heapsort
In the worst-case, removeMin and add take Θ(log N) time to sink or swim elements. Your teammate wonders if it is possible to improve the worst-case runtime to Θ(1).
Computer scientists have proven that the worst-case runtime of a comparison sort must be in Ω(N log N). All known comparison sorts meet this requirement.
Explain why this optimization is impossible by showing how, if it were possible, that it could be used to sort a list in worst-case better than Ω(N log N) runtime.
3

Heap invariants
For this min-heap, assume all values are unique! (Don’t assume this in general!)
If the first two shaded nodes hold the minimum and next-min values, where could we find the third-smallest value? Where could we find the largest value?
4
A
B
C
D
E
F
G
minimum
next-min
