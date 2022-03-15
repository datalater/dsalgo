function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const visited = [];
  const queue = [];

  const count = 0;
  queue.push([begin, count]);

  while (queue.length) {
    const [current, count] = queue.shift();

    visited.push(current);

    if (current === target) {
      return count;
    }

    words.forEach((word) => {
      if (visited.includes(word)) {
        return;
      }

      let diff = 0;

      for (let i = 0; i < word.length; i += 1) {
        word[i] !== current[i] && diff++;
      }

      if (diff === 1) {
        queue.push([word, count + 1]);
      }
    });
  }

  return count;
}

export { solution };
