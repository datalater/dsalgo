export default function solution(a, b, c) {
  let longest;

  if (a > b) {
    longest = a;
  } else {
    longest = b;
  }

  if (c > longest) {
    longest = c;
  }

  return longest < a + b + c - longest;
}
