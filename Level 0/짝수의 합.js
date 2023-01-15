//런타임 error code
function soulution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

//다른 풀이 코드
function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(soulution2(30));
