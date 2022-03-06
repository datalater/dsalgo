class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function solution(numbers, target) {
  let answer = 0;
  const stack = [];

  const root = new Node(0);
  makeTree(numbers, root, 0);

  return answer;

  function makeTree(array, node, index) {
    stack.push(node.value);

    if (!array[index]) {
      const sum = stack.reduce((a, b) => a + b);
      sum === target && ++answer;

      return;
    }

    const node1 = new Node(-array[index]);
    const node2 = new Node(array[index]);

    node.left = node1;
    node.right = node2;

    makeTree(array, node.left, index + 1);
    stack.pop();
    makeTree(array, node.right, index + 1);
    stack.pop();
  }
}

export { solution };
