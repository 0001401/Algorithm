// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// 입출력 예
// my_string	return
// "jaron"	"noraj"
// "bread"	"daerb"

// 입출력 예 #1
// my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
// 입출력 예 #2
// my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.

function solution(my_string) {
  var answer = my_string.split("");
  // split() = 문자열을 부분 문자열로 구분해 문자열 객체를 여러 개의 문자열로 이루어진 배열로 분할 ex) ["a", "b", "c"]
  var string = answer.reverse();
  // 배열 반전 ex) ["c", "b", "a"]
  var joinString = string.join("");
  // 메서드는 배열의 모든 요소를 문자열로 결합하기 ex) "cba"

  return joinString;
}

//근데 한줄로도 가능함;;
function solution2(my_string) {
  return (answer = my_string.split("").reverse().join(""));
}

console.log(solution("jaron"));
