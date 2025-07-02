**Question1**
Consider the multi-way search tree of Lecture 8, slide 39. Why isn’t it a valid (2,4) tree? Justify your answer. What could we do to make it into a valid (2,4) tree? Draw the valid (2,4) tree.

---

**Question 2:**
R-3.10 A certain Professor Amongus claims that a (2,4) tree storing a set of items will always have the same structure, regardless of the order in which the items are inserted. Show that Professor Amongus is wrong.

A. Insert the following sequence of keys into an initially empty 2-4 tree in this order: (16, 5, 22, 45, 2, 10, 18, 30, 50, 12, 1, 33)

Use the following URL to check at each insertion in A above. http://cs.armstrong.edu/liang/animation/web/24Tree.html

---

**Question 3:**

C-4.11 Suppose we are given an n-element sequence S such that each element in S represents a different vote in an election, where each vote is given as an integer representing the ID of the chosen candidate. Suppose we know who the candidates are and the number of candidates running is k < n. Describe an O(n log k)-time algorithm for determining who wins the election.

---

**Question 4:**

C-4-22 Let A and B be two sequences of n integers each. Given an integer x, describe an O(n log n)-time pseudo code algorithm for determining if there is an integer a in A and an integer b in B such that x = a + b.

**Answer**

```pseudo
Algorithm findSum(A, B, X)
    D <-  new Dictionary
    LoadDictionary(B, B.first(), D)
    for each a in A.elements() do
        b = D.findValue(x - a)
        if b is not null then
            return (a, b)
    return null

```

- LoadDictionary pseudocode can be found in lab06 [here](../lab06/lab.md)
