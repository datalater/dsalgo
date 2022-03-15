/**
 * @link https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @see 파이썬알고리즘인터뷰.Q33.P338
 */

import { solution } from "./index";

test("Letter combinations of a phone number", () => {
  expect(solution("23")).toEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
  expect(solution("")).toEqual([]);
  expect(solution("2")).toEqual(["a", "b", "c"]);
});
