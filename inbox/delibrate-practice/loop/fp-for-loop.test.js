/**
 * Q. 압축할 문자열 s가 매개변수로 주어질 때, 1개 이상 단위로 문자열을 잘라 압축하여
 * 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.
 *
 * ex. compress("aabbaccc", 1) => "2a2ba3c"
 */

function solution(s) {
  const range = [...Array(Math.floor(s.length))].map((_, i) => i + 1);
  return Math.min(...range.map((i) => compress(s, i).length));
}

test("문자열 압축 최소 길이를 구한다", () => {
  expect(solution("aabbaccc")).toBe(7);
  expect(solution("ababcdcdababcdcd")).toBe(9);
  expect(solution("abcabcdede")).toBe(8);
  expect(solution("abcabcabcabcdededededede")).toBe(14);
  expect(solution("xababcdcdababcdcd")).toBe(17);
});

function compress(s, n) {
  const make = ([acc, last, cnt]) => `${acc}${cnt > 1 ? cnt : ""}${last}`;

  return make(
    chunk(s, n).reduce(
      ([acc, last, cnt], piece) =>
        piece === last
          ? [acc, last, cnt + 1]
          : [make([acc, last, cnt]), piece, 1],
      ["", "", 0]
    )
  );
}

function chunk(s, n) {
  return s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];
}
