import { solution as sol1 } from "./index";
import { solution as sol2 } from "./refactor";
import { solution as sol3 } from "./refactor2";

const solutions = {
  index: sol1,
  refactor: sol2,
  refactor2: sol3,
};

describe("network", () => {
  Object.keys(solutions).forEach((name) => {
    const solution = solutions[name];

    it(name, () => {
      expect(
        solution(3, [
          [1, 1, 0],
          [1, 1, 0],
          [0, 0, 1],
        ])
      ).toBe(2);
      expect(
        solution(3, [
          [1, 1, 0],
          [1, 1, 1],
          [0, 1, 1],
        ])
      ).toBe(1);
    });
  });
});
