# 자료구조

## 시나리오

### 배열 (순차 리스트)

(시각화) 메모리 영역을 연속적으로 사용한다. 그런데 요소 삭제를 하면 빈 공간이 생기고, 추가를 하려면 기존 공간을 뒤로 한 칸씩 밀어야 한다.

> - (장점) 원하는 원소의 인덱스를 알고 있으면 상수 시간(`O(1)`)만에 원소를 찾을 수 있다.
> - (특징) 원소를 삭제하면 해당 인덱스에 빈 자리가 생긴다. 탐색을 하려면 하나씩 앞당겨야 한다.
> - (정리) 탐색을 많이 해야 할 때는 배열이 좋지만, 원소를 삭제하면 빈 자리가 생겨서 하나씩 앞당겨야 하고, 중간에 원소를 추가하면 기존 원소를 하나씩 뒤로 밀어야 하므로 선형 시간(`O(n)`)이 걸려서 좋지 않다.

(요약) 요소 추가나 삭제가 반복되는 로직이라면 배열 사용을 권장하지 않는다. 탐색이 많을 때는 배열이 유리하다.

### 연결 리스트

(등장배경) 추가와 삭제가 반복되는 로직이라면 어떻게 해야 할까? 어떻게 하면 추가와 삭제를 빠르게 할 수 있을까? 모든 요소가 자신 뒤에 오는 요소인 next가 뭔지 알고 있으면 특정 요소의 next 정보만 바꿔주면 빠르게 추가와 삭제를 할 수 있다.

> - (시각화) 각 데이터가 메모리 곳곳에 흩어져 있다.
> - (특징) 각 요소를 포인터로 연결한다. 각 요소는 노드라고 부르며 데이터 영역과 포인터 영역으로 구성된다.
> - (장점) 요소를 추가하거나 제거할 때 상수 시간(`O(1)`)밖에 안 걸린다.
> - (단점) 탐색할 때는 선형 시간(`O(n)`)이 걸린다.

<details markdown="1">
<summary><strong>code</strong></summary>

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  /**
   * 삭제를 하려면 삭제하려는 이전 노드(prevNode)를 찾고
   * 이전 노드의 다음 값(prevNode.next)을
   * 다음 다음 노드(prevNode.next = prevNode.next.next)로 변경하면 된다.
   *
   * 모든 케이스:
   * - 삭제하려는 노드가 head인 경우: this.head.value === value
   * - 삭제하려는 노드가 중간인 경우: prevNode.next.value === value
   * - 삭제하려는 노드가 tail인 경우: 중간과 동일
   * - 삭제하려는 노드가 없는 경우: prevNode.next === null
   *
   * 에지 케이스:
   * - 삭제하려는 노드가 맨 처음인 경우 (head)
   * - 삭제하려는 노드가 없는 경우
   */
  remove(value) {
    // 삭제하려는 값이 head인 경우
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    // 삭제하려는 값이 head 이후인 경우
    let prevNode = this.head;
    while (prevNode.next) {
      if (prevNode.next.value === value) {
        break;
      }
      prevNode = prevNode.next;
    }

    /**
     * prevNode.next === null인 경우는 prevNode가 tail이라는 뜻이다.
     * (prevNode라는 변수 이름에 헷갈릴 필요 없이 "어떤 노드"의 next가 null인 경우는 "어떤 노드"가 tail이라는 뜻이다)
     * 이전 노드가 tail이라는 것은 삭제하려는 노드가 없다는 뜻이므로 여기서 종료하면 된다
     *
     * 삭제하려는 값이 리스트에 있다면 항상 prevNode.next !== null이다.
     */
    if (prevNode.next === null) {
      return;
    }

    prevNode.next = prevNode.next.next;
  }

  display() {
    let current = this.head;
    let displayString = "[";
    while (current) {
      displayString += `${current.value}, `;
      current = current.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}

const ll = new SinglyLinkedList();
ll.append(1);
ll.append(2);
ll.insert(ll.find(2), 3);
ll.remove(3);
ll.display(); // [1, 2]
```

</details>

### 스택

(핵심) 할 수 있는 행동은 요소를 넣는 push와 빼는 pop만이 존재한다. 가장 맨 위에 있는 요소(top)만 컨트롤한다.

> - (예시) 스택 메모리: 스택을 활용하는 대표적인 예시다. 스택 메모리는 함수가 호출되면 함수 내 지역변수, 매개변수, 반환주소값이 push되어 기록되는 메모리 영역을 말한다.

(적용) 이전에 어떤 값을 넣었는데 어떤 조건이 충족되면 이전에 넣은 값을 빼는 경우라면 스택의 원리를 사용할 수 있다.

> - (예시) 올바른 괄호
>   - push: (문자열을 순회할 때) 여는 괄호가 나오면 스택에 push 한다.
>   - pop: 닫는 괄호가 나오면 (여는 괄호가 담겨 있는) 스택을 pop 한다. 단, 닫는 괄호가 나왔는데 현재 stack의 길이가 0이라면 (닫는 괄호로 시작하기 때문에) 올바른 괄호가 아니므로 false를 리턴한다.
>   - return: 최종적으로 스택이 비어 있으면 true를 리턴하고, 비어 있지 않으면 false를 리턴한다.
>   - stack.pop() 조건: 스택에 들어가는 값은 항상 여는 괄호인데 다음 차례가 닫는 괄호이면 올바른 괄호이므로 스택의 top에 있는 여는 괄호를 없애는 것이다.

<details markdown="1">
<summary><strong>code: 연결 리스트로 스택 구현하기</strong></summary>

C언어나 자바와 같은 언어에서는 스택의 크기가 고정되지 않는 경우에 유한한 배열 대신 연결 리스트를 이용하여 구현하는 경우가 많았다.

핵심은 기존 로직에서 head를 top으로 지정하고 제거 로직은 오직 head를 제거하는 로직으로 수정하면 된다.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.size); // 2
```

</details>
