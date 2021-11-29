

var x = +prompt('몇 개의 *를 출력할까요? ');
var n = 1;
var star = ''; 

while (n <= x) {
    if (n % 5 === 0) {
        star += '*\n';
    } else {
        star += '*';
    }
    n++;
}

alert(star);