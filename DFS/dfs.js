var graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

// 방문 처리 배열 
var visited = new Array(9).fill(false);

function dfs(graph, v, visited) {
  visited[v] = true;

  console.log(v);

  for(let i = 0; i < graph[v].length; i++) {
    if(!visited[graph[v][i]]) {
      dfs(graph, graph[v][i], visited);
    }
  }
}

dfs(graph, 1, visited)
