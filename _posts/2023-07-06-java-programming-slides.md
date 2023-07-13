---
title: &title Discussion Section 1 Slides
description: *title
summary: *title
redirect_to: &redirect https://docs.google.com/presentation/d/1Ezj_ZEM9SoCoPG83zonKhcPNaWauP-Yvl07qxgkZL6U/edit?usp=sharing
canonical_url: *redirect
---

DSC 30 Summer Discussion Session 1
Michelle, Evelyn, Mizuho, Wayne

Introduction
Welcome to the session!
About your TAs
Michelle
Evelyn
Mizuho
Wayne
Office Hour Schedules

Agenda Today
Basics of Java
Object-Oriented Programming
Burning Questions

Java Basics

Rules Review
Any Java code needs to be within a class.
For Java code to run, need to have main method.
This is different from Python, where having a if __name__ == "__main__" is another topic;
Need to use brackets most if not all of the time;
May see some occasions without them.

Rules Review
1. Before Java variables can be used, they must be declared
2. Java variable must have a specific type:
a. int, String, double, boolean etc
3. Types can never change.
4. Types are verified before the code even runs

Rules Review
1. Functions must be declared as part of a class in Java
a. A function that is inside a class is called a "method"
b. All functions in Java are methods
2. To define a function in Java we use "public static"
a. Other ways are later
3. All parameters must have a declared type
4. Return value of the function must have a declared type
5. Functions in Java return only one value

Java Array vs Python List
Java arrays are declared with a fixed size
Arrays also have to declared with the data type it is going to store 
example : `int[] myArray = new int[10];`  or 
`new int[] {1, 2, 3};`

Python lists can be dynamically resized
Can store more than one data type
Example: python_list = [1, 2, "three", True]


Java ArrayList
ArrayList is a data structure in Java that is used to store a collection of elements of the same type
A java class  found in java.util package
import java.util.*;
Grow dynamically and have more built-in methods. You do not have to declare with a fixed size.

Python List 
Java array
Java ArrayList
Can dynamically resize
Yes
No 
Yes
Need to declare type 
No 
Yes
Yes
syntax 
arr = [1,2,3]
int[] arr = new int[10];  // size 10
int[] arr = {1, 2, 3};
ArrayList<Integer> arr1 = new ArrayList<Integer>; 
Function to get the size 
len(arr)
arr.length; 
arr.size();
Access element
arr[0]    # first element
arr[0];      // first element
arr.get(0);


Java Loops
Java for-loop syntax :

Condition after ‘for’ need to be put into ( ) 
Need big bracket {} for the whole for loop body 



Java:
for (int i = 0; i < 10; i=i+1) {
    System.out.println(i);

Python:
for i in range(0, 10):
    print(i)



Java While Loop
Java:

int i = 0;
while (i < 10) {
System.out.println(i);
i++;
}
Python:

i = 0
    while i < 10:
  	print(i)
  	i += 1


Practice: Implementation
Write a method expandAndSquare that takes an integer n and returns an integer array. The array should contain the squares of all integers from 1 up to (including) n.
For example, if n is 5, the method should return the array [1, 4, 9, 16, 25], which are the squares of the numbers 1 to 5.
In addition, write a main method to call expandAndSquare, passing in an integer, and then print out the resulting array.

Practice: From Python to Java
import java.lang.Math;
Math.PI
Math.pow()
