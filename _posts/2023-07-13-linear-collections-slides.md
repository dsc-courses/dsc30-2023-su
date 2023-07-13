---
title: &title Discussion Section 2 Slides
description: *title
summary: *title
redirect_to: &redirect https://docs.google.com/presentation/d/1_Bv25ZKqch1OfCujHHrfN8bkG6LMLtWY_6gy0AfDM_A/edit?usp=sharing
canonical_url: *redirect
---

DSC 30 Su23
Discussion 2
Some slide contents courtesy to Cassidy Lu

Agenda
Review
Access Modifier
Inheritance
Linear Collections
Linked Nodes - by Kevin
Debugger
Burning Questions

Access Modifier
Public: accessible everywhere.
Private: accessible only within the same class.
Protected: accessible within the same package and from subclasses.
Default (Package-Private): accessible within the same package.

Access Modifier Example

Inheritance 
‘Is - a’ relationship between subclass and parent class 
Subclass can have its own field and method that the parent class does not have 
Subclass can override parents class method 
Rules:
Method must have the same name as parent 
Method must have the same parameters as parent
Those two class have ‘is - a’ relationship

Exercise
Given a class Animal, we want to create a subclass Dog with its own features;
Go to IntelliJ

Interface
Abstract Class
Same
Cannot be instantiated 
Cannot be instantiated
Same
Blueprint
Blueprint
Difference
No objects, no constructor
No objects, Yes constructor
Difference
implements
extends
Difference
Abstract methods only
Abstract and non-abstract methods
Difference
Class can implement multiple interfaces
Subclass only extend one abstract class
Interface vs Abstract Class

Interface vs Abstract Class
Given a car interface, how may we implement a brand, and a specific model of a car, or your car?
Goes to IntelliJ

- Interface `Car` defines methods that a Car should implement.
- Abstract class `Tesla` provides a partial implementation of the `Car` interface.
- Concrete `ModelS` class extends `Tesla` abstract class and provides implementation of all the unimplemented methods.

Tangential Concept: Federated Gateway
Demystifying the Unusual Evolution of the Netflix API Architecture, ByteByteGo, July 2023
https://youtu.be/Uu32ggF-DWg

Direct Access of Microservices
At first, all the microservices are being directly exposed to the developer studios using them, and this is challenging in terms of management and efficiency.

Gateway Aggregation Layer
The gateway aggregation layer is an API gateway to bind all the services together and present a unified front to the clients. Intuitively and visually, this is very similar to the client vs implementer difference we have been seeing.

This setup works great for services spanning multiple services. However, it became a new monolith as teams grow and services multiply. So the right side circles grow bigger and bigger, and one single layer eventually becomes inefficient (again).

Federated Gateway
To remedy the inefficiency of the aggregation layer, Netflix introduced the federated gateway, allowing domain experts to manage the graph of their own product, while providing a unified efficient access point for each studio.

Graph here is the schema and functions in GraphQL. Gql is a query language enables UI to fetch what it needs in a single query. In this situation there is one single graphql gateway that fetches data from all the other APIs. If you are interested, GraphQL is open-source, and you can try to play with it if you are working on a data-intensive application. 

Linear Collection - Dynamic Arrays
Dynamic Arrays: Arrays that resize automatically.  
Not an original 
ArrayList in Java: Java's implementation of dynamic arrays.
Client vs Implementer: Client uses functionalities, Implementer builds and maintains them. 
Abstraction in Software Development: Hiding complex details, simplifying programming.
Structure of ArrayList class in Java: Extends AbstractList and implements List interface.
—— Dynamic Arrays
A dynamic array is not a built-in data structure in Java, but it is a crucial concept in understanding various data structures. It is an array with a big improvement: automatic resizing. When you are adding or removing elements to/from an array, and the array becomes full or empty, dynamic arrays can resize itself. It's as if a human stretched a rubber band to use its "dynamic" length as necessary. 
In the context of Java, ArrayList is a resizable array, also known as a dynamic array. The most significant advantage of the ArrayList class is that it can dynamically increase or decrease its capacity (the size of the array) as required. Hence, it is more flexible than traditional arrays in storing data.

—— Client vs Implementer
When a software product is being built, there are two perspectives - the client perspective and the implementer perspective. Clients use the methods provided by the implementer while being aware of the operation but not concerned about how the operation is performed. An implementer, on the other hand, focuses on how these methods are functioning. The implementer designs and maintains the program. In this slide, we will compare these two roles with respect to the ArrayList class in Java.

—— Abstraction
In the context of Java and ArrayList, abstraction can be seen as hiding the internal details of how an ArrayList resizes dynamically while providing the feature to add and remove elements. It allows the user (client) to use the ArrayList without worrying about the internal details (manner of resizing, memory allocation, etc.). It simplifies programming by breaking down complex tasks into simpler tasks, leading to efficient code and easier understanding.

—— Structure of the ArrayList class in Java

The ArrayList class in Java extends AbstractList and implements the List interface. It is part of Java's collection framework and provides us with dynamic arrays in Java. Along with inheritance from the AbstractList class, it also supports commonly used methods like add(), remove(), get(), size() and many more, enabling dynamic handling of data.

