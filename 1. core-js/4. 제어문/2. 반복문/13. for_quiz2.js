

var num1 = +prompt('한 변(1) : ');
var num2 = +prompt('한 변(2) : ');

// num1 과 num2 보정
if (num1 < num2) {
    var t = num1;
    num1 = num2;
    num2 = t;
}

var star = '';

for (var x = 1; x <= num2; x++) {
    
    for (var y = 1; y <= num1; y++) {
        star += '* ';
    }
    star += '\n';
}
alert(star);