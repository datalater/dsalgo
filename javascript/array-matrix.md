# Array matrix

## 배열의 행과 열의 개수 및 초기값을 넣어서 2차원 배열 만들기

### 더글라스 크록포드

```js
Array.matrix = function (numrows, numcols, initial) {
  const arr = [];
  for (let i = 0; i < numrows; i++) {
    const columns = [];
    for (let j = 0; j < numcols; j++) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};
```

### Array.from

```js
const numrows = 3;
const numcols = 4;

const nums = Array.from({ length: numrows }, () =>
  Array.from({ length: numcols }, () => 2)
);
```

## 이차원 배열 요소 처리하기

- 행 기준으로 처리하느냐 열 기준으로 처리하느냐 두 가지 패턴이 있다.

```js
// 각 학생의 과목별 점수
const grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];

// 과목별 평균
const expected = [(89 + 76 + 91) / 3, (77 + 82 + 94) / 3, (78 + 81 + 89) / 3];

const actual = averageBySubject(grades);

assert(expected, actual);
```

### mine

```js
function averageBySubject(grades) {
  const array = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => 0)
  );

  return grades
    .reduce((acc, gradeByStudent, row) => {
      gradeByStudent.forEach((grade, col) => {
        array[col][row] = grade;
      });

      return acc;
    }, array)
    .map((row) => row.reduce((acc, grade) => acc + grade) / 3)
    .map((grade) => +grade.toFixed(2));
}
```

### book

```js
function averageBySubject(grades) {
  let total = 0;
  let average = 0.0;

  const result = [];

  // 열 기준 처리
  for (let col = 0; col < grades.length; ++col) {
    for (let row = 0; row < grades[col].length; ++row) {
      total += grades[row][col];
    }

    average = +(total / grades[col].length).toFixed(2);

    result.push(average);

    total = 0;
    average = 0.0;
  }

  return result;
}
```
