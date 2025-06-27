# Selection Sort

## Algorithm: SelectionSort(arr)

**Input:** Array `arr`

**Output:** Elements in `arr` are in sorted order

```pseudo
last <- arr.length - 1
for i <- 0 to last do
    nextMin <- findNextMinIndex(arr, i, last)
    swap(arr, i, nextMin)
```

### Helper: findNextMinIndex(arr, first, last)

```pseudo
min <- arr[first]
minIndex <- first
for i <- first + 1 to last do
    if arr[i] < min then
        min <- arr[i]
        minIndex <- i
return minIndex
```
