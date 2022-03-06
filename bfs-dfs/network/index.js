function solution(n, computers) {
  let count = 0;
  const isVisited = Array(n).fill(false);

  for (let i = 0; i < n; i += 1) {
    // 현재 노드를 방문하지 않았다면
    if (!isVisited[i]) {
      dfs(i); // 현재 노드를 탐색한다
      count++; // 현재 노드의 dfs 탐색이 끝났으므로 네트워크 개수를 증가시킨다
    }
  }

  return count;

  function dfs(node) {
    isVisited[node] = true;

    for (let i = 0; i < n; i += 1) {
      // 인접노드가 있고 방문하지 않았다면
      if (computers[node][i] && !isVisited[i]) {
        // 인접노드를 계속해서 탐색한다
        dfs(i);
      }
    }
  }
}

export { solution };
