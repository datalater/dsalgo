/**
 * 상태변수를 가지는 반복하는 프로세스를 reduce로 구현하기
 *
 * @see SICP 1.2.1
 */

test("상태변수를 가지는 반복하는 프로세스를 reduce로 구현하기", () => {
  expect(solution(["a", "a", "a"])).toBe("3a");
  expect(solution(["ab", "ab", "ac"])).toBe("2abac");
});

function solution(chunks) {
  const make = ({ acc, last, cnt }) => `${acc}${cnt > 1 ? cnt : ""}${last}`;

  return [...chunks, ""].reduce(
    ({ acc, last, cnt }, it) =>
      it === last
        ? { acc, last: it, cnt: cnt + 1 }
        : {
            acc: make({ acc, last, cnt }),
            last: it,
            cnt: 1,
          },
    {
      acc: "",
      last: "",
      cnt: 0,
    }
  ).acc;
}

/**
 * 연습장: 변경 규칙과 상태변수 발견하기
 * ("", "a") => 다르면 acc 변경, last는 자동 변경, count는 같으면 +1, 다르면 1로 초기화 => {acc: "a", }
 * ("a", "a") => 같으면 acc 그대로, last는 자동변경, count는 같으면 +1, 다르면 1로 초기화 => `${count}  => "2a"
 * ("a", "a") => (2 + 1, a) => "3a"
 * ("a", "b") => (1, b) => acc +  "3ab"
 *
 * (last, e, count) => rule(e === last ? `${cnt}${e}`)
 * ------------------------------------------------------
 */

/**
 * SICP 1.2.1
 *
 * 정해진 상태변수가 있어서 반복할 때마다 바뀌는 계산 상태를 간추려서 기록해둘 수 있고,
 * 계산 단계가 넘어갈 때마다 상태변수 값을 고쳐 쓰는 규칙이 있으며,
 * (때에 따라) 계산을 끝낼 조건을 따지는 마무리 검사 과정도 있다.
 */
