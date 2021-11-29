

var num = 3;
var x = 1;
var square = '';


while (x <= num) {
    square += '*\t'
    if (x === num) {
        square += '\n'
    }
    x++;
}
console.log(square);
