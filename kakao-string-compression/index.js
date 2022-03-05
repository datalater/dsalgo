export default function solution(s) {
  let answer = Number.MAX_SAFE_INTEGER;

  if (s.length === 1) {
    return 1;
  }

  for (let unit = 1; unit <= s.length / 2; unit += 1) {
    let originS = s;
    let compress = "";

    while (originS) {
      let count = 1;

      let unitS = originS.substring(0, unit);
      originS = originS.substring(unit);

      while (originS.startsWith(unitS)) {
        count += 1;
        originS = originS.substring(unit);
      }

      if (count > 1) {
        compress += unitS + count;
      } else {
        compress += unitS;
      }
    }

    if (answer > compress.length) {
      answer = compress.length;
    }
  }

  return answer;
}
