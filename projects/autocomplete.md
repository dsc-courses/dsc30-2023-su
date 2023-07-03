---
layout: minimal
title: Autocomplete
description: &desc Designing and analyzing autocomplete.
summary: *desc
nav_order: 2
parent: Projects
grand_parent: DSC 30
youtube: yes
---

# {{ page.title }}
{: .no_toc .mb-2 }

{{ page.description }}
{: .fs-6 .fw-300 }

1. TOC
{:toc}

**Autocomplete** is a feature that helps a user select valid search results by showing possible inputs as they type. For example, in a map app, autocomplete might allow the user to enter a prefix such as _La_ and automatically suggest the city, _La Jolla_.

In addition to autocompleting names, places, or things, autocomplete can also be a useful abstraction for implementing DNA subsequence search. Instead of indexing a list of all the city names or places, a DNA data structure can index all the suffixes of a very long DNA sequence. Autocompleting the DNA suffixes enables efficient search across all the DNA substrings for medical applications, genomics, and forensics.

In this project, we will compare 4 implementations (described later) and 2 applications (city search and DNA search) of autocomplete. By the end of this project, students will be able to:

- **Design and implement** tree-based and array-based search data structures.
- **Analyze and compare** runtimes using asymptotic and experimental analysis.

<details markdown="block">
<summary>How are we collaborating on this project?</summary>

Collaboration is required for this project and all future projects. Students may choose teammates from their enrolled quiz section to form a team of 2 or 3 students. If you have a group of 4 people who all want to work together, divide into two teams of 2 students each. If you don't have any teammates in mind, talk to people in class. Whether your team has 2 or 3 students doesn't make a difference in terms of workload because the **projects are designed to be worked on together at the same time**, not divided and assigned to individual team members.

We require teams because this course is predicated on communication. Success in this course is not just about what you bring as an individual contributor, but also how you can deepen a team's collective understanding of a problem. Many questions in this course and in the real world don't admit simple answers. Teamwork helps us learn how to navigate tensions around the values that go into designing, analyzing, and critiquing specifications.
</details>

<details markdown="block">
<summary>What am I submitting at the end of this project?</summary>

Satisfactory completion of the project requires a **video-recorded team presentation that addresses all the green callouts** meeting the following requirements:

- **Each team member needs to present** part of the presentation in order to receive credit for the assignment.
- Your presentation should not be much longer than **7 minutes** and should **include your voiceover**. (Your video is appreciated but not necessary.)
- Your presentation should include some kind of **visually-organizing structure**, such as slides or a document.
- After submitting to Canvas, **add a submission comment** linking to your slides or document.
</details>

## Setup

Additional setup is required for this project. From your Deques project, open the hamburger menu and select **File \| New \| Project from Version Control** and paste the following URL.

```
https://github.com/kevinlin1/tritonmaps.git
```

Once IntelliJ has loaded the project window, you should be able to run the `MapServer` class (located in the `src` folder), which will launch the Triton Maps web app. If everything is successful, you'll see this flurry of messages appear in the Run tool window indicating that the app has launched.

```
[main] INFO io.javalin.Javalin - Starting Javalin ...
[main] INFO org.eclipse.jetty.server.Server - jetty-11.0.13; built: 2022-12-07T20:47:15.149Z; git: a04bd1ccf844cf9bebc12129335d7493111cbff6; jvm 11.0.16+8-post-Debian-1deb11u1
[main] INFO org.eclipse.jetty.server.session.DefaultSessionIdManager - Session workerName=node0
[main] INFO org.eclipse.jetty.server.handler.ContextHandler - Started i.j.j.@683dbc2c{/,null,AVAILABLE}
[main] INFO org.eclipse.jetty.server.AbstractConnector - Started ServerConnector@2b6856dd{HTTP/1.1, (http/1.1)}{0.0.0.0:8080}
[main] INFO org.eclipse.jetty.server.Server - Started Server@3c72f59f{STARTING}[11.0.13,sto=0] @4349ms
[main] INFO io.javalin.Javalin - 
       __                  ___          ______
      / /___ __   ______ _/ (_)___     / ____/
 __  / / __ `/ | / / __ `/ / / __ \   /___ \
/ /_/ / /_/ /| |/ / /_/ / / / / / /  ____/ /
\____/\__,_/ |___/\__,_/_/_/_/ /_/  /_____/

       https://javalin.io/documentation

[main] INFO io.javalin.Javalin - Listening on http://localhost:8080/
[main] INFO io.javalin.Javalin - You are running Javalin 5.6.1 (released June 22, 2023).
[main] INFO io.javalin.Javalin - Javalin started in 309ms \o/
```

