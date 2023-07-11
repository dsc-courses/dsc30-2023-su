---
layout: minimal
title: Linear Collections
description: &desc Dynamic arrays, linked nodes, asymptotic analysis, and iterative sorts.
summary: *desc
nav_order: 1
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

## Dynamic Arrays
{: .d-inline-block }
{% include code.md lesson="Dynamic Arrays" %}
{: .d-inline }
{% include learning_objectives.md lesson="Dynamic Arrays" %}

By writing Python code that use lists to solve a problem, you've been a client of the list data type. But have you ever wondered how lists are implemented in Python? Someone had to write an implementation for the list data type. This week, we'll investigate several different ways to implement the list data type.

In software engineering, there's a distinction between being a **client** of a program versus being an **implementer** of a program. If you're working with a team of people on a software project, one person on your team might be responsible for writing the client while another person is responsible for writing the implementation. This distinction not only provides a blueprint for dividing a programming project into independent components, but it also allows for abstraction: the idea that we can change the implementation of the program without needing to rewrite all the client code too!

{: .hint }
What would programming without abstraction look like? Without abstraction, everyone who wrote a program using lists would have to go back and fix their code every time the list data type is updated in Python. There are millions of people using Python, and many of them use lists. Software development would grind to a halt if every update to Python required everyone who used Python to also make many changes so that their code would work with the updates.

In this course, we'll focus on being the implementer of data types like lists. How might we actually implement an `ArrayList` in Java? What design decisions were made to implement the `ArrayList`? By studying the implementation for `ArrayList`, we'll not only learn about how it works but also when and why we might choose to use an `ArrayList` in the future.

`ArrayList` is the first of many Java collections that we'll learn about in this course.

Collection
: An object that represents a group of zero or more objects called **elements**. Lists and dictionaries are two examples of collections.

In this lesson, we'll study two approaches to implement `ArrayList`. Consider the following code that shows us how an `ArrayList` changes over time as we add numbers to it.

```java
List<Integer> nums = new ArrayList<>();
nums.add(1); // [1]
nums.add(2); // [1, 2]
nums.add(3); // [1, 2, 3]
```

This example provides some insight into one possible approach. The brackets notation printed out after each example is what you get if you have exactly those values stored in an array! We can keep track of this array with a private field called `elementData`. Read the comments to see what's happening in each step of the constructor and the `add` method.

```java
// The use of E here indicates the type of elements in the ArrayList.
// Clients can say ArrayList<Integer> to represent a list of integers.
public class ArrayList<E> implements List<E> {
    private E[] elementData;

    public ArrayList() {
        // Create a zero-length array because it has exactly the
        // string representation that we want: []
        elementData = new E[0];
    }

    public void add(E element) {
        // Make space by creating a slightly longer new array.
        E[] newData = new E[elementData.length + 1];

        // Copy everything over from the old array to the new array.
        for (int i = 0; i < elementData.length; i += 1) {
            newData[i] = elementData[i];
        }

        // Add the element to the end of the new array.
        newData[newData.length - 1] = element;

        // Re-assign the private field to the new array.
        elementData = newData;
    }

    public int size() {
        return elementData.length;
    }

    public String toString() {
        return Arrays.toString(elementData);
    }
}
```

In this approach, our internal representation is exactly identical to the result that's printed-out. So we have a working `ArrayList`. Job well done, right?

<details markdown="block">
<summary>When running this code, clients complain that it's too slow. What could be causing the slowness?</summary>

The problem is that it takes too long to make a new `elementData` array every time we need to add just 1 element. Because arrays in Java have a fixed length, there's not a simple way to make space for another element except by creating a brand new array of the desired length.

While this code works fine when the lists are small, even today's fast computers and smartphones will struggle with lists that have thousands of elements. Imagine scrolling through your feed in an app and waiting a longer and longer time to load each element; as the number of elements increases, so too does the time it takes to copy everything over.
</details>

