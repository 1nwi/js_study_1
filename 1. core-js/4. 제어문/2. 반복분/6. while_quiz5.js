


var n = +prompt('n의 값 :');
var x = 1;
var total ='';



while (x <= n) {
    total += `${x}의 제곱은 ${x ** 2}\n`;
    x++;
}
alert(total);