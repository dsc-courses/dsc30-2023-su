---
title: &title Sorting and Searching
description: *title
summary: *title
redirect_to: &redirect https://docs.google.com/presentation/d/1GTp4aP_xMqnYYVqJvmDrm_PErpGoyWT2u6ZkLX5-eBU/edit?usp=sharing
canonical_url: *redirect
---

DSC 30 Su23
Discussion 3

Agenda
Review:
Sorting
Recurrence
PA2 Autocomplete Preview

Sorting
Iterative sorts:
Selection sort
Insertion sort
Recursive sorts:
Merge sort
üëë Quick sort

Sorting
Quick Sort
Usually faster in practice, has an in-place variant (which means it can sort the input with a small, constant amount of extra space), but its worst-case time complexity is O(n^2). It's also not stable, which means equal elements can change their relative order after the sort.

Merge Sort
Stable and always has a time complexity of O(n log n), 
but requires O(n) extra space, and can be slower in practice due to the overhead of copying the array.


Recursive Sort - Analysis
Quick Sort
Merge Sort
Time Complexity
Average/Best: O(N log N)
Worst: O(N2)
Always O(N log N)
Space Complexity
O(N)
In-place variant: O(log N)
O(N)
Stability
Unstable
Stable
Efficiency
Faster in practice due to low overhead
Can be slower due to array copying overhead
Usage
When space is a concern
When stability is required;
Extra space is not constrained

Recursion
Ideas and principles: divide and conquer
Base case
Recursive case

Recursion
Binary tree traversal:
Preorder
In-order
Post-order
Nod to the comparison between Trie and sorting:
If using in-order, the traversal output of Trie will be words in alphabetical order;

Recurrence Relation
The amount of work needed to solve a problem of size n to that needed to solve smaller problems. 
Denoted T(N) = ‚Ä¶


static int recurse(int N) {
	if (N <= 1) {
		return N;
}
for (int i = 1; i < N / 2; i += 2) {
	System.out.println(i * 3 * N);
}
return recurse(N - 1) + recurse(N - 1);
}
Recurrence Relation
Give a recurrence T(N) describing the runtime of the function in terms of N.
Explain how each term in your recurrence relates to the code.



Draw the first 3 levels and the final level of a recurrence diagram representing the function runtime.
Explain how parts of your diagram 
relate to your recurrence.
T(N) = ???

static int recurse(int N) {
	if (N <= 1) {
		return N;
}
for (int i = 1; i < N / 2; i += 2) {
	System.out.println(i * 3 * N);
}
return recurse(N - 1) + recurse(N - 1);
}
Recurrence Relation
Give a recurrence T(N) describing the runtime of the function in terms of N.
Explain how each term in your recurrence relates to the code.



Draw the first 3 levels and the final level of a recurrence diagram representing the function runtime.
Explain how parts of your diagram 
relate to your recurrence.
T(N) = 2 * T(N - 1) + N / 4

Recurrence Relation
Give a recurrence T(N) describing the runtime of the function in terms of N.
Explain how each term in your recurrence relates to the code.



Draw the first 3 levels and the final level of a recurrence diagram representing the function runtime.
Explain how parts of your diagram 
relate to your recurrence.
T(N) = ???
static void accumulate(int N) {
	if (N > 1) {
	 	int M = 0;
		for (int i = 1; i < N; i += 2) {
	M += 1;
}
accumulate(M);
}
}

Recurrence Relation
Give a recurrence T(N) describing the runtime of the function in terms of N.
Explain how each term in your recurrence relates to the code.



Draw the first 3 levels and the final level of a recurrence diagram representing the function runtime.
Explain how parts of your diagram 
relate to your recurrence.
T(N) = T(N / 2) + N / 2
static void accumulate(int N) {
	if (N > 1) {
	 	int M = 0;
		for (int i = 1; i < N; i += 2) {
	M += 1;
}
accumulate(M);
}
}

Recurrence Relation
Give a recurrence T(N) describing the runtime of the function in terms of N.
Explain how each term in your recurrence relates to the code.



Draw the first 3 levels and the final level of a recurrence diagram representing the function runtime.
Explain how parts of your diagram 
relate to your recurrence.
T(N) = ???
static void triple(int N) { 
if (N > 1) { 
for (int i = 1; i < N / 2; i += 1) { 
System.out.println(i); 
} 
triple(N / 3); 
triple(N / 3); 
triple(N / 3); 
for (int i = 1; i < N / 2; i += 1) {
System.out.println(i); 
} 
}
}

Recurrence Relation
Give a recurrence T(N) describing the runtime of the function in terms of N.
Explain how each term in your recurrence relates to the code.



Draw the first 3 levels and the final level of a recurrence diagram representing the function runtime.
Explain how parts of your diagram 
relate to your recurrence.
T(N) = 3 * T(N / 3) + N
static void triple(int N) { 
if (N > 1) { 
for (int i = 1; i < N / 2; i += 1) { 
System.out.println(i); 
} 
triple(N / 3); 
triple(N / 3); 
triple(N / 3); 
for (int i = 1; i < N / 2; i += 1) {
System.out.println(i); 
} 
}
}

Recurrence Relation
(Also looked at Asymptotic Analysis problems on Assessment 1, 
Reviewed upper-lower bound relationships to the general case (Theta)
Analyzed the Theta runtime of one piece of program (AA Assessment Question 1)


Project 2: Autocomplete
Given:
Autocomplete Interface
TreeSetAutocomplete Implementation - Reference
Todo:
EdStem!

Autocomplete
TreeSetAutocomplete

Extended Reading
https://www.programiz.com/dsa/quick-sort
https://www.programiz.com/dsa/master-theorem
https://leetcode.com/problems/longest-word-with-all-prefixes/description/
https://youtu.be/vr5dCRHAgb0
