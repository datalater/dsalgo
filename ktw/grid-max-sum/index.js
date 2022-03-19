function solution(grid) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < grid.length; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < grid[0].length; j++) {
      sum1 += grid[i][j];
      sum2 += grid[j][i];
    }

    max = Math.max(max, sum1, sum2);
  }

  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < grid.length; i++) {
    sum1 += grid[i][i];
    sum2 += grid[i][grid[0].length - 1 - i];
  }
  max = Math.max(max, sum1, sum2);

  return max;
}

export { solution };
