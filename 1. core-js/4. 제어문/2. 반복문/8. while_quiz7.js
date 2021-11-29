

var num = +prompt('정사각형을 그립니다. \n 높이는 얼마입니까?')
var x = 1;
var result = '';

while (x <= num) {
    var j = 1;
    while (j <= num) {
        result += '*\t'
        j++;
    }
    result += '\n'
    x = 1;
}
alert(result)
