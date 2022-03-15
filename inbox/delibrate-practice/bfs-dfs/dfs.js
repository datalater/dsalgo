function dfsRecursive(graph, startNode, visited = []) {
  visited.push(startNode);

  for (const node of graph[startNode]) {
    if (!visited.includes(node)) {
      dfsRecursive(graph, node, visited);
    }
  }

  return visited;
}

function dfsStack(graph, startNode) {
  const stack = [startNode];
  const visited = [];

  while (stack.length) {
    const currentNode = stack.pop();

    if (!visited.includes(currentNode)) {
      visited.push(currentNode);
      stack.push(...graph[currentNode]);
    }
  }

  return visited;
}

function dfsQueue(graph, startNode) {
  const queue = [startNode]; // 탐색할 노드 목록 큐
  const visited = []; // 방문한 노드를 차례대로 저장하는 배열

  while (queue.length) {
    const currentNode = queue.shift();

    // 현재 노드가 방문하지 않은 노드라면
    if (!visited.includes(currentNode)) {
      visited.push(currentNode); // 방문했다고 표시하고
      queue.unshift(...graph[currentNode]); // 인접노드를 모두 unshift하여 다음 반복에서 처리한다
      /**
       * 그러면 다음 반복에서 queue의 모양이 [...현재노드의 인접노드, ...과거노드의 인접노드] 형태가 되므로
       * 반복하는 동안 항상 현재노드의 인접노드(과거노드의 가장 가까운 인접노드)부터 우선처리되어
       * 결과적으로 깊이 우선 탐색이 된다
       */
    }
  }

  return visited;
}

function dfsTailRecursion(graph, queue, visited) {
  if (!queue.length) {
    return visited;
  }

  const currentNode = queue.shift();

  if (!visited.includes(currentNode)) {
    visited.push(currentNode);
    queue.unshift(...graph[currentNode]);
  }

  return dfsTailRecursion(graph, queue, visited);
}

export { dfsRecursive, dfsStack, dfsQueue, dfsTailRecursion };
