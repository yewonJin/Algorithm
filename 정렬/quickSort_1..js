var arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function quickSort(arr, start, end) {
  if (start >= end) return;

  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (left <= end && arr[left] <= arr[pivot]) left++;
    while (right > start && arr[right] >= arr[pivot]) right--;

    if (left > right) {
      [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
}

quickSort(arr, 0, arr.length - 1);

console.log(arr);
