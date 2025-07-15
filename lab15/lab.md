# Lab 15

**Question:**

C-13.2 Show that every language L in P is polynomial-time reducible to the language M={5}, that is, the language that simply asks if the binary encoding of the input is equal to 5.

**Answer**

```pseudo
Assume Algorithm verifyL(l) exists. Any problem that is a member of P has a verifier


L -> M={5}

Algorithm L2M(l)
    if verifyL(l) = yes then
        return 5
    else
        return null
```

**Question:**
A. Show that the MST decision problem is polynomial-time reducible to the Subset Sum problem.

**Answer:**

```pseudo
Algorithm verifyMST(G, max)
    MSTEdges <- MST(G)
    sum <- 0
    for each edge in MSTEdges do
        sum <- sum + weight(e)
    if sum is less than or equal to max then
        return yes
    else
        return no

(G, max) -> (S, target)

Algorithm MST2SS(G, Max)
    s <-  new List
    S.insertLast(3)
    if verifyMST(G, 3) is yes
        return (S, 3)
    else
        return (S, 2)
```

**Question**
B. Show the shortest path decision problem is polynomial-time reducible to the MST decision problem. Hint: convert the shortest path problem to a decision problem, then reduce to MST problem.

**Answer**

```pseudo

Algorithm SP2MST(G, u, v, max)
    G' <- new Graph
    u <- G'.insertVertex("u")
    v <- G'.insertVertex("v")
    G'.insertEdge(u, v, 3)
    if verifySP(G, u, v, mas) is yes
        return (G', 3)
    else return (G', 2)

Algorithm verifySP(G, u, v, max)
    shortestPath(G, u, v)
    sum <- 0
    current <- v
    while current is not null do
        e <-  getParent(current)
        sum = weight(e)
        current <- G.opposite(e, current)
        if sum is less than or equal to max then
            return yes
        else
            return no
```
