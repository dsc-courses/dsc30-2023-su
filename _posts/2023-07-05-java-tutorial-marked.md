---
title: &title Java Tutorial Marked
description: *title
summary: *title
redirect_to: &redirect https://drive.google.com/file/d/1lno4sLWeX5iY6MwcfZWbUUCJlUNHKeGF/view?usp=drive_link
canonical_url: *redirect
---

Basic rules -1: Demo
All code in Java must be part of a class
For code to run you need to have 
public static void main(String[] args)
We mark the beginning and end of segments of code using  {  and  }
All statements in Java must end in a semi-colon: ;

Basic rules - 2
Before Java variables can be used, they must be declared
Java variable must have a specific type: 
int, String, double, boolean etc
Types can never change
Types are verified before the code even runs
Big difference between Python and Java

Defining Functions. Basic Rules
Functions must be declared as part of a class in Java
A function that is inside a class is called a “method”
All functions in Java are methods
To define a function in Java we use “public static”
Other ways are later
All parameters must have a declared type
Return value of the function must have a declared type
Functions in Java return only one value

Discussion Question - 1
How many errors can you find in the code on the right?

A: 1
B: 2
C: 3
D: 4
E: 5 or more

Functions
# defining functionsdef smaller(x, y): 	""" Returns smaller of the two """ 	if (x < y): 		return x 	return y print(smaller(3, 4))

For loop in java

For loop in java
What is the output? *

A: 1, 3, 5, 7, 9
B: 1, 3, 5, 7, 9, 11
C: 1, 4, 7, 10
D: 1, 4, 7
E: None of the above


* Assume that the output does not have commas and each number is on a new line. 

Short practice
Write a function expand that takes an integer and returns an integer array with numbers 1, 2.. up to (including) the parameter:

Example: 
 Input: 5
 Output: [1, 2, 3, 4, 5]
