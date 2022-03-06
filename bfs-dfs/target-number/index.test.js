import { solution as sol1 } from "./origin";
import { solution as sol2 } from "./index";

const profiles = {
  origin: sol1,
  index: sol2,
};

describe("타겟 넘버", () => {
  Object.keys(profiles).forEach((name) => {
    it(name, () => {
      const solution = profiles[name];

      expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
    });
  });
});
