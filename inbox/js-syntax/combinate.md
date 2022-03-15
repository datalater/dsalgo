# 조합

## 문자열

```js
function combinateString(s, n) {
  if (s.length < n) {
    return [];
  }

  const result = [];

  function dfs(index, path) {
    if (path.length === n) {
      result.push(Array.from(path).sort().join(""));
      return;
    }

    for (let i = index; i < s.length; i++) {
      dfs(i + 1, path + s[i]);
    }
  }

  dfs(0, "");

  return result;
}
```

## 배열

```js
function combinate(array, n) {
  const result = [];

  if (n === 1) {
    return array.map((it) => [it]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = combinate(rest, n - 1);

    const concated = combinations.map((combination) => [fixed, ...combination]);

    result.push(...concated);
  });

  return result;
}
```
