import solution from "./index";

test("학생 수에 따라 필요한 연필 다스 수 계산", () => {
  expect(solution(25)).toBe(3);
  expect(solution(178)).toBe(15);
});
