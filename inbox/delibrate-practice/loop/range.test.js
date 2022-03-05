/**
 * Q. 문자열의 길이에 해당하는 만큼의 숫자 범위를 값으로 갖는 배열을 만드는 함수를 만드세요.
 *
 * ex. "hello" => [1, 2, 3, 4, 5]
 */

test("range test", () => {
  expect(solution("a")).toEqual([1]);
  expect(solution("hi")).toEqual([1, 2]);
  expect(solution("hello")).toEqual([1, 2, 3, 4, 5]);
  expect(solution("abcdefghijk")).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});

function solution(s) {
  return [...Array(s.length)].map((_, i) => i + 1);
}
