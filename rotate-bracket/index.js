export function solution(s) {
  const range = [...Array(s.length)].map((_, i) => i);

  return range
    .map((i) => isValid(rotate(s, i)))
    .reduce((acc, it) => (it ? acc + 1 : acc), 0);
}

export function rotate(s, n) {
  return s.slice(n) + s.slice(0, n);
}

export function isValid(s) {
  const util = new Util();

  if (s.length % 2 !== 0 || util.isWrongStart(s)) {
    return false;
  }

  /**
   * 문자열 s에서 한 글자씩 새로 담는 스택
   *
   * | before-s | satck | after-s |
   * | ------ | ---------- | ----- |
   * | "()()" | [ "(" ]    | ")()" |
   * | ")()"  | [ "()" ]   | "()"  |
   * | "()"   | [ "()(" ]  | ")"   |
   * | ")"    | [ "()()" ] | ""    |
   */
  const stack = [];

  const [first] = s;
  s = s.slice(1);

  stack.push(first);

  while (s.length) {
    const [first] = s;
    s = s.slice(1);

    // 스택의 탑과 새로 담으려는 괄호가 페어일 경우
    if (util.findPair(util.top(stack)) === first) {
      stack.pop();
    } else {
      stack.push(first);
    }
  }

  return stack.length === 0;
}

// 굳이 이렇게 할 필요는 없지만 새로운 시도를 해보았다.
function Util() {
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  function findPair(one) {
    return pairs[one];
  }

  function isWrongStart(string) {
    return !Object.keys(pairs).includes(string[0]);
  }

  function top(array) {
    return array[array.length - 1];
  }

  return {
    findPair,
    isWrongStart,
    top,
  };
}
