import { dfsRecursive, dfsStack, dfsQueue, dfsTailRecursion } from "./dfs";

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

test("DFS Recursive", () => {
  expect(dfsRecursive(graph, "A", [])).toEqual([
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

test("DFS Tail Recursion", () => {
  expect(dfsTailRecursion(graph, ["A"], [])).toEqual([
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

test("DFS Stack", () => {
  expect(dfsStack(graph, "A")).toEqual([
    "A",
    "C",
    "I",
    "J",
    "H",
    "G",
    "B",
    "D",
    "F",
    "E",
  ]);
});

test("DFS Queue", () => {
  expect(dfsQueue(graph, "A")).toEqual([
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
