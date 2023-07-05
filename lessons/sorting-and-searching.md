---
layout: minimal
title: Sorting and Searching
description: &desc Recusive sorts, search trees, tries, and 2-3 trees.
summary: *desc
nav_order: 2
parent: Lessons
grand_parent: DSC 30
youtube: yes
---

# {{ page.title }}
{: .no_toc .mb-2 }

{{ page.description }}
{: .fs-6 .fw-300 }

1. TOC
{:toc}

## Recursive Sorts

{% include learning_objectives.md lesson="Recursive Sorts" %}

**Sequential search** returns the index of an element in an array in worst case linear time by scanning across the array and comparing each element to the target. Although linear time algorithms are much more efficient than quadratic time algorithms, there are many situations where we need to make a large number of searches on a large amount of data.

A **linear time algorithm** like worst case sequential search might have the following real-world runtimes.

- When _N_ = 1 million, about 1 second.
- When _N_ = 10 million, about 10 seconds.
- When _N_ = 100 million, about 100 seconds.

Imagine how differently we would interact with technologies if search results took 100 or more seconds to process. Sorting elements is one way to enable more efficient searching.

**Binary search** returns the index of an element in a _sorted array_ in worst case logarithmic time by using the sorted order to discard half the remaining elements after each comparison. Instead of checking each element one-by-one from left-to-right in the array, binary search instead starts at the middle of the current problem and compares to the middle element to decide whether the proceed left or right.

{% include youtube.html id="RfoP3xULk70" start="11" end="641" aspect_ratio="16/9" %}

```java
public static int binarySearch(int[] sorted, int target) {
    return binarySearch(sorted, target, 0, sorted.length);
}

private static int binarySearch(int[] sorted, int target, int low, int high) {
    if (low > high) {
        return -1;
    }
    int N = high - low;
    int mid = low + (high - low) / 2;
    if (sorted[mid] < target) {
        return binarySearch(sorted, target, mid + 1, high);
    } else if (sorted[mid] > target) {
        return binarySearch(sorted, target, low, mid - 1);
    } else {
        return mid;
    }
}
```

<details markdown="block">
<summary>When does the best case runtime occur for binary search?</summary>

In the best case, the `target` is the exact middle element in the `sorted` array, which can be found in constant time.
</details>

The worst case order of growth for the runtime for `binarySearch` is **logarithmic** with respect to _N_, the `sorted.length`. In each recursive call of the loop, half the remaining elements under consideration can be ignored. In other words, the number of recursive calls is given by the answer to the question:

> How many times do we need to divide _N_ by 2 until only 1 element remains?

This is the definition of the **base-2 logarithm**, often written as either log<sub>2</sub> or the shorthand lg.

How long would a logarithmic time algorithm take to process large amounts of data? Let's compute the base-2 logarithm for big data.

- When _N_ = 1 million, log<sub>2</sub> 1 million is about 20.
- When _N_ = 10 million, log<sub>2</sub> 10 million is about 23.
- When _N_ = 100 million, log<sub>2</sub> 100 million is about 27.

### Recurrences

The runtime of a recursive program like binary search can be more effectively modeled using recurrence relations. **Recurrence relations** (aka recurrences) are recursive equations that represent the order of growth for a function in two parts: (1) non-recursive work and (2) recursive work. A recurrence relation describing the worst-case asymptotic runtime for binary search is T(N) = T(N / 2) + 1.

T(N) =
: On the left hand side of the equals sign, T(N) refers to the runtime for binary search in terms of the size of the current subproblem, _N_. In the code above, note that `N = high - low`.

T(N / 2) + 1
: On the right hand side of the equals sign, there are two components. The **recursive work** is given by the expression T(N / 2) because binary search makes a single recursive call to itself on a subproblem of half the size. The **non-recursive work** is given by the expression 1 because, ignoring the recursive calls, binary search spends a constant amount of time comparing `sorted[mid] < target`.

One way to solve a recurrence is by **unrolling the recurrence**, an approach that works by plugging the recurrence back into itself.

