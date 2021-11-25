

var number1 = +prompt('정수 A :')
var number2 = +prompt('정수 B :')
var number3 = +prompt('정수 C :')

if (number1 === number2 && number1 === number3) {
    alert('3개의 숫자가 같습니다.')
} else if (number1 === number2 || number1 === number3 || number2 == number3) {
    alert('2개의 숫자가 같습니다.')
} else {
    alert('모두 다른 숫자입니다.')
}


