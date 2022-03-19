import { solution } from "./index";

test("봉우리", () => {
  expect(
    solution([
      [5, 3, 7, 2, 3],
      [3, 7, 1, 6, 1],
      [7, 2, 5, 3, 4],
      [4, 3, 6, 4, 1],
      [8, 7, 3, 5, 2],
    ])
  ).toBe(10);
});