You can now visit [localhost:8080](http://localhost:8080/) to try the web app for yourself, but the map images won't load without the optional steps below.

<details markdown="block">
<summary>How do I enable map images in Triton Maps?</summary>

To see the map images, [sign up for a free MapBox account](https://account.mapbox.com/auth/signup/?route-to=%22https://account.mapbox.com/access-tokens/%22) to get an access token. Once you have your access token, in the IntelliJ toolbar, select the "MapServer" dropdown, **Edit Configurations...**, under **Environment variables** write `TOKEN=` and then paste your token. Re-run the `MapServer` class to launch the web app and enjoy the ["Ice Cream" map style by Maya Gao](https://www.mapbox.com/gallery/).
</details>

<details markdown="block">
<summary>Why can't I visit my Triton Maps app from my phone?</summary>

Running Triton Maps in IntelliJ will only allow you (or whomever is using your computer) to access the app. In order to allow anyone on the internet to use your app, we'll need to deploy it to the web. Optionally, you may follow the *Deployment* instructions in the project README.md to learn how to deploy the app to the web for free.
</details>

## Autocomplete interface

Implementations of `Autocomplete` must provide the following methods:

`void addAll(Collection<? extends CharSequence> terms)`
: Adds all the terms to the autocompletion dataset. Each term represents a possible autocompletion search result. Behavior is not defined if duplicate terms are added to the dataset.

{: .hint }
> [`Collection`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Collection.html)
> : The parent interface to lists and sets in Java. Using `Collection` rather than `List` lets clients use _any_ list or set or other collection that they've already created in their program.
>
> [`CharSequence`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/CharSequence.html)
> : An interface that generalizes the concept of a `String` of characters. Using `CharSequence` rather than `String` lets clients define specialized implementations for long strings like DNA.
>
> `Collection<? extends CharSequence>`
> : The type of the parameter, read: a `Collection` of any type of elements that extend `CharSequence`. The `? extends` lets clients call the method with a `Collection<String>` or a `Collection<SuffixSequence>` instead of having to strictly use a `Collection<CharSequence>`.

`List<CharSequence> allMatches(CharSequence prefix)`
: Returns a list of all terms that begin with the same characters as the given prefix.

Given the terms [alpha, delta, do, cats, dodgy, pilot, dog], `allMatches("do")` should return [do, dodgy, dog] in any order. Try this example yourself by writing a new test case in the `AutocompleteTests` class. You can write additional test cases like this to assist in debugging.

```java
@Test
void compareSimple() {
    List<CharSequence> terms = List.of(
        "alpha", "delta", "do", "cats", "dodgy", "pilot", "dog"
    );
    Autocomplete testing = createAutocomplete();
    testing.addAll(terms);

    CharSequence prefix = "do";
    List<CharSequence> expected = List.of("do", "dodgy", "dog");
    List<CharSequence> actual = autocomplete.allMatches(prefix);

    assertEquals(expected.size(), actual.size());
    assertTrue(expected.containsAll(actual));
    assertTrue(actual.containsAll(expected));
}
```

### Reference implementation

The project code includes a fully functional `TreeSetAutocomplete` implementation that stores all the terms in a `TreeSet`. The class contains a single field for storing the underlying `TreeSet` of terms. Rather than declare the field as a `Set`, we've chosen to use the more specialized subtype `NavigableSet` because it includes helpful methods that can be used to find the first term that matches the prefix.

```java
private final NavigableSet<CharSequence> elements;
```

The constructor assigns a new `TreeSet` collection to this field. In Java, `TreeSet` is implemented using a red-black tree, a type of balanced search tree where access to individual elements are worst-case logarithmic time with respect to the size of the set. `CharSequence::compare` tells the `TreeSet` to use the natural dictionary order when comparing any two elements.

```java
public TreeSetAutocomplete() {
    elements = new TreeSet<>(CharSequence::compare);
}
```

{: .hint }
If you've ever used a `TreeSet<String>`, you might be surprised to see the argument `CharSequence::compare`. This is not necessary for `TreeSet<String>`, but it is necessary for `TreeSet<CharSequence>` because `CharSequence` does not implement `Comparable<CharSequence>`. You can [read more in the Java developers mailing list](https://bugs.openjdk.org/browse/JDK-8137326?focusedCommentId=13889936&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-13889936).

The `addAll` method calls [`TreeSet.addAll`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/TreeSet.html#addAll(java.util.Collection)) to add all the terms to the underlying `TreeSet`.

```java
@Override
public void addAll(Collection<? extends CharSequence> terms) {
    elements.addAll(terms);
}
```

The `allMatches` method:

1. Ensures the prefix is valid. If the prefix is `null` or empty, returns an empty list.
1. Finds the first matching term by calling [`TreeSet.ceiling`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/TreeSet.html#ceiling(E)), which returns "the least element in this set greater than or equal to the given element, or `null` if there is no such element."
1. Collects the remaining matching terms by iterating over the [`TreeSet.tailSet`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/TreeSet.html#tailSet(E)), which is "a view of the portion of this set whose elements are greater than or equal to `fromElement`."
1. If we reach a term that no longer matches the `prefix`, returns the list of results.

```java
@Override
public List<CharSequence> allMatches(CharSequence prefix) {
    List<CharSequence> result = new ArrayList<>();
    if (prefix == null || prefix.length() == 0) {
        return result;
    }
    CharSequence start = elements.ceiling(prefix);
    if (start == null) {
        return result;
    }
    for (CharSequence term : elements.tailSet(start)) {
        if (Autocomplete.isPrefixOf(prefix, term)) {
            result.add(term);
        } else {
            return result;
        }
    }
    return result;
}
```

{: .hint }
> In Java, a **view** is a clever way of working with a part of a data structure without making a copy of it. For example, the `ArrayList` class has a [`subList`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ArrayList.html#subList(int,int)) method with the following method signature.
>
> ```java
> public List<E> subList(int fromIndex, int toIndex)
> ```
>
> `subList` returns another `List`. But instead of constructing a new `ArrayList` and copying over all the elements from the `fromIndex` to the `toIndex`, the Java developers defined a `SubList` class that provides a slice of the data structure using the following fields (some details omitted).
>
> ```java
> private static class SubList<E> implements List<E> {
>     private final ArrayList<E> root;
>     private final int offset;
>     private int size;
> }
> ```
>
> The `SubList` class keeps track of its `ArrayList root`, an `int offset` representing the start of the sublist, and the `int size` of the sublist. The sublist serves as an intermediary that implements `get(index)` by checking that the index is in the sublist before returning the offset index.
>
> ```java
> public E get(int index) {
>     if (index < 0 || index >= size) {
>         throw new IndexOutOfBoundsException();
>     }
>     return root.elementData[offset + index];
> }
> ```

## Design and implement

Design and implement 3 implementations of the `Autocomplete` interface.

{: .warning }
All team members must work together and fully understand each implementation. Do not assign each implementation to individual team members. The implementations are described in order of increasing complexity so later implementations will require significantly more work.

### SequentialSearchAutocomplete

Terms are added to an `ArrayList` in any order. Because there elements are not stored in any sorted order, the `allMatches` method must scan across the entire list and check every term to see if it matches the `prefix`.

### BinarySearchAutocomplete

Terms are added to a sorted `ArrayList`. When additional terms are added, the entire list is re-sorted using [`Collections.sort`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Collections.html#sort(java.util.List,java.util.Comparator)). Since the terms are in a list sorted according to natural dictionary order, all matches must be located in a contiguous sublist. [`Collections.binarySearch`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Collections.html#binarySearch(java.util.List,T,java.util.Comparator)) can find the start index for the first match. After the first match is found, we can collect all remaining matching terms by iterating to the right until it no longer matches the prefix.

```java
List<CharSequence> elements = new ArrayList<>();
elements.add("alpha");
elements.add("delta");
elements.add("do");
elements.add("cats");

System.out.println("before: " + elements);
Collections.sort(elements, CharSequence::compare);
System.out.println(" after: " + elements);

CharSequence prefix = "bay";
System.out.println("prefix: " + prefix);
int i = Collections.binarySearch(elements, prefix, CharSequence::compare);
System.out.println("     i: " + i);
```

{: .hint }
> This program produces the following output.
>
> ```
> before: [alpha, delta, do, cats]
>  after: [alpha, cats, delta, do]
> prefix: bay
>      i: -2
> ```
>
> The index `i` is negative because `Collections.binarySearch` [returns a negative value](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Collections.html#binarySearch(java.util.List,T,java.util.Comparator)) to report that an exact match for the prefix was not found in the sorted list.
>
> Returns
> : the index of the search key, if it is contained in the list; otherwise, `(-(insertion point) - 1)`. The _insertion point_ is defined as the point at which the key would be inserted into the list: the index of the first element greater than the key, or `list.size()` if all elements in the list are less than the specified key. Note that this guarantees that the return value will be `>= 0` if and only if the key is found.
>
> Since the prefix often will not exactly match an element in the list, we can use algebra to recover the _insertion point_. The `start` value represents the index of the first term that could match the prefix.
>
> ```java
> int start = i;
> if (i < 0) {
>     start = -(start + 1);
> }
> ```

{: .deliverable }
Explain the part of the `BinarySearchAutocomplete` class that you're most proud of programming.

### TernarySearchTreeAutocomplete

Terms are added to a ternary search tree using the [`TST`](https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/TST.java) class as a reference.

1. Skim the `TST` class. What do you notice will work for `Autocomplete`? What needs to change?
1. Identify methods in the `TST` class that are most similar to `Autocomplete`.
1. Adapt the code to implement the `Autocomplete` interface.

{: .hint }
Don't copy and paste code! Most of the time, we will need to make many changes, and we might introduce subtle bugs when we copy code that we don't fully understand. Instead, rewrite the code in your own words after making sense of the purpose of each line. We often don't need all the lines of code, and the code can be rewritten in ways that are more suitable for the problem at hand.

It's okay if your `TernarySearchTreeAutocomplete` throws a `StackOverflowError` when running the `DNASearch` class. This is caused by Java's built-in limit on recursive depth. There are different ways to work around this limit, but it's not relevant to this project.

{: .deliverable }
Explain the part of the `TernarySearchTreeAutocomplete` class that you're most proud of programming.

## Analyze and compare

### Asymptotic analysis

{: .deliverable }
Give a big-theta bound for the worst-case runtime of the `addAll` and `allMatches` methods for each implementation, including `TreeSetAutocomplete`, with respect to _N_, the total number of terms **already stored in the data structure**. Explain the runtime of each implementation in a couple sentences while referencing the code.

As you perform your asymptotic analysis, make sure to carefully read through and keep in mind the assumptions and hints given below.

What does the underlying data structure look like in the worst case? How are terms organized? Based on that worst case, analyze the runtime of operations performed on that data structure.

`addAll`
: Assume a constant number of terms are added to a dataset that already contains _N_ terms.
: Assume that arrays can accommodate all the new terms without resizing.
: `Collections.sort` uses Timsort, an optimized version of merge sort with runtime in [O(_N_ log _N_)](https://drops.dagstuhl.de/opus/volltexte/2018/9467/) where _N_ is the size or length of the collection or array.

`allMatches`
: Consider the relationship between the added terms and the prefix. How many matches will we have if all the terms in the dataset begin with _A_ and the prefix is _A_? How many matches will we have if all the terms in the data set begin with _B_ and the prefix is _A_?

Assume all strings have a constant length. `TreeSet` is implemented using a red-black tree, which has the same asymptotic runtime as a left-leaning red-black tree or a 2-3 tree.

### Experimental analysis

{: .deliverable }
Compare the runtimes across all 4 implementations, including `TreeSetAutocomplete`. Are certain algorithms faster than others? Are there any disagreements between the runtimes you hypothesized in asymptotic analysis and the runtimes you observed in your experimental graphs? Describe how differences between the theoretical assumptions made for asymptotic analysis and the actual settings in `RuntimeExperiments` might explain those disagreements. For `allMatches`, describe how the default prefix affects the experimental analysis.

Run the provided `RuntimeExperiments` to compare the real-world runtime of each implementation. For each implementation, `RuntimeExperiments` constructs an empty instance and records the number of seconds to add _N_ terms to the dataset and then compute all matches for the `prefix` (such as _Sea_).

- The first column denotes _N_, the total number of terms.
- The second column denotes the average runtime for `addAll` in seconds.
- The third column denotes the average runtime for `allMatches` in seconds.

Copy-paste the text into plotting software such as [Desmos](https://www.desmos.com/calculator). Plot the runtimes of all 4 implementations on `addAll` and `allMatches`.

## Above and beyond

Optionally, apply what you've learned by working on these project ideas.

- **TrieSearchTreeAutocomplete.** If you enjoyed the challenge of implementing and adapting code for the TST and wanted to trie one more implementation, we've provided some resources and starter code for implementing a Trie as well.
- **More connections.**
    - **Predictive Text and Machine Learning.** Our `Autocomplete` implementation outputs all the matching terms from a pre-existing dataset, but machine learning can help us take into consideration other factors that make a predicted term more likely to be typed next.
    - **“Can Large Scale Information Access Systems Be Made Fair, Unbiased, and Transparent?”** -- a UW Data Science Seminar talk by Chirag Shah.

### Wordscapes

Wordscapes is an app that has multiple levels where you try to fill out a crossword puzzle using only the letters provided. Although a set of words can create several valid words, only a select few are considered to fill out the puzzle (perfect place to use `isTerm`). You can choose an implementation that you feel is most appropriate for the game and also create your own list of words to use for the crosswords you create.

### Count of range sum

> LeetCode 327. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)

Given an integer array `nums` and two integers `lower` and `upper`, return the *number of range sums that lie in `[lower, upper]` inclusive*. Range sum `S(i, j)` is defined as the sum of the elements in nums between indices `i` and `j` inclusive, where `i <= j`.

In order to build a solution for this LeetCode problem, it is essential to understand a data structure called a [Segment Tree](https://en.wikipedia.org/wiki/Segment_tree): a tree data structure for efficiently querying of values within intervals aka segments. Watch the video below in order to get a comprehensive understanding and overview of the segment tree data structure. The video covers everything you will need in order to come up with a Segment Tree approach solution for the LeetCode problem discussed above.

{% include youtube.html id="rc1HEFA3VwA" aspect_ratio="1920/1342" %}

### Trie implementation

During class, we compared the ternary search tree data structure to the trie data structure. Like a TST, a trie can also be used to implement the `Autocomplete` interface! Using this example [`TrieST`](https://github.com/kevin-wayne/algs4/blob/2a3d7f7a36d76fbf5222c26b3d71fcca85d82fc1/src/main/java/edu/princeton/cs/algs4/TrieST.java#L50-L267) class, identify and adapt relevant portions of the code to implement the `Autocomplete` interface. Most of the code in the [`TrieST`](https://github.com/kevin-wayne/algs4/blob/2a3d7f7a36d76fbf5222c26b3d71fcca85d82fc1/src/main/java/edu/princeton/cs/algs4/TrieST.java#L50-L267) class is not needed for implementing `Autocomplete`. Use the [Trie Visualization](https://www.cs.usfca.edu/~galles/visualization/Trie.html) to see what you expect your tree to look like!

### Algorithmic fairness

In your project, you may have wondered how search engines display their results, and which sources they chose to display first. In this talk, Chirag Shah expands on these ideas, explores how ranking of search results impact users, and presents some algorithms and statistical methods that can be used to increase fairness and diversity in search result rankings.

{% include youtube.html id="L2YhtGeQZvA" aspect_ratio="1920/804" %}
