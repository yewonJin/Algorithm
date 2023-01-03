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

var visited = new Array(9).fill(false);

function bfs(graph, v, visited) {
    let queue = [v];
    visited[v] = true;

    while(queue.length > 0) {
        let now = queue.shift();
        console.log(now);

        for(const i of graph[now]) {
            if(!visited[i]) {
                queue.push(i);
                visited[i] = true;
            }
        }
    }

}

bfs(graph, 1, visited);

