/**
 * @link https://leetcode.com/problems/number-of-islands/
 * @see 파이썬알고리즘인터뷰.Q32.P331
 */

import { solution } from "./index";

test("number of islands", () => {
  expect(
    solution([
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ])
  ).toBe(1);
  expect(
    solution([
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ])
  ).toBe(3);
});
