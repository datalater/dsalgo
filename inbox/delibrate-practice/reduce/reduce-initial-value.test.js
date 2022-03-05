/**
 * @link How to understand reduce()? https://itnext.io/how-to-understand-reduce-d246b7a70f78
 */

test("초기값을 리듀스 하는 경우", () => {
  const initialValue = {
    sum: 0,
    history: [],
  };

  expect(solution(initialValue)).toEqual({
    sum: 3,
    history: ["action1", "action2"],
  });
});

function solution(initialValue) {
  const action1 = {
    name: "action1",
    n: 1,
  };

  const action2 = {
    name: "action2",
    n: 2,
  };

  const actions = [action1, action2];

  return actions.reduce(
    (acc, e) => ({
      sum: acc.sum + e.n,
      history: [...acc.history, e.name],
    }),
    initialValue
  );
}
