
// 2개의 숫자를 전달받아 작은 수를 리턴

function min2(num1, num2) {
    return num1 > num2 ? num2 : num1;
}


function min3(n1, n2, n3) {
    var min = n1;
    if (min > n2) min = n2;
    if (min > n3) min = n3;
    return min; 
}

function minAll(...numbers) {
    var min = numbers[0];
    for (var n of numbers) {
        if (min > n) {
            min = n;
        }
    }
    return min;
}       

function isEven(n) {
    return n % 2 === 0;
}
// 화살표함수   # 위와 같은 함수입니다.
var isEven = n => n % 2 === 0;


// var result = min2(34,56);

// result에는 50가 리턴되어야 함.
// var result = min3(120, 50, 99);

// n개의 숫자중 최소값을 가져와야함.
// var result = minAll(55, 6, 71, 94, 100, 999, 3, 56, 877);

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true 리턴, 홀수를 전달하면 false리턴,
// 단, 0 은 짝수 취급
var result = isEven(24);

console.log(`result: ${result}`);