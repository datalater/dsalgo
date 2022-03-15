/**
 * @link https://programmers.co.kr/learn/courses/30/lessons/43163
 */

import { solution } from "./index";

test("단어 변환", () => {
  expect(
    solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
  ).toBe(4);
  expect(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])).toBe(0);
});
