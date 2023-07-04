---
layout: minimal
title: Primer
description: &desc Learning IntelliJ, Java programming, and unit testing.
summary: *desc
nav_order: 0
parent: Projects
grand_parent: DSC 30
---

# {{ page.title }}
{: .no_toc .mb-2 }

{{ page.description }}
{: .fs-6 .fw-300 }

1. TOC
{:toc}

By the end of this project, students will be able to:

- Setup up a Java programming environment in IntelliJ and learn how to submit projects.
- Compare the syntactical differences between Python and Java.
- Implement a few real-world applications in the Java programming language.

<details markdown="block">
<summary>Can I work with someone else on this project?</summary>

Although this project requires an individual submission, we welcome collaboration and teamwork in this class. There are very few limits on collaboration in this course; our primary rule is that we ask that you do not claim to be responsible for work that is not yours. If you get a lot of help from someone else or from an online resource, cite it. I believe that there is a lot of value in learning from others, and even in reading others' solutions, so long as you do not deprive yourself (or others) of the opportunity to learn.

We are comfortable doing this because each submission in this class comes in the form of a video that you record. Your video is a demonstration of everything that you learned throughout the process of working on an assignment. Our goal is for students to support each other and find community through this course. The real advantage of taking a course on-campus at a university is to be able to connect with others who share common interests in learning.
</details>

<details markdown="block">
<summary>What am I submitting at the end of this project?</summary>

Satisfactory completion of the project requires a **video-recorded individual presentation that addresses all the green callouts**.

{: .deliverable }
The project instructions contain a lot of details to provide context, clarify common confusions, and help students get started. Your video explanation only needs to address tasks that are described in green callouts like this one.

Your video presentation should meet the following requirements:

- Your presentation should not be much longer than 6 minutes and should include your voiceover. (Your video is appreciated but not necessary.)
- Your presentation should include some kind of visually-organizing structure, such as slides or a document.
- After submitting to Canvas, add a submission comment linking to your slides or document.

We do not ask for your code. Given enough time and support, we're certain you would be able to write a fully-functional program that meets the specification. The goal of this course is to learn how to design program specifications in the first place. Although this doesn't requires fully-functional code, you'll often need to write programs that are close enough to the specification for it to provide a meaningful basis for further analysis and discussion.
</details>

## Setup

Before we proceed, you'll need to install and setup two pieces of software. If you run into any issues with the setup procedure, let the instructor know by posting on the discussion board. The installation process can be quite sensitive to the specific configuration of your computer, so it's best to let the instructor know when something doesn't go as expected.

### Install Git

Git is a **version control system** (VCS), a tool for distributing, managing, and sharing code with other people. Install Git by following the instructions according to your computer's operating system.

