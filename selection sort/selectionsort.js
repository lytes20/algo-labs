function findMinIndex(arr, currentIndex) {
  let min = arr[currentIndex];
  let minIndex = currentIndex;
  for (let i = currentIndex + 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
}
function swap(arr, currentIndex, minIndex) {
  const temp = arr[currentIndex];
  arr[currentIndex] = arr[minIndex];
  arr[minIndex] = temp;
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const minIndex = findMinIndex(arr, i);
    swap(arr, i, minIndex);
  }
  return arr;
}

const result = selectionSort([5, 3, 8, 4, 2]);
console.log("result", result);
