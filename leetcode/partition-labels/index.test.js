/**
 * @link https://leetcode.com/problems/partition-labels/
 */
import { solution } from "./index";

test("Partition Labels", () => {
  expect(solution("ababcbacadefegdehijhklij")).toEqual([9, 7, 8]);
  expect(solution("eccbbbbdec")).toEqual([10]);
});
