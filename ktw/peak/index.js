function solution(grid) {
  let answer = 0;

  // top, rigt, bottm, left;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let isPeak = true;

      for (let k = 0; k < dx.length; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];

        if (nx < 0 || nx >= grid.length || ny < 0 || ny >= grid[0].length) {
          continue;
        }

        const neighbor = grid[nx][ny];
        if (neighbor > grid[i][j]) {
          isPeak = false;
          break;
        }
      }

      if (isPeak) {
        answer++;
      }
    }
  }

  return answer;
}

export { solution };
