import { solution as sol1 } from "./me";
import { solution as sol2 } from "./index";

const solutions = {
  me: sol1,
  index: sol2,
};

describe("타겟 넘버", () => {
  Object.keys(solutions).forEach((name) => {
    it(name, () => {
      const solution = solutions[name];

      expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
    });
  });
});
