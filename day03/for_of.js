// 숫자로만 이루어진 배열이 있습니다.
// for-of를 이용해 숫자의 총합을 구해주세요.

const arr = [11, 22, 33, 44, 55];
let sum = 0;

// for ( let element of arr )  {
//     sum = sum + element;
//     console.log(element,sum)
// }
let i=0;
while(i<arr.length) {
    sum += arr[i]
    i++
}

// for( let i = 0; i < arr.length; i++ ) {
//     let element = arr[i];    
//     sum = sum + element;
// }

console.log(sum); // 165
