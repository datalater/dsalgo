import solution from "./index.js";

test("삼각형을 만들 수 있는지 판단한다", () => {
  expect(solution(6, 7, 11)).toBe(true);
  expect(solution(13, 31, 17)).toBe(false);
});
