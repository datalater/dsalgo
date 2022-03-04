export default function solution(a, b, c) {
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) {
    answer = c;
  }

  return answer;
}

assert(solution(2, 5, 1), 1);

function assert(expected, actual) {
  const result = JSON.stringify(expected) === JSON.stringify(actual);

  console.log({ expected, actual, result });
}