{: .hint }
> Optionally, open the preloaded Java Tutor environment and see how it takes 45 steps just to add the numbers 1, 2, 3 into an empty list! This approach takes a lot of time!
>
> [Java Tutor](https://pythontutor.com/render.html#code=public%20class%20ArrayList%3CE%3E%20%7B%0A%20%20%20%20private%20E%5B%5D%20elementData%3B%0A%0A%20%20%20%20public%20ArrayList%28%29%20%7B%0A%20%20%20%20%20%20%20%20//%20Create%20a%20zero-length%20array%20because%20it%20has%20exactly%20the%0A%20%20%20%20%20%20%20%20//%20string%20representation%20that%20we%20want%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20elementData%20%3D%20%28E%5B%5D%29%20new%20Object%5B0%5D%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20void%20add%28E%20element%29%20%7B%0A%20%20%20%20%20%20%20%20//%20Make%20space%20by%20creating%20a%20slightly%20longer%20new%20array.%0A%20%20%20%20%20%20%20%20E%5B%5D%20newData%20%3D%20%28E%5B%5D%29%20new%20Object%5BelementData.length%20%2B%201%5D%3B%0A%0A%20%20%20%20%20%20%20%20//%20Copy%20everything%20over%20from%20the%20old%20array%20to%20the%20new%20array.%0A%20%20%20%20%20%20%20%20for%20%28int%20i%20%3D%200%3B%20i%20%3C%20elementData.length%3B%20i%20%2B%3D%201%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20newData%5Bi%5D%20%3D%20elementData%5Bi%5D%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20//%20Add%20the%20element%20to%20the%20end%20of%20the%20new%20array.%0A%20%20%20%20%20%20%20%20newData%5BelementData.length%5D%20%3D%20element%3B%0A%0A%20%20%20%20%20%20%20%20//%20Re-assign%20the%20private%20field%20to%20the%20new%20array.%0A%20%20%20%20%20%20%20%20elementData%20%3D%20newData%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20int%20size%28%29%20%7B%0A%20%20%20%20%20%20%20%20return%20elementData.length%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20ArrayList%3CInteger%3E%20list%20%3D%20new%20ArrayList%3C%3E%28%29%3B%0A%20%20%20%20%20%20%20%20list.add%281%29%3B%0A%20%20%20%20%20%20%20%20list.add%282%29%3B%0A%20%20%20%20%20%20%20%20list.add%283%29%3B%0A%20%20%20%20%7D%0A%7D&cumulative=false&curInstr=1&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false){: .btn .btn-purple target="_blank" }

### Designing an abstraction

To address this inefficiency, we can introduce a second field called `size`.

```java
public class ArrayList<E> implements List<E> {
    private E[] elementData;
    private int size;

    public ArrayList() {
        // Create a length-10 array to store elements.
        elementData = new E[10];

        // Assign size to 0 for an initially-empty list.
        size = 0;
    }

    public void add(E element) {
        // Add the element to the next space in the array.
        elementData[size] = element;

        // Increment the size to indicate the list has grown.
        size += 1;
    }

    public int size() {
        // Return the current size of the list.
        return size;
    }

    public String toString() {
        // To be discussed later.
    }
}
```

Initially, `size` is 0. But, when we call `add`, the `size` is incremented by 1 to reflect the new element added to the array. The `size` tells us which values in the array are actually in-use by the list. Even though `elementData` has space for 10 elements, a new `ArrayList` should function as if it were empty. The `size` variable helps maintain the appearance of a dynamically-resizing list by treating only the first `size`-number of elements as actually in the list.

{: .hint }
> Open the preloaded Java Tutor environment and step through to see how the `size` field changes to match the actual number of elements added into the list. Note that this version only takes 28 steps to add the numbers 1, 2, 3. The difference will only become more appreciable as the number of elements increases.
>
> [Java Tutor](https://pythontutor.com/render.html#code=public%20class%20ArrayList%3CE%3E%20%7B%0A%20%20%20%20private%20E%5B%5D%20elementData%3B%0A%20%20%20%20private%20int%20size%3B%0A%0A%20%20%20%20public%20ArrayList%28%29%20%7B%0A%20%20%20%20%20%20%20%20//%20Create%20a%20length-10%20array%20to%20store%20elements.%0A%20%20%20%20%20%20%20%20elementData%20%3D%20%28E%5B%5D%29%20new%20Object%5B10%5D%3B%0A%0A%20%20%20%20%20%20%20%20//%20Assign%20size%20to%200%20for%20an%20initially-empty%20list.%0A%20%20%20%20%20%20%20%20size%20%3D%200%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20void%20add%28E%20element%29%20%7B%0A%20%20%20%20%20%20%20%20//%20Add%20the%20element%20to%20the%20next%20space%20in%20the%20array.%0A%20%20%20%20%20%20%20%20elementData%5Bsize%5D%20%3D%20element%3B%0A%0A%20%20%20%20%20%20%20%20//%20Increment%20the%20size%20to%20indicate%20the%20list%20has%20grown.%0A%20%20%20%20%20%20%20%20size%20%2B%3D%201%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20int%20size%28%29%20%7B%0A%20%20%20%20%20%20%20%20//%20Return%20the%20current%20size%20of%20the%20list.%0A%20%20%20%20%20%20%20%20return%20size%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20ArrayList%3CInteger%3E%20list%20%3D%20new%20ArrayList%3C%3E%28%29%3B%0A%20%20%20%20%20%20%20%20list.add%281%29%3B%0A%20%20%20%20%20%20%20%20list.add%282%29%3B%0A%20%20%20%20%20%20%20%20list.add%283%29%3B%0A%20%20%20%20%7D%0A%7D&cumulative=false&curInstr=1&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false){: .btn .btn-purple target="_blank" }

This approach avoids creating a new array each time we need to add an element, though this particular implementation is limited to just 10 elements. The actual Java implementation of the `ArrayList` class contains a little more code to create a new array double the current capacity when more space is needed, which is why we call this data structure the **dynamic array**.

<details markdown="block">
<summary>Why would it be incorrect to implement size by returning the length of elementData?</summary>

In this second approach, the `elementData` is no longer exactly what the client sees, so the length of `elementData` is not the same as the size of the list. Instead, the `elementData` array will usually contain a lot of empty spaces that won't be filled until the client adds elements to the list.
</details>

## Linked Nodes
{: .d-inline-block }
{% include code.md lesson="Linked Nodes" %}
{: .d-inline }
{% include learning_objectives.md lesson="Linked Nodes" %}

Dynamic arrays aren't the only way to implement lists. In fact, for some methods, they can actually be quite slow. Lists not only allow adding elements, but also removing elements by a given index. How might we implement the `remove(int index)` method for the above `ArrayList` class?

```java
// This method also returns the element that was removed.
public E remove(int index) {
    // Return null if the index is not in the given list.
    if (index >= size) {
        return null;
    }

    // Hold onto the element so that it can be returned later.
    E result = elementData[index];

    // Shift all following elements left by 1 position, thereby
    // removing the element at the given index.
    for (int i = index + 1; i < size; i += 1) {
        elementData[i - 1] = elementData[i];
    }

    // Decrement the size to indicate the list has shrunk.
    size -= 1;

    // Return the saved element.
    return result;
}
```

<details markdown="block">
<summary>Why do we need to shift all the following elements down by 1 spot?</summary>

We need to shift all the following elements down by 1 to maintain the `ArrayList` class invariant. The i-th index in the array must hold the i-th value in the list; we can't have any gaps in the array! If we didn't shift all the following elements down by 1, methods like `toString` would no longer work.
</details>

Shifting elements can take a lot of time: if we want to remove the first element in an `ArrayList`, every other element needs to move over too. **Linked nodes** are an alternative to arrays for representing an ordered sequence of elements. Whereas arrays store all the elements together in memory, each linked node contains its own element and a "link" or reference to the next node. For example, our `LinkedList` class can represent linked nodes with a `Node` class consisting of two fields:

- The value of the node's element as the `value` field.
- A reference to the `next` element in the list.

```java
public class Node<E> {
    private final E value;
    private Node<E> next;

    public Node(E value) {
        // Calls the other constructor to set the next field to null,
        // meaning that there is no next linked node in the sequence.
        this(value, null);
    }

    public Node(E value, Node<E> next) {
        this.value = value;
        this.next = next;
    }
}
```

It might seem strange for the `Node` class to contain a field referencing itself, but this is allowed in Java. We use the `next` field to access the node in the list after the current one. Remember that this is only a reference and does not store the actual object itself. A `null` `next` field indicates the end of a sequence of linked nodes.

The `value` field is marked `final` to prevent changes to `value` after the `Node` is created. In this course, we focus our study of linked nodes on changing only the references to `next`. For example, the following code represents the linked list `[1, 2, 3]`.

```java
Node<Integer> n1 = new Node<>(1);
Node<Integer> n3 = new Node<>(3);
Node<Integer> n2 = new Node<>(2, n3);
n1.next = n2;
```

<details markdown="block">
<summary>What is the value of n1.next.next.value?</summary>

Let's reason about this one subexpression at a time.

1. `n1` refers to the node storing the value 1.
1. `n1.next` refers to the node storing the value 2, or `n2`.
1. `n1.next.next` refers to the node storing the value 3, or `n3`.
1. `n1.next.next.value` evaluates to 3, the value stored in `n3`.
</details>

{: .hint }
> Open the preloaded Java Tutor environment to visualize this code one step at a time. Before each time you press **Next >**, predict what will change in the visualization.
>
> [Java Tutor](https://pythontutor.com/render.html#code=public%20class%20Node%3CE%3E%20%7B%0A%20%20%20%20private%20final%20E%20value%3B%0A%20%20%20%20private%20Node%3CE%3E%20next%3B%0A%0A%20%20%20%20public%20Node%28E%20value%29%20%7B%0A%20%20%20%20%20%20%20%20this%28value,%20null%29%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20Node%28E%20value,%20Node%3CE%3E%20next%29%20%7B%0A%20%20%20%20%20%20%20%20this.value%20%3D%20value%3B%0A%20%20%20%20%20%20%20%20this.next%20%3D%20next%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20Node%3CInteger%3E%20n1%20%3D%20new%20Node%3C%3E%281%29%3B%0A%20%20%20%20%20%20%20%20Node%3CInteger%3E%20n3%20%3D%20new%20Node%3C%3E%283%29%3B%0A%20%20%20%20%20%20%20%20Node%3CInteger%3E%20n2%20%3D%20new%20Node%3C%3E%282,%20n3%29%3B%0A%20%20%20%20%20%20%20%20n1.next%20%3D%20n2%3B%0A%0A%20%20%20%20%20%20%20%20Node%3CInteger%3E%20temp%20%3D%20n1.next.next%3B%0A%20%20%20%20%20%20%20%20System.out.println%28temp.value%29%3B%0A%20%20%20%20%7D%0A%7D&cumulative=false&curInstr=1&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false){: .btn .btn-purple target="_blank" }

### Encapsulation

Where do we write the `add`, `remove`, `size`, and `toString` methods? If each `Node` stores a single element's value, how do we refer to all the elements? We need a `LinkedList` class that **encapsulates** all the `Node` objects by bundling together all the data with the methods for operating on all of it.

```java
public class LinkedList<E> implements List<E> {
    // Reference to the first node in the sequence
    private Node front;

    public void add(E element) {
        if (front == null) {
            // If the list is empty, assign the new node to the front
            front = new Node(element);
        } else {
            // Otherwise, add the element to the end of the list
            Node current = front;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new Node(element);
        }
    }

    public E remove(int index) {
        // To be discussed later.
    }

    public int size() {
        // Count the number of nodes starting from front
        int result = 0;
        Node current = front;
        while (current != null) {
            size += 1;
            current = current.next;
        }
        return result;
    }

    public String toString() {
        // To be discussed later.
    }

    private class Node {
        private final E value;
        private Node<E> next;

        public Node(E value) {
            this(value, null);
        }

        public Node(E value, Node next) {
            this.value = value;
            this.next = next;
        }
    }
}
```

{: .hint }
Java allows classes to be nested within other classes. In this case, we say that `Node` is an **inner class** of `LinkedList`. Note that the `<E>` generic type does not have to be repeated in the inner class because each `Node` is associated with its encapsulating `LinkedList`. We also changed the `Node` access modifier from `public` to `private` to indicate that `Node` is only relevant to the implementer of `LinkedList`.

Encapsulation doesn't only describe the relationship between linked lists and their linked nodes. It can also be used to describe the relationship between array lists and their underlying arrays. Or really any class whose implementation details are hidden from clients---which is just about any program that we will write in this course! Encapsulation is the most common way to define an abstraction in data structures and algorithms.

## Asymptotic Analysis

{% include learning_objectives.md lesson="Asymptotic Analysis" %}

In your previous programming experience, we focused on **correctness** and **maintainability**---code that produces the expected output given a particular input, and code that is easy to improve or extend in the future. But, as you've already seen in the preceding lessons, it's also important that we design programs with a focus on **efficiency** too. Computing and data scientists want to quantify the efficiency of programs so that we can compare different approaches and select the most efficient one.

**Experimental runtime analysis** is a method for empirically measuring how long a _program_ takes to run by recording exactly how long it takes to run on different inputs. Experimental analysis is particularly helpful for identifying and addressing performance issues by recording exactly which operations are contributing to high runtime. This data can be used to create graphs that can be used to plot the runtime as the input to the program grows larger and larger.

But what if we want to _predict_ the runtime of a program _before_ writing any code? What other methods can we use to help us design the specification to a program so that it meets our performance needs?

**Asymptotic runtime analysis** is the process of predicting the amount of time an _algorithm_ will take to run on large inputs. Asymptotic analysis focuses on analyzing **algorithms**, the concepts underlying how programs work. Compared to experimental analysis, which focuses on empirical measurement, asymptotic analysis focuses on reasoning and logic to analyze the runtime of an algorithm.

{: .hint }
Computer scientists specifically focus on large inputs (as the size of the input approaches infinity, or its _asymptote_) rather than small inputs because larger inputs more clearly demonstrate differences in efficiency. For example, the performance issue in `ArrayListDeque` only appears when a large number of web pages have been stored in browser history; `ArrayListDeque` is quite fast when only a few web pages have been stored. The differences in runtime become more appreciable when we're working with a very large number of elements.

The goal of asymptotic runtime analysis is to produce a (1) _predictive_ and (2) _easy-to-compare_ description of the running time of an algorithm. Consider the `indexOf` method, which returns the index of a `target` number in an `int[] A` or -1 if `target` is not in the array.

```java
static int indexOf(int[] A, int target) {
    for (int i = 0; i < A.length; i += 1) {
        if (A[i] == target) {
            return i;
        }
    }
    return -1;
}
```

The behavior of the `indexOf` algorithm depends on the input values.

1. Initialize an integer index counter, `i`.
1. Loop over the length of the array. On each iteration, if the `A[i]` is the same as the given `target`, return the current index. Otherwise, increment `i`.
1. If no elements in the array are the same as the given `target`, return -1.

### Model the number of steps

**How many steps (or operations) are needed to run the algorithm?** Operations include assignments, boolean evaluations, arithmetic operations, method calls, etc.

Let's take a look at these two assignment statements to illustrate how to count steps.

```java
int a = 4 * 6;
int b = 9 * (a - 24) / (8 - 7);
```

1. The first assignment to `a` takes one step (1) to compute `4 * 6` and another step (2) to assign the result to the variable `a`.
1. The second assignment to `b` takes one step (1) to compute `a - 24`, another step (2) to compute `9 * (a - 24)`, another step (3) to compute `8 - 7`, another step (4) to compute `9 * (a - 24) / (8 - 7)`, and a final step (5) to assign the result to the variable `b`.

In total, these two lines of code take **7 steps** for the computer to run. The first goal of runtime analysis was to produce a _predictive_ description of the runtime of an algorithm, but in this example, there's not much to predict: the two assignment statements always take precisely 7 steps.

`indexOf` is different: it has a loop and an `if` statement that depends on the values in the `A` compared to the `target`. **How do we model the number of steps it takes to run an algorithm _in general_?** Here are two factors that can affect the number of steps to compute `indexOf`.

1. The length of the `A`.
1. The values of each `int` in the `A` compared to the value of the `target`.

The runtime of many algorithms is greatly affected by the size of the input. A small array typically takes little time to run regardless of whether the algorithm is fast or slow. Where we really start to appreciate the differences in runtime is when the array is very large. Therefore, when computer scientists talk about runtime analysis, the default assumption is asymptotic analysis.

**Asymptotic analysis** is a way of evaluating the efficiency of an algorithm on large inputs. The choice for the "large input" is called the **asymptotic variable**. For `indexOf`, the length of the `A` can be the asymptotic variable.

{: .hint }
In this course, we'll usually tell you the asymptotic variable using the phrases, "with respect to" or "in terms of". Asymptotic analysis is defined in terms of the asymptotic variable, so make sure to confirm the asymptotic variable before analyzing a program.

But we also know that the runtime depends on other factors such as the relationship between the `target` and the numbers in the `A`. **Case analysis** is a way to account for variation in the model based on interactions between other factors besides the asymptotic variable.

Best case `indexOf`
: The **best case** (most efficient or fastest) occurs when the `target` is the same as the `A[0]`---even when the array is very large.

Worst case `indexOf`
: The **worst case** (least efficient or slowest) occurs when the `target` is the same as the last element in the `A` or not even in the `A` at all.

{: .hint }
All other factors not covered by the asymptotic variable are considered in case analysis. In this course, we'll focus only on the best and worst case: take all the remaining factors that you have at your disposal and choose a situation that produces the fastest (best case) or the slowest (worst case) runtime.

We now have a predictive model for the number of steps (a proxy for the time) it takes to run an algorithm. But this model is not easy to compare. To communicate our model, we'll introduce some new vocabulary used to express asymptotic analysis.

### Formalize the runtime model

**How do we express our model to others so that we can communicate results?**

The **order of growth** relates the size of the input to the time that it takes to run the algorithm on that input. Often, we'll use a mathematical variable like _N_ to refer to the asymptotic variable.

Best case `indexOf` orders of growth
: In the **best case**, the order of growth for the runtime of `indexOf` is **constant**.

Worst case `indexOf` orders of growth
: In the **worst case**, the order of growth for the runtime of `indexOf` is **linear** with respect to _N_, the length of `A`.

{: .hint }
When the order of growth is constant, we don't specify "with respect to _N_" because constant order of growth implies that the runtime does not scale with _N_.

Orders of growth help us compare runtime in terms of words like _constant_, _linear_, and _quadratic_. In practice, though, you'll rarely see computer scientists writing out the full orders of growth sentence. Instead, computer scientists communicate orders of growth using asymptotic notation.

### Asymptotic notation

Asymptotic notation provides precise, mathematical shorthand for orders of growth.

{% include youtube.html id="CGdubALgQw4" start="4" end="240" aspect_ratio="16/9" %}

Consider this graph that depicts three functions of _N_.

{% include desmos.html id="apxggji6kz" aspect_ratio="2" %}

<details markdown="block">
<summary>What do the x-axis and the y-axis represent in the graph?</summary>

The x-axis represents the size of the input, _N_. The y-axis represents the model's prediction for the number of steps that the algorithm will require for an input of a given size.
</details>

The three functions depicted in the graph are:

1. The top blue function depicts 5_N_<sup>2</sup>.
1. The middle red function depicts 40 sin(_N_) + 4_N_<sup>2</sup>.
1. The bottom green function depicts 3_N_<sup>2</sup>.

The shaded area represents the range between the top and bottom functions.

This graph provides a visual demonstration of the big-theta definition. We can say that the function 40 sin(_N_) + 4_N_<sup>2</sup> _is in_ Θ(_N_<sup>2</sup>) because because it is bounded below by the green function 3_N_<sup>2</sup> (_k_<sub>1</sub> = 3) and bounded above by the blue function 5_N_<sup>2</sup> (_k_<sub>2</sub> = 5).

{: .hint }
The red function is only "squeezed" between the blue and green functions for _N_ > 6. This is why big-theta is an _asymptotic notation_: its logic applies to all values of _N_ greater than some initial _N_<sub>0</sub>. When we make a claim about asymptotic runtime, we can't just pick _N_ = 1 billion. We have to make sure that our analysis holds true for all possible "large inputs" _N_.

During class, we'll also introduce two other asymptotic notation called big-oh and big-omega.

### Duplicate finding case study

`dup1` is an algorithm for determining if an array `A` contains any duplicate values by checking every possible pair of values until a duplicate is found. We've chosen `N = A.length` as the asymptotic variable.

```java
boolean dup1(int[] A) {
    int N = A.length;
    for (int i = 0; i < N; i += 1)
        for (int j = i + 1; j < N; j += 1)
            if (A[i] == A[j])
                return true;
    return false;
}
```

Model the number of steps
: <details markdown="block">
  <summary>Describe a best case situation for the runtime.</summary>

  A very long array where the first pair of elements `A[0]` and `A[1]` are duplicates!
  </details>

  Suppose your teammate answer the above question:

  > The best case occurs when `A.length` is 2, so we only need to compare `A[0]` to `A[1]`.

  <details markdown="block">
  <summary>Explain why this answer is not an asymptotic analysis.</summary>

  Although your teammate makes a good observation about the runtime of the program, asymptotic analysis focuses on large inputs. We can't use an empty, 1-element, or 2-element array as an example.
  </details>

Formalize the runtime model
: In the **best case**, the order of growth for the runtime of `dup1` is **constant**.
: In the **worst case**, the order of growth for the runtime of `dup1` is **quadratic** with respect to _N_, the length of `A`.

{: .hint }
In the worst case, there are no duplicates in `A`. If we need to go through all the iterations of the nested for loop, then on the first iteration `i = 0`, the inner loop runs from `j = 1` to `j = N`; then from `j = 2` to `j = N`; then from `j = 3` to `j = N`; and so forth. In total, we end up checking `A[i] == A[j]` exactly (_N_ - 1) + (_N_ - 2) + ... + 3 + 2 + 1 times. [The sum of this series](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF) is about _N_<sup>2</sup> / 2, which is quadratic.

Apply asymptotic notation
: In the best case, the runtime of `dup1` is in Θ(1).
: In the worst case, the runtime of `dup1` is in Θ(_N_<sup>2</sup>) with respect to _N_, the length of `A`.

## Iterative Sorts
{: .d-inline-block }
{% include code.md lesson="Iterative Sorts" %}
{: .d-inline }
{% include learning_objectives.md lesson="Iterative Sorts" %}

There are different ways to find duplicates in an array. `dup1` represents one way to solve the problem: exhaustively check all possible pairs of elements and return whether a duplicate exists among them. In the worst case, `dup1` required quadratic time to return an answer.

How long might a quadratic time algorithm need to run?

- When _N_ = 10, less than 1 second.
- When _N_ = 100, less than 1 second.
- When _N_ = 1,000, about 1 second.
- When _N_ = 10,000, **about 2 minutes**.
- When _N_ = 100,000, **about 3 hours**.
- When _N_ = 1,000,000, **about 12 days**.

<details markdown="block">
<summary>How long might a linear time algorithm need to run?</summary>

- When _N_ = 10, less than 1 second.
- When _N_ = 100, less than 1 second.
- When _N_ = 1,000, less than 1 second.
- When _N_ = 10,000, **less than 1 second**.
- When _N_ = 100,000, **less than 1 second**.
- When _N_ = 1,000,000, **about 1 second**.
</details>

What can we learn from these findings?

Many algorithms (including all algorithms in this course) are fast on tiny inputs when _N_ < 1000
: While there may be situations where we care about the efficiency of algorithms processing tiny inputs, these differences are often unnoticeable. When they are noticeable, they may be caused by unanticipated changes in your computer's workload.

Differences become more appreciable when _inefficient algorithms_ run on inputs of size _N_ > 1000
: Whether the runtime is tolerable depends on the problem. An inefficient algorithm may be acceptable if we only need to run it infrequently, the size of the input is not particularly big, or the amount of processing power can make up for the time.
: Therefore, efficient algorithms are often needed to process even moderately-large data frequently.

However, if our array is _sorted_, then returning whether there are duplicates in the array takes much less time in the worst case. In a sorted array, all duplicate elements must be stored right beside each other. It turns out that a significant number of problems in computer science get a lot easier and a lot more efficient to solve if we can first sort our data. Without sorting, many of the systems and software that we have today would not be possible purely because things (like duplicate finding) would take far too long to run.

But data doesn't always come to us in a pre-sorted form. How do we sort---rearrange into order---an array of elements?

{% include youtube.html id="i2bdV3WfulE" start="618" end="1099" aspect_ratio="16/9" %}

### Sorting definitions

**Sorting** is the problem of rearranging a sequence of elements into non-decreasing order. How do we define the order of elements? For numbers, smaller values appear before larger values in non-decreasing order. But sorting objects are a bit more complicated.

For objects, the implementer of the class is responsible for defining the ordering relation. Just as numbers have a natural definition for less-than, equal-to, and greater-than relationships, the class's `compareTo` method provides a way to specify the relative order of any two elements of that class. For example, if we have emails where each `Email` object has a date, sender, and text, the `compareTo` method could be defined like an inbox where emails are sorted only by date.

```java
public int compareTo(Email other) {
    // Compare the date of this email to the date of the other email.
    return this.date.compareTo(other.date);
}
```

In other situations like searching for all the emails from a particular sender (ignoring date), it might be more helpful to sort by the sender primarily and the text of their message secondarily.

```java
public int compareTo(Email other) {
    // Compare the sender of this email to the sender of the other email.
    int cmp = this.sender.compareTo(other.sender);
    if (cmp != 0) {
        // If the senders are different, return the difference.
        return cmp;
    }
    // Otherwise, the senders are the same, so compare by text content.
    return this.text.compareTo(other.text);
}
```

<details markdown="block">
<summary>In the email example, where is the compareTo method defined?</summary>

The `compareTo` method for the `Email` class is defined inside the `Email` class by the people who wrote the class. When we talk about sorting algorithms, the author of the sorting algorithm has no idea the exact objects that they're sorting or the ordering relation. A sorting algorithm just calls `compareTo` to determine whether an object should appear before or after another object. Sorting involves repeatedly asking, "Is this object less-than, equal-to, or greater-than this other object?" by repeatedly calling the `compareTo` method.
</details>

A sort is **stable** if it preserves the original order of equivalent keys. Stability can affect the final sorting output when there are two or more elements considered equal according to the ordering relation. For basic data types like numbers, stability doesn't matter: any two numbers that share the same numeric value are just the same either way. But for objects like emails, stability can make a big difference. Imagine sorting emails by sender name: you'll often receive many emails from the same sender, so a stable sort for emails will sort by sender name _and_, for each sender name, maintain the relative order of emails in the original order. An unstable sort doesn't guarantee the original order of emails for each person.

So how do we sort an array? In this lesson, we'll introduce two iterative sorting algorithms: selection sort and insertion sort.

{% include youtube.html id="NLZHTAXcfpM" aspect_ratio="16/9" %}

### Selection sort

In each iteration, **selection sort** selects the _smallest unsorted element_ and swaps it into its sorted place.

Selection sort has an important invariant that was introduced called **iterative improvement**. We keep track of a _sorted elements_ portion at the front of the array and gradually grow the number of _sorted elements_. Once the _sorted elements_ portion reaches the full length of the array, we're done sorting the array!

{% include slides.html src="https://www.cs.princeton.edu/courses/archive/spring23/cos226/demos/21DemoSelectionSort/index.html" aspect_ratio="16/9" %}

<details markdown="block">
<summary>Give an asymptotic runtime analysis of selection sort with respect to the number of elements.</summary>

First, consider if there are any other factors besides number of elements (the asymptotic variable) that could require further case analysis. In selection sort, there are no other factors that affect the runtime because we always need to scan across the entire _unsorted elements_ portion of the array to find the _smallest unsorted element_.

The runtime for selection sort is similar to the runtime for `dup1`, which we described using the summation (_N_ - 1) + (_N_ - 2) + ... + 3 + 2 + 1, which we determined to have a quadratic order of growth. In other words, we can say that selection sort is in Θ(_N_<sup>2</sup>).
</details>

### Insertion sort

In each iteration, **insertion sort** inserts the _next unsorted element_ into the _sorted elements_ portion at the front of the array by swapping it left one index at a time until it is in its correct position. Like selection sort, insertion sort is also an iterative improvement sorting algorithm.

{% include slides.html src="https://www.cs.princeton.edu/courses/archive/spring23/cos226/demos/21DemoInsertionSort/index.html" aspect_ratio="16/9" %}

<details markdown="block">
<summary>Give an asymptotic runtime analysis of insertion sort with respect to the number of elements.</summary>

Unlike selection sort, insertion sort is affected by the order of elements. When the input is _already sorted_, insertion sort has a linear order of growth because there are no elements that need to be swapped to the left. On the other hand, given a reverse-sorted input, insertion sort needs to perform a very large number of swaps to move each _next unsorted element_ into its correct position. The summation is exactly the same as `dup1` and selection sort, which we determined to have a quadratic order of growth.
</details>

{: .hint }
> Open the VisuAlgo module to visualize sorting algorithms. Press `Esc` to exit the e-Lecture Mode, and choose either **SEL** or **INS** from the top navigation bar to switch to selection sort or insertion sort respectively. Run the sorting algorithm using **Sort** from the bottom left menu.
>
> [Sorting Visualization](https://visualgo.net/en/sorting){: .btn .btn-purple target="_blank" }
