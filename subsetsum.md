```pseudo

Algorithm SS_DP(S, target)
    x <- array of size target + 1
    x[0] <- new Node(value=0, from=null)  // base case: sum 0 is always possible with empty subset
    for i = 1 to target do
        x[i] <- null

    k <- 0
    while k < S.size() do
        element <- elementAt(k)

        // Traverse backwards to avoid using the same element more than once
        for sum = target down to element do
            if x[sum - element] ≠ null and x[sum] = null then
                x[sum] <- new Node(value=element, from=x[sum - element])
        k <- k + 1

    if x[target] ≠ null then
        print "Subset found:"
        current <- x[target]
        while current ≠ null do
            print current.value
            current <- current.from
        return true
    else
        print "No subset sums to target"
        return false


```
