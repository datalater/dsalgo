/**
 * @link https://velog.io/@sangbooom/JS-BFS-DFS
 * @link https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%ED%8A%B8%EB%A6%AC-bfs-dfs-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-e96bcdadd1f3
 */

const bfs1 = (graph, startNode) => {
  const queue = [startNode]; // 탐색할 노드 목록 큐
  const visited = []; // 방문한 노드를 차례대로 저장하는 배열

  while (queue.length) {
    const currentNode = queue.shift();

    // 현재 노드가 방문하지 않은 노드라면
    if (!visited.includes(currentNode)) {
      visited.push(currentNode); // 방문했다고 표시하고
      queue.push(...graph[currentNode]); // 인접노드를 모두 enqueue하여 다음 반복에서 처리한다
      /**
       * 그러면 다음 반복에서 queue의 모양이 [...과거노드의 인접노드, ...현재노드의 인접노드] 형태가 되므로
       * 반복하는 동안 과거노드의 인접노드부터 우선처리되어 결과적으로 너비 우선 탐색이 된다
       */
    }
  }

  return visited;
};

const bfs2 = (graph, startNode) => {
  const queue = [startNode]; // 탐색할 노드 목록 큐
  const visited = []; // 방문한 노드를 차례대로 저장하는 배열

  while (queue.length) {
    const currentNode = queue.shift();

    // 현재 노드가 방문하지 않은 노드라면
    if (!visited.includes(currentNode)) {
      visited.push(currentNode); // 방문했다고 표시하고
      queue.push(...graph[currentNode]); // 인접노드를 모두 enqueue하여 다음 반복에서 처리한다
    }
  }

  return visited;
};

export { bfs1, bfs2 };
