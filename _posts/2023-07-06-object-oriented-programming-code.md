---
title: &title Account.java
description: *title
summary: *title
redirect_to: &redirect https://gist.github.com/kevinlin1/2995a18e43d288c11b43cfd26a47fc0c
canonical_url: *redirect
---

## Account.java

```java
// This code is written by the implementer.
// In addition to the compareTo function, we also write "implements Comparable<...>" to
//   indicate to Java that this class satisfies the contract for Comparable.
public class Account implements Comparable<Account> {
    // Private prevent other classes from accessing or modifying these fields
    private String holder;
    private double balance;

    // In Python, we write "self" to indicate the current object.
    // In Java, we write "this" to indicate the current object. Note that the parameter
    //   "this" is provided automatically by Java; don't add a parameter like in Python!
    public Account(String holder, double balance) {
        this.holder = holder;
        this.balance = balance;
    }

    // If this  < other, this.compareTo(other)  < 0
    // If this == other, this.compareTo(other) == 0
    // If this  > other, this.compareTo(other)  > 0
    public int compareTo(Account other) {
        return Double.compare(this.balance, other.balance);
    }

    // In Python, we can define __repr__ and __str__ to provide string representations
    // for objects. In Java, we define toString to do the same thing.
    public String toString() {
        return "Account(" + holder + ", $" + balance + ")";
    }

    // Public getter methods provide read-only access to private fields
    public double getBalance() {
        return this.balance;
    }
}
```

## MyFinancesApp.java

```java
import java.util.Arrays;

// This code is written by the client.
public class MyFinancesApp {
    // The use of "static" here indicates that the method is attached to the class.
    // Compare this to the non-static methods in the Account class, which are attached
    //   to particular instances of the Account class.
    public static void main(String[] args) {
        Account[] accounts = new Account[2];
        accounts[0] = new Account("Taylor", 7.50);
        accounts[1] = new Account("Rachel", 3.50);
        // Requires the Account class to implement Comparable<Account>
        Arrays.sort(accounts);
        // Arrays.toString(...) to get a meaningful string representation for an array
        System.out.println(Arrays.toString(accounts));
    }
}
```
