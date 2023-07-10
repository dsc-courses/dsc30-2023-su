---
title: &title MyFinancesApp
description: *title
summary: *title
redirect_to: &redirect https://colab.research.google.com/drive/1_-UR_advg-9J4o1WwWBvawPfFv0ZEdpm?usp=sharing
canonical_url: *redirect
---

# -*- coding: utf-8 -*-
"""MyFinancesApp.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1_-UR_advg-9J4o1WwWBvawPfFv0ZEdpm
"""

import pandas as pd

"""# Data-Oriented Programming

Pandas is an example of **data-oriented programming**: a programming paradigm focused on expressing computations as transformations on dataframes (or other collections of data).
"""

accounts = pd.DataFrame().assign(
    Holder  = ["Taylor", "Rachel"],
    Balance = [    7.50,     3.50],
)
accounts

accounts.sort_values(by="Balance")

"""# Object-Oriented Programming

We can also express this same computation as an object-oriented program by defining a class and creating a new instance for each account. In **object-oriented programming** (OOP), methods are bundled together or **encapsulated** with data to form an abstraction.
"""

# This code is written by one person called the "implementer".

class Account:
    def __init__(self, holder, balance):
        self.holder = holder
        self.balance = balance

    def __repr__(self):
        return f"Account({self.holder}, ${self.balance:.2f})"

# This code is written by another person called the "client".

accounts = [
    Account("Taylor", 7.50),
    Account("Rachel", 3.50),
]
accounts

"""## Objects as abstractions

To sort a list of accounts, we need to access each account's balance field.
"""

# This code is also written by the client, but...

sorted(accounts, key=lambda account: account.balance)

"""Although this call to `sorted` produces a valid result, it violates the principle of abstraction. **Abstractions** are designed to hide all internal implementation details from clients. Clients should not directly access (or, worse, modify!) a data field stored within an object.

In the case of a simple "data class" like `Balance`, it's not clear why this absolutist approach to abstraction is necessary. But, as our implementations grow more complex, it's recommended to use methods to manage access to any data in an object.
"""

# This code is written by one person called the "implementer".

class Account:
    def __init__(self, holder, balance):
        self.holder = holder
        self.balance = balance

    def __repr__(self):
        return f"Account({self.holder}, ${self.balance:.2f})"

    def __lt__(self, other):
        """Returns true if and only if self < other."""
        # Switch responsibility for defining from client to implementer
        return self.balance < other.balance

# This code is written by the client.

accounts = [
    Account("Taylor", 7.50),
    Account("Rachel", 3.50),
]
sorted(accounts)

"""In Java, object-oriented programming is about defining classes that implement interfaces. These interfaces serve as a "contract" between different parts of a program. These contracts can stretch across time and space: one of the inventors of Java implemented `Arrays.sort` several decades ago, and even today I can use that function so long as my code follows the `Comparable` contract."""