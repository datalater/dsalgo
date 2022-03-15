function solution(numbers, target) {
  // dfs를 끝까지 갔을 때 총합이 target과 같으면 answer++
  // 끝까지 간 경우만 카운트하면 되므로 방문 여부 필요 없다.
  let answer = 0;

  function dfs(i, sum) {
    if (i === numbers.length) {
      const total = sum.reduce((a, b) => a + b);

      if (total === target) {
        answer++;
      }

      return;
    }

    const value1 = numbers[i];
    const value2 = -numbers[i];

    dfs(i + 1, [...sum, value1]);
    dfs(i + 1, [...sum, value2]);
  }

  dfs(0, []);

  return answer;
}

export { solution };
