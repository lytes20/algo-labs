C-2.1 Describe, in pseudo-code, a link-hopping method for finding the middle node of a doubly linked list with header and trailer sentinels, and an odd number of real nodes between them. (Note: This method can only use link-hopping, i.e., the methods before and after; it cannot use a counter.) What is the running time of this method?

---

Question 3

A. Design a pseudo code algorithm to take a Sequence and remove all duplicate elements from the Sequence. Is the algorithm the same for both a List or a Sequence? Explain. Analyze your algorithm twice, once assuming it is a Sequence and once assuming it is a List. Which ADT is a better choice for this problem, i.e., does one version have a better big-O running time over the other?

Answer

```
removeDuplicates(S)
current <- S.first()
while !S.isLast(current) do
    next <- S.after(current)
    while !S.isLast(next) do
        if(next.element() == current.element()) then
            afterNext = S.after(next)
            S.remove(next)
            next = afterNext
        else
            next = S.after(next)
    end while
    current <- S.after(current)

```

---

Question 4

B. Describe, in pseudo-code, a recursive algorithm for enumerating all subsets of the first n integers, e.g., define PowerSet(n) which returns the powerset of the first n integers, from 1 to n; the result should be a Sequence containing Sequences (i.e., a Sequence containing the subsets). For example, PowerSet(1) returns {{},{1}} and PowerSet(2) returns {{},{1},{2},{1,2}}, etc. What is the running time of your method?
Answer:

```
Algorithm PowerSet(n)
Input an integer n
Output powerset of n
```

---
