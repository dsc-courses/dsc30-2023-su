---
title: &title LinkedList.java
description: *title
summary: *title
redirect_to: &redirect https://gist.github.com/kevinlin1/ff00adfca9593f27deeb9e4e2c8a0dd6
canonical_url: *redirect
---

```java
// Implementer writes this class.
// We haven't written "implements List<E>" (later we might write in the AbstractList)
public class LinkedList<E> {
    // Both front and back are class invariants!
    // The implementer must always ensure between method calls that
    //   front points to the first node
    //   and back points the last node!

    // Reference to the first node in the sequence.
    private Node front;
    // Reference to the last node in the sequence.
    private Node back;

    // Thinking through arrays vs nodes!
    // In array, we would just want to (for addBack) adding to the end-ish in the array.
    // Linked Nodes are different! We use references.

    // Isn't add like sometimes really slow?
    // Don't we have to loop over all the items to get to the end of the list?
    // Versus ArrayList.add we could just (if we had space) put it in the empty spot
    // Doesn't really live up to the performance claims that we wanted

    // There is another linear collection data type called deque that helps emphasize
    // the strengths of a linked list; but we'll need more things to make this fast
    // You can only add to the front or add to the back of a deque.

    // Right now, the addBack code is slow since I might have to LOOP THROUGH THE WHOLE
    // LIST. If we restrict ourselves to the deque interface, how might I make things
    // faster?
    public void addFront(E element) {
        if (back == null) {
            // In the project, we'll use sentinel nodes to avoid having to do this.
            ...
        }
        front = new Node(element, front);
    }

    public void addBack(E element) {
        if (back == null) {
            ...
        }
        // Might have to make sure that I'm modifying the correct back!
        // Keep track of a reference to that very last node!
        back.next = new Node(element);
    }

    public E removeFront() {
        ...
    }

    public E removeBack() {
        // In the project, we use prev pointers to make this easier. Why might it be
        // helpful to have prev pointers for the remove functions?
        ...
    }

    private class Node {
        private final E value;
        private Node next;

        public Node(E value) {
            this.value = value;
        }

        public Node(E value, Node next) {
            this.value = value;
            this.next = next;
        }
    }
}
```

```java
// Client writes this class.
public class MyFinancesApp {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.addFront(1); // [1]
        list.addFront(0); // [0, 1]
        list.addBack(2); // [0, 1, 2]
    }
}
```
