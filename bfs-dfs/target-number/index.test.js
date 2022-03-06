import { solution as sol1 } from "./origin";
import { solution as sol2 } from "./sojung";
import { solution as sol3 } from "./index";

const profiles = {
  origin: sol1,
  sojung: sol2,
  index: sol3,
};

describe("타겟 넘버", () => {
  Object.keys(profiles).forEach((name) => {
    it(name, () => {
      const solution = profiles[name];

      expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
    });
  });
});
