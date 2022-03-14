function solution(orders, course) {
  return course.flatMap((n) => top(orders, n)).sort();
}

function top(orders, n) {
  const combs = combinateStrings(orders, n);
  const counts = count(combs);

  const max = Math.max(...Object.values(counts));

  return max > 1 ? [...new Set(combs.filter((it) => counts[it] === max))] : [];
}

function count(arr) {
  return arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}

function combinateStrings(array, n) {
  return array
    .map((s) => combinateString(s, n))
    .reduce((acc, cur) => [...acc, ...cur], [])
    .sort();
}

function combinateString(s, n) {
  const _s = s.split("");

  const result = combinate(_s, n)
    .map((it) => it.sort().join(""))
    .sort();

  return result;
}

function combinate(array, n) {
  const result = [];

  if (n === 1) {
    return array.map((it) => [it]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = combinate(rest, n - 1);

    const attched = combinations.map((combination) => [fixed, ...combination]);

    result.push(...attched);
  });

  return result;
}

export { solution, top, count, combinate, combinateString, combinateStrings };
