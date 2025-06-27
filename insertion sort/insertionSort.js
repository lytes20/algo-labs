function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    const nextElem = arr[i];
    while (j > 0 && nextElem < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j = j - 1;
    }
    arr[j] = nextElem;
  }
  return arr;
}

const result = insertionSort([5, 3, 8, 4, 2]);
console.log("result", result);
