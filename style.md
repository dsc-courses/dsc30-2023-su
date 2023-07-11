---
layout: minimal
title: Style
description: &desc Guidelines to aid code understanding.
summary: *desc
parent: DSC 30
---

# {{ page.title }}
{: .no_toc .mb-2 }

{{ page.description }}
{: .fs-6 .fw-300 }

1. TOC
{:toc}

Programming is an inherently collaborative activity, so it is important to know how to write code that is easily understood by other people. **Code style** refers to programming guidelines that can help programmers read and understand code. This page describes the core guidelines that we will use in this course.

Most formatting-related style guidelines can be detected automatically using the style checker. To install the style checker, go to **File \| Settings \| Plugins** and then install the "CS 61B" plugin. To run the style checker, right-click on a file in the project tool window and select **Check Style**. This will generate a list of style errors in the selected file. The style checker does not check for descriptive names.

## Limits

No line may be longer than 120 characters.

No method may have more than 8 parameters.

Every file must contain exactly one outer class (nested classes are OK).

## Names

In general, use descriptive variable names that explain the variable's purpose and meaning. For simple loop variables, it is fine to use brief names such as `i`, `j`, `k`. Avoid "magic numbers" in code by using descriptive names and defining them as `private static final` constants at the top of the class. Only the following numbers can be entered directly: -1, 0, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9.

`static final` constants
: Name them in all capitals, such as `RED` or `DEFAULT_NAME`.

Parameters, local variables, and methods
: Names start with a lowercase letter or consist of a single, uppercase letter, such as `maxLength`, `N`, `index`, `getWidth`.

Classes and interfaces
: Names start with a capital letter such as `SampleClass` or `LinkedList`.

## Whitespace

The basic indentation step is 4 spaces. Don't use tab characters for indentation. Indent code by the basic indentation step for each block.

Remove trailing blank spaces from the end of a line.

Each file must end with a newline sequence (aka a blank line).

## Comments

Each class should have Javadoc comments briefly explaining the purpose of the class with @author and @since tags.

Each method should have Javadoc comments explaining the behavior, parameters (using @param tags), return type (using @return tag), and exceptions thrown (using @throws tag).

## Sample class

The following sample class showcases a program that follows most of the style guidelines (aside from descriptive variable names).

```java
import java.lang.IndexOutOfBoundsException;

/**
 * Description of Sample Class.
 *
 * @author First Last
 * @since Date
 */
class SampleClass {

    // Avoid magic numbers by declaring private constants.
    private static final int MAX_SIZE = 100;

    private int instanceVariable;

    /**
     * Description of constructor.
     *
     * @param para Description of para
     */
    public SampleClass(int para) {
        instanceVariable = para;
    }

    /**
     * Description of method.
     *
     * @param para1 Description of para1
     * @param para2 Description of para2
     * @return Description of return value
     * @throws IndexOutOfBoundsException when this exception is thrown
     */
    public int sampleMethod(int para1, int para2)
            throws IndexOutOfBoundsException {
        ...
    }
}
```
