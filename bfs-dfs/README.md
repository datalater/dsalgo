# BFS DFS

## FAQ

- 현재 노드의 방문 표시는 언제 하나?
  - 인접 노드를 탐색하기 전에 한다.

## DFS

### 프로세스 익히기

dfs를 처음 시작하는 조건

> 행렬 grid의 행과 열 단위에서 육지(1)인 곳을 찾아 진행하다가 육지를 발견하면 dfs()를 호출해 탐색을 시작한다.

처음 dfs를 시작하는 호출이 종료된 이후의 의미

> dfs 함수를 빠져 나온 후에는 해당 위치에서 탐색할 수 있는 모든 육지를 탐색한 것이므로, 카운트를 1 증가시킨다.

dfs 종료 조건의 의미

> dfs 탐색을 하는 dfs() 함수는 동서남북을 모두 탐색하면서 재귀호출한다. 함수 상단에는 육지가 아닌 곳은 return으로 종료 조건을 설정해둔다. 이렇게 재귀 호출이 백트래킹으로 모두 빠져 나오면 섬 하나를 발견한 것으로 간주한다. 이때 이미 방문했던 곳은 1이 아닌 값으로 마킹한다.

dfs를 이어나가는 조건의 의미

> 종료 조건이 아닌 경우, 탐색할 노드의 인덱스가 남아 있는 경우 dfs를 이어간다.

방문 경로를 저장하지 않아도 되는 경우가 있다.

> 간혹 또 다른 행렬을 생성해 그곳에 방문했던 경로를 저장하는 형태로 풀이하는 경우가 있는데, 이 문제는 그렇게 풀이할 필요가 없다. 곰곰이 생각해보면 현재의 행렬에 방문한 경로를 표시해두는 것으로도 충분하기 때문이다.

### 유형별 전략

- 모든 노드가 연결된 경우
- 모든 노드가 연결되지 않은 경우

**모든 노드가 연결된 경우**: 한 번 탐색을 시작하면 끝까지 탐색할 수 있다. `dfs(start)`로 시작하면 된다. `#타겟넘버`

**모든 노드가 연결되지 않은 경우**: 한 번 탐색을 끝내면 시작점을 변경해서 다시 탐색해야 한다. `for loop`으로 탐색하되, 이미 방문한 노드는 탐색을 시작할 필요가 없으므로 방문 여부를 필수로 확인해야 한다. `#네트워크` `#섬의개수`

<details markdown="1">
<summary><strong>code</strong></summary>

```js
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
```

</details>

## BFS

최단 거리 또는 최단 경로를 물어보면 BFS 문제로 푼다. BFS는 재귀가 불가능하므로 queue와 visted를 이용해서 while문을 돌리면서 탐색한다.

문제의 핵심은 모든 인접 노드를 탐색하는 게 아니라 조건을 충족하는 인접 노드를 탐색하는 것이다. 따라서 if문(문제에서 주어진 조건과 방문 여부 `visited`)을 제대로 작성하여 조건을 충족하는 인접 노드를 걸러내는 것이 중요 포인트다.

경우에 따라 최단 경로값(`count`)을 다음 노드(`word`)와 배열로 queue에 함께 담으면 편리할 수 있다. `queue.push([word, count + 1])`

`#단어변환`