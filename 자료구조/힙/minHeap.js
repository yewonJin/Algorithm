// 루트 노드의 인덱스 === 1

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // 힙의 추가
  heappush(value) {
    this.heap.push(value);
    let curIndex = this.heap.length - 1;
    let parIndex = Math.floor(curIndex / 2);
    // 루트 노드의 인덱스가 1이면 Math.floor(curIndex/2)
    // 루트 노드의 인덱스가 0이면 Math.floor((curIndex-1)/2)

    while (curIndex > 1 && this.heap[parIndex] > this.heap[curIndex]) {
      this.swap(parIndex, curIndex);
      curIndex = parIndex;
      parIndex = Math.floor(curIndex / 2);
    }
  }

  // 힙의 삭제
  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();
    // 배열 마지막 원소를 root 위치에 배치

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    // 왼쪽 자식이 없다는 것은 오른쪽 자식도 없는, 즉 루트만 있는 상태이므로 바로 반환!
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
        // 오른쪽 자식이 없다면 왼쪽 자식하나만 있다는 것을 의미한다.
      }
      return min;
    }

    // 위에 조건에 걸리지 않는 경우 왼쪽과 오른쪽 자식이 모두 있는 경우이다.
    // 따라서 현재 노드가 왼쪽 또는 오른쪽 보다 큰 지 작은지를 검사하며 반복한다.
    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      // 왼쪽과 오른쪽 자식 중에 더 작은 값과 현재 노드를 교체하면 된다.
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}

const minheap = new MinHeap();

minheap.heappush(1);
minheap.heappush(2);
minheap.heappush(6);
minheap.heappush(3);
minheap.heappush(4);

console.log(minheap.heap);

minheap.heappop();
console.log(minheap.heap);
