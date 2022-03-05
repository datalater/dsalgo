# DFS BFS

## DFS

1. 방문하지 않은 정점을 방문하고 나서 "방문했음"으로 표시한다.
2. 재귀적으로 정점의 인접 리스트에서 방문하지 않았던 다른 정점을 방문한다.

`python`:

```python
graph = {
  1: [2, 3, 4],
  2: [5],
  3: [5],
  4: [],
  5: [6, 7],
  6: [],
  7: [3],
}

def recursive_dfs(v, discovered=[]):
  discovered.append(v)
  for w in graph[v]:
    if w not in discovered:
      recursive_dfs(w, discovered)
  return discovered

f'recursive dfs: {recursive_dfs(1)}'
# recursive dfs: [1, 2, 5, 6, 7, 3, 4]
```

```js
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (let i = 0; i < this.vertices; i += 1) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.marked = [];
  for (let i = 0; i < this.vertices; i += 1) {
    this.marked[i] = false;
  }
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (let i = 0; i < this.vertices; i += 1) {
    console.log(`${i}: ${this.adj[i]}`);
    for (let j = 0; j < this.vertices; j += 1) {
      if (this.adj[i][j] !== "") {
        console.log(`${i} -> ${j}: ${this.adj[i][j]}`);
      }
    }
  }
}
```

## BFS

주로 큐로 구현한다. 최단 경로를 구하는 문제에 사용된다.
