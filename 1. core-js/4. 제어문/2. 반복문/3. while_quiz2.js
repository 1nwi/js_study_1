
var x = +prompt('양의 정수를 입력하세요. : ');
var n = 1;
var star = '';

while (n <= x) {
    star += '*\n';
    n++;
}
alert(star);