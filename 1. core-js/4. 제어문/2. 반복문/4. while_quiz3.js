

var num = +prompt('양의 정수: '); //+prompt('양의 정수: ');
var x = 1;
var p = '+';
var m = '-';
var calcul = '';


while (x <= num) {
    if (x % 2 === 1) {
        calcul += p;    
    }else {
        calcul += m;
    }
    x++;
}
alert(calcul);