1. T(N) = T(N / 2) + 1
1. T(N) = [T(N / 4) + 1] + 1
1. T(N) = [[T(N / 8) + 1] + 1] + 1
1. T(N) = [[[T(N / 16) + 1] + 1] + 1] + 1

We can start to see a pattern emerge. The recursive work will eventually go down to T(1) when it calls the base case. Along the way to the base case, a lot of 1's are added together. How many times are we comparing `sorted[mid]` to the `target`? Put another way, we can ask: How many times do we need to divide _N_ by 2 in order to reduce it to the number 1? This is the base-2 logarithm again!

{: .hint }
Earlier, we introduced an important sum that frequently appears when analyzing iterative algorithms: [1 + 2 + 3 + ... + N](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF) is about _N_<sup>2</sup> / 2, which is quadratic. For recursive algorithms, we'll need to consider how the problem is subdivided into smaller subproblems. In binary search, the subproblem is divided in half each time. The sum of the series [1 + 2 + 4 + 8 + ... + N](https://en.wikipedia.org/wiki/1_%2B_2_%2B_4_%2B_8_%2B_%E2%8B%AF) is about 2_N_, which is linear.

### Recursive merge sort

Both selection sort and insertion sort have worst case quadratic order of growth, and relied on iterative improvement where a _sorted elements_ portion was maintained at the front of the sequence at all times. If recursion was able to speed-up searching, perhaps it can also speed up sorting too.

**Merge sort** represents a different approach to sorting based on the idea of recursion. Merge sort's name derives from the **merge** operation, which takes two _sorted arrays_ and returns a _sorted result_ containing all the elements in both arrays.

{% include slides.html id="1Q-73Edm7-DcTYJng_Tm_6Ed5j8clwKl30x0kEY9vY7E" aspect_ratio="16/9" %}

Merge sort is a recursive sorting algorithm that can be described as follows.

1. If the array is of size 1, return.
1. Recursively merge sort the left half.
1. Recursively merge sort the right half.
1. Merge the two sorted halves.

{% include youtube.html id="Ns7tGNbtvV4" start="78" end="519" aspect_ratio="16/9" %}

The recurrence relation for the runtime of merge sort can be given as T(N) = T(N / 2) + T(N / 2) + N + 1. The first recursive call to T(N / 2) represents the time it takes to merge sort the left half while the second call represents the time it takes to merge sort the right half. But we could also state it more simply as just T(N) = 2T(N / 2) + N because the runtime is the same regardless of which half we're discussing.

### Recurrence diagrams

Unrolling this equation ends up producing a mess of parentheses and brackets, so let's try drawing a recurrence diagram to explain what's going on and use visuals to help organize our analysis. In a **recurrence diagram**, the recursive work is drawn as nodes (with the current subproblem depicted inside the node) while the non-recursive work is drawn beside the node. If we can add up all of the non-recursive work (numbers outside the node), then we've computed the total work done by the algorithm.

Here's an example of a recurrence diagram for merge sort on a 64-element array.

- The top layer takes about 64 units of time merging 2 sorted halves of 32 elements each.
- The second layer also takes about 64 units of time merging 4 sorted halves of 16 elements each.
- The third layer also takes about 64 units of time merging 8 sorted halves of 8 elements each.
- And on and on until the algorithm reaches its base case.

![Merge sort recurrence diagram]({{ site.baseurl }}{% link assets/images/merge-sort-recurrence.svg %})

By identifying the pattern in the recurrence diagram, we can see that all the nodes that are on the same layer will take about 64 units of time. Since the entire runtime of merge sort is represented by this diagram, we can find the total time spent by multiplying the number of layers by the time spent on each layer. If we think about the problem more generally in terms of the size of the current subproblem _N_, then:

- Each layer divides _N_ in half until the base case of 1 element. Therefore, there are log<sub>2</sub> N layers.
- Each layer takes about _N_ total non-recursive time.
- Therefore, the runtime of merge sort is in Θ(N log N).

We call this N log N order of growth **linearithmic** (a portmanteau of "linear" and "logarithmic").

