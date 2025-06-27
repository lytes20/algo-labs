## Lab 04

Question 1

R-2.8 Illustrate the performance of the selection-sort algorithm on the following input sequence (22, 15, 26, 44, 10, 3, 9, 13, 29, 25).

Answer

```
(22, 15, 26, 44, 10, 3, 9, 13, 29, 25)
(3, 15, 26, 44, 10, 22, 9, 13, 29, 25)
(3, 9, 26, 44, 10, 22, 15, 13, 29, 25)
(3, 9, 10, 44, 26, 22, 15, 13, 29, 25)
(3, 9, 10, 13, 26, 22, 15, 44, 29, 25)
(3, 9, 10, 13, 15, 22, 26, 44, 29, 25)
(3, 9, 10, 13, 15, 22, 26, 44, 29, 25)
(3, 9, 10, 13, 15, 22, 25, 44, 29, 26)
(3, 9, 10, 13, 15, 22, 25, 26, 29, 44)
```

---

Question 2

R-2.9 Illustrate the performance of the insertion-sort algorithm on the input sequence of the previous problem.

Answer

```
(22, 15, 26, 44, 10, 3, 9, 13, 29, 25)
(3, 22, 15, 26, 44, 10, 9, 13, 29, 25)
(3, 9, 22, 15, 26, 44, 10, 13, 29, 25)
(3, 9, 10, 22, 15, 26, 44, 13, 29, 25)
(3, 9, 10, 13, 22, 15, 26, 44, 29, 25)
(3, 9, 10, 13, 15, 22, 26, 44, 29, 25)
(3, 9, 10, 13, 15, 22, 26, 44, 29, 25)
(3, 9, 10, 13, 15, 22, 25, 26, 44, 29)
(3, 9, 10, 13, 15, 22, 25, 26, 44, 29)
(3, 9, 10, 13, 15, 22, 25, 26, 29, 44)
```

---

Question 3

R-2.10 Give an example of a worst-case sequence with n elements for insertion-sort runs in Ω(n2) time on such a sequence.

Answer

- The worst case for Insertion Sort occurs when the input array is reverse-sorted.
  Example array - `[9, 8, 7, 6, 5, 4, 3]`
