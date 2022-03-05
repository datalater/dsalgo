import { bfs1, bfs2 } from "./bfs";

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

test("BFS", () => {
  expect(bfs1(graph, "A")).toEqual([
    "A",
    "B",
    "C",
    "D",
    "G",
    "H",
    "I",
    "E",
    "F",
    "J",
  ]);
});
