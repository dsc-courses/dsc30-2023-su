---
title: &title Demo.java
description: *title
summary: *title
redirect_to: &redirect https://gist.github.com/kevinlin1/84ab2025f9508b0888fc4ad611a30b3c
canonical_url: *redirect
---

## count_values.py

```python
def count_values(entries):
    """
    Function that counts the length of each value
    in a dictionary. Each value must be a list.
    Args:
        entries(dictionary): dictionary of lists as
        values to be considered.
    Returns:
        a list where each element is the length of
        the dictionary value.
    """
    return [len(entry) for entry in entries.values()]


print(count_values({1: [1,2,3], 2: [3,4,5,6]}))
# [3, 4]
```

## Demo.java

```
import java.util.List;
import java.util.ArrayList;

import java.util.Map;
import java.util.HashMap;

public class Demo {
               // Return type               Argument type
    public static List<Integer> countValues(Map<Integer, List<Integer>> entries) {
        // result = []
        List<Integer> result = new ArrayList<>();
        for (List<Integer> entry : entries.values()) {
            // result.append(len(entry))
            result.add(entry.size());
        }
        return result;
    }

    public static void main(String[] args) {
        // HEADACHE = {}
        Map<Integer, List<Integer>> HEADACHE = new HashMap<>();

        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        // HEADACHE[1] = [1,2,3]
        HEADACHE.put(1, list);

        list = new ArrayList<>();
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        // HEADACHE[2] = [3,4,5,6]
        HEADACHE.put(2, list);

        System.out.println(countValues(HEADACHE));
        // [3, 4]
    }
}
