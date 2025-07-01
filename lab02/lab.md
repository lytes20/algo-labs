## Lab 02

**Question 1:**

C-2.1 Describe, in pseudo-code, a link-hopping method for finding the middle node of a doubly linked list with header and trailer sentinels, and an odd number of real nodes between them. (Note: This method can only use link-hopping, i.e., the methods before and after; it cannot use a counter.) What is the running time of this method?

**Answer:**

```pseudo
findMiddleNode(L)
if L.isEmpty() then
    return null
first <- L.first()
last <- L.last()
while L.after(first) is not equal to L.before(last) do
    first <- L.after(first)
    last <- L.before(last)
return L.after(first)

```

---

**Question 2:**

C-2.2 Describe, in pseudo-code, how to implement the queue ADT using two stacks. What is the running time of the enqueue() and dequeue() methods in this case?

**Answer:**

```pseudo
enqueueStack <- new Stack
dequeueStack <- new Stack

enqueue(o)
    enqueueStack.push(o)

dequeue()
    if dequeueStack.isEmpty() then
        while !enqueueStack.isEmpty() do
            temp <- dequeueStack.pop()
            dequeueStack.push(temp)
       dequeueStack.pop()
    else
        dequeueStack.pop()
```

- Running time of enqueue() is O(1)
- Running time of dequeue is O(n)

---

**Question 3:**
C-2.3 Describe, in pseudo-code, how to implement the stack ADT using one queue. What is the running time of the push() and pop() methods in this case?

**Answer:**

```pseudo
Q <- new Queue

push(o)
    Q.enqueue(o)
    for i <- 1 to Q.size() - 1 do
        temp = Q.dequeue
        Q.enqueue(temp)

pop()
    if Q.isEmpty()
        return message Q is empty
    return Q.dequeue

```

- Running time of push() is O(n)
- Running time of pop is O(1)

---

**Question 4**

A. Design a pseudo code algorithm to take a Sequence and remove all duplicate elements from the Sequence. Is the algorithm the same for both a List or a Sequence? Explain. Analyze your algorithm twice, once assuming it is a Sequence and once assuming it is a List. Which ADT is a better choice for this problem, i.e., does one version have a better big-O running time over the other?

**Answer**

```pseudo
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

**Question 5**

B. Describe, in pseudo-code, a recursive algorithm for enumerating all subsets of the first n integers, e.g., define PowerSet(n) which returns the powerset of the first n integers, from 1 to n; the result should be a Sequence containing Sequences (i.e., a Sequence containing the subsets). For example, PowerSet(1) returns {{},{1}} and PowerSet(2) returns {{},{1},{2},{1,2}}, etc. What is the running time of your method?
**Answer:**

```
Algorithm PowerSet(n)
Input an integer n
Output powerset of n
```

---

**Question 6:**
R-2.1 Describe, using pseudo-code, implementations of the methods insertBefore(p,e) , insertFirst(e), and insertLast(e) of the List ADT, assuming the list is implemented using a doubly-linked list.

---

**Question 7:**
A. Write a pseudo-code function, isBalanced(arr), that takes an array arr of characters and determines whether or not the array contains balanced square brackets [ ], parenthesis ( ), and braces { }. For example, if arr contains [(){8}](), then isBalanced would return true, but if arr contains [( ) { 8 }] ( ) ], then false would be returned since there is an extra ] at the end. All other characters should be ignored, e.g., like 8 in the examples.

**Answer**

---

**Optional Question:**
C-2-5 Describe the structure and pseudo-code for an array-based implementation of the vector ADT that achieves O(1) time for insertions and removals at rank 0, as well as insertions and removals at the end of the vector. Your implementation should also provide for a constant-time elemAtRank method.

**Answer**
