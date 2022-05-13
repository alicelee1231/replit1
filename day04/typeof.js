// 숫자와 문자가 섞여있는 배열 arr이 주어질 때,
// 숫자는 숫자끼리, 문자는 문자끼리 순서대로 더해
// 새로운 배열에 [숫자합, 문자합] 형태로
// 리턴해주는 함수 solution을 완성하세요.
function solution(arr) {
	let sum = 0;  // 숫자를 더하는 변수
	let str = ''; // 문자를 더하는 변수

	for (let i = 0; i < arr.length; i++) {
		let aa = arr[i]
		if ( typeof(aa) === "string"){
			// string
			console.log("string", aa)
			str = str + aa;
		} else {
			// number
			//console.log("number", aa)
			sum = sum + aa;
		}
	}
			
	//console.log( `str: ${str} / sum: ${sum}` );
	return [ sum, str ];
}

const arr = [4, 6, 'aa', 2, 'b', 3];

// +-*/ ** % ^ | & : ->
// = <-
// += -= *= /= %= <-
const result = solution(arr);

console.log(result); // [15, "aab"]
