# JavaScript Array Basic

## range 배열 만들기

```js
const length = 100;
const range = [...Array(length)].map((_, i) => i);
```

> https://jsbench.me/ 기준으로 내가 알아본 것 중에서 가장 빠른 방법이다.

## 중간에 있는 요소 추가 및 삭제

```js
splice(시작 인덱스, 삭제할 요소 개수, 배열에 추가할 요소들)

const nums = [1, 2, 3, 7];
nums.splice(3, 0, 4, 5, 6);
console.log(nums); // [1, 2, 3, 4, 5, 6, 7]
```

## 배열 요소 중 하나라도 일치하는지 확인

```js
//; Array.some((element) => element.id === this.workspace.id);

const VISA_PREFIXES = ["4", "5", "6", "37"];

const cardNumber = "4111111111111111";

const isVisa = VISA_PREFIXES.some((prefix) => cardNumber.startsWith(prefix));
```