### Quicksort

In our study of sorting algorithms, we learned that a sorting algorithm is considered **stable** if it preserves the original order of equivalent keys. Which sorting algorithms does Java use when you call `Arrays.sort`? It depends on whether we need stability.

Stable system sort
: When sorting an array of objects (like emails), Java uses a sorting algorithm called **Timsort**, which is based on an iterative variant of merge sort and has the same linearithmic worst-case runtime as recursive merge sort.

{: .note }
> Timsort is a _hybrid sort_ that combines ideas from merge sort with insertion sort. Experimental analysis reveals that the fastest sorting algorithm for small arrays is often insertion sort. Instead of merge sort's base case of 1 element, Java Timsort uses a base case of 32 elements which are then insertion sorted. Insertion sort can be further sped up by using binary search to find the insertion point for the next unsorted element.
>
> Timsort is also an _adaptive sort_ that changes behavior depending on the input array. Many real-world arrays are not truly random. They often contain _natural runs_, or sorted subsequences of elements that could be efficiently merged. Rather than recursively dividing top-down, Timsort works bottom-up by identifying natural runs in the input array and combining them from left to right.

Unstable system sort
: When sorting an array of numbers or booleans, Java uses a sorting algorithm called **quicksort**. Quicksort has many variants; we'll focus on **single-pivot quicksort** in this course.

Quicksort relies on the idea of recursively **partitioning** an array around a pivot element, `data[i]`.

{% include youtube.html id="Z8G5oWSCQjU" start="9" aspect_ratio="16/9" %}

A partitioning of an array rearranges its elements in a weaker way than sorting by requiring elements in the order:

- All elements to the left of the pivot are less than or equal to the pivot element.
- The **pivot element**, `data[i]`, moves to position `j`. (The pivot might not need to move.)
- All elements to the right of the pivot are greater than or equal to the pivot element.

By recursively repeating this process, quicksort eventually sorts all the elemetns in an array.

