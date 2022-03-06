function solution(n, computers) {
  const range = [...Array(n)].map((_, i) => i);

  return range.reduce(
    ({ count, isVisited }, i) => {
      if (!isVisited[i]) {
        dfs(i, isVisited);
        count++;
      }

      return { count, isVisited };
    },
    { count: 0, isVisited: Array(n).fill(false) }
  ).count;

  function dfs(node, isVisited) {
    isVisited[node] = true;

    range.forEach((i) => {
      // 인접노드가 있고 방문하지 않았다면
      if (computers[node][i] && !isVisited[i]) {
        // 인접노드를 계속해서 탐색한다
        dfs(i, isVisited);
      }
    });
  }
}

export { solution };
