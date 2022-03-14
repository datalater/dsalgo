import {
  solution,
  top,
  count,
  combinateString,
  combinateStrings,
} from "./index";

test("메뉴 리뉴얼", () => {
  expect(
    solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
  ).toEqual(["AC", "ACDE", "BCFG", "CDE"]);
  expect(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])).toEqual(["WX", "XY"]);
});

test("top", () => {
  expect(top(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], 2)).toEqual([
    "AC",
  ]);
  expect(top(["XYZ", "XWY", "WXA"], [2])).toEqual(["WX", "XY"]);
});

test("combinateStrings", () => {
  expect(combinateStrings(["XYZ", "XWY", "WXA"], 2)).toEqual([
    "AW",
    "AX",
    "WX",
    "WX",
    "WY",
    "XY",
    "XY",
    "XZ",
    "YZ",
  ]);
});

test("combinateString", () => {
  expect(combinateString("ABCFG", 2)).toEqual([
    "AB",
    "AC",
    "AF",
    "AG",
    "BC",
    "BF",
    "BG",
    "CF",
    "CG",
    "FG",
  ]);
});

test("배열에서 요소의 빈도 수를 계산해서 객체로 만든다", () => {
  expect(count(["AB", "AC", "BC", "AB"])).toEqual({ AB: 2, AC: 1, BC: 1 });
});
