# Merge Sort

```pseudo

mergeSort(S, C)
    if S.size() < 1
        return S
    S1, S2 <- partition(S)
    mergeSort(S1, C)
    mergeSort(s2, C)
    merge(S1, S2, C, S)

```

## Merging Two Sorted Sequences

```pseudo

mergeSort(S, C)
    if S.size() < 1
        return S
    S1, S2 <- partition(S)
    mergeSort(S1, C)
    mergeSort(s2, C)
    merge(S1, S2, C, S)

```
