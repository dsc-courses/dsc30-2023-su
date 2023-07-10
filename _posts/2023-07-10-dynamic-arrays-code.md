---
title: &title ArrayList.java
description: *title
summary: *title
redirect_to: &redirect https://gist.github.com/kevinlin1/4017b075ad536ea07d12dbe22c882b6c
canonical_url: *redirect
---

```java
// There are a lot of methods needed to implement List!
// Abstract classes like AbstractList make this easier!
import java.util.AbstractList;

// Implementer writes this class.
public class ArrayList<E> extends AbstractList<E> {
    private E[] elementData;
    private int size;

    public ArrayList() {
        // Create a length-10 array to store elements.
        elementData = (E[]) new Object[10];

        // Assign size to 0 for an initially-empty list.
        size = 0;
    }

    public boolean add(E element) {
        // Add the element to the next space in the array.
        elementData[size] = element;

        // Increment the size to indicate the list has grown.
        size += 1;

        // Return true to satisfy the boolean return type.
        return true;
    }

    @Override
    public E get(int i) {
        if (i >= size || i < 0) { // Vertical bars indicate "or" in Java
            // Throw an exception to indicate an invalid list index
            throw new IndexOutOfBoundsException(i + " is not a valid list index");
        }
        return elementData[i];
    }

    public int size() {
        // Return the current size of the list.
        return size;
    }

    // What will be printed out?
    // Is there a situation where the right thing won't be printed out?
    public String toString() {
        if (size == 0) {
            return "[]";
        }
        String result = "[" + elementData[0];
        // Probably need to change the loop end condition
        // What's the difference between elementData.length and size?
        //     elementData.length is always fixed at 10 (for this ArrayList)
        //     size represents the actual part of the array that's being used
        for (int i = 1; i < size; i += 1) {
            result += ", " + elementData[i];
        }
        result += "]";
        return result;
    }
}
```

```java
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ArrayListTest {

    @Test
    void testGet() {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        assertEquals(3, list.get(2));
    }

    @Test
    void testToString() {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        String actual = list.toString(); // [1, 2, 3]

        // Instead of writing the expected result directly,
        // we can compare it to a reference implementation.
        // This is useful when writing a systematic test
        // that needs to check many inputs and ouputs.
        String expected = List.of(1, 2, 3).toString();
        assertEquals(expected, actual);
    }
}
```

```java
// Client writes this class.
public class MyFinancesApp {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println(list.get(2));
        System.out.println(list);
    }
}
```
