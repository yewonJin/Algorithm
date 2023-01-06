## 그래프

<img width="976" alt="batch_Untitled" src="https://user-images.githubusercontent.com/102349522/210303839-1cefe4e0-f198-4be3-a5f7-e270a9fce6e9.png">

### 인접 행렬
2차원 배열로 그래프의 인과 관계를 표현하는 방식
2차원 배열에 각 노드가 연결된 형태를 기록하는 방식이다.

| |0|1|2|3|4|5|
|---|---|---|---|---|---|---|
|0|0|0|0|0|0|0|
|1|0|0|1|1|1|1|
|2|0|1|0|0|1|0|
|3|0|1|0|0|0|0|
|4|0|1|1|0|0|0|
|5|0|1|0|0|0|0|

``` Swift
  var graph=[[0,0,0,0,0,0], [0,0,1,1,1,1], [0,1,0,0,1,0], [0,1,0,0,0,0], [0,1,1,0,0,0], [0,1,0,0,0,0]]
```

---

### 인접 리스트
리스트로 그래프의 연결 관계를 표현하는 방식
인접 리스트 방식에서는 모든 노드에 연결된 노드에 대한 정보를 차례대로 연결하여 저장한다.

``` Swift
  var graph=[[], [2,3,4,5], [1,4], [1], [1,2], [1]]
```

---
### 인접 행렬 vs 인접 리스트

메모리 측면에서 보자면 인접 행렬 방식은 모든 관계를 저장하므로 노드 개수가 많을 수록 메모리가 불필요하게 낭비된다. 
반면에 인접 리스트 방식은 연결된 정보만을 저장하기 때문에 메모리를 효율적으로 사용한다.

하지만 이와 같은 속성 때문에 인접 리스트 방식은 인접 행렬 방식에 비해 특정한 두 노드가 연결되어 있는지에 대한 정보를 얻는 속도가 느리다. 
인접 리스트 방식에서는 연결된 데이터를 하나씩 확인해야 하기 때문이다.