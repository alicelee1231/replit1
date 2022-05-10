// 핸드폰 번호가 담긴 문자열 phone이 주어질 때,
// 뒤의 4자리를 "*"로 바꿔서 리턴해주세요.

function solution(phone) {
  let arr1=[...phone].fill("*",7,11).join('');
    return arr1
  
}

console.log("결과", solution('01012345678')); // "0101234****"
