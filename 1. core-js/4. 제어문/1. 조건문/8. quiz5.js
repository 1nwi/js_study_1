

var a = +prompt('정수1 : ')
var b = +prompt('정수2 : ')
var c = +prompt('정수3 : ')

var min = a;
if (b < min) min = b;
if (c < min) min = c;

alert(`최소값은 ${min}입니다.`)