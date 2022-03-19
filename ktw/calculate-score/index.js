function solution(array) {
  let score = 0;
  let bonus = 0;
  for (let s of array) {
    if (s === 1) {
      score += 1 + bonus;
      bonus++;
    } else {
      bonus = 0;
    }
  }

  return score;
}

export { solution };
