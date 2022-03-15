function solution(n, computers) {
  let count = 0;

  const visited = Array(n).fill(false);

  function dfs(i) {
    visited[i] = true;

    for (let j = 0; j < n; j += 1) {
      if (!visited[j] && computers[i][j]) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}

export { solution };