Asymptotic Analysis
1) Big O (O) Notation: Upper bound, worse case scenario
2) Big Ω (Omega) Notation:  Lower bound, best case scenario
3) Big Θ (Theta) Notation: tight bound, average (common) case
When we say an algorithm is Θ(n), it's both O(n) and Ω(n)

In other words, if we know an algorithm is Θ(n), we have a really good understanding of exactly how the algorithm will perform under any circumstances.
The Big O, also known as upper bound, is used to describe the worst-case scenario in the terms of time complexity or space complexity of an algorithm. It describes an upper limit on the time that an algorithm could take to execute. When we say an algorithm is O(n), it means that in the worst-case, the algorithm will take at most n operations.

The Big Ω, also known as the lower bound, is used to describe the best-case scenario in the terms of time complexity or space complexity of an algorithm. It gives a lower limit on the time that an algorithm needs to execute. When we say an algorithm is Ω(n), it means that in the best-case, the algorithm will take at least n operations to complete.

The Big Θ, known as the tight bound, is used when an algorithm's time complexity or space complexity is both Big O and Big Ω of the same function. It gives a tight bound on the time complexity or space complexity of an algorithm. When we say an algorithm is Θ(n), it's both O(n) and Ω(n), meaning that the algorithm will take at lease n operations and at most n operations to complete.

Asymptotic Analysis
X-axis: size of the input, N. Y-axis: number of steps that the algorithm will require for an N.
1) Big O (O) Notation: Upper bound, worse case scenario
2) Big Ω (Omega) Notation:  Lower bound, best case scenario
3) Big Θ (Theta) Notation: tight bound, average (common) case

When we say an algorithm is Θ(n), it's both O(n) and Ω(n)

Exercise
What is the best and worst-case runtime of this method?
There are two nested loops traversing the entire array, the worst-case and average-case time complexity is Θ(N²). 

The best-case scenario would occur when the very first pair adds up to the sum, which would be Θ(1). 

We generally focus on worst-case scenarios in runtime analysis, the overall runtime of this code is often considered to be Θ(N²).

Exercise: Asymptotic Analysis
What is the worst-case runtime? Give a big-Θ bound.
Worse-case runtime: O(m*n)
Reasoning: The outer loop iterates 'm' times (where 'm' is the number of elements in the input list) and for each string, the inner loop iterates 'n' times (where 'n' is the specified number of duplications). The 'add' operation for LinkedLists in Java, which is performed in each iteration, has a constant time complexity of O(1). Therefore, the overall time complexity becomes O(m*n).

Big-Θ bound: Θ(m*n)
Reasoning: In big-Θ notation, we give a tight bound on the runtime. Here, the lower and upper bound on the runtime of the function is the same, because for each of the 'm' strings, we're performing 'n' operations, regardless of the specific contents of the list or the value of 'n'. Therefore, the function has a time complexity of Θ(m*n).


Exercise: Asymptotic Analysis
What is the worst-case runtime? Give a big-Θ bound.
The Big-O runtime for the provided code block is O(log n).
For values of n that are 1000 or more, the input is continually halved in each recursive call, which results in a logarithmic time complexity, specifically O(log n).
For values of n less than 1000 but greater or equal to 10, the input is decreased by 2 in each recursive call. This would normally result in a linear time complexity, O(n), but since n in this section is capped at 1000, it effectively becomes a constant factor, making its contribution to the overall time complexity negligible compared to the O(log n) part.

Big-Theta: also log(n)
Reasoning: The first part of the function that continually divides the input by 2 until it is less than 1000 runs in logarithmic time, i.e., O(log n), as it reduces the size of the problem by a constant factor (in this case, 2) at each step. The second part that subtracts 2 until n is less than 10 also runs in linear time, i.e., O(n), because it subtracts a constant from n at each step. Therefore, the overall time complexity of the function is the maximum of these two parts. The larger time complexity term as n grows large would be the linear part when n is between 10 and 1000. So the overall complexity is O(n). But considering that n is capped at 1000 in the linear phase, it effectively becomes a constant, making the overall time complexity Θ(log n).


Exercise: Asymptotic Analysis
What is the worst-case runtime? Give a big-Θ bound.
Reasoning: The function is recursive, calling itself twice within each non-base case. Since the input decreases by 1 at each recursive call, it creates a binary tree of calls, where each node makes two recursive calls. In such a binary recursion tree, the total number of calls is exponential. This happens because each level in the tree has twice as many calls as the level above it. So, the worst-case runtime is proportional to the number of nodes in a binary tree of height n, which is O(2^n).
Big-Θ bound:
Reasoning: As explained, the recursion forms a binary tree structure and, hence, the runtime complexity is Θ(2^n). It's Θ (Theta) not O (Big O) because Θ signifies a tight bound - both lower and upper bound - and the number of function calls (which equates to the time complexity) is exactly 2^n, not merely upper-bounded by 2^n. This indicates that the time complexity of the function grows exponentially with the input, which is an exact bound, hence the usage of Θ(2^n).


`import` Syntax
Open VSCode and IntelliJ for comparison
