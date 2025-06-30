# Lab 03

Question 1:

Let T be a binary tree with n nodes that is implemented with a vector, S, and let p be the level numbering of the nodes in T, as given in Section 2.3.4. Give pseudo-code descriptions of each of the methods root, parent, leftChild, rightChild, isInternal, isExternal, and isRoot.

Answer:

```
Algorithm root(S):
    return S

Algorithm parent(p):
    return S[floor(p/2)]

leftChild(p)
    return S[2p]

rightChild(p):
    return S[2p + 1]

isInternal():
    return 2p <= n

isExternal(p):
    return 2p > n

isRoot(p)
    return p == 1
```

---

Question 2:

R-2.8 Answer the following questions so as to justify Theorem 2.8.
a. Draw a binary tree with height 5 and with the maximum number of external nodes.

b. What is the minimum number of external nodes for a binary tree with height h? Justify your answer.
c. What is the maximum number of external nodes for a binary tree with height h? Justify your answer.
d. Let T be a binary tree with height h and n internal nodes. Show that log(n+1) < h < n e. For which values of n and h can the above lower and upper bounds on h be attained with equality?

---

Question 3:

C-2.2 Analyze your implementation of the queue ADT that used two stacks (from assignment 2). What is the amortized running time for dequeue and enqueue, assuming that the stacks support constant time push, pop, and size methods?

---

Question 4:

C-2.7 Using the Sequence ADT, describe an efficient way of putting a sequence representing a deck of n cards into random order. Use the function randomInt(n), which returns a random number between 0 and n-1, inclusive. Your method should guarantee that every possible ordering is equally likely. Equally likely means that each element/card must be selected exactly one time. Hint: randomly select an element from the unselected elements, then swap it from the unselected segment of the Sequence and into the selected segment; keep doing this until there is only one element left in the unselected segment. After each swap, there will be one fewer in the unselected segment and one more in the selected segment. What is the running time of your method, if the sequence is implemented with an array? What if it is implemented with a linked list?

```
Algorithm shuffleCards(S)

for i <- S.length - 1 to 1 do
    index = randomInt(i + 1)
    swap(i, index)
```
