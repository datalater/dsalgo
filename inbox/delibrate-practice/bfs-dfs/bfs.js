/**
 * @link https://velog.io/@sangbooom/JS-BFS-DFS bfs-dfs
 * @link https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%ED%8A%B8%EB%A6%AC-bfs-dfs-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-e96bcdadd1f3 bfs-dfs
 * @link https://joooing.tistory.com/entry/%EC%9E%AC%EA%B7%80-%E2%86%92-%EA%BC%AC%EB%A6%AC-%EC%9E%AC%EA%B7%80-Tail-Recursion#recentEntries 꼬리재귀
 * @see SICP
 */

/**
 * while 반복문을 이용한 BFS
 */
const bfsWhile = (graph, startNode) => {
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

/**
 * 꼬리 재귀를 이용한 BFS
 *
 * Procedure: recursive procedure calling itself (tail recursion) 꼬리 재귀를 이용한 재귀 프로시저
 * Process: iterative process with state variables 상태 변수를 이용한 반복 프로세스
 */
const bfsTailRecursion = (graph, queue, visited) => {
  // 재귀 종료 기저 조건
  if (!queue.length) {
    return visited;
  }

  const currentNode = queue.shift();

  // 현재 노드가 방문하지 않은 노드라면
  if (!visited.includes(currentNode)) {
    visited.push(currentNode); // 방문했다고 표시하고
    queue.push(...graph[currentNode]); // 인접노드를 모두 enqueue하여 다음 반복에서 처리한다
  }

  return bfsTailRecursion(graph, queue, visited);
};

export { bfsWhile, bfsTailRecursion };
