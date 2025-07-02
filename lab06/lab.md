## Lab 6:

**Question 1:**

**Answer**

```pseudo
Algorithm isPermutation(A, B)
    if A.size() is not equal B.size() then
        return false
    if A.isEmpty() then
        return true
    D <- new Dictionary(HT)
    LoadDictionary(A, A.first(), D)
    return match(B, B.first(), D)

Algorithm LoadDictionary(A, P, D)
    e <- P.element()
    current <-D.findValue(e)
    if current is null then
        D.insertItem(e, 1)
    else
        D.insertItem(e, current + 1)
    if !A.isLast(P) then
        LoadDictionary(A, A.after(P), D)

Algorithm match(B, P, D)
    e <- P.element()
    current <- D.findValue(e)
    if current is null then
        return false
    else
        current <- current - 1
        if current = 0 then
            D.removeItem(e)
        else
            D.insertItem(e, current)
    if !B.isLast(P) then
        return match(B, B.after(P), D)
    else
        return true


```

---

**Question 2:**
