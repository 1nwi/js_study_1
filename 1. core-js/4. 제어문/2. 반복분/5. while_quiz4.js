
var num = +prompt('양의 정수를 입력해주세요: ');   // +prompt('양의 정수를 입력해주세요: ')
var x = 1;
var total = '';

while (x <= num) {
    if (x % 10 === 1) {
        total += '1';
    } else if (x % 10 === 2) {
        total += '2';
    } else if (x % 10 === 3) {
        total += '3';
    } else if (x % 10 === 4) {
        total += '4';
    } else if (x % 10 === 5) {
        total += '5';
    } else if (x % 10 === 6) {
        total += '6';
    } else if (x % 10 === 7) {
        total += '7';
    } else if (x % 10 === 8) {
        total += '8';
    } else if (x % 10 === 9) {
        total += '9';
    } else {
        total += '0';
    } 
    x++;
}
alert(total);



