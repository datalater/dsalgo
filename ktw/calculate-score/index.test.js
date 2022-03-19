import { solution } from "./index";

test("점수계산", () => {
  expect(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])).toBe(10);
});
