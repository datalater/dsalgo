function solution(n, computers) {
  const isVisited = Array(n).fill(false);
  const range = [...Array(n)].map((_, i) => i);

  return range.reduce((acc, i) => {
    if (!isVisited[i]) {
      dfs(i);
      acc++;
    }

    return acc;
  }, 0);

  function dfs(node) {
    isVisited[node] = true;

    range.forEach((i) => {
      // 인접노드가 있고 방문하지 않았다면
      if (computers[node][i] && !isVisited[i]) {
        // 인접노드를 계속해서 탐색한다
        dfs(i);
      }
    });
  }
}

export { solution };