{: .hint }
> Open the VisuAlgo module to visualize sorting algorithms. Press `Esc` to exit the e-Lecture Mode, and choose **QUI** from the top navigation bar to switch to quicksort. Run the sorting algorithm using **Sort** from the bottom left menu.
>
> [Sorting Visualization](https://visualgo.net/en/sorting){: .btn .btn-purple target="_blank" }

## Search Trees

{% include learning_objectives.md lesson="Search Trees" %}

A sorted array enables logarithmic-time algorithms like binary search. To determine if a certain element is in a sorted array containing 100,000,000 elements, binary search only needed log<sub>2</sub> 100,000,000, or about 27 comparisons! The combination of **sorting algorithms** and **searching algorithms** can enable efficient features like autocomplete that shape how people make sense of the world.

Let's say we wanted to implement the autocomplete feature in Husky Maps. One approach is to implement a `BinarySearchAutocomplete` data type.

Representation
: Potential search results are stored in a sorted array. In Husky Maps, this contains the names of all the places near the UW Seattle campus.

Functionality
: The `addAll` method adds new elements to the data type. After the elements are added, the entire array is re-sorted to maintain the sorted representation.
: The `allMatches` method returns all the elements that start with the given prefix. Since the terms are stored in a sorted array, we can use binary search to find the first term that starts with the prefix in the sorted array and then iterate to the right to collect the all the remaining prefix-matching terms.

`BinarySearchAutocomplete` provides a very efficient `allMatches`, but needs to spend a lot of time sorting all the elements in the data type after each call to `addAll`. Even if we add only one element, putting that element in the right place in the sorted array takes at least linear time. If `addAll` is called infrequently, this might not be a problem. But, in real-world mapping applications, we might need to respond to new information about the world. How might we design a more robust data type that can not only find elements efficiently, but also add or remove elements efficiently too?

When designing data structure representations, computer scientists often compare arrays and nodes.

Arrays
: Enable efficient access to elements by index because each array access takes constant time no matter where the element is located inside the array. For the same reason, it's also efficient to change a single element in an array if we have its index.

Nodes
: Almost the opposite of arrays in runtime. Nodes are inefficient at accessing elements by index, but efficient at adding or removing elements without having to shift over all other elements so long as there's a reference to the node that needs to change.

How might we efficiently perform binary search on nodes?

### Binary search trees

The **binary search tree** (BST) is a hierarchical node-based data structure designed for efficient binary search. Each node in a binary search tree has a left and right child node, where all the elements to the left are less than the current element and all the elements to the right are greater than the current element. Binary search trees are commonly used to implement sets or maps.

Set abstract data type
: A collection of unique elements or "keys". Unlike lists and deques, sets do not maintain indices for each element, which enables more efficient data structure implementations.

Map abstract data type
: A collection that associates each unique key with a value. Maps are like sets except each key can have a (not necessarily unique) value.

{% include slides.html id="1E81_dZ7x06XyYBM-k9xs4CKIan8C2YaEJTKgrPz7y8U" aspect_ratio="16/9" %}

The letters in the tree are arranged in sorted order when flattened vertically: "A" is the leftmost letter in the tree while "G" is the rightmost letter in the tree. At any given node, we can decide whether to go left or right and ignore up to half the remaining elements. Just as binary search was able to find an element by recursively narrowing-down the search window, a binary search tree also shrinks its search window when considering each node. Elements can be added to a binary search tree as a new leaf in its sorted position within the tree.

The runtime of binary search tree methods depend on the **height** of the tree, or the number of references on the path from the overall root to the deepest leaf node. For example, the ABCDEFG tree depicted above has a height of 2 because there are only two edges from the overall root to any of the deepest leaf nodes. In this case, the height of the binary search tree (height 2) is logarithmic with respect to the total size of the tree (size 7). But BSTs are not necessarily balanced.

{: .hint }
> Open the VisuAlgo module to visualize binary search trees. Press `Esc` to exit the e-Lecture Mode and use **Create** from the bottom left menu. Try creating all of the different types of trees and comparing their properties. Try searching or inserting an element into some of the trees.
>
> [Binary Search Tree Visualization](https://visualgo.net/en/bst){: .btn .btn-purple target="_blank" }

{% include youtube.html id="0SCtnf84QrI" start="15" end="461" aspect_ratio="16/9" %}

But our asymptotic analysis of binary search trees ignores one potentially important cost: the time it takes to compare two strings by calling `compareTo`. We've assumed that the time it takes to compare any two elements is always constant and not a factor in the asymptotic runtime analysis. In a computer, characters are represented as numbers: the character 'a' has the numeric value 97, for example. Computers can compare these the numeric values for each character using the `<`, `==`, and `>` operators in constant time.

<details markdown="block">
<summary>If comparing characters takes constant time, why might string comparison take longer?</summary>

Strings can be composed of many characters. Given two strings, Java checks both strings character-by-character until the first difference or the end of the strings. Even though each character comparison may take constant time, these comparisons may need to be repeated through the length of the string. For example, DNA strings might store genetic information for organisms can be composed of a large number of base pairs represented by the letters A, C, G, and T. In this situation, we might need to store a large number of very long and very similar-looking strings.

To enable efficient DNA search, we'll need more specialized data structures designed for handling strings.
</details>

### Isomorphism to quicksort

Selecting a root element in a binary search tree is like partitioning an array around a pivot element in quicksort. All the elements in the left subtree will be less than the root element, and all the elements in the right subtree will be greater than the root element.

{% include youtube.html id="9NEzYoZmM3Y" aspect_ratio="16/9" %}

![Quicksort isomorphism to binary search trees]({{ site.baseurl }}{% link assets/images/quicksort-bst.svg %})

The quicksort on the left always chooses the leftmost element as the pivot element and uses an ideal partitioning that maintains the relative order of the remaining elements. The binary search tree on the right shows the result of inserting each element in the left-to-right input order given by the array. The process for organizing elements in a binary search tree has a one-to-one correspondence to an equivalent process for quicksorting elements in an array.

One-to-one correspondence (bijection)
: A mapping between two types of elements where elements of each type are paired with exactly one other element of the other type. One-to-one correspondence between binary search trees and quicksort implies that every binary search tree has a unique corresponding quicksort procedure associated with it, and vice versa.

Algorithmic isomorphism
: A one-to-one correspondence between two types of data structures or algorithms that also preserves structure. Isomorphism between binary search trees and quicksort implies that a change in a binary search tree produces a proportional change in the isomorphic quicksort procedure, and vice versa.

We often use "corresponding" and "isomorphic" interchangeably, but isomorphism is a stronger and more descriptive term because it implies the structure-preserving property. Isomorphism allows us to think about a binary search tree as if it were an ideal quicksort frozen in time.

## Tries

{% include learning_objectives.md lesson="Tries" %}

The **trie** (pronounced "try") data structure is a specialized tree designed for storing string data by subdividing strings into individual characters. Whereas each node in a binary search tree represents an entire element, each node in a trie represents a single character within a string. To indicate that a node represents a complete word: in a trie map the value associated with the node is null; in a trie set the value associated with the node is true.

{% include slides.html src="https://www.cs.princeton.edu/courses/archive/spring22/cos226/demos/52DemoTrie/index.html" aspect_ratio="16/9" %}

{: .hint }
> Open the Algorithm Visualizations module to visualize tries. Insert words and predict how the data structure will change.
>
> [Trie Visualization](https://www.cs.usfca.edu/~galles/visualization/Trie.html){: .btn .btn-purple target="_blank" }

The number of children per trie node can vary and depends on the size of the alphabet, which we often call _R_. In the case of English, there are 26 lowercase letters and 26 uppercase letters, so each node can maintain its own _R_ = 52 length array with references to other nodes. By splitting words into individual characters, tries bound the time to search for a single string to the length of the string rather than the total number of strings.

Tries, however, may need to consume a lot of memory space in order to store such a large number of _R_-length arrays. For larger alphabets, such as the unicode alphabet that represents all possible `char` values has _R_ = 65536. In other words, each node in this kind of trie would need to maintain its own 65536-length array. How might we reduce the memory space usage?

### Ternary search trees

The **ternary search tree** (TST) is a specialized data structure designed for storing string data that combine ideas from tries and search trees. Just like in a trie, TSTs also subdivide each string into individual characters, giving each character its own node. Whereas a trie can have up to 65536 non-null children, TST nodes can only have up to 3 non-null children:

Left child
: All strings _not using_ the current character, and before the current string in the alphabet.

Middle child
: All strings _using_ the current character.

Right child
: All strings _not using_ the current character, and after the current string in the alphabet.

{% include slides.html src="https://www.cs.princeton.edu/courses/archive/spring22/cos226/demos/52DemoTST/index.html" aspect_ratio="16/9" %}

{: .hint }
> Open the Algorithm Visualizations module to visualize ternary search trees. Insert words and predict how the data structure will change.
>
> [Ternary Search Tree Visualization](https://www.cs.usfca.edu/~galles/visualization/TST.html){: .btn .btn-purple target="_blank" }
>
> Note that the visualization differs from the slides in how it marks complete words by going down one more time and creating an an extra node.

### Memory hierarchy

Are tries actually more efficient than binary search trees in practice?

{% include youtube.html id="rhSySpkKD9I" start="652" aspect_ratio="16/9" %}

One limitation of asymptotic analysis is that it doesn't help us understand how computer hardware actually runs a program. In asymptotic analysis, we assume that each individual operation takes about the same time. Although each operation in a real computer might take constant time, there can still be some dramatic differences when running a program on real computer hardware.

{% include youtube.html id="QmUYOVuxtWo" aspect_ratio="16/9" %}

There are 3 key components to take away from the memory hierarchy.

Cache
: Temporary space for data in a running program that may be needed soon. CPUs have a physical cache that is extremely fast, extremely small (just a couple megabytes of storage), and relatively expensive to produce. Cache is cleared when your computer shuts down.

RAM (main memory)
: Temporary space for your running programs that is much larger than caches. Many of today's computers come with 8 or 16 gigabytes of RAM. However, RAM is typically 10 or 100 times slower than cache. RAM is cleared when your computer shuts down.

Disk (storage)
: Permanent storage space for your files and programs. It's often much larger than main memory (usually 256GB or larger) but another 10, 100, 1000, or more times slower than RAM.

Programmers rarely have direct control over how data flows between these 3 components of a computer. Instead, these resources are typically managed by your computer's operating system and hardware. Memory and caching is designed around two general principles that attempt to predict the program data that will be needed next.

Spatial locality
: The tendency for programs to access locations nearby to recent locations. For example, iteration patterns often continue in the same direction so spatial locality suggests that adjacent or nearby memory addresses will be accessed next.

Temporal locality
: The tendency for programs to access data that was recently accessed. For example, variables that are most recently declared such as loop variables are probably more likely to be accessed than variables used a long time ago.

Writing memory- and cache-efficient programs requires an understanding of how these systems interact according to general principles.

## 2-3 Trees

{% include learning_objectives.md lesson="2-3 Trees" %}

Binary search trees aimed to address the linear-time worst case for adding or removing elements from a sorted array set. Yet we now know that binary search trees not only fail to improve on this worst case runtime, but can also degrade performance on methods like `contains` that were much faster when we performed a binary search on a sorted array.

{% include youtube.html id="yz850zzjrHQ" start="220" aspect_ratio="16/9" %}

To realize the promise of a more efficient tree data structure, we need stronger invariants that ensure the tree never becomes unbalanced. In inventors of the 2-3 tree hypothesized that unbalanced growth in a binary search tree occurs because adding an element requires creating a new leaf node that unevenly increases the height of the tree. For example, when elements are added in ascending order to a binary search tree, the overall height of the tree increases because the height of only the right child increases.

Given that creating new leaves can lead to unbalanced growth, 2-3 trees avoid creating new leaf nodes entirely. Instead, the nodes of a 2-3 tree can expand to fit more than one key (element) so new elements can be added by fitting them into existing nodes rather than creating new leaves. If new leaf nodes are never created, the tree can never become unbalanced!

{% include youtube.html id="-ECGVvUHA5c" start="12" end="418" aspect_ratio="16/9" %}

The **2-3 search tree** (often shortened to just "2-3 tree") is a _self-balancing_ search tree designed to ensure a logarithmic-height tree no matter the order that elements are added to the data structure. Whereas each node in a binary search tree can only contain a single key per node, the nodes of a 2-3 tree can be either:

2-node
: A node that contains exactly 1 key and 2 non-null children.

3-node
: A node that contains exactly 2 keys and 3 non-null children.

<details markdown="block">
<summary>If we allowed 4-nodes, how many keys and non-null children would they have?</summary>

A 2-3 tree doesn't contain 4-nodes. But if it did, it could have exactly 3 keys and 4 non-null children. The number of non-null children in each node is always one greater than the number of keys because the keys serve as dividers in the search process. For example, in binary search, the middle element exactly splits the left part from the right part. If we have 2 keys, then we have 3 parts. If we have 3 keys, then we have 4 parts.
</details>

This definition does not allow nodes that have just 1 non-null child. A 2-3 tree ensures that all nodes have either 2 or 3 non-null children so that the height will always be between about log<sub>2</sub> _N_ and log<sub>3</sub> _N_. Furthermore, because height is added evenly to all children, all leaf nodes in a 2-3 tree are the same distance from the overall root.

{% include slides.html src="https://www.cs.princeton.edu/courses/archive/spring22/cos226/demos/33Demo23Tree/index.html" aspect_ratio="16/9" %}

{: .hint }
> Open the Algorithm Visualizations module to visualize B-trees with max degree = 3. Insert words or numbers and predict how the data structure will change.
>
> [2-3 Tree Visualization](https://www.cs.usfca.edu/~galles/visualization/BTree.html){: .btn .btn-purple target="_blank" }
