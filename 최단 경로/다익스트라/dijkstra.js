// 노드의 개수, 간선의 개수
var [n, m] = [6, 11];
// 시작 노드 번호
var start = 1;
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트
var graph = new Array(n+1).fill(0).map(() => new Array());
// 최단 거리 테이블
var distance = new Array(n+1).fill(Infinity);
// 방문한 적 있는지 체크하는 리스트
var visited = new Array(n+1).fill(false);

// 모든 간선 정보 (a번 노드에서 b번 노드로 가는 비용이 c)
graph[1].push([1,2,2]);
graph[1].push([1,3,5]);
graph[1].push([1,4,1]);
graph[2].push([2,3,3]);
graph[2].push([2,4,2]);
graph[3].push([3,2,3]);
graph[3].push([3,6,5]);
graph[4].push([4,3,3]);
graph[4].push([4,5,1]);
graph[5].push([5,3,1]);
graph[5].push([5,6,2]);

/** 방문하지 않은 노드 중에서, 가장 최단 거리가 짧은 노드 번호를 반환 */ 
function getSmallestNode() {
    let min_value = Infinity;
    let index = 0;
    for(let i = 1; i < n+1; i++) {
        if(distance[i] < min_value && !visited[i]) {5
            min_value = distance[i];
            index = i;
        }
    }
    return index;
}

/** 다익스트라 함수 */
function dijkstra(start) {
    distance[start] = 0;
    visited[start] = true;
    
    for(const j of graph[start]) {
        distance[j[1]] = j[2]
    }

    for(let i = 0; i < n - 1; i++) {
        let now = getSmallestNode();
        visited[now] = true;
        for(const j of graph[now]) {
            let cost = distance[now] + j[2]
            if (cost < distance[j[1]]) {
                distance[j[1]] = cost;
            }
        }
    }
} 

dijkstra(start)

for(let i = 1; i < n + 1; i++) {
    if (distance[i] === Infinity) {
        console.log("INFINITY");
    }
    else {
        console.log(distance[i]);
    }
} 