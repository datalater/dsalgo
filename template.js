function assert(expected, actual) {
  const result = JSON.stringify(expected) === JSON.stringify(actual);

  console.log({ expected, actual, result });
}

function solution(input) {
  return input;
}

function testAll() {
  const inputs = [
    "1S2D*3T",
    "1D2S#10S",
    "1D2S0T",
    "1S*2T*3S",
    "1D#2S*3S",
    "1T2D3D#",
    "1D2S3T*",
  ];
  const expecteds = [37, 9, 3, 23, 5, -4, 59];

  inputs.forEach((input, i) => {
    assert(expecteds[i], solution(input));
  });
}
