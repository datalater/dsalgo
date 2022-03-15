/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  function dfs(i, j) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] !== "1"
    ) {
      return;
    }

    grid[i][j] = "0";

    dfs(i + 1, j); // right
    dfs(i - 1, j); // left
    dfs(i, j + 1); // top
    dfs(i, j - 1); // bottom;
  }

  let count = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

export { numIslands as solution };
