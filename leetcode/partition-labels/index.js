/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const stack = [];
  const visited = [];
  const result = [];

  // 하나씩 순회한다
  for (let i = 0; i < s.length; i++) {
    let endIndex = 0;

    const char = s[i];
    stack.push(char);

    while (stack.length) {
      const char = stack.pop();
      const lastIndex = s.lastIndexOf(char);
      visited.push(char);

      if (lastIndex > endIndex) {
        endIndex = lastIndex;
        const chars = s.slice(i, lastIndex);
        const set = new Set(chars);
        visited.forEach((char) => set.delete(char));
        const uniqChars = [...set];
        stack.push(...uniqChars);
      }
    }

    result.push(s.slice(i, endIndex + 1));

    i = endIndex;
  }

  return result.map((it) => it.length);
};

export { partitionLabels as solution };
