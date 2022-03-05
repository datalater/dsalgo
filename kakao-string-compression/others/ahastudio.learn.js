export const solution = (s) => {
  const range = [...Array(Math.floor(s.length / 2))].map((_, i) => i + 1);
  return Math.min(...range.map((i) => compress(s, i).length));
};

export const compress = (s, n) => {
  const make = ([acc, last, cnt]) => `${acc}${cnt > 1 ? cnt : ""}${last}`;

  return make(
    chunk(s, n).reduce(
      ([acc, last, cnt], piece) =>
        piece === last
          ? [acc, last, cnt + 1]
          : [make([acc, last, cnt]), piece, 1],
      ["", "", 0]
    )
  );
};

export const chunk = (s, n) =>
  s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];
