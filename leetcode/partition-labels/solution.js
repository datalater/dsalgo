/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const last = new Map();
  for (let i = 0; i < s.length; i++) {
    last.set(s[i], i);
  }

  const partitions = [];
  let partition = [];
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    partition.push(s[i]);
    end = Math.max(end, last.get(s[i]));
    if (i === end) {
      partitions.push(partition);
      partition = [];
    }
  }
  return partitions.map((p) => p.length);
};
