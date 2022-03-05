import solution from "./index";

test("문자열 압축 최소 길이", () => {
  expect(solution("aabbaccc")).toBe(7);
  expect(solution("ababcdcdababcdcd")).toBe(9);
  expect(solution("abcabcdede")).toBe(8);
  expect(solution("abcabcabcabcdededededede")).toBe(14);
  expect(solution("xababcdcdababcdcd")).toBe(17);
});
