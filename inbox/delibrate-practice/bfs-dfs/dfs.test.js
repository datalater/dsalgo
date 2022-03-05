import { dfs1 } from "./dfs";

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

test("DFS", () => {
  expect(dfs1(graph, "A")).toEqual([
    "A",
    "B",
    "D",
    "E",
    "F",
    "C",
    "G",
    "H",
    "I",
    "J",
  ]);
});
