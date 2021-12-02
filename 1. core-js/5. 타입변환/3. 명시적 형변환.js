
// 명시적 문자열 변환
var a = 10, b= 20;
// var result = String(a) + String(b);   // 1번째방법
// var result = a.toString() + b.toString();  // 2번째방법
var result = '' + a + b;   //  3번째 방법

console.log(result);

console.log('=======================');

// 명시적 숫자 변환
var m = '10', n = '20';
// var result2 = Number(m) + Number(n);    // 1번째 방법
// var result2 = parseInt(m) + parseInt(n);    // 2번째 방법
var result2 = +m + +n;   // 3번째 방법

console.log(result2);

console.log('=======================');

//명시적 논리변환
var ex1 = Boolean(null);
console.log(ex1);

var ex2 = !!'메롱';
console.log(ex2);

