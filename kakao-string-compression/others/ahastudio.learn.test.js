import { chunk, compress, solution } from "./ahastudio.learn";

test("문자열을 n개씩 앞에서부터 자른다", () => {
  expect(chunk("aabbcc", 2)).toEqual(["aa", "bb", "cc"]);
  expect(chunk("aabbcc", 3)).toEqual(["aab", "bcc"]);
  expect(chunk("abcdefg", 4)).toEqual(["abcd", "efg"]);
});

test("문자열을 n개 단위로 잘라서 압축한다", () => {
  expect(compress("ababcdcdababcdcd", 2)).toEqual("2ab2cd2ab2cd");
});

test("문자열 압축 최소 길이를 구한다", () => {
  expect(solution("aabbaccc")).toBe(7);
  expect(solution("ababcdcdababcdcd")).toBe(9);
  expect(solution("abcabcdede")).toBe(8);
  expect(solution("abcabcabcabcdededededede")).toBe(14);
  expect(solution("xababcdcdababcdcd")).toBe(17);
});
