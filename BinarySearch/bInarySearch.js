function binary_search(array, target, start, end) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (array[mid] == target) return mid;
  
  else if (array[mid] > target) {
    return binary_search(array, target, start, mid - 1);
  } else {
    return binary_search(array, target, mid + 1, end);
  }

}

const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sample.sort((a, b) => a - b);

// ( 찾을 배열, 탐색할 값, 시작점, 끝점 )
const result = binary_search(sample, 7, 0, sample.length - 1);

console.log(result);
