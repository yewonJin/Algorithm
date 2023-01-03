var arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    let swap = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = swap;
  }

  return arr;
}

console.log(selectionSort(arr));
