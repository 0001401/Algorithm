//정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

// 입출력 예
// num1	num2 result
// 10	 5	  2
// 7	 2	  3

// 입출력 예 #1
// num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.

// 입출력 예 #2
// num1이 7, num2가 2이므로 7을 2로 나눈 몫 3을 return 합니다.

//내 답안
function solution(num1, num2) {
  // 소수점 반내림을 위해서 Math.floor()함수 사용
  if (100 >= num1 > 0 || 100 >= num2 > 0) {
    return Math.floor(num1 / num2);
  } else {
    return console.log("error");
  }
}

//다른 사람 답안
function solution2(a, b) {
  // ~ 부정연산자를 두 번 사용하여 뒤집어주기 그럼 소수점이 사라지고 정수만 나온다
  let answer = ~~(a / b);
  return answer;
}

console.log(solution(10, 5));
console.log(solution(7, 2));
