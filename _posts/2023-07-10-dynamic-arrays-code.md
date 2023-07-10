---
title: &title ArrayList.java
description: *title
summary: *title
redirect_to: &redirect https://gist.github.com/kevinlin1/4017b075ad536ea07d12dbe22c882b6c
canonical_url: *redirect
---

```java
public class ArrayList<E> {
    private E[] elementData;
    private int size;

    public ArrayList() {
        // Create a length-10 array to store elements.
        elementData = (E[]) new Object[10];

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
        // FIXME
        String result = "[" + elementData[0];
        for (int i = 1; i < elementData.length; i += 1) {
            result += ", " + elementData[i];
        }
        result += "]";
        return result;
    }
}
```
