function solution(orders, course) {
  return course
    .map((n) => combinateStrings(orders, n))
    .flatMap(mostFrequent)
    .sort();
}

function count(arr) {
  return arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}

function mostFrequent(array) {
  const countMap = count(array);

  const max = Math.max(...Object.values(countMap));

  return max > 1
    ? Object.keys(countMap).filter((key) => countMap[key] === max)
    : [];
}

function combinate(array, n) {
  const result = [];

  if (n === 1) {
    return array.map((it) => [it]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = combinate(rest, n - 1);

    const concated = combinations.map((combination) => [fixed, ...combination]);

    result.push(...concated);
  });

  return result;
}

function combinateString(s, n) {
  const _s = s.split("");

  const result = combinate(_s, n)
    .map((it) => it.sort().join(""))
    .sort();

  return result;
}

function combinateStrings(array, n) {
  return array
    .map((s) => combinateString(s, n))
    .reduce((acc, cur) => [...acc, ...cur], [])
    .sort();
}

export {
  count,
  mostFrequent,
  combinate,
  combinateString,
  combinateStrings,
  solution,
};
