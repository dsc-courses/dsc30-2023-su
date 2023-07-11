---
title: &title Search Trees
description: *title
summary: *title
redirect_to: &redirect https://docs.google.com/presentation/d/1gl2nF96Ajtbz-DdgCzDsEQZrHH3ZROdSd0jKlbstoOU/edit?usp=sharing
canonical_url: *redirect
---

Emoji search tree
Consider this BST of emoji. List the emoji in sorted order. Then, reorganize the items in the BST so that there’s no dangling 💡 leaf at the bottom.
1
❤️
😭
🐕
🤔
🔥
✨
💡

Adding to a BST
In a binary search tree, the add method inserts new values as leaf nodes. Consider different orders for adding the values 1, 2, 3, 4, 5, 6, 7 into a BST.
An insertion order that results in the tallest possible tree is [1, 2, 3, 4, 5, 6, 7].
Give an insertion order that results in the shortest possible tree.
2

Quicksort isomorphism
Give an asymptotic runtime analysis of single-pivot quicksort via the isomorphism to BSTs. Assume the pivot is always data[0] and partitioning is in linear time.
Best case.



Worst case.



Describe a way to generate a best case or worst case input array for a given size N. Remember that quicksort pivots are like internal nodes in a binary search tree.
3

Insertion sort variants
Binary insertion sort. Since insertion sort inserts the next unsorted element into the sorted subarray, use binary search to determine where the element belongs.
Does this work? What is the asymptotic runtime for binary insertion sort?



Tree sort. Insertion sort, but inserts the next unsorted element into a search tree. Returns the sorted output by performing an inorder traversal of the search tree.
Does this work? What is the asymptotic runtime for tree sort?
4
