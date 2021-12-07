

// 원의 넓이를 구해야 함 : pi * r ** 2

// 반지름
var pi = 3.14159265;

// 반지름 5인 원의 넓이
var circlel = pi * 5 ** 2;
// console.log(circlel);

// 반지름 17인 원의 넓이
var circlel2 = pi * 17 ** 2;

// 원의넓이를 구해주는 함수 정의
function calcAreaCircle(r) {
    console.log("야!");
    var area = pi * r ** 2;
    return area;
}

function sayHi() {
    console.log('안녕!!!~~~~~~');
}

function makeLine() {
    console.log('===================================');
}

// 함수의 호출
var c1 = calcAreaCircle(20);
console.log(c1);


var c2 = calcAreaCircle(100);
console.log(c2);


sayHi();
sayHi();
sayHi();

makeLine()

for (var i = 0; i < 5; i++) {
    sayHi();
}

makeLine();
console.log('asdljflkajsdjifl');
makeLine();