Windows
: [Download and install Git](https://git-scm.com/download/win). All the default settings will work.

macOS
: From Finder, navigate to **Application \| Utilities \| Terminal**. Type `git --version` into the terminal and press `Enter`. If you see a download prompt, follow the instructions.

ChromeOS
: At the bottom right, select the time. Then, select **Settings \| Advanced \| Developers** and **Turn On** the Linux development environment. Finally, follow the Linux instructions for all remaining setup.

Linux
: Install `git` using your package manager. On Debian, Ubuntu, or other apt-managed systems, type `sudo apt install git` into the terminal and press `Enter`.

{: .hint }
The `sudo` command may require a password prompt. When you type into the password prompt, nothing will appear. This is a security feature: your typing is intentionally hidden!

### Install IntelliJ

IntelliJ is an integrated development environment that is the most recommended software for writing Java programs. Follow the [Standalone installation](https://www.jetbrains.com/help/idea/installation-guide.html#standalone) guide for your computer's operating system: [Windows](https://www.jetbrains.com/help/idea/installation-guide.html#6ac878e7), [macOS](https://www.jetbrains.com/help/idea/installation-guide.html#c1231e1f), or [Linux](https://www.jetbrains.com/help/idea/installation-guide.html#efd790b5).

{: .warning }
When downloading IntelliJ, we only need the completely free IntelliJ IDEA Community Edition. The [download site](https://www.jetbrains.com/idea/download/) promotes IntelliJ IDEA Ultimate; scroll down to find IntelliJ IDEA Community Edition. If you already have IntelliJ installed, be sure to update it to the latest version before proceeding.

Once IntelliJ is installed, [run IntelliJ IDEA](https://www.jetbrains.com/help/idea/run-for-the-first-time.html) and select **Skip Remaining and Set Defaults**. Once you've finished the setup, you should see the **Welcome to IntelliJ IDEA** screen.

![Welcome screen](https://resources.jetbrains.com/help/img/idea/2023.1/ij_welcome_window.png)

Next, we have a few more setup steps before we can proceed with obtaining the project code. From the **Welcome to IntelliJ IDEA** screen:

1. In the banner at the bottom, choose **Enable New UI**. This might require a restart.
1. In the left sidebar, select **Plugins**, search for "jGRASP" in the marketplace, and then install the **jGRASP** plugin.
1. In the space at the bottom, choose **Start Tour** and complete the first chapter of the onboarding tour.

### Obtain and run project code

From the **Welcome to IntelliJ IDEA** screen, select **Projects** from the sidebar and then **Get from VCS**. Paste the following URL, choose a place to enter, and clone the project code repository.

```
https://github.com/kevinlin1/primer.git
```

The first time you open the project, IntelliJ will ask you whether to [trust the project](https://www.jetbrains.com/help/idea/project-security.html). Choose **Trust Project** so that IntelliJ has your permission to run code.

After a few seconds, IntelliJ will open the main editor screen. Let's create and run a class in IntelliJ:

1. Look at the left side of the screen for the **Project** tool window that shows all the files in the project.
1. In the project tool window, right-click the folder named **src** and select **New \| Java class** from the menu.
1. Name the class "Demo" and click **OK**. In the new file, paste in the contents of [`Demo.java`](https://gist.github.com/kevinlin1/84ab2025f9508b0888fc4ad611a30b3c).
1. In the editor, find the gutter containing all the line numbers and click on the ![Green play button](https://resources.jetbrains.com/help/img/idea/2023.1/app.expui.gutter.run.svg).
1. Finally, select **Run 'Demo'** from the menu.

If you see the following output in the run tool window, you're all set!

```
[3, 4]
```

<details markdown="block">
<summary>My computer doesn't display the expected output!</summary>

If you're instead seeing a "Cannot start compiler" notification with a suggestion to configure the Project SDK. Follow the link in the notification, or from the main menu select **File \| Project Structure**. In the **Project Structure** window, open the **SDK** dropdown.

![Change the project SDK](https://resources.jetbrains.com/help/img/idea/2023.1/sdks_project_structure_project.png)

If IntelliJ detected an existing Java SDK, it will be listed under **Detected SDKs**.

- If an SDK version 17 or greater is available, select it.
- Otherwise, select **Add SDK \| Download JDK** and choose the latest from any vendor.

Click **OK** and try running `BrowserHistory` again. It should work now!
</details>

## Implement

### From Python to Java

Consider the following Python code which performs a task that is intentionally obfuscated. In the `Equivalent` class, convert the Python code verbatim into Java. Write your Java code as similar to the Python code as possible, but apply the Java naming conventions for variables and functions.

```python
import math

def foo(start, end):
    if start <= 1:
        start = 2
    output_list = []
    for n in range(start, end):
        if is_foo(n):
            output_list.append(n)
    return output_list

def is_foo(n):
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True
```

Assume the arguments `start` and `end` will be integers.

{: .deliverable }
Explain how you converted the Python `range` function into Java `for` loops.

### An ancient algorithm

> In mathematics, the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) is an ancient algorithm for finding all prime numbers up to any given limit.
>
> It does so by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2. The multiples of a given prime are generated as a sequence of numbers starting from that prime, with constant difference between them that is equal to that prime.
>
> ![Animation of the Sieve of Eratosthenes](https://upload.wikimedia.org/wikipedia/commons/9/94/Animation_Sieve_of_Eratosth.gif) [^1]

[^1]: SKopp, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons

In the `Sieve` class, write a Java implementation for `sieve` that takes as input 2 integer arguments: `start` and `end`. The method should return an integer array containing the primes in the interval `[start, end)`. In other words, `start` is included in the range but `end` is not. If `end` is less than or equal to `start`, return an empty array.

{: .deliverable }
Explain the part of the `Sieve` class that you're most proud of programming.

### Common prefixes

Suppose you're designing a file organization system that automatically groups files under a certain label. The common prefix among a group of filenames can be used to create a hierarchy or grouping of the files, making it easier for users to navigate and find desired files. For example, if a group of files have the names `accounting_jan.xlsx`, `accounting_feb.xlsx`, and `accounting_mar.xlsx`, the common prefix among all three of these names is `accounting_`, so these files could be grouped together under a folder named `accounting`.

In the `CommonPrefixes` class, implement the `findCommonPrefixes` method that takes an array of strings and returns the longest common prefix among all the given strings. If there is no common prefix among all the strings, return an empty string.

{: .deliverable }
Explain the part of the `CommonPrefixes` class that you're most proud of programming.

## Test

To create a test function:

1. In the editor, move your cursor to the class that you'd like to test. Then, press `Alt+Enter` and select **Create Test**.
1. In the **Create Test** dialog, select the library **JUnit5** and fix the problem by using the latest stable version of JUnit (5.9.3 at the time of writing).
1. Select the methods that you'd like to test and click **OK**.

<video controls muted class="module full-width" style="aspect-ratio: 1580/904"><source src="https://resources.jetbrains.com/help/img/idea/2023.1/create-test.mp4" type="video/mp4"></video>

{: .deliverable }
Write at least two test cases for `findCommonPrefixes` in a single test function.

{: .deliverable}
Write a test case for the `sieve` by iterating over all valid inputs for `start` and `end` less than 100 and then comparing the result to your `foo` function, which also computes all the prime numbers within the same interval.
