function solution(s) {
  var answer = Number.MAX_SAFE_INTEGER;
  if (s.length == 1) {
    return 1;
  }
  for (let unit = 1; unit <= s.length / 2; unit++) {
    let originS = s;

    let compress = "";
    while (originS) {
      let cnt = 1;
      let unitS = originS.slice(0, unit);
      originS = originS.slice(unit);
      while (originS.startsWith(unitS)) {
        cnt++;
        originS = originS.slice(unit);
      }
      if (cnt > 1) {
        compress += cnt + unitS;
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

console.log(solution("aabbbccc"));

// https://miiingo.tistory.com/348
